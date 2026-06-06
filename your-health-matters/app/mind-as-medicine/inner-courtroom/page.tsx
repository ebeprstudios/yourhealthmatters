import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import DisclaimerFooter from '@/components/ui/DisclaimerFooter'
import DrVeraChat from '@/components/chat/DrVeraChat'
import InnerCourtroom from './InnerCourtroom'

export const metadata: Metadata = {
  title: 'The Inner Courtroom | Station 2 Deep-Dive | Mind as Medicine',
  description:
    'A deep-dive on Station 2 (Binary Collapse): how the mind sorts an ambiguous reality into a verdict about your worth (judge, prosecutor, and jury) and what breaks the cycle. From Dr. Vera Holloway.',
  openGraph: {
    title: 'The Inner Courtroom · Station 2 Deep-Dive',
    description:
      'The courtroom is binary collapse dramatized: "she pulled away" becomes "I have been replaced." Learn how the verdict is rendered, and how to reopen the case.',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fbf9fd' }}>
      <Nav />

      {/* Back-link — returns to Station 2 on the Mind as Medicine page */}
      <div className="max-w-[760px] mx-auto px-5 pt-24 pb-0">
        <Link
          href="/mind-as-medicine#station-2"
          className="inline-flex items-center gap-1.5 text-xs transition-colors"
          style={{ color: 'var(--ink-500)' }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            aria-hidden="true"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 5 5 12 12 19" />
          </svg>
          Mind as Medicine · Station 2
        </Link>
      </div>

      <InnerCourtroom />

      <DisclaimerFooter />
      <DrVeraChat />
    </main>
  )
}
