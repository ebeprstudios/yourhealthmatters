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
  metadataBase: new URL('https://yourhealthguide.co'),
  title: 'Your Health Guide | Because your health matters',
  description:
    'Because your health matters. Evidence-based holistic health guides covering nutrition, herbs, body systems, and healing protocols — researched and created by Erica Ehiwe.',
  keywords:
    'holistic health, nutrition, healing foods, herbal medicine, insulin timing, cholesterol, kidney health',
  authors: [{ name: 'Erica Ehiwe' }],
  openGraph: {
    title: 'Your Health Guide | Because your health matters',
    description:
      'Evidence-based healing guides for the whole body — food, herbs, and lifestyle protocols grounded in multi-tradition holistic medicine.',
    type: 'website',
    url: 'https://yourhealthguide.co',
    siteName: 'Your Health Guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Health Guide | Because your health matters',
    description:
      'Evidence-based healing guides for the whole body — food, herbs, and lifestyle protocols grounded in multi-tradition holistic medicine.',
  },
  alternates: { canonical: 'https://yourhealthguide.co' },
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
