import type { Metadata } from 'next'
import FoodAsMedicineLibrary from '@/components/food/FoodAsMedicineLibrary'

export const metadata: Metadata = {
  title: 'Food as Medicine | Your Health Guide',
  description:
    'What you put in the body: eighteen organ systems, hundreds of foods, herbs, and juices mapped to the cellular work they do. Foundational, Specialty, and Advanced food-as-medicine protocols.',
}

// Canonical route. The legacy /guides URL is an alias that renders the
// same component (see app/guides/page.tsx).
export default function FoodAsMedicinePage() {
  return <FoodAsMedicineLibrary />
}
