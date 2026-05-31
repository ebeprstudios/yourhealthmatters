import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/layout/Nav'
import DisclaimerFooter from '@/components/ui/DisclaimerFooter'
import DrVeraChat from '@/components/chat/DrVeraChat'
import InnerCourtroom from './InnerCourtroom'

export const metadata: Metadata = {
  title: 'The Inner Courtroom | Mind as Medicine | Your Health Guide',
  description:
    'How the mind forms an inner courtroom — judge, prosecutor, and jury — and renders secret verdicts about your worth. A Root Work teaching from Dr. Vera Holloway, CNS + CHN.',
  openGraph: {
    title: 'The Inner Courtroom · Root Work',
    description:
      'Inside the mind, a trial is always running. Learn how the inner courtroom forms, how it sustains itself, and what breaks the cycle.',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#fbf9fd' }}>
      <Nav />

      {/* Breadcrumb — clears the fixed nav, sits above the component's own header */}
      <div className="max-w-[760px] mx-auto px-5 pt-24 pb-0">
        <Link
          href="/root-work"
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
          Root Work
        </Link>
      </div>

      <InnerCourtroom />

      <DisclaimerFooter />
      <DrVeraChat />
    </main>
  )
}
