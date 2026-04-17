// app/api/newsletter/send-meal-prep/route.ts
// Called by Vercel Cron every Saturday at 9am ET

import { NextRequest, NextResponse } from 'next/server'
import { getMealPrepWeek, getCurrentWeekNumber } from '@/lib/meal-prep-content'

function getSubscribers(): string[] {
  const raw = process.env.NEWSLETTER_SUBSCRIBERS || ''
  return raw.split(',').map(e => e.trim()).filter(e => e.includes('@'))
}

function mealCard(meal: { name: string; components: string; whyItWorks: string }, borderColor: string): string {
  return `
    <div style="background:white;border-radius:10px;padding:16px;margin-bottom:12px;border-left:3px solid ${borderColor}">
      <p style="color:#085041;font-weight:bold;font-size:14px;margin:0 0 6px;font-family:Georgia,serif">${meal.name}</p>
      <p style="color:#4a4845;font-size:13px;line-height:1.6;margin:0 0 8px">${meal.components}</p>
      <div style="background:#f5f0e8;border-radius:6px;padding:10px">
        <p style="color:#085041;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;margin:0 0 4px">Why it works</p>
        <p style="color:#4a4845;font-size:12px;line-height:1.6;margin:0">${meal.whyItWorks}</p>
      </div>
    </div>`
}

