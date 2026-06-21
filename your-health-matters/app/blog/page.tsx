import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import DisclaimerFooter from '@/components/ui/DisclaimerFooter'
import { articles, type Article } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Blog | Your Health Guide',
  description:
    'Long-form articles from Dr. Vera Holloway on the physiology behind health — the research, the mechanisms, and what to actually do about it.',
}

const MIND = {
  ink: '#1f1b2e',
  inkSoft: '#4a4560',
  accent: '#3d2a5a',
  accentSoft: '#6b5b95',
  highlightBg: '#ede6f7',
  cardBg: '#f6f3fb',
  cardBorder: '#d8d0e8',
}

function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fbf9fd' }}>
      <Nav />

      {/* Header band */}
      <header className="pt-28 pb-14" style={{ backgroundColor: MIND.highlightBg }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p
            className="text-xs font-bold tracking-[0.18em] uppercase mb-3"
            style={{ color: MIND.accentSoft }}
          >
            The Blog
          </p>
          <h1
            className="font-serif text-4xl sm:text-5xl mb-4 leading-tight"
            style={{ color: MIND.ink }}
          >
            Teaching by the mechanism
          </h1>
          <p
            className="text-lg leading-relaxed max-w-3xl"
            style={{ color: MIND.inkSoft }}
          >
            Long-form articles from Dr. Vera Holloway: the physiology, the research, and the
            practice.
          </p>
        </div>
      </header>

      {/* Article grid */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {articles.length === 0 ? (
            <div
              className="rounded-2xl p-10 text-center"
              style={{
                backgroundColor: MIND.cardBg,
                border: `1.5px dashed ${MIND.cardBorder}`,
              }}
            >
              <p
                className="font-serif text-xl mb-2"
                style={{ color: MIND.accent }}
              >
                Articles coming soon
              </p>
              <p className="text-sm leading-relaxed" style={{ color: MIND.inkSoft }}>
                The first long-form pieces are being prepared. Check back shortly.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>

      <DisclaimerFooter />
    </main>
  )
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <article
      className="rounded-2xl flex flex-col"
      style={{
        backgroundColor: MIND.cardBg,
        border: `1px solid ${MIND.cardBorder}`,
        borderLeft: `4px solid ${article.colorHex}`,
      }}
    >
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Tag pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: MIND.highlightBg,
                color: article.colorHex,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2
          className="font-serif text-xl leading-snug mb-2"
          style={{ color: MIND.ink }}
        >
          {article.title}
        </h2>

        {/* Subtitle */}
        <p
          className="text-sm font-medium mb-3"
          style={{ color: article.colorHex }}
        >
          {article.subtitle}
        </p>

        {/* Excerpt — 2-line clamp */}
        <p
          className="text-sm leading-relaxed mb-5 flex-1"
          style={{
            color: MIND.inkSoft,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {article.excerpt}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between gap-3 pt-4" style={{ borderTop: `1px solid ${MIND.cardBorder}` }}>
          <div>
            <p className="text-xs font-medium" style={{ color: MIND.ink }}>
              {article.author}
            </p>
            <p className="text-xs" style={{ color: MIND.inkSoft }}>
              {formatDate(article.date)}
            </p>
          </div>
          <a
            href={`/blog/${article.slug}`}
            className="text-sm font-medium whitespace-nowrap"
            style={{ color: article.colorHex }}
          >
            Read the article &rarr;
          </a>
        </div>
      </div>
    </article>
  )
}
