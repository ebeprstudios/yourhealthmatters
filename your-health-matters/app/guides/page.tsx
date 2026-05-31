import type { Metadata } from 'next'
import FoodAsMedicineLibrary from '@/components/food/FoodAsMedicineLibrary'

export const metadata: Metadata = {
  title: 'Food as Medicine | Your Health Guide',
  description:
    'What you put in the body, eighteen organ systems, hundreds of foods, herbs, and juices mapped to the cellular work they do. Foundational, Specialty, and Advanced food-as-medicine protocols.',
}

// Alias: the old /guides route renders the same library as the new
// /food-as-medicine canonical route. Both URLs keep working.
export default function GuidesLibraryAliasPage() {
  return <FoodAsMedicineLibrary />
}
