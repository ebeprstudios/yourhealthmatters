import Link from 'next/link'
import NewsletterForm from '@/components/ui/NewsletterForm'

/**
 * Canonical educational disclaimer footer.
 *
 * Required by Section 5 of the brand prompt on every guide page, system
 * page, and blog post. Holds:
 *   - The two-doorway tagline (top nav mirrored as a primary column)
 *   - The five secondary tools (moved out of top nav per Phase 5)
 *   - Newsletter capture
 *   - Medical disclaimer
 *   - Legal links
 */
export default function DisclaimerFooter() {
  return (
    <footer
      className="mt-16"
      style={{ backgroundColor: 'var(--paper-sunk)', color: 'var(--ink-700)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Top row: tagline + 3-column link sets + newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b" style={{ borderColor: 'var(--ink-100)' }}>
          {/* Brand + tagline */}
          <div className="md:col-span-2">
            <p className="font-serif text-lg mb-2" style={{ color: 'var(--ink-900)' }}>
              Your Health Guide<sup className="text-[0.55em] align-super">™</sup>
            </p>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--ink-700)' }}>
              One body. Two doorways. Educational stewardship from Dr. Vera, the teaching voice of Your Health Guide.
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-500)' }}>
              Grounded in West African, Ayurvedic, TCM, Mediterranean, Caribbean, and Amazonian traditions.
            </p>
          </div>

          {/* Primary nav mirror */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--ink-900)' }}>
              The Architecture
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline" style={{ color: 'var(--ink-700)' }}>Home</Link></li>
              <li><Link href="/food-as-medicine" className="hover:underline" style={{ color: 'var(--ink-700)' }}>Food as Medicine</Link></li>
              <li><Link href="/mind-as-medicine" className="hover:underline" style={{ color: 'var(--ink-700)' }}>Mind as Medicine</Link></li>
              <li><Link href="/#about" className="hover:underline" style={{ color: 'var(--ink-700)' }}>About</Link></li>
            </ul>
          </div>

          {/* Secondary tools */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--ink-900)' }}>
              Tools &amp; Reference
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/systems" className="hover:underline" style={{ color: 'var(--ink-700)' }}>18 Organ Systems</Link></li>
              <li><Link href="/insulin-zones" className="hover:underline" style={{ color: 'var(--ink-700)' }}>Insulin Zones</Link></li>
              <li><Link href="/sleep-guide" className="hover:underline" style={{ color: 'var(--ink-700)' }}>Sleep Guide</Link></li>
              <li><Link href="/shopping-list" className="hover:underline" style={{ color: 'var(--ink-700)' }}>Shopping List</Link></li>
              <li><Link href="/subscribe" className="hover:underline" style={{ color: 'var(--ink-700)' }}>Subscribe</Link></li>
              <li>
                <Link href="/mind-as-medicine#station-6" className="hover:underline" style={{ color: 'var(--ink-700)' }}>
                  Devotional · Station 6
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter capture */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-b" style={{ borderColor: 'var(--ink-100)' }}>
          <div>
            <p className="text-sm font-semibold mb-1" style={{ color: 'var(--ink-900)' }}>
              Weekly Health Tips
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--ink-500)' }}>
              One mechanism-driven teaching per week from either doorway. Drop your email.
            </p>
          </div>
          <NewsletterForm variant="footer" />
        </div>

        {/* Medical disclaimer */}
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

        {/* Legal row */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs" style={{ color: 'var(--ink-500)' }}>
          <p>
            © {new Date().getFullYear()} Erica Ehiwe · Educational content · Not medical advice
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/legal" className="underline hover:no-underline">Legal &amp; Copyright</Link>
            <Link href="/legal#medical" className="underline hover:no-underline">Medical Disclaimer</Link>
            <Link href="/legal#ai" className="underline hover:no-underline">Dr. Vera Disclaimer</Link>
            <Link href="/legal#privacy" className="underline hover:no-underline">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
