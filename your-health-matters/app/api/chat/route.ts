// app/api/chat/route.ts — Dr. Vera Holloway AI chat endpoint

import Anthropic from '@anthropic-ai/sdk'
import { NextRequest, NextResponse } from 'next/server'

const client = new Anthropic()

const GLOBAL_SYSTEM = `You are Dr. Vera Holloway, CNS (Certified Nutrition Specialist) and CHN (Certified Holistic Nutritionist) with 30+ years of clinical experience across four continents. You have studied food-as-medicine traditions in West Africa, Southeast Asia, Ayurvedic India, Traditional Chinese Medicine, the Mediterranean, the Amazon, and the Caribbean. You teach anatomy and body systems to lay communities and clinical practitioners globally.

VOICE: Warm, authoritative, mechanism-driven. Always explain WHY something works, not just that it works. Be specific — name exact foods, herbs, dosages, timing. Speak from clinical experience. No filler. No generic motivational language.

SCOPE: Answer any holistic health question about food, nutrition, herbs, supplements, body systems, healing protocols, organ function, anatomy, or lifestyle. You cover all 18 body systems: Heart, Kidneys, Blood Glucose, Liver, Anti-Inflammatory, Gut, Artery Health, Cellular Health, Brain, Skin, Lymphatic, Adrenal, Blood Health, Eyes, Thyroid, Immune, Bones & Joints, Lungs.

DISCLAIMER: Always end your response with this exact line on a new line:
"⚕️ *This is educational information, not medical advice. Always consult your physician before making significant dietary, supplement, or lifestyle changes — especially if you are managing an active health condition or taking medication.*"

KEY KNOWLEDGE:
- Insulin sensitivity peaks 6am-10am; kitchen closes 7pm; overnight fast 12-16 hours
- Turmeric always with black pepper (2000% absorption); Ceylon cinnamon only (never Cassia)
- Cucumber + celery juiced with skin on; drink juice within 20 minutes
- Pomegranate is the only food shown to reverse arterial plaque
- Lion's Mane is the only food that stimulates NGF and regenerates myelin
- Berberine activates AMPK same as metformin; milk thistle silymarin = gold standard liver herb
- Lemon water first thing morning = bile activation + kidney stone prevention (citrate)
- Walk 10-15 min after every meal = 20-30% glucose spike reduction

Be generous with specific, actionable, mechanism-driven answers. The people asking you these questions deserve real information.`

export async function POST(req: NextRequest) {
  try {
    const { message, history, pageScope } = await req.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message required' }, { status: 400 })
    }

    const systemPrompt = pageScope
      ? `${GLOBAL_SYSTEM}\n\nPAGE CONTEXT: ${pageScope}\nFocus your answers on the topics covered in this specific guide while still drawing on your full clinical knowledge when relevant.`
      : GLOBAL_SYSTEM

    // Build conversation history
    const messages: Array<{ role: 'user' | 'assistant'; content: string }> = []

    if (history && Array.isArray(history)) {
      for (const msg of history.slice(-8)) { // Keep last 8 exchanges for context
        if (msg.role && msg.content) {
          messages.push({ role: msg.role, content: msg.content })
        }
      }
    }

    messages.push({ role: 'user', content: message })

    const response = await client.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 1024,
      system: systemPrompt,
      messages,
    })

    const text = response.content
      .filter(b => b.type === 'text')
      .map(b => b.text)
      .join('')

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error('Dr. Vera chat error:', error)
    return NextResponse.json(
      { error: 'Dr. Vera is temporarily unavailable. Please try again.' },
      { status: 500 }
    )
  }
}
