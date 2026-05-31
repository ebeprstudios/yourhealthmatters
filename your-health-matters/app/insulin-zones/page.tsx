import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import DisclaimerFooter from '@/components/ui/DisclaimerFooter'
import ClinicalCallout from '@/components/ui/ClinicalCallout'
import ZoneTimeline from '@/components/insulin/ZoneTimeline'
import { insulinZones } from '@/lib/data'

export const metadata: Metadata = {
  title: 'The Insulin Time Zones | Your Health Guide',
  description:
    'Insulin sensitivity follows a predictable daily curve. The same meal at 8am and 6pm produces a 2–3x difference in glucose response. Learn the four zones, Peak, Declining, Caution, and Closed, and how to eat with the curve.',
}

export default function InsulinZonesPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--paper)' }}>
      <Nav />

      <header className="pt-28 pb-12" style={{ backgroundColor: 'var(--paper-sunk)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--zone-peak)' }}
          >
            The Daily Curve
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl mb-4 max-w-3xl" style={{ color: 'var(--ink-900)' }}>
            The Insulin Time Zones
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--ink-700)' }}>
            Your body handles the same food differently across the day.
            Insulin sensitivity peaks in the morning and falls steadily until
            the kitchen closes at 7pm. Tap a zone in the bar below to see
            what to eat, and what to leave for tomorrow morning.
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <ZoneTimeline zones={insulinZones} />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          <ClinicalCallout title="The walk protocol">
            A 10–15 minute walk after every meal reduces post-meal glucose
            peaks by 20–30%. This is the most evidence-supported free
            intervention available in any insulin zone.
          </ClinicalCallout>
          <ClinicalCallout variant="warning" title="The 7pm kitchen close">
            After 7pm, every food competes with the overnight repair cycle.
            Liver Phase II detox, autophagy, growth hormone release, and the
            glymphatic brain flush all require an empty digestive system to
            run at full capacity.
          </ClinicalCallout>
        </div>

        <ClinicalCallout variant="firststep" title="Practical First Step">
          For the next seven days, eat your largest meal between 11am and
          1pm. Move it earlier than you usually would. Then notice your
          energy in the late afternoon. It will tell you what your body
          has been asking for all along.
        </ClinicalCallout>
      </div>

      <DisclaimerFooter />
    </main>
  )
}
