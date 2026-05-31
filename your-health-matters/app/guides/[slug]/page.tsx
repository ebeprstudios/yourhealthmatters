import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import DrVeraChat from '@/components/chat/DrVeraChat'
import DisclaimerFooter from '@/components/ui/DisclaimerFooter'
import GuideDownloadGate from '@/components/guides/GuideDownloadGate'
import { guides, getGuideBySlug } from '@/lib/data'
import type { Guide } from '@/lib/types'

interface Props { params: { slug: string } }

const tierLabel: Record<Guide['tier'], string> = {
  foundational: 'Foundational',
  specialty: 'Specialty',
  advanced: 'Advanced',
  devotional: 'Devotional',
}

export async function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug)
  if (!guide) return { title: 'Guide Not Found' }
  return {
    title: `${guide.title} | Your Health Guide`,
    description: guide.description,
  }
}

export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug)
  if (!guide) return notFound()

  const ordered = guides.filter(g => g.tier !== 'devotional' || guide.tier === 'devotional')
  const currentIndex = ordered.findIndex(g => g.slug === guide.slug)
  const prev = currentIndex > 0 ? ordered[currentIndex - 1] : null
  const next = currentIndex >= 0 && currentIndex < ordered.length - 1 ? ordered[currentIndex + 1] : null
  const accent = guide.accentColor || '#085041'

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--paper)' }}>
      <Nav />

      {/* Hero */}
      <header className="pt-24 pb-16 relative overflow-hidden" style={{ backgroundColor: accent }}>
        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />
        <div className="absolute -left-10 bottom-0 w-40 h-40 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/60 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">{guide.title}</span>
          </nav>

          <div className="flex items-start gap-4">
            <span className="text-5xl" aria-hidden="true">{guide.icon ?? '📘'}</span>
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                {guide.badge && (
                  <span className="text-xs font-medium bg-white/20 text-white px-2.5 py-1 rounded-full">
                    {guide.badge}
                  </span>
                )}
                <span className="text-xs text-white/60">{tierLabel[guide.tier]}</span>
                {guide.comingSoon && (
                  <span className="text-[10px] uppercase tracking-wider bg-white/95 text-stone-800 px-2 py-0.5 rounded-full font-semibold">
                    Coming Soon
                  </span>
                )}
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                {guide.title}
              </h1>
              {guide.subtitle && (
                <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                  {guide.subtitle}
                </p>
              )}
            </div>
          </div>

          {guide.keyFacts && guide.keyFacts.length > 0 && (
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 max-w-2xl">
              {guide.keyFacts.map((fact, i) => (
                <div key={i} className="flex items-start gap-2 bg-white/10 rounded-xl px-4 py-2.5">
                  <span className="mt-0.5 text-white/80" aria-hidden="true">✦</span>
                  <span className="text-white/90 text-sm">{fact}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <GuideDownloadGate guide={guide} variant="detail" />
            {guide.companionPdfPath && (
              <a
                href={guide.companionPdfPath}
                download
                className="inline-flex items-center gap-2 bg-white/15 text-white font-medium px-5 py-2.5 rounded-full hover:bg-white/25 transition-all text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Quick Reference PDF
              </a>
            )}
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 bg-white/15 text-white font-medium px-5 py-2.5 rounded-full hover:bg-white/25 transition-all text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              ← All Guides
            </Link>
          </div>
        </div>
      </header>

      {/* Content + Sidebar layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          <article className="lg:col-span-2 space-y-10">
            {guide.sections && guide.sections.length > 0 ? (
              guide.sections.map((section, i) => (
                <section
                  key={i}
                  className="rounded-2xl p-6 sm:p-8"
                  style={{
                    backgroundColor: 'var(--paper-raised)',
                    border: 'var(--border-hairline)',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <h2 className="font-serif text-2xl mb-5 pb-3 border-b" style={{ color: 'var(--ink-900)', borderColor: 'var(--ink-100)' }}>
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((para, j) => (
                      <p key={j} className="leading-relaxed" style={{ color: 'var(--ink-700)' }}>
                        {para}
                      </p>
                    ))}
                  </div>
                </section>
              ))
            ) : (
              <section
                className="rounded-2xl p-6 sm:p-8"
                style={{
                  backgroundColor: 'var(--paper-raised)',
                  border: 'var(--border-hairline)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <h2 className="font-serif text-2xl mb-5" style={{ color: 'var(--ink-900)' }}>
                  About this guide
                </h2>
                <p className="leading-relaxed" style={{ color: 'var(--ink-700)' }}>
                  {guide.description}
                </p>
                {guide.comingSoon && (
                  <p className="mt-4 text-sm italic" style={{ color: 'var(--ink-500)' }}>
                    The full teaching content for this guide is on the way. The PDF will publish here when it is ready.
                  </p>
                )}
              </section>
            )}

            {/* Practical First Step block, required by Section 5 of the brand prompt */}
            <section
              className="rounded-2xl p-6 sm:p-8"
              style={{
                backgroundColor: 'var(--callout-firststep, var(--paper-sunk))',
                border: 'var(--border-hairline)',
              }}
            >
              <h3 className="font-serif text-xl mb-3" style={{ color: 'var(--ink-900)' }}>
                Practical First Step
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--ink-700)' }}>
                Pick one habit from this guide that you can begin today. One small, repeatable change, practiced for seven days, teaches the body more than a perfect protocol followed for one.
              </p>
            </section>

            {/* Navigation between guides */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {prev ? (
                <Link
                  href={`/guides/${prev.slug}`}
                  className="rounded-xl p-4 transition-colors group"
                  style={{ backgroundColor: 'var(--paper-raised)', border: 'var(--border-hairline)' }}
                >
                  <p className="text-xs mb-1" style={{ color: 'var(--ink-500)' }}>← Previous</p>
                  <p className="text-sm font-semibold" style={{ color: 'var(--ink-900)' }}>
                    {prev.title}
                  </p>
                </Link>
              ) : <div />}
              {next ? (
                <Link
                  href={`/guides/${next.slug}`}
                  className="rounded-xl p-4 transition-colors group text-right ml-auto w-full"
                  style={{ backgroundColor: 'var(--paper-raised)', border: 'var(--border-hairline)' }}
                >
                  <p className="text-xs mb-1" style={{ color: 'var(--ink-500)' }}>Next →</p>
                  <p className="text-sm font-semibold" style={{ color: 'var(--ink-900)' }}>
                    {next.title}
                  </p>
                </Link>
              ) : <div />}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-20">
              <div
                className="rounded-2xl overflow-hidden mb-6"
                style={{ backgroundColor: 'var(--paper-raised)', border: 'var(--border-hairline)', boxShadow: 'var(--shadow-card)' }}
              >
                <div className="px-4 py-3" style={{ backgroundColor: accent }}>
                  <p className="text-white font-semibold text-sm font-serif">
                    🌿 Ask Dr. Vera about this guide
                  </p>
                  <p className="text-white/70 text-xs mt-0.5">
                    Questions scoped to: {guide.title}
                  </p>
                </div>
                <DrVeraChat compact pageScope={guide.chatScope} />
              </div>

              {!guide.comingSoon && (
                <div
                  className="rounded-2xl p-5 text-white text-center"
                  style={{ backgroundColor: accent }}
                >
                  <span className="text-3xl block mb-2" aria-hidden="true">{guide.icon ?? '📘'}</span>
                  <p className="font-serif font-bold text-lg mb-1">Printable PDF</p>
                  <p className="text-white/70 text-xs mb-4">
                    {guide.gated
                      ? 'Free with email, for your kitchen counter or to share with your physician'
                      : 'Download for your kitchen counter or to share with your physician'}
                  </p>
                  <GuideDownloadGate guide={guide} variant="detail" />
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      <DisclaimerFooter />

      <DrVeraChat />
    </main>
  )
}
