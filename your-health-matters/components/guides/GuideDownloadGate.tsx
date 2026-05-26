'use client'

import { useEffect, useRef, useState } from 'react'
import type { Guide } from '@/lib/types'

interface GuideDownloadGateProps {
  guide: Guide
  variant?: 'card' | 'detail'
}

type GateState =
  | { kind: 'idle' }
  | { kind: 'submitting' }
  | { kind: 'success'; maskedEmail: string }
  | { kind: 'error'; message: string }

/**
 * Download CTA + email-gate modal for guide downloads.
 *
 * - `guide.gated === false` → direct anchor link to the PDF (no modal)
 * - `guide.gated === true`  → "Get the guide" button opens a modal that
 *                             captures first name + email; delivery via
 *                             POST /api/guides/request.
 *
 * The PDF download URL is NEVER exposed in the UI for gated guides; the
 * delivery email is the access mechanism.
 */
export default function GuideDownloadGate({
  guide,
  variant = 'detail',
}: GuideDownloadGateProps) {
  const isGated = guide.gated === true
  const comingSoon = guide.comingSoon === true

  if (comingSoon) {
    return (
      <span
        className="inline-flex items-center gap-2 font-medium px-5 py-2.5 rounded-full text-sm"
        style={{
          backgroundColor: 'var(--paper-sunk)',
          color: 'var(--ink-500)',
          border: 'var(--border-hairline)',
        }}
      >
        Coming Soon
      </span>
    )
  }

  if (!isGated) {
    return (
      <a
        href={guide.pdfPath}
        download
        className="inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 text-sm shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          backgroundColor: 'var(--zone-peak)',
          color: 'white',
        }}
        aria-label={`Download ${guide.title} (PDF)`}
      >
        <DownloadIcon />
        {variant === 'card' ? 'Download' : 'Download Printable PDF'}
      </a>
    )
  }

  return <GatedDownload guide={guide} variant={variant} />
}

// ─────────────────────────────────────────────────────────────────────
// Gated flow — button + modal
// ─────────────────────────────────────────────────────────────────────

