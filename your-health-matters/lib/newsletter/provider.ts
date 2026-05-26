/**
 * Newsletter provider — Resend.
 *
 * Phase 2A uses raw fetch against the Resend API (no SDK) to keep the bundle
 * thin. Two newsletter streams are supported:
 *   - 'health-digest'  → the default weekly educational digest
 *   - 'scripture'      → the opt-in weekly devotional, never the default
 *
 * Phase 2A also exposes the lead-magnet flow for email-gated guide
 * downloads — separate Resend audience, separate intent. Functions:
 *   - addToGuideAudience({ email, firstName, guideSlug })
 *   - sendGuideDeliveryEmail({ email, firstName, guide })
 *
 * Environment variables required:
 *   RESEND_API_KEY                 — Resend project API key
 *   RESEND_FROM_EMAIL              — verified branded sender, default
 *                                    'Dr. Vera <hello@yourhealthguide.co>'
 *   RESEND_GUIDE_AUDIENCE_ID       — Guide Subscribers audience (lead magnet)
 *   RESEND_NEWSLETTER_AUDIENCE_ID  — Weekly newsletter audience (optional)
 *   NEWSLETTER_FROM_EMAIL          — legacy alias for RESEND_FROM_EMAIL
 *   NEWSLETTER_TO_EMAIL            — Erica's notification inbox
 */

export type SubscriptionStream = 'health-digest' | 'scripture'

export interface SubscribeInput {
  email: string
  name?: string
  streams: SubscriptionStream[] // must include 'health-digest' at minimum
}

const RESEND_ENDPOINT = 'https://api.resend.com/emails'

function streamLabel(stream: SubscriptionStream): string {
  return stream === 'health-digest'
    ? 'Weekly Health Tips'
    : 'Weekly Scripture Reflections (optional)'
}

async function sendEmail(payload: {
  from: string
  to: string
  subject: string
  html: string
}) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  if (!RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  const res = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`Resend error ${res.status}: ${body}`)
  }
  return res.json().catch(() => ({}))
}

export async function subscribe({ email, name, streams }: SubscribeInput) {
  if (!email || !email.includes('@')) {
    throw new Error('Valid email required')
  }
  if (!streams.includes('health-digest')) {
    throw new Error('Health digest subscription is required as the default stream')
  }

  const FROM_EMAIL =
    process.env.NEWSLETTER_FROM_EMAIL ||
    'Your Health Guide <onboarding@resend.dev>'
  const TO_EMAIL =
    process.env.NEWSLETTER_TO_EMAIL || 'hello@ebeprstudios.com'

  const streamList = streams.map(streamLabel).join(', ')

  // 1) Notification to Erica
  await sendEmail({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: `New subscriber: ${email}`,
    html: `
      <div style="font-family:Georgia,serif;max-width:520px;margin:0 auto;padding:32px;background:#fbf8f2">
        <div style="background:#1f5e3a;padding:24px;border-radius:12px;text-align:center;margin-bottom:24px">
          <p style="font-size:28px;margin:0">🌿</p>
          <h1 style="color:white;font-size:20px;margin:8px 0 0">New Subscriber</h1>
          <p style="color:#c3e1d1;font-size:13px;margin:4px 0 0">Your Health Guide</p>
        </div>
        <div style="background:white;padding:24px;border-radius:12px;border:1px solid #e8e3da">
          <p style="color:#3f3a33;font-size:15px;margin:0 0 12px"><strong>Email:</strong> ${email}</p>
          ${name ? `<p style="color:#3f3a33;font-size:15px;margin:0 0 12px"><strong>Name:</strong> ${name}</p>` : ''}
          <p style="color:#3f3a33;font-size:15px;margin:0"><strong>Subscribed to:</strong> ${streamList}</p>
        </div>
      </div>
    `,
  })

  // 2) Welcome email to subscriber
  await sendEmail({
    from: FROM_EMAIL,
    to: email,
    subject: 'Welcome to Your Health Guide',
    html: `
      <div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:32px;background:#fbf8f2">
        <div style="background:#1f5e3a;padding:32px;border-radius:16px;text-align:center;margin-bottom:24px">
          <p style="font-size:40px;margin:0">🌿</p>
          <h1 style="color:white;font-size:26px;margin:12px 0 6px">Welcome${name ? `, ${name}` : ''}</h1>
          <p style="color:#c3e1d1;font-size:15px;margin:0">Your Health Guide</p>
        </div>
        <div style="background:white;padding:28px;border-radius:12px;border:1px solid #e8e3da;margin-bottom:20px">
          <p style="color:#1a1814;font-size:16px;line-height:1.7;margin:0 0 16px">
            You are now subscribed to <strong>${streamList}</strong>.
          </p>
          <p style="color:#3f3a33;font-size:15px;line-height:1.7;margin:0 0 16px">
            Each week you will receive evidence-based insights on nutrition,
            healing foods, herbal medicine, and how to support your body
            through food and lifestyle — drawn from West African, Ayurvedic,
            TCM, Mediterranean, Caribbean, and Amazonian traditions.
          </p>
          <p style="color:#3f3a33;font-size:15px;line-height:1.7;margin:0">
            Every guide and every reply is educational only. It is not a
            substitute for the care of your own physician.
          </p>
        </div>
        <p style="color:#6b6258;font-size:12px;text-align:center;margin:0;line-height:1.6">
          © ${new Date().getFullYear()} Erica Ehiwe · Your Health Guide<br>
          Educational content. Not medical advice.
        </p>
      </div>
    `,
  })
}

