import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import DrVeraChat from '@/components/chat/DrVeraChat'
import { guides, getGuideBySlug } from '@/lib/guides'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return guides.map(g => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug)
  if (!guide) return { title: 'Guide Not Found' }
  return {
    title: `${guide.title} | Erica Ehiwe`,
    description: guide.description,
  }
}

export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug)
  if (!guide) notFound()

  const currentIndex = guides.findIndex(g => g.slug === guide.slug)
  const prev = currentIndex > 0 ? guides[currentIndex - 1] : null
  const next = currentIndex < guides.length - 1 ? guides[currentIndex + 1] : null

  return (
    <main className="min-h-screen bg-cream">
      <Nav />

      {/* Hero */}
      <header className="bg-forest-900 pt-24 pb-16 relative overflow-hidden" style={{ backgroundColor: guide.accentColor }}>
        {/* Decorative circles */}
        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -left-10 bottom-0 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#guides" className="hover:text-white transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-white">{guide.title}</span>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-5xl">{guide.icon}</span>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-medium bg-white/20 text-white px-2.5 py-1 rounded-full">
                  {guide.badge}
                </span>
                <span className="text-xs text-white/60">{guide.category}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
                {guide.title}
              </h1>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                {guide.subtitle}
              </p>
            </div>
          </div>

          {/* Key facts */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
            {guide.keyFacts.map((fact, i) => (
              <div key={i} className="flex items-start gap-2 bg-white/10 rounded-xl px-4 py-2.5">
                <span className="text-gold-400 mt-0.5">✦</span>
                <span className="text-white/90 text-sm">{fact}</span>
              </div>
            ))}
          </div>

          {/* Download button */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`/pdfs/${guide.pdfFile}`}
              download
              className="inline-flex items-center gap-2 bg-white text-forest-900 font-semibold px-5 py-2.5 rounded-full hover:bg-cream transition-all hover:scale-105 active:scale-95 text-sm shadow-lg"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Printable PDF
            </a>
            <Link
              href="/#guides"
              className="inline-flex items-center gap-2 bg-white/15 text-white font-medium px-5 py-2.5 rounded-full hover:bg-white/25 transition-all text-sm"
            >
              ← All Guides
            </Link>
          </div>
        </div>
      </header>

      {/* Content + Sidebar layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <article className="lg:col-span-2 space-y-10">
            {guide.sections.map((section, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-100">
                <h2 className="font-serif text-2xl text-forest-900 mb-5 pb-3 border-b border-forest-100">
                  {section.heading}
                </h2>
                <div className="prose-vera space-y-4">
                  {section.content.map((para, j) => (
                    <p key={j} className="text-stone-600 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Navigation between guides */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {prev ? (
                <Link
                  href={`/guides/${prev.slug}`}
                  className="bg-white rounded-xl p-4 border border-stone-100 hover:border-forest-300 transition-colors group"
                >
                  <p className="text-xs text-stone-400 mb-1">← Previous</p>
                  <p className="text-sm font-semibold text-stone-700 group-hover:text-forest-900 transition-colors">
                    {prev.title}
                  </p>
                </Link>
              ) : <div />}
              {next ? (
                <Link
                  href={`/guides/${next.slug}`}
                  className="bg-white rounded-xl p-4 border border-stone-100 hover:border-forest-300 transition-colors group text-right ml-auto w-full"
                >
                  <p className="text-xs text-stone-400 mb-1">Next →</p>
                  <p className="text-sm font-semibold text-stone-700 group-hover:text-forest-900 transition-colors">
                    {next.title}
                  </p>
                </Link>
              ) : <div />}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Sticky Dr. Vera chat */}
            <div className="sticky top-20">
              <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden mb-6">
                <div className="bg-forest-900 px-4 py-3">
                  <p className="text-white font-semibold text-sm font-serif">
                    🌿 Ask Dr. Vera about this guide
                  </p>
                  <p className="text-forest-300 text-xs mt-0.5">
                    Questions scoped to: {guide.title}
                  </p>
                </div>
                <div className="p-0">
                  <DrVeraChat compact pageScope={guide.chatScope} />
                </div>
              </div>

              {/* Download card */}
              <div
                className="rounded-2xl p-5 text-white text-center" style={{ backgroundColor: guide.accentColor }}
              >
                <span className="text-3xl block mb-2">{guide.icon}</span>
                <p className="font-serif font-bold text-lg mb-1">Printable PDF</p>
                <p className="text-white/70 text-xs mb-4">
                  Download for your kitchen counter or to share with your physician
                </p>
                <a
                  href={`/pdfs/${guide.pdfFile}`}
                  download
                  className="inline-flex items-center gap-2 bg-white text-forest-900 font-semibold px-5 py-2.5 rounded-full hover:bg-cream transition-all text-sm w-full justify-center"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related guides */}
      <section className="bg-forest-900/5 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="font-serif text-2xl text-forest-900 mb-8 text-center">Explore More Guides</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {guides
              .filter(g => g.slug !== guide.slug)
              .slice(0, 4)
              .map(g => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="bg-white rounded-xl p-4 border border-stone-100 hover:border-forest-300 hover:shadow-md transition-all group"
                >
                  <span className="text-2xl block mb-2">{g.icon}</span>
                  <p className="font-semibold text-stone-800 text-sm group-hover:text-forest-900 transition-colors leading-tight">
                    {g.title}
                  </p>
                  <p className="text-stone-400 text-xs mt-1">{g.category}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
            <footer className="bg-forest-950 text-forest-400 text-center py-8 px-4">
        <p className="text-sm mb-1">© {new Date().getFullYear()} Erica Ehiwe · All Rights Reserved</p>
        <p className="text-xs text-forest-700 mb-3">Holistic Health Research &amp; Education</p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-forest-700 mb-2">
          <a href="/legal" className="hover:text-forest-400 transition-colors underline">Legal &amp; Copyright</a>
          <span>·</span>
          <a href="/legal#medical" className="hover:text-forest-400 transition-colors underline">Medical Disclaimer</a>
        </div>
        <p className="text-xs text-forest-800 max-w-xl mx-auto">Educational only. Not medical advice. Consult your physician before significant changes.</p>
      </footer>

      {/* Floating Dr. Vera */}
      <DrVeraChat />
    </main>
  )
}