function GatedDownload({
  guide,
  variant,
}: {
  guide: Guide
  variant: 'card' | 'detail'
}) {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState<GateState>({ kind: 'idle' })
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')

  function openModal() {
    setState({ kind: 'idle' })
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
    // Reset after the close animation would settle; here just defer.
    setTimeout(() => {
      setState({ kind: 'idle' })
      setFirstName('')
      setEmail('')
    }, 200)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (state.kind === 'submitting') return
    setState({ kind: 'submitting' })
    try {
      const res = await fetch('/api/guides/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: email.trim(),
          guideSlug: guide.slug,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data?.success) {
        setState({ kind: 'success', maskedEmail: data.email || email })
      } else {
        setState({
          kind: 'error',
          message:
            data?.error ||
            'We could not send your guide right now. Please try again.',
        })
      }
    } catch {
      setState({
        kind: 'error',
        message:
          'We could not reach the server. Please check your connection and try again.',
      })
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 text-sm shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          backgroundColor: 'var(--zone-peak)',
          color: 'white',
        }}
        aria-haspopup="dialog"
      >
        <LockIcon />
        {variant === 'card' ? 'Get the guide' : 'Get the guide free'}
      </button>

      {open && (
        <GateModal
          guide={guide}
          state={state}
          firstName={firstName}
          email={email}
          onFirstName={setFirstName}
          onEmail={setEmail}
          onSubmit={handleSubmit}
          onClose={closeModal}
        />
      )}
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────
// Modal — KeepTogether unit. Focus trap, escape-to-close,
// click-outside-to-close.
// ─────────────────────────────────────────────────────────────────────

interface GateModalProps {
  guide: Guide
  state: GateState
  firstName: string
  email: string
  onFirstName: (v: string) => void
  onEmail: (v: string) => void
  onSubmit: (e: React.FormEvent) => void
  onClose: () => void
}

function GateModal({
  guide,
  state,
  firstName,
  email,
  onFirstName,
  onEmail,
  onSubmit,
  onClose,
}: GateModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const firstFieldRef = useRef<HTMLInputElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  // Lock body scroll while open
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [])

  // Escape-to-close + focus management
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
      if (e.key === 'Tab') {
        // Simple focus trap — bounce focus between first and last
        const root = dialogRef.current
        if (!root) return
        const focusables = root.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        if (focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    // Focus the first field on open (or the close button if success state)
    setTimeout(() => {
      if (state.kind === 'success') {
        closeBtnRef.current?.focus()
      } else {
        firstFieldRef.current?.focus()
      }
    }, 50)
    return () => document.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gate-title"
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ zIndex: 'var(--z-modal)' }}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
        style={{ backgroundColor: 'rgba(26, 24, 20, 0.55)' }}
      />

      {/* Card */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-md rounded-2xl p-6 sm:p-8"
        style={{
          backgroundColor: 'var(--paper-raised)',
          border: 'var(--border-hairline)',
          boxShadow: 'var(--shadow-raised)',
        }}
      >
        {/* Close button */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center hover:bg-stone-100 transition-colors"
          aria-label="Close"
          style={{ color: 'var(--ink-500)' }}
        >
          ×
        </button>

        {/* Header */}
        <div className="flex items-start gap-3 mb-5">
          <span className="text-4xl flex-shrink-0" aria-hidden="true">
            {guide.icon ?? '📘'}
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--zone-peak)' }}>
              Your free guide
            </p>
            <h2 id="gate-title" className="font-serif text-lg leading-tight mt-0.5" style={{ color: 'var(--ink-900)' }}>
              {guide.title}
            </h2>
          </div>
        </div>

        {/* State-driven body */}
        {state.kind === 'success' ? (
          <SuccessBody maskedEmail={state.maskedEmail} onClose={onClose} />
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-700)' }}>
              Your free guide is moments away. Tell me where to send it.
            </p>

            <div>
              <label htmlFor="gate-first-name" className="sr-only">
                First name
              </label>
              <input
                ref={firstFieldRef}
                id="gate-first-name"
                type="text"
                required
                minLength={1}
                maxLength={50}
                value={firstName}
                onChange={(e) => onFirstName(e.target.value)}
                placeholder="First name"
                disabled={state.kind === 'submitting'}
                className="w-full rounded-xl px-4 py-3 transition-all disabled:opacity-60"
                style={{
                  backgroundColor: 'var(--paper)',
                  border: 'var(--border-hairline)',
                  color: 'var(--ink-900)',
                }}
              />
            </div>

            <div>
              <label htmlFor="gate-email" className="sr-only">
                Email address
              </label>
              <input
                id="gate-email"
                type="email"
                required
                maxLength={254}
                value={email}
                onChange={(e) => onEmail(e.target.value)}
                placeholder="Email address"
                disabled={state.kind === 'submitting'}
                className="w-full rounded-xl px-4 py-3 transition-all disabled:opacity-60"
                style={{
                  backgroundColor: 'var(--paper)',
                  border: 'var(--border-hairline)',
                  color: 'var(--ink-900)',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={state.kind === 'submitting'}
              className="w-full font-semibold py-3 rounded-xl transition-all disabled:opacity-60 active:scale-[0.98]"
              style={{ backgroundColor: 'var(--zone-peak)', color: 'white' }}
            >
              {state.kind === 'submitting' ? 'Sending…' : 'Send it to me'}
            </button>

            {state.kind === 'error' && (
              <p className="text-sm text-center" style={{ color: 'var(--zone-caution)' }} role="alert">
                {state.message}
              </p>
            )}

            <p className="text-xs text-center" style={{ color: 'var(--ink-500)' }}>
              Your email is private. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

function SuccessBody({
  maskedEmail,
  onClose,
}: {
  maskedEmail: string
  onClose: () => void
}) {
  return (
    <div className="text-center py-2">
      <p className="text-4xl mb-3" aria-hidden="true">
        ✓
      </p>
      <p className="font-serif text-xl mb-2" style={{ color: 'var(--ink-900)' }}>
        Check your inbox.
      </p>
      <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--ink-700)' }}>
        Your guide is on its way to <strong>{maskedEmail}</strong>.
      </p>
      <p className="text-xs leading-relaxed mb-6" style={{ color: 'var(--ink-500)' }}>
        Didn&apos;t see it? It may take a minute, or check spam.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="inline-flex items-center font-semibold px-5 py-2.5 rounded-full text-sm"
        style={{
          backgroundColor: 'var(--paper-sunk)',
          color: 'var(--ink-900)',
        }}
      >
        Got it
      </button>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────
// Inline icons (no external dep)
// ─────────────────────────────────────────────────────────────────────

function DownloadIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
