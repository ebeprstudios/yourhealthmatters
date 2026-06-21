/**
 * Your Health Guide — Blog article metadata
 * Phase 2B: /blog section
 */

export interface Article {
  slug: string
  title: string
  subtitle: string
  author: string
  date: string          // ISO string "2026-05-26"
  excerpt: string
  tags: string[]
  section: 'mind-as-medicine' | 'food-as-medicine'
  doorway: 'Mind as Medicine' | 'Food as Medicine'
  colorHex: string      // accent color for this doorway
  disclaimer: string
}

export const articles: Article[] = [
  {
    slug: 'the-body-of-bitterness',
    title: 'The Body of Bitterness',
    subtitle: 'What Resentment Does Inside You, and What Letting Go Actually Changes',
    author: 'Dr. Vera Holloway',
    date: '2026-05-26',
    excerpt:
      "Resentment isn't just a feeling you carry. It's a physiological state your body pays for, every hour you hold onto it. Here's what the research shows about how forgiveness measurably changes the body, not just the mind.",
    tags: ['mind-body', 'forgiveness', 'nervous-system', 'inflammation', 'stress', 'research'],
    section: 'mind-as-medicine',
    doorway: 'Mind as Medicine',
    colorHex: '#6b5b95',
    disclaimer: 'Educational only. Not a medical directive. Always consult your physician.',
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getArticlesBySection(section: string): Article[] {
  return articles.filter((a) => a.section === section)
}
