// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { subscribe, type SubscriptionStream } from '@/lib/newsletter/provider'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const { email, name, scripture } = await req.json()

    const streams: SubscriptionStream[] = ['health-digest']
    if (scripture === true) streams.push('scripture')

    await subscribe({ email, name, streams })
    return NextResponse.json({ success: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Something went wrong'
    const isConfig = /RESEND_API_KEY|configured/i.test(message)
    console.error('Newsletter error:', error)
    return NextResponse.json(
      { error: isConfig ? 'Email service not configured' : message },
      { status: isConfig ? 500 : 400 },
    )
  }
}
