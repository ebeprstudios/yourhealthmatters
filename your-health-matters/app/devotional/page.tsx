import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import DisclaimerFooter from '@/components/ui/DisclaimerFooter'
import { tieredGuides } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Devotional | Your Health Guide',
  description:
    'A quiet shelf of devotional reflections paired with daily renewal practices, for readers whose healing journey is anchored in scripture. Linked from the footer.',
}

export default function DevotionalPage() {
  const devotionals = tieredGuides.devotional

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--paper)' }}>
      <Nav />

      <header
        className="pt-28 pb-12"
        style={{ backgroundColor: 'var(--zone-closed-soft)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--zone-closed)' }}
          >
            A Quiet Shelf
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl mb-4" style={{ color: 'var(--ink-900)' }}>
            Devotional
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: 'var(--ink-700)' }}>
            A separate, gentle space for readers whose healing journey is
            anchored in scripture. The educational guides on the main site
            stand on their own, in any tradition. These pieces simply
            extend an invitation to those who want a devotional companion.
          </p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="space-y-4">
          {devotionals.map((d) => (
            <article
              key={d.slug}
              className="rounded-2xl p-6"
              style={{
                backgroundColor: 'var(--paper-raised)',
                border: 'var(--border-hairline)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl" aria-hidden="true">{d.icon ?? '📖'}</span>
                <div className="flex-1">
                  <h2 className="font-serif text-2xl mb-2" style={{ color: 'var(--ink-900)' }}>
                    {d.title}
                  </h2>
                  {d.subtitle && (
                    <p className="text-sm mb-3" style={{ color: 'var(--ink-500)' }}>
                      {d.subtitle}
                    </p>
                  )}
                  <p className="leading-relaxed text-sm mb-4" style={{ color: 'var(--ink-700)' }}>
                    {d.description}
                  </p>
                  {d.comingSoon ? (
                    <span
                      className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{ backgroundColor: 'var(--paper-sunk)', color: 'var(--ink-500)' }}
                    >
                      Coming Soon
                    </span>
                  ) : (
                    <a
                      href={d.pdfPath}
                      download
                      className="inline-flex items-center gap-2 font-semibold px-4 py-2 rounded-full text-sm"
                      style={{ backgroundColor: 'var(--zone-closed)', color: 'white' }}
                    >
                      Download PDF
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="text-sm underline"
            style={{ color: 'var(--zone-peak)' }}
          >
            ← Back to Your Health Guide
          </Link>
        </div>
      </div>

      <DisclaimerFooter />
    </main>
  )
}
