'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import NewsletterForm from '@/components/ui/NewsletterForm'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      r: number; opacity: number; color: string; life: number; maxLife: number;
    }> = []

    const colors = ['#5dcaa5', '#3a8f63', '#d4a017', '#1D9E75', '#94c9ac']

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
        x: Math.random() * w,
        y: h + 10,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -(Math.random() * 0.8 + 0.3),
        r: Math.random() * 3 + 1,
        opacity: 0,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 0,
        maxLife: Math.random() * 200 + 120,
      })
    }

    function animate() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      if (Math.random() < 0.12) spawn()

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx; p.y += p.vy; p.life++
        p.opacity = p.life < 30
          ? p.life / 30
          : p.life > p.maxLife - 30
          ? (p.maxLife - p.life) / 30
          : 0.5

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity * 0.7
        ctx.fill()
        ctx.globalAlpha = 1

        if (p.life >= p.maxLife || p.y < -10) particles.splice(i, 1)
      }
      animId = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    animate()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-900 wave-divider">
      {/* Canvas particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-forest-700/40 via-transparent to-forest-950/60 pointer-events-none" />

      {/* Floating botanical elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['🌿', '🌱', '🍃', '✦', '🌿', '🍃', '✦', '🌱'].map((el, i) => (
          <span
            key={i}
            className={`absolute text-2xl opacity-10 select-none ${
              i % 3 === 0 ? 'animate-float' : i % 3 === 1 ? 'animate-float-delay' : 'animate-float-slow'
            }`}
            style={{
              left: `${8 + i * 12}%`,
              top: `${15 + (i % 4) * 18}%`,
              fontSize: `${1.2 + (i % 3) * 0.4}rem`,
            }}
          >
            {el}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-forest-700/60 backdrop-blur-sm border border-forest-500/40 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-forest-200 text-xs font-medium tracking-wide">
            Your Health Matters
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-white mb-6 animate-fade-up"
          style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', lineHeight: 1.1 }}
        >
          Food is Medicine.
          <br />
          <span className="text-gold-400">Learn to Use It.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-forest-200 mb-10 max-w-2xl mx-auto animate-fade-up leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', animationDelay: '0.15s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Ten evidence-based healing guides covering nutrition, herbs, body systems, and daily
          protocols - researched and created by <strong className="text-white">Erica Ehiwe</strong>.
          Ask Dr. Vera any question about your health.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <Link
            href="/#guides"
            className="px-8 py-3.5 bg-white text-forest-900 font-semibold rounded-full hover:bg-cream transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            Explore the Guides
          </Link>
          <Link
            href="/#chat"
            className="px-8 py-3.5 bg-forest-700/60 backdrop-blur-sm text-white font-semibold rounded-full border border-forest-400/40 hover:bg-forest-700 transition-all hover:scale-105 active:scale-95"
          >
            🌿 Ask Dr. Vera
          </Link>
        </div>

        {/* Stats */}
        <div
          className="mt-10 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-8 max-w-sm sm:max-w-md mx-auto animate-fade-up"
          style={{ animationDelay: '0.45s', opacity: 0, animationFillMode: 'forwards' }}
        >
          {[
            { n: '10', label: 'Healing Guides' },
            { n: '18', label: 'Organ Systems' },
            { n: '9', label: 'Global Traditions' },
          ].map(({ n, label }) => (
            <div key={n} className="text-center">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-gold-400">{n}</p>
              <p className="text-forest-300 text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Newsletter inline signup */}
        <div
          className="mt-12 animate-fade-up"
          style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
        >
          <p className="text-forest-300 text-xs uppercase tracking-widest mb-3">
            Get weekly health tips
          </p>
          <NewsletterForm variant="hero" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  )
}
