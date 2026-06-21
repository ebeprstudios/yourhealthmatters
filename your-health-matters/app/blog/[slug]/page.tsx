import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Nav from '@/components/layout/Nav'
import DisclaimerFooter from '@/components/ui/DisclaimerFooter'
import { articles, getArticleBySlug } from '@/lib/data'
import BodyOfBitternessContent from '@/app/blog/articles/the-body-of-bitterness'

const MIND = {
  ink: '#1f1b2e',
  inkSoft: '#4a4560',
  accent: '#3d2a5a',
  accentSoft: '#6b5b95',
  highlightBg: '#ede6f7',
  cardBorder: '#d8d0e8',
}

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: `${article.title} | Your Health Guide`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
  }
}

function formatDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function ArticleContent({ slug }: { slug: string }) {
  if (slug === 'the-body-of-bitterness') {
    return <BodyOfBitternessContent />
  }
  return null
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fbf9fd' }}>
      <Nav />

      {/* Back link */}
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 pt-28 pb-6">
        <a
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium"
          style={{ color: article.colorHex }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            style={{ flexShrink: 0 }}
          >
            <path
              d="M10 12L6 8l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All articles
        </a>
      </div>

      {/* Article header */}
      <header
        className="pb-10"
        style={{ backgroundColor: MIND.highlightBg }}
      >
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 pt-8">
          {/* Doorway eyebrow */}
          <p
            className="text-xs font-bold tracking-[0.18em] uppercase mb-3"
            style={{ color: article.colorHex }}
          >
            {article.doorway}
          </p>

          {/* Title */}
          <h1
            className="font-serif text-3xl sm:text-4xl leading-tight mb-3"
            style={{ color: MIND.ink }}
          >
            {article.title}
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg leading-relaxed mb-5"
            style={{ color: MIND.inkSoft }}
          >
            {article.subtitle}
          </p>

          {/* Author + date */}
          <div
            className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-5 pb-5 text-sm"
            style={{ borderBottom: `1px solid ${MIND.cardBorder}`, color: MIND.inkSoft }}
          >
            <span className="font-medium" style={{ color: MIND.ink }}>
              {article.author}
            </span>
            <span>{formatDate(article.date)}</span>
          </div>

          {/* Tag pills */}
          <div className="flex flex-wrap gap-1.5">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: '#fff',
                  color: article.colorHex,
                  border: `1px solid ${article.colorHex}`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="max-w-[720px] mx-auto px-4 sm:px-6 py-12">
        <div
          className="space-y-6 text-base leading-relaxed"
          style={{
            color: MIND.ink,
          }}
        >
          <style>{`
            .article-body h2 {
              font-family: var(--font-playfair), Georgia, serif;
              font-size: 1.5rem;
              line-height: 1.3;
              margin-top: 2.5rem;
              margin-bottom: 0.75rem;
              color: ${MIND.ink};
            }
            .article-body h3 {
              font-family: var(--font-playfair), Georgia, serif;
              font-size: 1.2rem;
              line-height: 1.35;
              margin-top: 2rem;
              margin-bottom: 0.5rem;
              color: ${MIND.ink};
            }
            .article-body p {
              margin-bottom: 1rem;
              line-height: 1.75;
            }
            .article-body blockquote {
              border-left: 4px solid ${article.colorHex};
              padding-left: 1.25rem;
              margin: 1.5rem 0;
              color: ${MIND.inkSoft};
            }
            .article-body blockquote p {
              font-size: 0.9rem;
              line-height: 1.6;
            }
            .article-body a {
              color: ${article.colorHex};
              text-decoration: underline;
            }
            .article-body a:hover {
              opacity: 0.8;
            }
            .article-body ul {
              padding-left: 1.5rem;
              list-style-type: disc;
            }
            .article-body ul li {
              margin-bottom: 0.5rem;
              font-size: 0.95rem;
            }
            .article-body hr {
              margin: 2rem 0;
              border: none;
              border-top: 1px solid ${MIND.cardBorder};
            }
            .article-body em {
              font-style: italic;
            }
            .article-body strong {
              font-weight: 600;
              color: ${MIND.ink};
            }
          `}</style>
          <div className="article-body">
            <ArticleContent slug={article.slug} />
          </div>
        </div>

        {/* Disclaimer box */}
        <div
          className="mt-12 rounded-xl p-5 text-sm leading-relaxed"
          style={{
            backgroundColor: MIND.highlightBg,
            border: `1px solid ${MIND.cardBorder}`,
            color: MIND.inkSoft,
          }}
        >
          <p className="font-semibold mb-1" style={{ color: MIND.ink }}>
            A note from Dr. Holloway
          </p>
          <p>{article.disclaimer}</p>
        </div>
      </article>

      <DisclaimerFooter />
    </main>
  )
}
