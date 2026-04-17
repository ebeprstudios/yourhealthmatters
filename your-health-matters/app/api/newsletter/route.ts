// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json()
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const TO_EMAIL = process.env.NEWSLETTER_TO_EMAIL || 'hello@ebeprstudios.com'
    const FROM_EMAIL = 'Your Health Matters <onboarding@resend.dev>'

    if (!RESEND_API_KEY) {
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    // Notify Erica
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: FROM_EMAIL, to: TO_EMAIL,
        subject: `New subscriber: ${email}`,
        html: `<div style="font-family:Georgia,serif;max-width:500px;margin:0 auto;padding:32px;background:#f5f0e8"><div style="background:#085041;padding:24px;border-radius:12px;text-align:center;margin-bottom:24px"><p style="color:#5dcaa5;font-size:28px;margin:0">🌿</p><h1 style="color:white;font-size:20px;margin:8px 0 0">New Subscriber</h1><p style="color:#c3e1d1;font-size:13px;margin:4px 0 0">Your Health Matters</p></div><div style="background:white;padding:24px;border-radius:12px;border:1px solid #e2d0a4"><p style="color:#4a4845;font-size:15px;margin:0 0 12px"><strong>Email:</strong> ${email}</p>${name ? `<p style="color:#4a4845;font-size:15px;margin:0 0 12px"><strong>Name:</strong> ${name}</p>` : ''}<p style="color:#4a4845;font-size:15px;margin:0"><strong>Offer:</strong> Weekly Health Tips</p></div></div>`,
      }),
    })

    // Welcome email to subscriber
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${RESEND_API_KEY}` },
      body: JSON.stringify({
        from: FROM_EMAIL, to: email,
        subject: 'Welcome to Your Health Matters',
        html: `<div style="font-family:Georgia,serif;max-width:560px;margin:0 auto;padding:32px;background:#f5f0e8"><div style="background:#085041;padding:32px;border-radius:16px;text-align:center;margin-bottom:24px"><p style="font-size:40px;margin:0">🌿</p><h1 style="color:white;font-size:26px;margin:12px 0 6px">Welcome${name ? `, ${name}` : ''}</h1><p style="color:#c3e1d1;font-size:15px;margin:0">Your Health Matters</p></div><div style="background:white;padding:28px;border-radius:12px;border:1px solid #e2d0a4;margin-bottom:20px"><p style="color:#2c2c2a;font-size:16px;line-height:1.7;margin:0 0 16px">You are now subscribed to <strong>weekly health tips</strong> from Erica Ehiwe.</p><p style="color:#4a4845;font-size:15px;line-height:1.7;margin:0 0 16px">Each week you will receive evidence-based insights on nutrition, healing foods, herbal medicine, and how to support your body through food and lifestyle.</p><p style="color:#4a4845;font-size:15px;line-height:1.7;margin:0">Explore all ten healing guides and ask Dr. Vera any health question at the link below.</p></div><div style="text-align:center;margin-bottom:20px"><a href="https://yourhealthmatters.ebeprstudios.com" style="display:inline-block;background:#085041;color:white;padding:14px 32px;border-radius:50px;font-size:15px;font-weight:bold;text-decoration:none">Explore the Healing Guides</a></div><p style="color:#9c9890;font-size:12px;text-align:center;margin:0;line-height:1.6">© ${new Date().getFullYear()} Erica Ehiwe - Your Health Matters<br>Educational purposes only. Not medical advice.</p></div>`,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter error:', error)
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
