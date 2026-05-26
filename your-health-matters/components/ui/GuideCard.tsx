'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import type { Guide } from '@/lib/types'
import GuideDownloadGate from '@/components/guides/GuideDownloadGate'

interface GuideCardProps {
  guide: Guide
  index: number
}

const tierLabel: Record<Guide['tier'], string> = {
  foundational: 'Foundational',
  specialty: 'Specialty',
  advanced: 'Advanced',
  devotional: 'Devotional',
}

export default function GuideCard({ guide, index }: GuideCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add('visible')
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const description =
    guide.description.length > 120 ? guide.description.slice(0, 120) + '…' : guide.description
  const accent = guide.accentColor || 'var(--ink-700)'
  const detailHref = `/guides/${guide.slug}`

  return (
    <div ref={ref} className="reveal h-full" style={{ transitionDelay: `${(index % 3) * 80}ms` }}>
      <article
        className="guide-card overflow-hidden border h-full flex flex-col"
        style={{
          backgroundColor: 'var(--paper-raised)',
          borderColor: 'var(--ink-100)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-card)',
        }}
      >
        {/* Color header — clickable area into the guide detail page */}
        <Link
          href={detailHref}
          className="block relative overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--zone-peak)]"
          aria-label={`Open guide: ${guide.title}`}
        >
          <div className="px-5 py-6 relative overflow-hidden" style={{ backgroundColor: accent }}>
            <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-white/5" />
            <div className="absolute -right-2 -bottom-6 w-16 h-16 rounded-full bg-white/5" />
            <div className="relative flex items-start justify-between gap-3">
              <span className="text-4xl" aria-hidden="true">{guide.icon ?? '📘'}</span>
              {guide.badge && (
                <span className="text-xs font-medium bg-white/20 text-white px-2.5 py-1 rounded-full whitespace-nowrap">
                  {guide.badge}
                </span>
              )}
            </div>
            <h3 className="font-serif font-bold text-white mt-3 text-lg leading-tight">
              {guide.title}
            </h3>
            {guide.comingSoon && (
              <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-stone-800 px-2 py-0.5 rounded-full">
                Coming Soon
              </span>
            )}
            {guide.gated === true && !guide.comingSoon && (
              <span
                className="absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-stone-800 px-2 py-0.5 rounded-full"
                aria-label="Email-gated download"
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Free with email
              </span>
            )}
          </div>
        </Link>

        {/* Body */}
        <div className="px-5 py-4 flex-1 flex flex-col justify-between" style={{ color: 'var(--ink-700)' }}>
          <Link href={detailHref} className="block focus:outline-none focus-visible:ring-2 rounded">
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--ink-500)' }}>
              {description}
            </p>
            {guide.keyFacts && guide.keyFacts.length > 0 && (
              <div className="space-y-1.5 mb-4">
                {guide.keyFacts.slice(0, 2).map((fact, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0" style={{ color: accent }} aria-hidden="true">✦</span>
                    <span className="text-xs" style={{ color: 'var(--ink-700)' }}>{fact}</span>
                  </div>
                ))}
              </div>
            )}
          </Link>

          {/* Footer: tier pill + read-guide arrow + gate CTA */}
          <div className="pt-3 border-t" style={{ borderColor: 'var(--ink-100)' }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ color: accent, backgroundColor: 'var(--paper-sunk)' }}>
                {tierLabel[guide.tier]}
              </span>
              <Link
                href={detailHref}
                className="text-xs flex items-center gap-1 hover:underline focus:outline-none focus-visible:underline"
                style={{ color: 'var(--ink-500)' }}
              >
                Read guide
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            <div className="flex">
              <GuideDownloadGate guide={guide} variant="card" />
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
