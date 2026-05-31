import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import NewsletterForm from '@/components/ui/NewsletterForm'
import DisclaimerFooter from '@/components/ui/DisclaimerFooter'

export const metadata: Metadata = {
  title: 'Subscribe | Your Health Guide',
  description:
    'Every week: one mechanism-driven teaching from Your Health Guide, food as medicine, body systems, and protocols drawn from West African, Ayurvedic, TCM, Mediterranean, Caribbean, and Amazonian traditions. Scripture reflections are an optional second subscription.',
}

export default function SubscribePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--paper)' }}>
      <Nav />

      <section className="pt-28 pb-20" style={{ backgroundColor: 'var(--paper-sunk)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--zone-peak)' }}
          >
            Subscribe
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl mb-4" style={{ color: 'var(--ink-900)' }}>
            Weekly teaching, in your inbox
          </h1>
          <p className="leading-relaxed text-lg mb-10" style={{ color: 'var(--ink-700)' }}>
            One mechanism-driven teaching, one practical first step, every
            week. Drawn from West African, Ayurvedic, Traditional Chinese
            Medicine, Mediterranean, Caribbean, and Amazonian traditions
            grounded in clinical research.
          </p>

          <div
            className="rounded-2xl p-6 sm:p-8 text-left"
            style={{
              backgroundColor: 'var(--paper-raised)',
              border: 'var(--border-hairline)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <NewsletterForm variant="section" showScriptureOptIn />
          </div>

          <ul
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left"
            style={{ color: 'var(--ink-700)' }}
          >
            <li
              className="rounded-xl p-4"
              style={{ backgroundColor: 'var(--paper-raised)', border: 'var(--border-hairline)' }}
            >
              <p className="text-2xl mb-1" aria-hidden="true">🥗</p>
              <p className="font-semibold text-sm" style={{ color: 'var(--ink-900)' }}>Healing Foods</p>
              <p className="text-xs mt-1" style={{ color: 'var(--ink-500)' }}>One mechanism every week.</p>
            </li>
            <li
              className="rounded-xl p-4"
              style={{ backgroundColor: 'var(--paper-raised)', border: 'var(--border-hairline)' }}
            >
              <p className="text-2xl mb-1" aria-hidden="true">📊</p>
              <p className="font-semibold text-sm" style={{ color: 'var(--ink-900)' }}>Body Systems</p>
              <p className="text-xs mt-1" style={{ color: 'var(--ink-500)' }}>The 18 systems, taught simply.</p>
            </li>
            <li
              className="rounded-xl p-4"
              style={{ backgroundColor: 'var(--paper-raised)', border: 'var(--border-hairline)' }}
            >
              <p className="text-2xl mb-1" aria-hidden="true">📖</p>
              <p className="font-semibold text-sm" style={{ color: 'var(--ink-900)' }}>Scripture (Optional)</p>
              <p className="text-xs mt-1" style={{ color: 'var(--ink-500)' }}>Weekly reflections if you want them.</p>
            </li>
          </ul>
        </div>
      </section>

      <DisclaimerFooter />
    </main>
  )
}
