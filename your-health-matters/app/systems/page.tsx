import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import SystemCard from '@/components/systems/SystemCard'
import DisclaimerFooter from '@/components/ui/DisclaimerFooter'
import { organSystems } from '@/lib/data'

export const metadata: Metadata = {
  title: 'The 18 Organ Systems | Your Health Guide',
  description:
    'Dr. Vera Holloway\'s master teaching framework: the 18 organ systems, color-coded across the entire site. Each system has its own landing page with the foods, herbs, juices, and salads that support it.',
}

export default function SystemsHubPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--paper)' }}>
      <Nav />

      <header className="pt-28 pb-12" style={{ backgroundColor: 'var(--paper-sunk)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--zone-peak)' }}
          >
            The Master Framework
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl mb-4 max-w-3xl" style={{ color: 'var(--ink-900)' }}>
            The 18 Organ Systems
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--ink-700)' }}>
            Every guide on this site is mapped to one or more of these 18
            systems. Each system has its own color, and that color follows
            the system across every guide, juice, salad, and protocol. Pick
            the system your body is asking about and the page will show you
            the foods, herbs, juices, and salads that support it.
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {organSystems.map((system) => (
            <SystemCard key={system.id} system={system} />
          ))}
        </div>
      </div>

      <DisclaimerFooter />
    </main>
  )
}
