'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import type { Guide } from '@/lib/guides'

interface GuideCardProps {
  guide: Guide
  index: number
}

export default function GuideCard({ guide, index }: GuideCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <Link href={`/guides/${guide.slug}`}>
        <div className="guide-card bg-white rounded-2xl overflow-hidden border border-stone-100 cursor-pointer group h-full flex flex-col">
          {/* Color header */}
          <div className={`${guide.color} px-5 py-6 relative overflow-hidden`}>
            {/* Decorative circle */}
            <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-white/5" />
            <div className="absolute -right-2 -bottom-6 w-16 h-16 rounded-full bg-white/5" />

            <div className="relative flex items-start justify-between">
              <span className="text-4xl">{guide.icon}</span>
              <span className="text-xs font-medium bg-white/20 text-white px-2.5 py-1 rounded-full">
                {guide.badge}
              </span>
            </div>
            <h3 className="font-serif font-bold text-white mt-3 text-lg leading-tight group-hover:text-gold-300 transition-colors">
              {guide.title}
            </h3>
          </div>

          {/* Body */}
          <div className="px-5 py-4 flex-1 flex flex-col justify-between">
            <p className="text-stone-500 text-sm leading-relaxed mb-4">
              {guide.description.length > 120
                ? guide.description.slice(0, 120) + '…'
                : guide.description}
            </p>

            {/* Key facts */}
            <div className="space-y-1.5 mb-4">
              {guide.keyFacts.slice(0, 2).map((fact, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
                  <span className="text-xs text-stone-600">{fact}</span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-stone-100">
              <span className="text-xs font-medium text-forest-600 bg-forest-50 px-2.5 py-1 rounded-full">
                {guide.category}
              </span>
              <span className="text-xs text-stone-400 flex items-center gap-1 group-hover:text-forest-600 transition-colors">
                Read guide
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
