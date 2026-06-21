// app/page.tsx — landing page
//
// ⚠️ FOUNDER REVIEW REQUESTED:
//   - The About section copy (Erica's bio + Dr. Vera disclosure) is staged
//     here per Phase 2A decision Q2. Erica should approve the exact wording
//     before merge — her bio is hers to write.

import Nav from '@/components/layout/Nav'
import Hero from '@/components/sections/Hero'
import GuideCard from '@/components/ui/GuideCard'
import DrVeraChat from '@/components/chat/DrVeraChat'
import NewsletterForm from '@/components/ui/NewsletterForm'
import NewsletterPopup from '@/components/ui/NewsletterPopup'
import DisclaimerFooter from '@/components/ui/DisclaimerFooter'
import { tieredGuides, testimonials } from '@/lib/data'
import type { Testimonial } from '@/lib/types'
import Link from 'next/link'

export default function Home() {
  const featured = [
    ...tieredGuides.foundational.slice(0, 6),
  ]

  return (
    <main>
      <Nav />
      <NewsletterPopup />
      <Hero />

      {/* Tools strip — interactive references between the doorways and the library */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl mb-3" style={{ color: 'var(--ink-900)' }}>
            Tools to support the work.
          </h2>
          <p className="max-w-xl mx-auto leading-relaxed italic" style={{ color: 'var(--ink-500)' }}>
            Interactive references that turn the guides into something you can use.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              icon: '🔬',
              title: 'The 18 Organ Systems',
              body: 'Every system in the body, color-coded, with the foods and herbs that support each one.',
              cta: 'Explore the systems',
              href: '/systems',
            },
            {
              icon: '🕐',
              title: 'Insulin Time Zones',
              body: "An interactive timeline of your body's four daily energy windows.",
              cta: 'Open the zones',
              href: '/insulin-zones',
            },
            {
              icon: '🧺',
              title: 'Shopping List Generator',
              body: 'Pick an organ system or a protocol. Get a printable list.',
              cta: 'Generate a list',
              href: '/shopping-list',
            },
            {
              icon: '🌙',
              title: 'Sleep Guide',
              body: 'What the body does overnight, and how to support each stage.',
              cta: 'Open the guide',
              href: '/sleep-guide',
            },
          ].map(({ icon, title, body, cta, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-md"
              style={{
                backgroundColor: 'var(--paper-raised)',
                border: 'var(--border-hairline)',
              }}
            >
              <span className="text-3xl mb-4" aria-hidden="true">{icon}</span>
              <p className="font-serif text-lg mb-2" style={{ color: 'var(--ink-900)' }}>
                {title}
              </p>
              <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: 'var(--ink-500)' }}>
                {body}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-semibold"
                style={{ color: 'var(--zone-peak)' }}
              >
                {cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured guides preview */}
      <section id="guides" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-14">
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--zone-peak)' }}
          >
            The Library
          </span>
          <h2 className="font-serif text-4xl mb-4" style={{ color: 'var(--ink-900)' }}>
            Healing Guides
          </h2>
          <p
            className="max-w-xl mx-auto leading-relaxed"
            style={{ color: 'var(--ink-500)' }}
          >
            Foundational, Specialty, and Advanced guides, each a rich web
            page and a printable PDF. Browse the full library below or jump
            straight to the categorized index.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {featured.map((guide, i) => (
            <GuideCard key={guide.slug} guide={guide} index={i} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full transition-all"
            style={{ backgroundColor: 'var(--zone-peak)', color: 'white' }}
          >
            See the full categorized library →
          </Link>
        </div>
      </section>

      {/* About — Erica + Dr. Vera transparency disclosure */}
      <section
        id="about"
        className="py-20"
        style={{ backgroundColor: 'var(--paper-sunk)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          {/* About Erica + Dr. Vera persona disclosure (single flowing block) */}
          <div>
            <span
              className="text-xs font-semibold tracking-widest uppercase mb-3 block"
              style={{ color: 'var(--zone-peak)' }}
            >
              About the Creator
            </span>
            <h2 className="font-serif text-3xl mb-5" style={{ color: 'var(--ink-900)' }}>
              Erica Ehiwe
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--ink-700)' }}>
              I built Your Health Guide as a place to share the research
              I&apos;ve spent years inside of: how the body works, what
              food does inside it, and how healing traditions across the
              world have understood that relationship for centuries.
              I&apos;m training as a Certified Nutrition Specialist, and
              this site is where I bring together what I&apos;m learning.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--ink-700)' }}>
              The research spans West African food medicine, Ayurvedic
              tradition, Traditional Chinese Medicine, Mediterranean
              protocols, Caribbean herbal lineages, and Southeast Asian
              botanical knowledge, integrated with modern clinical
              research.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--ink-700)' }}>
              <strong style={{ color: 'var(--ink-900)' }}>
                About Dr. Vera Holloway.
              </strong>{' '}
              Dr. Vera is the teaching voice of this platform, an
              educational persona I created to bring multi-tradition
              holistic medicine into a warm, accessible conversation. The
              protocols, mechanisms, and food-as-medicine guidance you
              find here are rooted in my research and the traditions I
              draw from. Dr. Vera is the voice. The science is real. The
              credentials I&apos;m still earning.
            </p>
            <p
              className="text-sm italic leading-relaxed"
              style={{ color: 'var(--ink-500)' }}
            >
              The body is honored when we feed it well. Understanding how
              it works (how to nourish it, protect it, and restore it)
              is, in my tradition and many others, one of the deepest acts
              of stewardship we can offer. That is what this work is for.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: '🌍',
                title: 'Nine Global Traditions',
                desc:
                  'West African · Ayurvedic · TCM · Mediterranean · Caribbean · Amazon · SE Asian · Middle Eastern · Okinawan',
              },
              {
                icon: '🔬',
                title: '18 Organ Systems',
                desc: 'Every guide is mapped to specific body systems for precision teaching.',
              },
              {
                icon: '📋',
                title: 'Evidence-Based',
                desc: 'Clinical research, traditional knowledge, and mechanism-driven explanations.',
              },
              {
                icon: '🌿',
                title: 'Ask Dr. Vera',
                desc: 'Educational chat assistant available on every page to answer your holistic health questions.',
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl p-4"
                style={{
                  backgroundColor: 'var(--paper-raised)',
                  border: 'var(--border-hairline)',
                }}
              >
                <span className="text-2xl flex-shrink-0" aria-hidden="true">{icon}</span>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: 'var(--ink-900)' }}>
                    {title}
                  </p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-500)' }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsStrip items={testimonials} />

      {/* Newsletter Section */}
      <section
        className="py-20 px-4"
        style={{ backgroundColor: 'var(--zone-peak)', color: 'white' }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-3 text-white/70">
            Stay Connected
          </span>
          <h2 className="font-serif text-4xl text-white mb-4">
            Weekly Health Tips
          </h2>
          <p className="text-white/80 leading-relaxed mb-10 max-w-lg mx-auto">
            One mechanism-driven teaching and one practical first step,
            every week. Scripture reflections are an optional second
            stream you can opt into during signup.
          </p>
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.25)',
            }}
          >
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
              {[
                { icon: '🥗', label: 'Healing Foods' },
                { icon: '📊', label: 'Body Systems' },
                { icon: '📖', label: 'Scripture (Optional)' },
              ].map(({ icon, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl mb-1" aria-hidden="true">{icon}</p>
                  <p className="text-white/80 text-xs">{label}</p>
                </div>
              ))}
            </div>
            <NewsletterForm variant="section" showScriptureOptIn />
          </div>
        </div>
      </section>

      {/* Dr. Vera chat section */}
      <section id="chat" className="max-w-2xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-10">
          <span
            className="inline-block text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--zone-peak)' }}
          >
            Ask Anything
          </span>
          <h2 className="font-serif text-4xl mb-4" style={{ color: 'var(--ink-900)' }}>
            Chat with Dr. Vera
          </h2>
          <p
            className="max-w-lg mx-auto leading-relaxed"
            style={{ color: 'var(--ink-500)' }}
          >
            Dr. Vera is an educational teaching persona built on the full
            guide library and the multi-tradition holistic research behind
            it. Ask any holistic health question.
          </p>
        </div>
        <DrVeraChat compact />
      </section>

      <DisclaimerFooter />

      <DrVeraChat />
    </main>
  )
}

