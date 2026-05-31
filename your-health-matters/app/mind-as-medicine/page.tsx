import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import DisclaimerFooter from '@/components/ui/DisclaimerFooter'
import GuideDownloadGate from '@/components/guides/GuideDownloadGate'
import LoopDiagram from '@/components/mind/LoopDiagram'
import { STATIONS, getGuidesByStation } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Mind as Medicine | Your Health Guide',
  description:
    'The loop your nervous system runs every day — perception, language, binary thinking, stored charge, set-point — and how to retrain it at any station.',
}

// Mind tab palette
const MIND = {
  ink: '#1f1b2e',
  inkSoft: '#4a4560',
  accent: '#3d2a5a',
  accentSoft: '#6b5b95',
  cardBg: '#f6f3fb',
  cardBorder: '#d8d0e8',
  highlightBg: '#ede6f7',
  gold: '#a88a3d',
}

export default function MindAsMedicinePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fbf9fd' }}>
      <Nav />

      {/* Hero band */}
      <header className="pt-28 pb-14" style={{ backgroundColor: MIND.highlightBg }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-bold tracking-[0.18em] uppercase mb-3" style={{ color: MIND.accentSoft }}>
            Mind as Medicine
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl mb-4 leading-tight" style={{ color: MIND.ink }}>
            The loop your nervous system runs — and how to retrain it at every station
          </h1>
          <p className="text-lg leading-relaxed max-w-3xl" style={{ color: MIND.inkSoft }}>
            Every mind-wing guide on this site teaches one truth at a different point along the same circuit. A thought arrives, the mind sorts it, language wraps it, the body answers it, the answer is stored, the storage becomes the default — and the default decides what the next thought becomes. Interrupt the loop anywhere and the wheel slows. Train the set-point and it reorients entirely. This is the unified architecture. The guides below are the stations.
          </p>
        </div>
      </header>

      {/* Loop diagram */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: '#fbf9fd' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <LoopDiagram />
        </div>
      </section>

      {/* Station-organized guide cards */}
      <section className="py-10" style={{ backgroundColor: '#fbf9fd' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-14">
          {STATIONS.map((station) => {
            const guides = getGuidesByStation(station.number)
            return (
              <StationSection
                key={station.number}
                stationNumber={station.number}
                fullName={station.fullName}
                mechanism={station.oneLineMechanism}
                colorHex={station.colorHex}
                guides={guides}
                deepDive={
                  station.number === 2
                    ? {
                        href: '/mind-as-medicine/inner-courtroom',
                        icon: '⚖️',
                        title: 'The Inner Courtroom',
                        blurb:
                          'Binary collapse, dramatized: the mind convenes a courtroom — judge, prosecutor, jury — and renders a verdict about your worth before the evidence is in. An interactive deep-dive on this station.',
                      }
                    : undefined
                }
              />
            )
          })}
        </div>
      </section>

      {/* Closing band */}
      <section className="py-14" style={{ backgroundColor: MIND.highlightBg }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="leading-relaxed mb-4" style={{ color: MIND.inkSoft, fontSize: '1.05rem' }}>
            New loops, new sub-systems, and new guides get added to this tab as they are discovered. The architecture is alive. Bookmark this page — it will keep growing.
          </p>
          <p className="text-sm font-medium" style={{ color: MIND.accent }}>
            — Dr. Vera Holloway
          </p>
        </div>
      </section>

      <DisclaimerFooter />
    </main>
  )
}

interface DeepDive {
  href: string
  icon: string
  title: string
  blurb: string
}

interface StationSectionProps {
  stationNumber: number
  fullName: string
  mechanism: string
  colorHex: string
  guides: ReturnType<typeof getGuidesByStation>
  deepDive?: DeepDive
}

function StationSection({ stationNumber, fullName, mechanism, colorHex, guides, deepDive }: StationSectionProps) {
  return (
    <section id={`station-${stationNumber}`} className="scroll-mt-24">
      <header className="mb-5 pb-4" style={{ borderBottom: `2px solid ${colorHex}` }}>
        <p className="text-xs font-bold tracking-[0.18em] uppercase mb-2" style={{ color: colorHex }}>
          Station {stationNumber}
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl mb-3" style={{ color: MIND.ink }}>
          {fullName}
        </h2>
        <p className="leading-relaxed" style={{ color: MIND.inkSoft }}>
          {mechanism}
        </p>
      </header>

      {guides.length === 0 ? (
        <PlaceholderCard stationNumber={stationNumber} />
      ) : (
        <div className="space-y-4">
          {guides.map((g) => (
            <MindGuideCard key={g.slug} guide={g} colorHex={colorHex} />
          ))}
        </div>
      )}

      {deepDive && <DeepDiveCard deepDive={deepDive} colorHex={colorHex} />}
    </section>
  )
}

function DeepDiveCard({ deepDive, colorHex }: { deepDive: DeepDive; colorHex: string }) {
  return (
    <a
      href={deepDive.href}
      className="block rounded-2xl p-6 sm:p-7 mt-4 transition-all hover:shadow-md"
      style={{
        backgroundColor: '#fbfafd',
        border: `1.5px solid ${colorHex}`,
        borderLeft: `4px solid ${colorHex}`,
      }}
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl flex-shrink-0" aria-hidden="true">{deepDive.icon}</span>
        <div className="flex-1">
          <p className="text-xs font-bold tracking-[0.18em] uppercase mb-1.5" style={{ color: colorHex }}>
            Interactive Deep-Dive
          </p>
          <h3 className="font-serif text-xl mb-2" style={{ color: MIND.ink }}>
            {deepDive.title}
          </h3>
          <p className="text-sm leading-relaxed mb-3" style={{ color: MIND.inkSoft }}>
            {deepDive.blurb}
          </p>
          <span className="inline-block text-sm font-medium underline" style={{ color: colorHex }}>
            Enter the courtroom →
          </span>
        </div>
      </div>
    </a>
  )
}

function PlaceholderCard({ stationNumber }: { stationNumber: number }) {
  return (
    <article
      className="rounded-2xl p-6 sm:p-7 text-center"
      style={{
        backgroundColor: '#fbfafd',
        border: `1.5px dashed ${MIND.cardBorder}`,
      }}
    >
      <p className="font-serif text-lg mb-2" style={{ color: MIND.accent }}>
        Station {stationNumber} — Guide forthcoming
      </p>
      <p className="text-sm leading-relaxed" style={{ color: MIND.inkSoft }}>
        This station of the loop is named here so the architecture is visible. A guide teaching this station is in development.
      </p>
    </article>
  )
}

function MindGuideCard({
  guide,
  colorHex,
}: {
  guide: ReturnType<typeof getGuidesByStation>[number]
  colorHex: string
}) {
  return (
    <article
      className="rounded-2xl p-6 sm:p-7"
      style={{
        backgroundColor: MIND.cardBg,
        border: `1px solid ${MIND.cardBorder}`,
        borderLeft: `4px solid ${colorHex}`,
      }}
    >
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl flex-shrink-0" aria-hidden="true">{guide.icon ?? '🧠'}</span>
        <div className="flex-1">
          <h3 className="font-serif text-xl mb-1" style={{ color: MIND.ink }}>
            {guide.title}
          </h3>
          {guide.subtitle && (
            <p className="text-sm" style={{ color: MIND.accentSoft }}>{guide.subtitle}</p>
          )}
        </div>
      </div>
      <p className="text-sm leading-relaxed mb-5" style={{ color: MIND.inkSoft }}>
        {guide.description}
      </p>
      <div className="flex flex-wrap gap-3 items-center">
        <GuideDownloadGate guide={guide} variant="card" />
        <a
          href={`/guides/${guide.slug}`}
          className="text-sm font-medium underline"
          style={{ color: MIND.accent }}
        >
          Read the full guide →
        </a>
      </div>
    </article>
  )
}
