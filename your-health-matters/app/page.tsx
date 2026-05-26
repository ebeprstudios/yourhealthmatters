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
import { tieredGuides } from '@/lib/data'
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
            Foundational, Specialty, and Advanced guides — each a rich web
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
          {/* About Erica */}
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
              Your Health Matters is built by Erica Ehiwe — researcher,
              educator, and student of holistic medicine in active training
              as a Certified Nutrition Specialist. The work here draws from
              West African, Ayurvedic, Traditional Chinese Medicine,
              Mediterranean, Caribbean, and Amazonian traditions, integrated
              with modern clinical research.
            </p>
            <p
              className="text-sm italic leading-relaxed"
              style={{ color: 'var(--ink-500)' }}
            >
              We believe the body deserves to be honored — fed, rested, and
              listened to. That belief is rooted in many traditions,
              including our own.
            </p>
          </div>

          {/* About Dr. Vera — transparency disclosure */}
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{
              backgroundColor: 'var(--paper-raised)',
              border: 'var(--border-hairline)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <span
              className="text-xs font-semibold tracking-widest uppercase mb-3 block"
              style={{ color: 'var(--zone-peak)' }}
            >
              About Dr. Vera Holloway
            </span>
            <h2 className="font-serif text-2xl mb-4" style={{ color: 'var(--ink-900)' }}>
              The teaching voice of this platform
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--ink-700)' }}>
              Dr. Vera Holloway is the teaching voice of Your Health Matters
              — an educational persona created by Erica Ehiwe to bring
              multi-tradition holistic medicine to a broader audience.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--ink-700)' }}>
              The protocols, mechanisms, and food-as-medicine guidance you
              find here are grounded in research drawn from West African,
              Ayurvedic, Traditional Chinese Medicine, Mediterranean,
              Caribbean, and Amazonian traditions, and in Erica&apos;s
              ongoing training as a Certified Nutrition Specialist.
            </p>
            <p className="leading-relaxed text-sm" style={{ color: 'var(--ink-500)' }}>
              Every guide is educational, not medical advice. If you are
              managing a diagnosed condition or taking prescribed
              medication, always consult your physician before making
              changes.
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
                desc: 'Chat available on every page to answer your holistic health questions.',
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
            Dr. Vera is an educational teaching persona trained on the full
            guide library and 30+ years of multi-tradition holistic
            knowledge. Ask any holistic health question.
          </p>
        </div>
        <DrVeraChat compact />
      </section>

      <DisclaimerFooter />

      <DrVeraChat />
    </main>
  )
}