function buildMealPrepHTML(week: ReturnType<typeof getMealPrepWeek>, weekNum: number): string {
  const peakMeals = week.peakMeals.meals.map(m => mealCard(m, week.color)).join('')
  const middayMeals = week.middayMeals.meals.map(m => mealCard(m, '#B8690A')).join('')
  const eveningMeals = week.eveningMeals.meals.map(m => mealCard(m, '#2D1B69')).join('')

  const shoppingItems = week.shoppingList.map(item =>
    `<p style="color:#4a4845;font-size:13px;margin:0 0 4px;padding-left:12px">&#9632; ${item}</p>`
  ).join('')

  const prepSteps = week.sundayPrep.map((step, i) =>
    `<p style="color:#4a4845;font-size:13px;margin:0 0 8px;padding-left:16px"><span style="color:${week.color};font-weight:bold">${i + 1}.</span> ${step}</p>`
  ).join('')

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f0e8;font-family:Georgia,serif">
<div style="max-width:600px;margin:0 auto;padding:24px 16px">

  <!-- Header -->
  <div style="background:${week.color};border-radius:16px;padding:28px;text-align:center;margin-bottom:20px">
    <p style="font-size:36px;margin:0 0 8px">${week.emoji}</p>
    <p style="color:rgba(255,255,255,0.7);font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin:0 0 8px">Your Health Matters - Saturday Meal Prep</p>
    <h1 style="color:white;font-size:22px;margin:0 0 6px;font-family:Georgia,serif">${week.theme}</h1>
    <p style="color:rgba(255,255,255,0.8);font-size:14px;margin:0;font-style:italic">${week.tagline}</p>
  </div>

  <!-- Personal Note -->
  <div style="background:white;border-radius:12px;padding:20px;margin-bottom:16px;border:1px solid #e2d0a4">
    <p style="color:#4a4845;font-size:14px;line-height:1.8;margin:0 0 12px">${week.intro}</p>
    <div style="background:#e1f5ee;border-radius:8px;padding:14px;border-left:3px solid #085041">
      <p style="color:#085041;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;margin:0 0 6px">Pro Tip This Week</p>
      <p style="color:#235d41;font-size:13px;line-height:1.7;margin:0">${week.proTip}</p>
    </div>
  </div>

  <!-- Morning Juice -->
  <div style="background:#085041;border-radius:12px;padding:20px;margin-bottom:16px">
    <p style="color:#5dcaa5;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin:0 0 10px">🥤 Morning Juice of the Week</p>
    <p style="color:white;font-weight:bold;font-size:16px;margin:0 0 8px;font-family:Georgia,serif">${week.morningJuice.name}</p>
    <p style="color:#c3e1d1;font-size:13px;line-height:1.6;margin:0 0 10px"><strong style="color:#5dcaa5">Ingredients:</strong> ${week.morningJuice.ingredients}</p>
    <p style="color:#c3e1d1;font-size:13px;line-height:1.6;margin:0">${week.morningJuice.benefit}</p>
  </div>

  <!-- Insulin Time Zone Guide -->
  <div style="background:white;border-radius:12px;padding:16px;margin-bottom:16px;border:1px solid #e2d0a4">
    <p style="color:#085041;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px">⏰ Insulin Time Zone Reminder</p>
    <div style="display:flex;gap:8px">
      <div style="background:#e1f5ee;border-radius:8px;padding:10px;flex:1;text-align:center">
        <p style="color:#085041;font-weight:bold;font-size:12px;margin:0 0 2px">Peak Zone</p>
        <p style="color:#3a8f63;font-size:11px;margin:0">6am - 2pm</p>
        <p style="color:#4a4845;font-size:11px;margin:4px 0 0">All foods safe</p>
      </div>
      <div style="background:#fff3e0;border-radius:8px;padding:10px;flex:1;text-align:center">
        <p style="color:#B8690A;font-weight:bold;font-size:12px;margin:0 0 2px">Declining</p>
        <p style="color:#b36a0a;font-size:11px;margin:0">2pm - 6pm</p>
        <p style="color:#4a4845;font-size:11px;margin:4px 0 0">Low sugar only</p>
      </div>
      <div style="background:#f4eafa;border-radius:8px;padding:10px;flex:1;text-align:center">
        <p style="color:#4A1942;font-weight:bold;font-size:12px;margin:0 0 2px">Evening</p>
        <p style="color:#7B3FAB;font-size:11px;margin:0">6pm - 7pm</p>
        <p style="color:#4a4845;font-size:11px;margin:4px 0 0">Veggies only</p>
      </div>
    </div>
  </div>

  <!-- Peak Zone Meals -->
  <div style="margin-bottom:16px">
    <div style="background:${week.color};border-radius:10px;padding:14px;margin-bottom:10px">
      <p style="color:white;font-weight:bold;font-size:14px;margin:0">🌅 ${week.peakMeals.label}</p>
      <p style="color:rgba(255,255,255,0.7);font-size:12px;margin:4px 0 0">Your largest and most nutrient-dense meals belong here</p>
    </div>
    ${peakMeals}
  </div>

  <!-- Midday Meals -->
  <div style="margin-bottom:16px">
    <div style="background:#B8690A;border-radius:10px;padding:14px;margin-bottom:10px">
      <p style="color:white;font-weight:bold;font-size:14px;margin:0">☀️ ${week.middayMeals.label}</p>
      <p style="color:rgba(255,255,255,0.7);font-size:12px;margin:4px 0 0">Insulin sensitivity declining - reduce sugar and grains</p>
    </div>
    ${middayMeals}
  </div>

  <!-- Evening Meals -->
  <div style="margin-bottom:16px">
    <div style="background:#2D1B69;border-radius:10px;padding:14px;margin-bottom:10px">
      <p style="color:white;font-weight:bold;font-size:14px;margin:0">🌇 ${week.eveningMeals.label}</p>
      <p style="color:rgba(255,255,255,0.7);font-size:12px;margin:4px 0 0">Protein and vegetables only - kitchen closes at 7pm</p>
    </div>
    ${eveningMeals}
  </div>

  <!-- Shopping List -->
  <div style="background:white;border-radius:12px;padding:20px;margin-bottom:16px;border:1px solid #e2d0a4">
    <p style="color:#085041;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin:0 0 14px">🛒 Shopping List</p>
    ${shoppingItems}
  </div>

  <!-- Sunday Prep -->
  <div style="background:white;border-radius:12px;padding:20px;margin-bottom:20px;border:1px solid #e2d0a4">
    <p style="color:#085041;font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin:0 0 14px">📋 Sunday Prep Guide</p>
    <p style="color:#4a4845;font-size:13px;margin:0 0 12px">Do these 7 things on Sunday and your week becomes effortless:</p>
    ${prepSteps}
  </div>

  <!-- CTA -->
  <div style="background:#085041;border-radius:12px;padding:20px;text-align:center;margin-bottom:20px">
    <p style="color:#5dcaa5;font-size:13px;margin:0 0 8px">Read the full ${week.theme} guide</p>
    <a href="https://yourhealthmatters.ebeprstudios.com"
       style="display:inline-block;background:white;color:#085041;padding:12px 28px;border-radius:50px;font-size:14px;font-weight:bold;text-decoration:none">
      Explore All Guides
    </a>
  </div>

  <!-- Footer -->
  <div style="text-align:center;padding:16px 0">
    <p style="color:#9c9890;font-size:12px;margin:0 0 4px;line-height:1.7">
      Your Health Matters - Weekly Meal Prep Edition<br>
      yourhealthmatters.ebeprstudios.com
    </p>
    <p style="color:#c3c0b8;font-size:11px;margin:0">
      Copyright ${new Date().getFullYear()} Erica Ehiwe - All Rights Reserved<br>
      Educational purposes only. Not medical advice.
    </p>
  </div>

</div>
</body>
</html>`
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  const cronSecret = process.env.CRON_SECRET
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const FROM_EMAIL = 'Your Health Matters <onboarding@resend.dev>'

  if (!RESEND_API_KEY) {
    return NextResponse.json({ error: 'RESEND_API_KEY not configured' }, { status: 500 })
  }

  const subscribers = getSubscribers()
  if (subscribers.length === 0) {
    return NextResponse.json({ message: 'No subscribers yet' })
  }

  const weekNumber = getCurrentWeekNumber()
  const content = getMealPrepWeek(weekNumber)
  const html = buildMealPrepHTML(content, weekNumber)

  const results = []
  for (const email of subscribers) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: email,
          subject: `Your Weekly Meal Prep Guide - ${content.theme} ${content.emoji}`,
          html,
        }),
      })
      results.push({ email, success: res.ok })
    } catch {
      results.push({ email, success: false })
    }
  }

  const sent = results.filter(r => r.success).length
  return NextResponse.json({
    message: `Sent to ${sent}/${subscribers.length} subscribers`,
    theme: content.theme,
    week: weekNumber,
  })
}
