/**
 * Newsletter provider — Resend.
 *
 * Phase 2A uses raw fetch against the Resend API (no SDK) to keep the bundle
 * thin. Two streams are supported:
 *   - 'health-digest'  → the default weekly educational digest
 *   - 'scripture'      → the opt-in weekly devotional, never the default
 *
 * Environment variables required:
 *   RESEND_API_KEY        — Resend project API key
 *   NEWSLETTER_FROM_EMAIL — verified sender (e.g. 'Your Health Guide <hello@yourhealthguide.co>')
 *   NEWSLETTER_TO_EMAIL   — Erica's notification inbox (fallback to hello@ebeprstudios.com)
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
