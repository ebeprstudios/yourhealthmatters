# Articles — Phase 2B blog content

This folder stages article-format content for the Phase 2B `/blog`
section. MDX files dropped here are NOT yet surfaced anywhere in the
public site; they are ready for the Phase 2B wiring.

## Current articles

- `the-body-of-bitterness.mdx` — Dr. Vera Holloway. The physiology of
  resentment + the body's response to forgiveness practice. Tagged:
  mind-body, forgiveness, nervous-system, inflammation, stress,
  research. Status: ready for Phase 2B blog.

## How Phase 2B will pick these up

When the blog ships (Phase 2B), the article frontmatter (title, slug,
section, author, date, excerpt, tags, disclaimer) is parsed by a
`lib/data/articles.ts` loader. Articles are categorized by the
`section` field and surfaced under `/blog/[slug]`.

Until then: do not import these files from any page. They are staged
content only.
