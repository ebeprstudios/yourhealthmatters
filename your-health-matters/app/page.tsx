import Nav from '@/components/layout/Nav'
import Hero from '@/components/sections/Hero'
import GuideCard from '@/components/ui/GuideCard'
import DrVeraChat from '@/components/chat/DrVeraChat'
import NewsletterForm from '@/components/ui/NewsletterForm'
import NewsletterPopup from '@/components/ui/NewsletterPopup'
import { guides } from '@/lib/guides'

export default function Home() {
  return (
    <main>
      <Nav />
      <NewsletterPopup />

      {/* Guide Library */}
      <section id="guides" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-14">
          <span className="inline-block text-forest-600 text-sm font-semibold tracking-widest uppercase mb-3">
            The Library
          </span>
          <h2 className="font-serif text-4xl text-forest-900 mb-4">
            Eleven Healing Guides
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            Each guide is available as a rich web page and a printable PDF.
            Read online, download for your kitchen counter, or share with someone you care about.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {guides.map((guide, i) => (
            <GuideCard key={guide.slug} guide={guide} index={i} />
          ))}
        </div>
      </section>

      {/* About Erica - with 1 Corinthians 6:19 */}
      <section id="about" className="bg-forest-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">

          {/* Scripture banner */}
          <div className="text-center mb-12">
            <div className="inline-flex flex-col items-center gap-2 bg-forest-800/80 border border-gold-500/30 rounded-2xl px-8 py-5 max-w-2xl mx-auto">
              <span className="text-2xl">🕊️</span>
              <p className="text-gold-300 text-base sm:text-lg font-serif italic leading-relaxed text-center">
                "Do you not know that your body is a temple of the Holy Spirit within you,
                whom you have from God? You are not your own, for you were bought with a price.
                So glorify God in your body."
              </p>
              <p className="text-gold-500 text-sm font-semibold tracking-wide">
                1 Corinthians 6:19-20
              </p>
            </div>
          </div>

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
                Dr. Vera - a Certified Nutrition Specialist (CNS), Certified Holistic
                Nutritionist (CHN), and practitioner with 30+ years of experience across four
                continents.
              </p>
              <p className="text-forest-200 leading-relaxed mb-4">
                The research spans West African food medicine, Ayurvedic tradition, Traditional
                Chinese Medicine, Mediterranean protocols, Caribbean herbal lineages, and
                Southeast Asian botanical knowledge - integrated with modern clinical research.
              </p>
              <p className="text-forest-300 text-sm italic">
                Your body is the temple of God. Understanding how it works - how to nourish it,
                protect it, and restore it - is one of the deepest acts of stewardship available to us.
                That is what this work is for.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: '🌍', title: '9 Global Traditions', desc: 'West African - Ayurvedic - TCM - Mediterranean - Caribbean - Amazon - SE Asian - Middle Eastern - Okinawan' },
                { icon: '🔬', title: '18 Organ Systems', desc: 'Every guide is mapped to specific body systems for precision healing' },
                { icon: '📋', title: 'Evidence-Based', desc: 'Clinical research, traditional knowledge, and mechanism-driven explanations' },
                { icon: '🌿', title: 'Ask Dr. Vera', desc: 'Chat assistant available on every page to answer your holistic health questions' },
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

      {/* Newsletter Section */}
      <section className="bg-forest-900 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-forest-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Stay Connected
          </span>
          <h2 className="font-serif text-4xl text-white mb-4">
            Weekly Health Tips
          </h2>
          <p className="text-forest-300 leading-relaxed mb-10 max-w-lg mx-auto">
            Every week, Erica Ehiwe shares evidence-based insights on healing foods,
            herbs, body systems, and daily protocols to help you take better care of your body.
          </p>
          <div className="bg-white/10 backdrop-blur-sm border border-forest-600 rounded-2xl p-8">
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6 sm:mb-8">
              {[
                { icon: '🌿', label: 'Healing Foods' },
                { icon: '🌱', label: 'Herbal Medicine' },
                { icon: '⏰', label: 'Body Clock Tips' },
              ].map(({ icon, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl mb-1">{icon}</p>
                  <p className="text-forest-300 text-xs">{label}</p>
                </div>
              ))}
            </div>
            <NewsletterForm variant="section" />
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
            Dr. Vera is trained on all eleven guides and 30 years of global clinical
            knowledge. Ask her any holistic health question - nutrition, herbs, body systems,
            timing, or how to support a specific health goal.
          </p>
        </div>
        <DrVeraChat compact />
      </section>

      {/* Footer */}
      <footer className="bg-forest-950 text-forest-400 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 pb-8 border-b border-forest-800">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🌿</span>
                <div>
                  <p className="text-white font-semibold text-sm font-serif">Erica Ehiwe</p>
                  <p className="text-forest-600 text-xs">Your Health Matters</p>
                </div>
              </div>
              <p className="text-forest-600 text-xs leading-relaxed">
                Holistic Health Research and Education.<br />
                Evidence-based healing guides for the whole body.
              </p>
            </div>
            <div>
              <p className="text-forest-400 text-sm font-semibold mb-3">Weekly Health Tips</p>
              <NewsletterForm variant="footer" />
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm mb-1">
              Copyright {new Date().getFullYear()} Erica Ehiwe - All Rights Reserved
            </p>
            <p className="text-xs text-forest-700 mb-3">
              Your Health Matters
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-forest-700 mt-3">
              <a href="/legal" className="hover:text-forest-400 transition-colors underline">Legal and Copyright</a>
              <span>-</span>
              <a href="/legal#medical" className="hover:text-forest-400 transition-colors underline">Medical Disclaimer</a>
              <span>-</span>
              <a href="/legal#ai" className="hover:text-forest-400 transition-colors underline">Dr. Vera Disclaimer</a>
            </div>
            <p className="text-xs text-forest-800 mt-3 max-w-xl mx-auto">
              All content is educational only and does not constitute medical advice.
              Consult your physician before significant dietary or lifestyle changes.
            </p>
          </div>
        </div>
      </footer>

      <DrVeraChat />
    </main>
  )
}
