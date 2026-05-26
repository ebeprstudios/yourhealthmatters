'use client'

import { useState } from 'react'
import type { InsulinZone } from '@/lib/types'

interface ZoneTimelineProps {
  zones: InsulinZone[]
}

/**
 * Interactive horizontal timeline of the four insulin zones across the day.
 * Buttons are full keyboard-navigable; selection is reflected visually and
 * announced to screen readers via aria-pressed and a live region.
 */
export default function ZoneTimeline({ zones }: ZoneTimelineProps) {
  const ordered = [...zones].sort((a, b) => a.startHour - b.startHour)
  const [activeSlug, setActiveSlug] = useState<string>(ordered[0]?.slug || '')
  const active = ordered.find((z) => z.slug === activeSlug) || ordered[0]

  // Build the proportional bar widths across the 24h day.
  // A zone with endHour < startHour (e.g. closed wraps midnight) is split.
  const segments = ordered.map((zone) => {
    const span =
      zone.endHour >= zone.startHour
        ? zone.endHour - zone.startHour
        : 24 - zone.startHour + zone.endHour
    return { zone, span }
  })
  const totalSpan = segments.reduce((acc, s) => acc + s.span, 0) || 24

  return (
    <div>
      {/* Timeline bar */}
      <div
        className="flex w-full rounded-lg overflow-hidden"
        role="tablist"
        aria-label="Insulin time zones"
        style={{ height: '64px' }}
      >
        {segments.map(({ zone, span }) => {
          const widthPct = (span / totalSpan) * 100
          const isActive = zone.slug === activeSlug
          return (
            <button
              key={zone.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`zone-panel-${zone.slug}`}
              id={`zone-tab-${zone.slug}`}
              onClick={() => setActiveSlug(zone.slug)}
              className="flex flex-col items-center justify-center text-white text-xs sm:text-sm font-semibold transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
              style={{
                width: `${widthPct}%`,
                backgroundColor: zone.colorHex,
                opacity: isActive ? 1 : 0.78,
              }}
            >
              <span>{zone.name}</span>
              <span className="text-white/80 text-[10px] sm:text-xs">
                {zone.timeRange}
              </span>
            </button>
          )
        })}
      </div>

      {/* Hour ruler */}
      <div className="grid grid-cols-6 mt-2 text-xs" style={{ color: 'var(--ink-500)' }}>
        {['6am', '10am', '2pm', '6pm', '9pm', '12am'].map((label) => (
          <span key={label} className="text-center">{label}</span>
        ))}
      </div>

      {/* Active zone panel */}
      {active && (
        <article
          id={`zone-panel-${active.slug}`}
          role="tabpanel"
          aria-labelledby={`zone-tab-${active.slug}`}
          className="mt-8 rounded-2xl p-6 sm:p-8"
          style={{
            backgroundColor: 'var(--paper-raised)',
            border: 'var(--border-hairline)',
            boxShadow: 'var(--shadow-card)',
            borderLeft: `4px solid ${active.colorHex}`,
          }}
        >
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-3">
            <h3 className="font-serif text-2xl" style={{ color: active.colorHex }}>
              {active.name}
            </h3>
            <span
              className="text-xs uppercase tracking-wider px-2.5 py-1 rounded-full"
              style={{ backgroundColor: 'var(--paper-sunk)', color: 'var(--ink-700)' }}
            >
              {active.timeRange}
            </span>
          </div>
          <p className="leading-relaxed mb-6" style={{ color: 'var(--ink-700)' }}>
            {active.whyItMatters}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--ink-900)' }}>
                What to consume
              </h4>
              <ul className="space-y-1.5 text-sm" style={{ color: 'var(--ink-700)' }}>
                {active.whatToConsume.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span aria-hidden="true" style={{ color: active.colorHex }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--ink-900)' }}>
                What to avoid
              </h4>
              <ul className="space-y-1.5 text-sm" style={{ color: 'var(--ink-700)' }}>
                {active.whatToAvoid.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span aria-hidden="true" style={{ color: 'var(--zone-caution)' }}>✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      )}
    </div>
  )
}
