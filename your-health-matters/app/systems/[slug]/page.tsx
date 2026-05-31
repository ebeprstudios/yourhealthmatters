import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import DrVeraChat from '@/components/chat/DrVeraChat'
import DisclaimerFooter from '@/components/ui/DisclaimerFooter'
import ClinicalCallout from '@/components/ui/ClinicalCallout'
import {
  organSystems,
  foods,
  juices,
  salads,
  clinicalRules,
  getGuidesByOrganSystem,
} from '@/lib/data'
import type { OrganSystemSlug } from '@/lib/types'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return organSystems.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const system = organSystems.find((s) => s.slug === params.slug)
  if (!system) return { title: 'System Not Found' }
  return {
    title: `${system.name} | Your Health Guide`,
    description: `${system.oneLineSummary}, explore the foods, herbs, juices, and salads that support ${system.name.toLowerCase()} health.`,
  }
}

export default function OrganSystemPage({ params }: Props) {
  const system = organSystems.find((s) => s.slug === params.slug)
  if (!system) return notFound()

  const slug = system.slug as OrganSystemSlug
  const relatedFoods = foods.filter((f) => f.organSystems.includes(slug))
  const vegetables = relatedFoods.filter((f) => f.type === 'vegetable')
  const fruitsList = relatedFoods.filter((f) => f.type === 'fruit')
  const herbsList = relatedFoods.filter((f) => f.type === 'herb')
  const relatedJuices = juices.filter((j) => j.organSystems.includes(slug))
  const relatedSalads = salads.filter((s) => s.organSystems.includes(slug))
  const relatedGuides = getGuidesByOrganSystem(slug)
  // Surface drug-interaction warnings if any related herb has them
  const interactionWarnings = herbsList
    .flatMap((h) =>
      (h.drugInteractions || []).map((w) => ({ herb: h.name, warning: w })),
    )
    .slice(0, 6)

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--paper)' }}>
      <Nav />

      {/* Hero */}
      <header className="pt-24 pb-14 relative overflow-hidden" style={{ backgroundColor: system.colorHex }}>
        <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />
        <div className="absolute -left-10 bottom-0 w-40 h-40 rounded-full bg-white/5 pointer-events-none" aria-hidden="true" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
          <nav className="flex items-center gap-2 text-white/70 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/systems" className="hover:text-white transition-colors">Systems</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">{system.name}</span>
          </nav>

          <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-2">
            Organ System
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-white mb-4">
            {system.name}
          </h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl">
            {system.whatItDoes}
          </p>
        </div>
      </header>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* Signs of distress */}
        {system.signsOfDistress.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl mb-4" style={{ color: 'var(--ink-900)' }}>
              Signs of Distress
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {system.signsOfDistress.map((sign) => (
                <li
                  key={sign}
                  className="px-4 py-3 rounded-xl flex items-start gap-2"
                  style={{ backgroundColor: 'var(--paper-raised)', border: 'var(--border-hairline)' }}
                >
                  <span style={{ color: system.colorHex }} aria-hidden="true">•</span>
                  <span style={{ color: 'var(--ink-700)' }}>{sign}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Top foods + herbs (named from the system's curated list) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="p-6 rounded-2xl"
            style={{ backgroundColor: 'var(--paper-raised)', border: 'var(--border-hairline)', boxShadow: 'var(--shadow-card)' }}
          >
            <h2 className="font-serif text-xl mb-3" style={{ color: 'var(--ink-900)' }}>
              Top Foods
            </h2>
            <ul className="space-y-2">
              {system.topFoods.map((slug) => (
                <li key={slug} className="text-sm" style={{ color: 'var(--ink-700)' }}>
                  <span aria-hidden="true" style={{ color: system.colorHex }}>✦ </span>
                  {slug.replace(/-/g, ' ')}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="p-6 rounded-2xl"
            style={{ backgroundColor: 'var(--paper-raised)', border: 'var(--border-hairline)', boxShadow: 'var(--shadow-card)' }}
          >
            <h2 className="font-serif text-xl mb-3" style={{ color: 'var(--ink-900)' }}>
              Top Herbs
            </h2>
            <ul className="space-y-2">
              {system.topHerbs.map((slug) => (
                <li key={slug} className="text-sm" style={{ color: 'var(--ink-700)' }}>
                  <span aria-hidden="true" style={{ color: system.colorHex }}>✦ </span>
                  {slug.replace(/-/g, ' ')}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Drug-interaction warnings, surfaced when applicable */}
        {interactionWarnings.length > 0 && (
          <ClinicalCallout variant="warning" title="Herb–drug interactions to know">
            <ul className="space-y-1.5 list-disc pl-5">
              {interactionWarnings.map((w, i) => (
                <li key={i}>
                  <strong>{w.herb}:</strong> {w.warning}
                </li>
              ))}
            </ul>
          </ClinicalCallout>
        )}

        {/* Detailed foods / herbs by mechanism */}
        {relatedFoods.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl mb-5" style={{ color: 'var(--ink-900)' }}>
              The Mechanisms
            </h2>
            <div className="space-y-3">
              {[...vegetables, ...fruitsList, ...herbsList].map((food) => (
                <article
                  key={food.id}
                  className="p-5 rounded-2xl"
                  style={{ backgroundColor: 'var(--paper-raised)', border: 'var(--border-hairline)' }}
                >
                  <div className="flex items-center justify-between gap-3 flex-wrap mb-2">
                    <h3 className="font-serif text-lg" style={{ color: 'var(--ink-900)' }}>
                      {food.name}
                    </h3>
                    <span
                      className="text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider"
                      style={{ backgroundColor: 'var(--paper-sunk)', color: 'var(--ink-500)' }}
                    >
                      {food.type}
                      {food.culturalTradition ? ` · ${food.culturalTradition}` : ''}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-700)' }}>
                    {food.mechanism}
                  </p>
                  {food.preparationNotes && (
                    <p className="text-xs mt-2 italic" style={{ color: 'var(--ink-500)' }}>
                      Preparation: {food.preparationNotes}
                    </p>
                  )}
                  {food.dosage && (
                    <p className="text-xs mt-1" style={{ color: 'var(--ink-500)' }}>
                      Dosage: {food.dosage}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Related juices */}
        {relatedJuices.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl mb-5" style={{ color: 'var(--ink-900)' }}>
              Healing Juices for {system.name}
            </h2>
            <ClinicalCallout title="Universal juice rule">
              Every juice must be consumed within 20 minutes of pressing.
              Oxidation begins immediately. Turmeric is always paired with
              black pepper.
            </ClinicalCallout>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {relatedJuices.map((juice) => (
                <article
                  key={juice.id}
                  className="p-5 rounded-2xl"
                  style={{ backgroundColor: 'var(--paper-raised)', border: 'var(--border-hairline)' }}
                >
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="font-serif text-lg" style={{ color: 'var(--ink-900)' }}>
                      {juice.name}
                    </h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full text-white uppercase tracking-wider"
                      style={{ backgroundColor: `var(--zone-${juice.insulinZone})` }}
                    >
                      {juice.insulinZone} zone
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--ink-700)' }}>
                    {juice.mechanismNotes}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--ink-500)' }}>
                    {juice.ingredients
                      .map((i) => `${i.food} (${i.amount})`)
                      .join(' · ')}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Related salads */}
        {relatedSalads.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl mb-5" style={{ color: 'var(--ink-900)' }}>
              Healing Salads for {system.name}
            </h2>
            {slug === 'thyroid' && (
              <ClinicalCallout variant="warning" title="Thyroid exception">
                If you are managing thyroid health, all cruciferous vegetables
                in these salads must be cooked. Raw glucosinolates compete
                with iodine for thyroid uptake.
              </ClinicalCallout>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {relatedSalads.map((salad) => (
                <article
                  key={salad.id}
                  className="p-5 rounded-2xl"
                  style={{ backgroundColor: 'var(--paper-raised)', border: 'var(--border-hairline)' }}
                >
                  <h3 className="font-serif text-lg mb-2" style={{ color: 'var(--ink-900)' }}>
                    {salad.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--ink-700)' }}>
                    {salad.mechanismNotes}
                  </p>
                  <p className="text-xs" style={{ color: 'var(--ink-500)' }}>
                    <strong>Dressing:</strong> {salad.dressing}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Practical First Step */}
        <ClinicalCallout variant="firststep" title="Practical First Step">
          {system.practicalFirstStep}
        </ClinicalCallout>

        {/* Related guides */}
        {relatedGuides.length > 0 && (
          <section>
            <h2 className="font-serif text-2xl mb-5" style={{ color: 'var(--ink-900)' }}>
              Guides that support {system.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedGuides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="p-4 rounded-xl transition-colors group"
                  style={{ backgroundColor: 'var(--paper-raised)', border: 'var(--border-hairline)' }}
                >
                  <span className="text-2xl block mb-1" aria-hidden="true">{g.icon ?? '📘'}</span>
                  <p className="font-semibold text-sm" style={{ color: 'var(--ink-900)' }}>
                    {g.title}
                  </p>
                  {g.subtitle && (
                    <p className="text-xs mt-1" style={{ color: 'var(--ink-500)' }}>{g.subtitle}</p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <DisclaimerFooter />

      <DrVeraChat
        pageScope={`You are Dr. Vera teaching about the ${system.name} system. ${system.whatItDoes} Focus on the foods, herbs, juices, and salads that support this system, the signs of distress, and the practical first step.`}
      />
    </main>
  )
}
