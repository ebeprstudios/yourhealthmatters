'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

/**
 * Homepage hero — the two-doorway thesis.
 *
 * "Your body is one organism. There are two doorways into it."
 *
 * Cards are deliberately equal weight. Color signals doorway, not hierarchy.
 * No emoji on cards (warm but not casual). Mobile stacks vertically.
 */
export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Ambient particle animation preserved from the prior hero — texture only,
  // not the message. The message is the architecture.
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: Array<{
      x: number; y: number; vx: number; vy: number
      r: number; opacity: number; color: string; life: number; maxLife: number
    }> = []
    // Palette spans both doorways — green for food, aubergine for mind.
    const colors = ['#5dcaa5', '#3a8f63', '#6b5b95', '#3d2a5a', '#a88a3d']

    function resize() {
      if (!canvas) return
      canvas.width = canvas.offsetWidth * devicePixelRatio
      canvas.height = canvas.offsetHeight * devicePixelRatio
      ctx!.scale(devicePixelRatio, devicePixelRatio)
    }

    function spawn() {
      const w = canvas!.offsetWidth
      const h = canvas!.offsetHeight
      particles.push({
        x: Math.random() * w, y: h + 10,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -(Math.random() * 0.8 + 0.3),
        r: Math.random() * 3 + 1, opacity: 0,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0, maxLife: Math.random() * 200 + 120,
      })
    }

    function animate() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      if (Math.random() < 0.10) spawn()
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx; p.y += p.vy; p.life++
        p.opacity = p.life < 30 ? p.life / 30
          : p.life > p.maxLife - 30 ? (p.maxLife - p.life) / 30 : 0.5
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity * 0.6
        ctx.fill()
        ctx.globalAlpha = 1
        if (p.life >= p.maxLife || p.y < -10) particles.splice(i, 1)
      }
      animId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    animate()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden wave-divider py-20 sm:py-24"
      style={{
        minHeight: '100vh',
        // Deep ink background bridging both doorway palettes
        background:
          'linear-gradient(180deg, #1a1a2e 0%, #1f1b2e 40%, #1d2e22 100%)',
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="relative z-10 px-4 sm:px-6 max-w-6xl mx-auto">

        {/* Headline — two stacked H1 lines */}
        <h1
          className="font-serif text-white mb-8 text-center animate-fade-up"
          style={{ fontSize: 'clamp(2rem, 5.5vw, 3.75rem)', lineHeight: 1.15, letterSpacing: '-0.01em' }}
        >
          Your body is one organism.
          <br />
          There are two doorways into it.
        </h1>

        {/* Sub-paragraph — three drafted paragraphs verbatim */}
        <div
          className="text-center mb-14 max-w-3xl mx-auto animate-fade-up space-y-4"
          style={{ animationDelay: '0.15s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 1.6vw, 1.15rem)' }}>
            One is what you put in it — food, herbs, juices, the cellular biology that reaches your bloodstream through your gut. The other is what you direct at it — perception, language, the sentences you wrap around your own thoughts, the way your nervous system decides whether a moment is safe or dangerous.
          </p>
          <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 1.6vw, 1.15rem)' }}>
            Both doorways open into the same body. Both have measurable biology on the other side. The mind moves the body in six seconds. Food moves it in twenty minutes. Neither is metaphor. Neither is optional.
          </p>
          <p className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(1rem, 1.6vw, 1.15rem)' }}>
            This site teaches both — with the same rigor, in the same voice, by the same practitioner. Choose your doorway. The destination is the same.
          </p>
        </div>

        {/* Two doorway cards — equal weight, side by side on desktop, stacked on mobile */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 mb-14 animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
        >
          {/* LEFT — Food as Medicine */}
          <DoorwayCard
            eyebrow="FOOD AS MEDICINE"
            subhead="What you put in the body."
            body="Eighteen organ systems. Hundreds of foods, herbs, and juices mapped to the cellular work they do. Insulin timing. Patient protocols. Cultural wisdom from six healing traditions."
            cta="Enter Food as Medicine"
            href="/food-as-medicine"
            accent="#3a8f63"
            accentSoft="rgba(58, 143, 99, 0.18)"
            accentBorder="rgba(58, 143, 99, 0.45)"
          />
          {/* RIGHT — Mind as Medicine */}
          <DoorwayCard
            eyebrow="MIND AS MEDICINE"
            subhead="What you direct at the body."
            body="The loop your nervous system runs every day — perception, language, binary thinking, stored charge, set-point — and how to retrain it at any station."
            cta="Enter Mind as Medicine"
            href="/mind-as-medicine"
            accent="#6b5b95"
            accentSoft="rgba(107, 91, 149, 0.20)"
            accentBorder="rgba(107, 91, 149, 0.50)"
          />
        </div>

        {/* Closing italic byline */}
        <div
          className="text-center max-w-3xl mx-auto animate-fade-up"
          style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <p className="italic leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'clamp(0.95rem, 1.4vw, 1.05rem)' }}>
            The body knows what the mind is doing. The mind feels what the food is doing. Healing is not a single doorway — it is the moment you stop treating them as separate.
          </p>
          <p className="mt-3 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>
            — Dr. Vera Holloway, CNS + CHN
          </p>
        </div>
      </div>
    </section>
  )
}

interface DoorwayCardProps {
  eyebrow: string
  subhead: string
  body: string
  cta: string
  href: string
  accent: string
  accentSoft: string
  accentBorder: string
}

function DoorwayCard({ eyebrow, subhead, body, cta, href, accent, accentSoft, accentBorder }: DoorwayCardProps) {
  return (
    <Link
      href={href}
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-offset-transparent rounded-2xl"
      style={{ outline: 'none' }}
      aria-label={cta}
    >
      <div
        className="h-full rounded-2xl p-7 sm:p-9 transition-transform duration-300 group-hover:-translate-y-1"
        style={{
          backgroundColor: accentSoft,
          backdropFilter: 'blur(8px)',
          border: `1px solid ${accentBorder}`,
          boxShadow: '0 1px 3px rgba(0,0,0,0.2), 0 12px 32px rgba(0,0,0,0.25)',
        }}
      >
        <p
          className="text-xs font-bold tracking-[0.18em] mb-3"
          style={{ color: accent }}
        >
          {eyebrow}
        </p>
        <p
          className="font-serif text-white mb-4"
          style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.6rem)', lineHeight: 1.25 }}
        >
          {subhead}
        </p>
        <p
          className="leading-relaxed mb-7"
          style={{ color: 'rgba(255,255,255,0.78)', fontSize: 'clamp(0.95rem, 1.4vw, 1.02rem)' }}
        >
          {body}
        </p>
        <div className="inline-flex items-center gap-2 font-semibold text-sm" style={{ color: 'white' }}>
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full transition-colors"
            style={{ backgroundColor: accent, color: 'white' }}
          >
            {cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
