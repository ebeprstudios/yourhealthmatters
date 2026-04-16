import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Your Health Matters | Holistic Health Research & Education',
  description:
    'Evidence-based holistic health guides covering nutrition, herbs, body systems, and healing protocols - researched and created by Erica Ehiwe for Your Health Matters.',
  keywords: 'holistic health, nutrition, healing foods, herbal medicine, insulin timing, cholesterol, kidney health',
  authors: [{ name: 'Erica Ehiwe' }],
  openGraph: {
    title: 'Your Health Matters | Holistic Health Research & Education',
    description: 'Evidence-based healing guides for the whole body.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-cream antialiased">
        {children}
      </body>
    </html>
  )
}