// ---------------------------------------------------------------------------
// TestimonialsStrip
// Returns null when the testimonials array is empty — invisible to visitors
// until real, consent-confirmed entries are added.
// ---------------------------------------------------------------------------

function TestimonialsStrip({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--paper-sunk)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--zone-peak)' }}
          >
            Reader Experiences
          </span>
          <h2
            className="font-serif text-3xl sm:text-4xl"
            style={{ color: 'var(--ink-900)' }}
          >
            What readers have noticed
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t) => (
            <div
              key={t.id}
              className="flex flex-col rounded-2xl p-6"
              style={{
                backgroundColor: 'var(--paper-raised)',
                border: 'var(--border-hairline)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {/* Open-quote mark */}
              <span
                className="text-5xl font-serif leading-none mb-4 select-none"
                aria-hidden="true"
                style={{ color: 'var(--zone-peak)' }}
              >
                &ldquo;
              </span>

              {/* Primary concern tag */}
              <span
                className="inline-block self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-4"
                style={{
                  backgroundColor: 'var(--paper-sunk)',
                  color: 'var(--ink-700)',
                  border: 'var(--border-hairline)',
                }}
              >
                {t.primaryConcern}
              </span>

              {/* Main quote body */}
              <p
                className="text-sm leading-relaxed flex-1 mb-6 italic"
                style={{ color: 'var(--ink-700)' }}
              >
                {t.whatChanged}
              </p>

              {/* Footer */}
              <div
                className="flex items-center justify-between pt-4"
                style={{ borderTop: 'var(--border-hairline)' }}
              >
                <p
                  className="text-xs font-semibold"
                  style={{ color: 'var(--ink-900)' }}
                >
                  {t.patientLabel}
                </p>
                <p
                  className="text-xs"
                  style={{ color: 'var(--ink-500)' }}
                >
                  {t.durationOnProtocol}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
