import Nav from '@/components/layout/Nav'
import Link from 'next/link'

const LAST_UPDATED = 'May 26, 2026'

export default function LegalPage() {
  const year = new Date().getFullYear()
  return (
    <main className="min-h-screen bg-cream">
      <Nav />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <h1 className="font-serif text-4xl text-forest-900 mb-2">Legal &amp; Privacy</h1>
        <p className="text-stone-400 text-sm mb-12">Last updated: {LAST_UPDATED}</p>

        <section className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm mb-6">
          <h2 className="font-serif text-2xl text-forest-900 mb-4">Copyright Notice</h2>
          <p className="text-stone-600 leading-relaxed mb-4">© {year} Erica Ehiwe. All rights reserved.</p>
          <p className="text-stone-600 leading-relaxed mb-4">
            All content on this website - including but not limited to text, guides, research compilations,
            PDF documents, visual aids, hormone charts, food protocols, and the design and organization of
            all materials - is the original intellectual property of <strong className="text-forest-900">Erica Ehiwe</strong> and
            is protected by United States and international copyright law.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            The ten healing guides, the 18-organ-systems framework, the Insulin Time Zones protocol, the
            overnight and daytime body repair visuals, the global healing foods reference, and all associated
            PDF documents were researched, compiled, structured, and created by Erica Ehiwe. This body of
            work represents original research synthesis and educational content creation.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Unauthorized reproduction, distribution, modification, or commercial use of any content from
            this site - in whole or in part - without express written permission from Erica Ehiwe is
            strictly prohibited.
          </p>
        </section>

        <section className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm mb-6">
          <h2 className="font-serif text-2xl text-forest-900 mb-4">Permitted Personal Use</h2>
          <ul className="space-y-3 mb-4">
            {['Download and print PDFs for your own personal, non-commercial use',
              'Share links to this website with friends, family, or healthcare providers',
              'Reference individual facts or protocols with proper attribution to Erica Ehiwe',
              'Discuss content from this site with your physician or healthcare team',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-stone-600 text-sm leading-relaxed">
                <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>{item}
              </li>
            ))}
          </ul>
          <p className="text-stone-600 leading-relaxed text-sm">
            You may <strong className="text-stone-800">not</strong> reproduce these guides, repackage them,
            sell them, redistribute them as your own work, or use them as the basis for commercial products
            or services without written permission.
          </p>
        </section>

        <section className="bg-forest-50 rounded-2xl p-8 border border-forest-200 mb-6">
          <h2 className="font-serif text-2xl text-forest-900 mb-4">Medical Disclaimer</h2>
          <p className="text-stone-700 font-medium leading-relaxed mb-4">
            All content on this website is for educational and informational purposes only. It does not
            constitute medical advice, diagnosis, or treatment.
          </p>
          <p className="text-stone-600 leading-relaxed text-sm mb-4">
            Always consult a licensed physician, registered dietitian, or qualified healthcare provider
            before making significant changes to your diet, supplement regimen, or health protocols -
            particularly if you are managing an active health condition, taking medications, or pregnant.
          </p>
          <p className="text-stone-600 leading-relaxed text-sm">
            Herb-drug interactions are real and clinically significant. Never adjust or discontinue
            medication based on information found on this website.
          </p>
        </section>

        <section className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm mb-6">
          <h2 className="font-serif text-2xl text-forest-900 mb-4">Dr. Vera Chat Disclaimer</h2>
          <p className="text-stone-600 leading-relaxed text-sm mb-4">
            The Dr. Vera chat assistant is a digital health education tool. It is not a real person,
            licensed physician, registered dietitian, or healthcare provider of any kind. All responses are
            for educational purposes only and should never be used as a substitute for professional medical
            consultation, diagnosis, or treatment.
          </p>
          <p className="text-stone-600 leading-relaxed text-sm">
            Erica Ehiwe and Your Health Guide are not liable for any health decisions made based on
            responses from this chat tool.
          </p>
        </section>

        <section id="privacy" className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm mb-6">
          <h2 className="font-serif text-2xl text-forest-900 mb-4">Privacy Policy</h2>

          <h3 className="font-serif text-lg text-forest-900 mb-2 mt-4">What we collect</h3>
          <ul className="space-y-2 mb-4 text-stone-600 text-sm leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
              <span><strong className="text-stone-800">When you download a guide:</strong> your first name and email address.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
              <span><strong className="text-stone-800">When you subscribe to the newsletter:</strong> your email address (and optionally your first name).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
              <span><strong className="text-stone-800">When you visit the site:</strong> standard server logs (IP address, browser user agent, timestamps) for security and abuse prevention.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
              <span>We do <strong className="text-stone-800">not</strong> collect health information, payment information, or any identifying data beyond name and email.</span>
            </li>
          </ul>

          <h3 className="font-serif text-lg text-forest-900 mb-2 mt-6">Why we collect it</h3>
          <ul className="space-y-2 mb-4 text-stone-600 text-sm leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
              <span>To deliver the guide you requested.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
              <span>To send occasional educational emails from Your Health Guide.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
              <span>Your data is never sold, never shared with advertisers, and never used for purposes beyond what is described here.</span>
            </li>
          </ul>

          <h3 className="font-serif text-lg text-forest-900 mb-2 mt-6">Who processes it</h3>
          <ul className="space-y-2 mb-4 text-stone-600 text-sm leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
              <span><strong className="text-stone-800">Resend</strong> handles email delivery. Based in the United States.{' '}
                <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-forest-600 underline">View Resend&apos;s privacy policy</a>.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
              <span><strong className="text-stone-800">Vercel</strong> hosts the website and serves these pages. Based in the United States.{' '}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-forest-600 underline">View Vercel&apos;s privacy policy</a>.
              </span>
            </li>
          </ul>

          <h3 className="font-serif text-lg text-forest-900 mb-2 mt-6">Your rights</h3>
          <ul className="space-y-2 mb-4 text-stone-600 text-sm leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
              <span>Unsubscribe from email at any time using the link at the bottom of every message we send.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
              <span>Request access to, correction of, or deletion of the data we hold on you by emailing{' '}
                <a href="mailto:privacy@yourhealthguide.co" className="text-forest-600 underline">privacy@yourhealthguide.co</a>.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
              <span><strong className="text-stone-800">EU / UK residents:</strong> under GDPR you have additional rights including data portability and the right to lodge a complaint with your supervisory authority.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
              <span><strong className="text-stone-800">California residents:</strong> under CCPA you have additional rights including the right to know what we have collected about you and the right to request deletion.</span>
            </li>
          </ul>

          <h3 className="font-serif text-lg text-forest-900 mb-2 mt-6">Data retention</h3>
          <ul className="space-y-2 mb-2 text-stone-600 text-sm leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
              <span>Email addresses are retained until you unsubscribe or request deletion.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
              <span>Server logs are retained for 90 days, then deleted.</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm">
          <h2 className="font-serif text-2xl text-forest-900 mb-4">Permissions &amp; Contact</h2>
          <p className="text-stone-600 leading-relaxed text-sm mb-6">
            For permissions requests, licensing inquiries, privacy requests, or to report unauthorized use of this content, email{' '}
            <a href="mailto:privacy@yourhealthguide.co" className="text-forest-600 underline">privacy@yourhealthguide.co</a>.
          </p>
          <p className="text-stone-400 text-sm">
            © {year} Erica Ehiwe · All rights reserved ·{' '}
            <Link href="/" className="text-forest-600 hover:text-forest-900 transition-colors">Return Home</Link>
          </p>
        </section>
      </div>
      <footer className="bg-forest-950 text-forest-400 text-center py-8 px-4">
        <p className="text-sm">© {year} Your Health Guide · Erica Ehiwe</p>
      </footer>
    </main>
  )
}
