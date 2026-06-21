import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import NewsletterForm from '@/components/ui/NewsletterForm'
import DisclaimerFooter from '@/components/ui/DisclaimerFooter'

export const metadata: Metadata = {
  title: 'Subscribe | Your Health Guide',
  description:
    'Every week: one mechanism-driven teaching from Your Health Guide, covering food as medicine, body systems, and protocols drawn from West African, Ayurvedic, TCM, Mediterranean, Caribbean, and Amazonian traditions. Scripture reflections are an optional second subscription.',
}

export default function SubscribePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--paper)' }}>
      <Nav />

      {/* 1. Hero band */}
      <section className="pt-28 pb-20" style={{ backgroundColor: 'var(--paper-sunk)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'var(--zone-peak)' }}
          >
            Stay Connected
          </span>
          <h1
            className="font-serif text-4xl sm:text-5xl mb-6 leading-tight"
            style={{ color: 'var(--ink-900)' }}
          >
            One teaching a week. Yours to keep.
          </h1>
          <p className="leading-relaxed text-lg mb-12" style={{ color: 'var(--ink-700)' }}>
            Dr. Vera sends one mechanism-driven lesson and one practical first step every week,
            drawn from the holistic traditions and clinical research behind this platform. No
            filler. No noise. Just the mechanism and the move.
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
        </div>
      </section>

      {/* 2. What's inside */}
      <section className="py-20" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2
              className="font-serif text-3xl sm:text-4xl"
              style={{ color: 'var(--ink-900)' }}
            >
              What arrives in your inbox
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: '🧠',
                title: 'The Mechanism',
                body: "Every email opens with the 'why': what your body is actually doing, explained at the cellular or systemic level.",
              },
              {
                icon: '🌿',
                title: 'The Move',
                body: 'One actionable protocol. A food to add, a timing shift, a practice to try. One thing, this week.',
              },
              {
                icon: '📖',
                title: 'Scripture (Optional)',
                body: 'A second weekly email is available for readers who want a devotional layer: the same teaching, rooted in Biblical wisdom. You choose during signup.',
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-6 flex flex-col"
                style={{
                  backgroundColor: 'var(--paper-raised)',
                  border: 'var(--border-hairline)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <p className="text-3xl mb-4" aria-hidden="true">{icon}</p>
                <p
                  className="font-semibold text-base mb-2"
                  style={{ color: 'var(--ink-900)' }}
                >
                  {title}
                </p>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: 'var(--ink-500)' }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Sample week preview */}
      <section className="py-20" style={{ backgroundColor: 'var(--paper-sunk)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2
              className="font-serif text-3xl sm:text-4xl"
              style={{ color: 'var(--ink-900)' }}
            >
              A sample week
            </h2>
          </div>

          {/* Email preview card */}
          <div
            className="max-w-lg mx-auto rounded-2xl overflow-hidden"
            style={{
              backgroundColor: 'white',
              boxShadow: 'var(--shadow-card)',
              border: 'var(--border-hairline)',
            }}
          >
            {/* Email header bar */}
            <div
              className="px-6 py-4"
              style={{ borderBottom: 'var(--border-hairline)' }}
            >
              <p
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: 'var(--zone-peak)' }}
              >
                Your Health Guide™
              </p>
            </div>

            {/* Email body */}
            <div className="px-6 py-8">
              <p
                className="font-serif text-xl mb-5 leading-snug"
                style={{ color: 'var(--ink-900)' }}
              >
                Why your body holds cortisol longer than it should
              </p>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: 'var(--ink-700)' }}
              >
                This week: the HPA axis. When your stress response stays activated longer than
                the event that triggered it, the reason is usually one of three things...
              </p>
              <span
                className="text-sm font-semibold"
                style={{ color: 'var(--zone-peak)' }}
                aria-hidden="true"
              >
                Read more →
              </span>
            </div>

            {/* Email footer bar */}
            <div
              className="px-6 py-3"
              style={{
                borderTop: 'var(--border-hairline)',
                backgroundColor: 'var(--paper-sunk)',
              }}
            >
              <p className="text-xs" style={{ color: 'var(--ink-500)' }}>
                Your Health Guide · Educational content only · Unsubscribe at any time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="py-20" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2
              className="font-serif text-3xl sm:text-4xl"
              style={{ color: 'var(--ink-900)' }}
            >
              Common questions
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                q: 'How often will I hear from you?',
                a: 'Once a week. Two emails maximum if you opt into the scripture stream — always separate, always optional.',
              },
              {
                q: 'Is this medical advice?',
                a: 'No. All content is educational. Dr. Vera is a teaching persona built on holistic nutrition research. Always consult your physician for medical decisions.',
              },
              {
                q: 'Can I unsubscribe?',
                a: "Any time, one click. You'll never be re-added without opting in again.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'var(--paper-raised)',
                  border: 'var(--border-hairline)',
                }}
              >
                <p
                  className="font-semibold mb-2"
                  style={{ color: 'var(--ink-900)' }}
                >
                  {q}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--ink-700)' }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: 'var(--zone-peak)', color: 'white' }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-white mb-4">
            Ready to start?
          </h2>
          <p className="text-white/80 leading-relaxed mb-10 max-w-md mx-auto">
            Join readers who get one teaching a week — the mechanism and the move, nothing more.
          </p>
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.25)',
            }}
          >
            <NewsletterForm variant="section" />
          </div>
        </div>
      </section>

      <DisclaimerFooter />
    </main>
  )
}
