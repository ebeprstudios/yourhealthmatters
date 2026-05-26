import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import GuideCard from '@/components/ui/GuideCard'
import DisclaimerFooter from '@/components/ui/DisclaimerFooter'
import { tieredGuides } from '@/lib/data'
import type { Guide } from '@/lib/types'

export const metadata: Metadata = {
  title: 'The Guide Library | Your Health Matters',
  description:
    'Categorized healing guides from Your Health Matters — Foundational educational guides, condition-specific Specialty guides, and Advanced multi-system protocols.',
}

interface SectionProps {
  id: string
  label: string
  title: string
  summary: string
  guides: Guide[]
}

function GuideSection({ id, label, title, summary, guides }: SectionProps) {
  if (guides.length === 0) return null
  return (
    <section id={id} className="mb-16">
      <header className="mb-6 max-w-2xl">
        <span
          className="inline-block text-xs font-semibold tracking-widest uppercase mb-2"
          style={{ color: 'var(--zone-peak)' }}
        >
          {label}
        </span>
        <h2 className="font-serif text-3xl mb-3" style={{ color: 'var(--ink-900)' }}>
          {title}
        </h2>
        <p className="leading-relaxed" style={{ color: 'var(--ink-500)' }}>
          {summary}
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {guides.map((guide, i) => (
          <GuideCard key={guide.slug} guide={guide} index={i} />
        ))}
      </div>
    </section>
  )
}

export default function GuidesLibraryPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--paper)' }}>
      <Nav />

      <header className="pt-28 pb-12" style={{ backgroundColor: 'var(--paper-sunk)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--zone-peak)' }}
          >
            The Library
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl mb-4 max-w-3xl" style={{ color: 'var(--ink-900)' }}>
            Healing Guides — categorized for the way you learn
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--ink-700)' }}>
            Every reader starts in Foundational. Move into Specialty when a
            specific condition needs focus. Step into Advanced when you are
            ready to run multiple systems together. Devotional content lives
            in its own quiet corner at{' '}
            <a href="/devotional" className="underline" style={{ color: 'var(--zone-peak)' }}>
              /devotional
            </a>
            .
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <GuideSection
          id="foundational"
          label="Section A · Level 1"
          title="Foundational Guides"
          summary="The educational backbone. The cheat sheets, the visuals, and the food libraries that teach you how the body uses food across the day."
          guides={tieredGuides.foundational}
        />
        <GuideSection
          id="specialty"
          label="Section B · Level 2"
          title="Specialty Guides"
          summary="Condition-specific protocols for readers with a particular focus — heart-rate recovery, blood glucose, weekly resets, and the mind-body anxiety loop."
          guides={tieredGuides.specialty}
        />
        <GuideSection
          id="advanced"
          label="Section C · Level 3"
          title="Advanced Protocols"
          summary="Multi-system protocols used in clinical work. Visible to all here in Phase 2A; gated behind membership in Phase 2C."
          guides={tieredGuides.advanced}
        />
      </div>

      <DisclaimerFooter />
    </main>
  )
}
