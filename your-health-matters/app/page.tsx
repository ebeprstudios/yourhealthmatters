import Nav from '@/components/layout/Nav'
import Hero from '@/components/sections/Hero'
import GuideCard from '@/components/ui/GuideCard'
import DrVeraChat from '@/components/chat/DrVeraChat'
import { guides } from '@/lib/guides'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />

      {/* Guide Library */}
      <section id="guides" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-14">
          <span className="inline-block text-forest-600 text-sm font-semibold tracking-widest uppercase mb-3">
            The Library
          </span>
          <h2 className="font-serif text-4xl text-forest-900 mb-4">
            Ten Healing Guides
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            Each guide is available as a rich web page and a printable PDF.
            Read online, download for your kitchen counter, or share with someone you care about.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, i) => (
            <GuideCard key={guide.slug} guide={guide} index={i} />
          ))}
        </div>
      </section>

      {/* About Erica */}
      <section id="about" className="bg-forest-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-forest-300 text-sm font-semibold tracking-widest uppercase mb-3 block">
                About the Creator
              </span>
              <h2 className="font-serif text-3xl mb-6 text-white">
                Erica Ehiwe
              </h2>
              <p className="text-forest-200 leading-relaxed mb-4">
                These guides were built through deep research and the clinical guidance of
                Dr. Vera Holloway — a Certified Nutrition Specialist (CNS), Certified Holistic
                Nutritionist (CHN), and practitioner with 30+ years of experience across four
                continents.
              </p>
              <p className="text-forest-200 leading-relaxed mb-4">
                The research spans West African food medicine, Ayurvedic tradition, Traditional
                Chinese Medicine, Mediterranean protocols, Caribbean herbal lineages, and
                Southeast Asian botanical knowledge — integrated with modern clinical research.
              </p>
              <p className="text-forest-300 text-sm italic">
                This is education, not medicine. Everything here is designed to help you ask
                better questions, understand your body more deeply, and work more effectively
                with your physician.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: '🌍', title: '9 Global Traditions', desc: 'West African · Ayurvedic · TCM · Mediterranean · Caribbean · Amazon · SE Asian · Middle Eastern · Okinawan' },
                { icon: '🔬', title: '18 Organ Systems', desc: 'Every guide is mapped to specific body systems for precision healing' },
                { icon: '📋', title: 'Evidence-Based', desc: 'Clinical research, traditional knowledge, and mechanism-driven explanations' },
                { icon: '🌿', title: 'Ask Dr. Vera', desc: 'AI-powered chat trained on all 10 guides — available on every page' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 bg-forest-800/50 rounded-xl p-4">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">{title}</p>
                    <p className="text-forest-300 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Dr. Vera chat section */}
      <section id="chat" className="max-w-2xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-10">
          <span className="inline-block text-forest-600 text-sm font-semibold tracking-widest uppercase mb-3">
            Ask Anything
          </span>
          <h2 className="font-serif text-4xl text-forest-900 mb-4">
            Chat with Dr. Vera
          </h2>
          <p className="text-stone-500 max-w-lg mx-auto leading-relaxed">
            Dr. Vera Holloway is trained on all ten guides and 30 years of global clinical
            knowledge. Ask her any holistic health question — nutrition, herbs, body systems,
            timing, or how to support a specific health goal.
          </p>
        </div>
        <DrVeraChat compact />
      </section>

      {/* Footer */}
      <footer className="bg-forest-950 text-forest-400 text-center py-8 px-4">
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Erica Ehiwe · All Rights Reserved
        </p>
        <p className="text-xs text-forest-600 max-w-xl mx-auto">
          All content is for educational purposes only and does not constitute medical advice.
          Always consult a qualified healthcare provider before making significant changes to
          your diet, supplements, or health protocols.
        </p>
      </footer>

      {/* Floating chat button on all pages */}
      <DrVeraChat />
    </main>
  )
}
