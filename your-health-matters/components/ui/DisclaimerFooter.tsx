import Link from 'next/link'
import NewsletterForm from '@/components/ui/NewsletterForm'

/**
 * Canonical educational disclaimer footer. Required by Section 5 of the brand
 * prompt on every guide page, system page, and blog post. Holds the legal
 * disclaimer, footer credit, and the secondary newsletter capture.
 */
export default function DisclaimerFooter() {
  return (
    <footer
      className="mt-16"
      style={{ backgroundColor: 'var(--paper-sunk)', color: 'var(--ink-700)' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b" style={{ borderColor: 'var(--ink-100)' }}>
          <div>
            <p className="font-serif text-lg mb-2" style={{ color: 'var(--ink-900)' }}>
              Your Health Matters
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-500)' }}>
              Holistic Health Research and Education — grounded in West African,
              Ayurvedic, TCM, Mediterranean, Caribbean, and Amazonian traditions.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold mb-3" style={{ color: 'var(--ink-900)' }}>
              Weekly Health Tips
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>

        <div
          className="mt-8 rounded-xl p-5"
          style={{ backgroundColor: 'var(--paper-raised)', border: 'var(--border-hairline)' }}
        >
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--ink-700)' }}>
            <strong style={{ color: 'var(--ink-900)' }}>Medical Disclaimer.</strong>{' '}
            This content is educational and does not substitute for the care of
            your own physician. Always consult your healthcare provider before
            making changes to your diet, supplement routine, or medications —
            especially if you are pregnant, nursing, on prescription medications,
            or managing a chronic condition.
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs" style={{ color: 'var(--ink-500)' }}>
          <p>
            © {new Date().getFullYear()} Erica Ehiwe · Educational content · Not medical advice
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/legal" className="underline hover:no-underline">Legal &amp; Copyright</Link>
            <Link href="/legal#medical" className="underline hover:no-underline">Medical Disclaimer</Link>
            <Link href="/legal#ai" className="underline hover:no-underline">Dr. Vera Disclaimer</Link>
            <Link href="/devotional" className="underline hover:no-underline">Devotional</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