// ─────────────────────────────────────────────────────────────────────
// Lead magnet flow — email-gated guide downloads
// ─────────────────────────────────────────────────────────────────────

const RESEND_AUDIENCES_BASE = 'https://api.resend.com/audiences'

function brandedFrom(): string {
  return (
    process.env.RESEND_FROM_EMAIL ||
    process.env.NEWSLETTER_FROM_EMAIL ||
    'Dr. Vera <hello@yourhealthguide.co>'
  )
}

/**
 * Add a contact to the Guide Subscribers Resend audience.
 * If the contact already exists, the API returns a 4xx that we treat as
 * non-fatal — the delivery email still sends.
 */
export async function addToGuideAudience({
  email,
  firstName,
  guideSlug,
}: {
  email: string
  firstName: string
  guideSlug: string
}) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const AUDIENCE_ID = process.env.RESEND_GUIDE_AUDIENCE_ID
  if (!RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured')
  }
  if (!AUDIENCE_ID) {
    // Soft-fail: log + continue. The delivery email is the primary contract;
    // audience membership is the secondary effect that surfaces in Resend.
    console.warn(
      '[lead-magnet] RESEND_GUIDE_AUDIENCE_ID not set — skipping audience add for',
      email,
    )
    return { skipped: true as const }
  }
  const res = await fetch(`${RESEND_AUDIENCES_BASE}/${AUDIENCE_ID}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      email,
      first_name: firstName,
      unsubscribed: false,
      // Resend's contact payload doesn't accept arbitrary tags yet — the
      // guide slug is preserved in the delivery email subject + body so it
      // can be correlated downstream via Resend's email logs.
    }),
  })
  if (!res.ok && res.status !== 409 /* already exists */) {
    const body = await res.text().catch(() => '')
    throw new Error(`Resend audience error ${res.status}: ${body}`)
  }
  return res.json().catch(() => ({}))
}

/**
 * Send the lead-magnet delivery email. The email IS the access mechanism
 * for the gated guide — the download URL is never returned by the API
 * response. The button links to the production-domain absolute PDF path.
 */
export async function sendGuideDeliveryEmail({
  email,
  firstName,
  guide,
}: {
  email: string
  firstName: string
  guide: { title: string; description: string; pdfPath: string; slug: string }
}) {
  const downloadUrl = `https://yourhealthguide.co${guide.pdfPath}`
  const greeting = firstName ? `Hi ${firstName},` : 'Hi,'

  await sendEmail({
    from: brandedFrom(),
    to: email,
    subject: `Your ${guide.title} is ready`,
    html: `
      <div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:32px;background:#fbf8f2;color:#1a1814">
        <div style="background:#1f5e3a;padding:28px 24px;border-radius:16px;text-align:center;margin-bottom:22px">
          <p style="font-size:36px;margin:0">🌿</p>
          <h1 style="color:white;font-size:22px;margin:10px 0 4px;font-family:Georgia,serif">Your guide is ready</h1>
          <p style="color:#c3e1d1;font-size:13px;margin:0">Your Health Guide<sup style="font-size:8px">™</sup></p>
        </div>

        <div style="background:white;padding:28px;border-radius:12px;border:1px solid #e8e3da;margin-bottom:18px">
          <p style="font-size:16px;line-height:1.7;margin:0 0 14px">${greeting}</p>
          <p style="font-size:15px;line-height:1.7;margin:0 0 18px;color:#3f3a33">
            Thank you for asking for <strong>${guide.title}</strong>. Your
            download is below — keep it on your device so it is there
            whenever you need it.
          </p>

          <div style="text-align:center;margin:24px 0">
            <a href="${downloadUrl}"
               style="display:inline-block;background:#1f5e3a;color:white;padding:14px 32px;border-radius:50px;font-size:15px;font-weight:bold;text-decoration:none;font-family:Georgia,serif">
              Download Your Guide
            </a>
          </div>

          <p style="font-size:14px;line-height:1.7;margin:18px 0 6px;color:#3f3a33"><strong>A few things to know before you open it:</strong></p>
          <ul style="font-size:14px;line-height:1.7;margin:0 0 14px;padding-left:20px;color:#3f3a33">
            <li style="margin-bottom:6px">${guide.description}</li>
            <li>This guide is educational. It is not medical advice and does not substitute for the care of your own physician.</li>
          </ul>

          <p style="font-size:14px;line-height:1.7;margin:14px 0 0;color:#3f3a33">
            I will send you the occasional note from Your Health Guide —
            new resources as I publish them, gentle protocols, and
            reminders that your body is wiser than you think. If that is
            not what you signed up for, the unsubscribe link is at the
            bottom of every email.
          </p>

          <p style="font-size:15px;line-height:1.7;margin:22px 0 0;color:#1a1814">
            Warmly,<br>
            <strong>Dr. Vera</strong><br>
            <span style="color:#6b6258;font-size:13px">Your Health Guide<sup style="font-size:7px">™</sup></span>
          </p>
        </div>

        <p style="color:#6b6258;font-size:11px;text-align:center;margin:0;line-height:1.6">
          Educational content. Not medical advice.<br>
          <a href="https://yourhealthguide.co" style="color:#6b6258">yourhealthguide.co</a> · {{{RESEND_UNSUBSCRIBE_URL}}}
        </p>
      </div>
    `,
  })
}
