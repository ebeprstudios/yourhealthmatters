import Link from 'next/link'
import type { OrganSystem } from '@/lib/types'

interface SystemCardProps {
  system: OrganSystem
}

/**
 * One organ-system card on the /systems hub.
 * Background color carries meaning (the system's assigned hex from the
 * canonical palette in tokens.css). No decorative color.
 */
export default function SystemCard({ system }: SystemCardProps) {
  return (
    <Link
      href={`/systems/${system.slug}`}
      className="block rounded-2xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      aria-label={`Open organ system: ${system.name}`}
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      <div
        className="px-5 py-6 h-full flex flex-col transition-transform duration-200"
        style={{
          backgroundColor: system.colorHex,
          color: 'white',
          minHeight: '180px',
        }}
      >
        <div className="text-3xl font-serif mb-1">{system.name}</div>
        <p className="text-white/85 text-sm leading-relaxed flex-1">
          {system.oneLineSummary}
        </p>
        <div className="mt-4 text-xs uppercase tracking-wider text-white/70 inline-flex items-center gap-1">
          Explore system
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
