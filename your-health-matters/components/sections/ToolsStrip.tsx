import Link from 'next/link'

/**
 * Homepage Tools strip.
 *
 * Sits between the Hero's closing byline and the featured-guides section.
 * Four interactive references that turn the static guides into something
 * the visitor can actually use today. Visual rhythm matches the doorway
 * cards above and the guide cards below.
 */

interface ToolCard {
  href: string
  title: string
  body: string
  cta: string
  Icon: React.ComponentType<{ className?: string }>
  accent: string
}

const TOOLS: ToolCard[] = [
  {
    href: '/systems',
    title: 'The 18 Organ Systems',
    body: 'Every system in the body, color-coded, with the foods and herbs that support each one.',
    cta: 'Explore the systems',
    Icon: SystemsIcon,
    accent: 'var(--zone-peak)',
  },
  {
    href: '/insulin-zones',
    title: 'Insulin Time Zones',
    body: "An interactive timeline of your body's four daily energy windows.",
    cta: 'Open the zones',
    Icon: ClockIcon,
    accent: 'var(--zone-declining)',
  },
  {
    href: '/shopping-list',
    title: 'Shopping List Generator',
    body: 'Pick an organ system or a protocol. Get a printable list.',
    cta: 'Generate a list',
    Icon: ListIcon,
    accent: 'var(--system-gut)',
  },
  {
    href: '/sleep-guide',
    title: 'Sleep Guide',
    body: 'What the body does overnight, and how to support each stage.',
    cta: 'Open the guide',
    Icon: MoonIcon,
    accent: 'var(--zone-closed)',
  },
]

export default function ToolsStrip() {
  return (
    <section
      className="py-20 px-4 sm:px-6"
      style={{ backgroundColor: 'var(--paper)' }}
      aria-labelledby="tools-strip-heading"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12 max-w-2xl mx-auto">
          <h2
            id="tools-strip-heading"
            className="font-serif text-3xl sm:text-4xl mb-3"
            style={{ color: 'var(--ink-900)' }}
          >
            Tools to support the work.
          </h2>
          <p
            className="italic leading-relaxed"
            style={{ color: 'var(--ink-500)', fontSize: '1.05rem' }}
          >
            Interactive references that turn the guides into something you can use.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {TOOLS.map((t) => (
            <ToolCardView key={t.href} tool={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ToolCardView({ tool }: { tool: ToolCard }) {
  const { href, title, body, cta, Icon, accent } = tool
  return (
    <Link
      href={href}
      className="group block h-full rounded-2xl p-6 transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      style={{
        backgroundColor: 'var(--paper-raised)',
        border: 'var(--border-hairline)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      <div
        className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4"
        style={{ backgroundColor: accent, color: 'white' }}
        aria-hidden="true"
      >
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="font-serif text-lg mb-2 leading-tight" style={{ color: 'var(--ink-900)' }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--ink-700)' }}>
        {body}
      </p>
      <p
        className="inline-flex items-center gap-1 text-sm font-semibold"
        style={{ color: accent }}
      >
        {cta}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </p>
    </Link>
  )
}

// ─────────────────────────────────────────────────────────────
// Inline SVG icons. No emoji on tool cards (warm but not casual).
// ─────────────────────────────────────────────────────────────

function SystemsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15 14" />
    </svg>
  )
}

function ListIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="8" y1="6" x2="20" y2="6" />
      <line x1="8" y1="12" x2="20" y2="12" />
      <line x1="8" y1="18" x2="20" y2="18" />
      <circle cx="4" cy="6" r="1.2" fill="currentColor" />
      <circle cx="4" cy="12" r="1.2" fill="currentColor" />
      <circle cx="4" cy="18" r="1.2" fill="currentColor" />
    </svg>
  )
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
