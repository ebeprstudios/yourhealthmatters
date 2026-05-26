// app/api/guides/request/route.ts
//
// Lead-magnet endpoint. Visitor trades first name + email for a gated guide;
// the guide is delivered via Resend. The download URL is NEVER returned in
// the API response — the email IS the access mechanism.

import { NextRequest, NextResponse } from 'next/server'
import { getGuideBySlug } from '@/lib/data'
import {
  addToGuideAudience,
  sendGuideDeliveryEmail,
} from '@/lib/newsletter/provider'

export const runtime = 'nodejs'

// ──────────────────────────────────────────────────────────────────────
// In-memory IP rate limit — 5 requests per 10 minutes.
// Adequate for Phase 2A. Upgrade to Upstash Redis if abuse appears.
// ──────────────────────────────────────────────────────────────────────
const WINDOW_MS = 10 * 60 * 1000
const MAX_REQUESTS = 5
const ipHits: Map<string, number[]> = new Map()

function rateLimit(ip: string): { ok: boolean; resetAt?: number } {
  const now = Date.now()
  const hits = (ipHits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
  if (hits.length >= MAX_REQUESTS) {
    return { ok: false, resetAt: hits[0] + WINDOW_MS }
  }
  hits.push(now)
  ipHits.set(ip, hits)
  return { ok: true }
}

// Mask "alice@example.com" → "a***@e***.com" for the confirmation UI
function maskEmail(email: string): string {
  const [user, domain] = email.split('@')
  if (!user || !domain) return email
  const dotIdx = domain.lastIndexOf('.')
  const domainName = dotIdx === -1 ? domain : domain.slice(0, dotIdx)
  const tld = dotIdx === -1 ? '' : domain.slice(dotIdx)
  return `${user[0] ?? ''}***@${domainName[0] ?? ''}***${tld}`
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const GENERIC_VALIDATION_MSG =
  'We could not process that request. Please check your details and try again.'

export async function POST(req: NextRequest) {
  // ── Identify caller for rate limiting ──────────────────────────────
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown'

  const rl = rateLimit(ip)
  if (!rl.ok) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a few minutes.' },
      { status: 429 },
    )
  }

  // ── Parse body ─────────────────────────────────────────────────────
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { error: GENERIC_VALIDATION_MSG },
      { status: 400 },
    )
  }
  if (!body || typeof body !== 'object') {
    return NextResponse.json(
      { error: GENERIC_VALIDATION_MSG },
      { status: 400 },
    )
  }
  const { firstName, email, guideSlug } = body as Record<string, unknown>

  // ── Validate firstName ─────────────────────────────────────────────
  if (typeof firstName !== 'string') {
    return NextResponse.json(
      { error: GENERIC_VALIDATION_MSG },
      { status: 400 },
    )
  }
  const trimmedFirstName = firstName.trim()
  if (trimmedFirstName.length < 1 || trimmedFirstName.length > 50) {
    return NextResponse.json(
      { error: GENERIC_VALIDATION_MSG },
      { status: 400 },
    )
  }

  // ── Validate email ─────────────────────────────────────────────────
  if (typeof email !== 'string' || email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: GENERIC_VALIDATION_MSG },
      { status: 400 },
    )
  }
  const lcEmail = email.trim().toLowerCase()

  // ── Validate guide ─────────────────────────────────────────────────
  if (typeof guideSlug !== 'string') {
    return NextResponse.json(
      { error: GENERIC_VALIDATION_MSG },
      { status: 400 },
    )
  }
  const guide = getGuideBySlug(guideSlug)
  if (!guide || !guide.gated) {
    // Same generic message regardless of failure mode — prevents
    // exfiltration of which slugs are gated vs missing vs free.
    return NextResponse.json(
      { error: GENERIC_VALIDATION_MSG },
      { status: 400 },
    )
  }
  if (guide.comingSoon) {
    return NextResponse.json(
      { error: 'This guide is not yet available. Try again soon.' },
      { status: 400 },
    )
  }

  // ── Deliver ────────────────────────────────────────────────────────
  try {
    // Add to audience first (non-fatal if it fails — see provider logic)
    try {
      await addToGuideAudience({
        email: lcEmail,
        firstName: trimmedFirstName,
        guideSlug: guide.slug,
      })
    } catch (audienceErr) {
      // Log but continue — the delivery email is the primary contract.
      console.warn('[lead-magnet] audience add failed:', audienceErr)
    }

    await sendGuideDeliveryEmail({
      email: lcEmail,
      firstName: trimmedFirstName,
      guide: {
        title: guide.title,
        description: guide.description,
        pdfPath: guide.pdfPath,
        slug: guide.slug,
      },
    })

    return NextResponse.json(
      { success: true, email: maskEmail(lcEmail) },
      { status: 200 },
    )
  } catch (err) {
    console.error('[lead-magnet] delivery error:', err)
    return NextResponse.json(
      {
        error:
          'We could not send your guide right now. Please try again in a moment.',
      },
      { status: 500 },
    )
  }
}
