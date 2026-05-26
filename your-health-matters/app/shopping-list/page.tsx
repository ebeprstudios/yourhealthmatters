import type { Metadata } from 'next'
import Nav from '@/components/layout/Nav'
import DisclaimerFooter from '@/components/ui/DisclaimerFooter'
import ShoppingListForm from '@/components/shopping/ShoppingListForm'
import { organSystems, foods } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Shopping List Generator | Your Health Guide',
  description:
    'Pick one or more organ systems and a protocol level. Get a printable shopping list of the foods, herbs, fruits, and vegetables that support those systems.',
}

export default function ShoppingListPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--paper)' }}>
      <div className="no-print">
        <Nav />
      </div>

      <header
        className="no-print pt-28 pb-10"
        style={{ backgroundColor: 'var(--paper-sunk)' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: 'var(--zone-peak)' }}
          >
            For Your Kitchen Counter
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl mb-4 max-w-3xl" style={{ color: 'var(--ink-900)' }}>
            Build a printable shopping list
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--ink-700)' }}>
            Pick the organ systems you want to support this week and the
            protocol level you are working at. The list updates as you go;
            print it or save it as PDF when you are ready to head to the
            market.
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <ShoppingListForm organSystems={organSystems} foods={foods} />
      </div>

      <div className="no-print">
        <DisclaimerFooter />
      </div>
    </main>
  )
}
