import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import DisclaimerFooter from '@/components/ui/DisclaimerFooter'
import DrVeraChat from '@/components/chat/DrVeraChat'

export const metadata: Metadata = {
  title: 'Root Work | Mind as Medicine | Your Health Guide',
  description:
    'Root Work surfaces the beliefs, verdicts, and inherited patterns that shape how the nervous system responds — before food, before protocol, before anything else can fully land.',
}

// Mind tab palette — mirrors /mind-as-medicine
const MIND = {
  ink: '#1f1b2e',
  inkSoft: '#4a4560',
  accent: '#3d2a5a',
  accentSoft: '#6b5b95',
  cardBg: '#f6f3fb',
  cardBorder: '#d8d0e8',
  highlightBg: '#ede6f7',
}

const PIECES = [
  {
    href: '/root-work/the-inner-courtroom',
    icon: '⚖️',
    title: 'The Inner Courtroom',
    badge: 'Teaching',
    excerpt:
      'How the mind forms a courtroom and renders secret verdicts about your worth — judge, prosecutor, and jury — and what breaks the cycle.',
    hooks: [
      'The verdict was rendered before the evidence came in',
      "Some of what you've been carrying did not belong to you",
    ],
  },
]

export default function RootWorkPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fbf9fd' }}>
      <Nav />

      {/* Hero band */}
      <header className="pt-28 pb-14" style={{ backgroundColor: MIND.highlightBg }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-5" style={{ color: MIND.accentSoft }}>
            <Link href="/" className="hover:underline">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/mind-as-medicine" className="hover:underline">Mind as Medicine</Link>
            <span aria-hidden="true">/</span>
            <span style={{ color: MIND.accent }}>Root Work</span>
          </div>

          <p className="text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: MIND.accentSoft }}>
            Mind as Medicine · Root Work
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl mb-4 leading-tight" style={{ color: MIND.ink }}>
            The work beneath the loop
          </h1>
          <p className="text-lg leading-relaxed max-w-3xl" style={{ color: MIND.inkSoft }}>
            Root Work surfaces the beliefs, verdicts, and inherited patterns that shape how the
            nervous system responds — before food, before protocol, before anything else can fully
            land. Where the stations name the mechanics of the loop, Root Work examines the meaning
            the loop was built to protect.
          </p>

          {/* Key principles */}
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-2xl">
            {[
              'The wound is the meaning attached to the event — not the event itself',
              'A verdict made in your mind was never a verdict they gave you',
            ].map((fact) => (
              <div
                key={fact}
                className="flex items-start gap-2 rounded-xl px-4 py-2.5"
                style={{ backgroundColor: '#fbfafd', border: `1px solid ${MIND.cardBorder}` }}
              >
                <span aria-hidden="true" style={{ color: MIND.accent }}>✦</span>
                <span className="text-sm" style={{ color: MIND.inkSoft }}>{fact}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Pieces */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.18em] uppercase mb-2" style={{ color: MIND.accentSoft }}>
              Teachings
            </p>
            <p className="text-sm max-w-lg leading-relaxed" style={{ color: MIND.inkSoft }}>
              Each piece surfaces a different layer. Read in any order — or follow the thread from the
              Mind as Medicine stations into Root Work.
            </p>
          </div>

          <div className="space-y-4">
            {PIECES.map((piece) => (
              <Link
                key={piece.href}
                href={piece.href}
                className="block rounded-2xl p-6 sm:p-7 transition-all hover:shadow-md group"
                style={{
                  backgroundColor: MIND.cardBg,
                  border: `1px solid ${MIND.cardBorder}`,
                  borderLeft: `4px solid ${MIND.accent}`,
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0" aria-hidden="true">{piece.icon}</span>
                  <div className="flex-1 min-w-0">
                    <span
                      className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full mb-2"
                      style={{ backgroundColor: MIND.highlightBg, color: MIND.accent }}
                    >
                      {piece.badge}
                    </span>
                    <h2 className="font-serif text-xl mb-2 leading-tight" style={{ color: MIND.ink }}>
                      {piece.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: MIND.inkSoft }}>
                      {piece.excerpt}
                    </p>
                    <div className="space-y-1">
                      {piece.hooks.map((hook) => (
                        <div key={hook} className="flex items-start gap-2">
                          <span aria-hidden="true" className="text-xs mt-0.5 flex-shrink-0" style={{ color: MIND.accentSoft }}>✦</span>
                          <span className="text-xs" style={{ color: MIND.inkSoft }}>{hook}</span>
                        </div>
                      ))}
                    </div>
                    <span className="inline-block mt-4 text-sm font-medium underline" style={{ color: MIND.accent }}>
                      Open the teaching →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-xs leading-relaxed max-w-xl" style={{ color: MIND.inkSoft }}>
            Educational only — not medical, psychological, or pastoral counsel.
          </p>
        </div>
      </section>

      <DisclaimerFooter />
      <DrVeraChat />
    </main>
  )
}
