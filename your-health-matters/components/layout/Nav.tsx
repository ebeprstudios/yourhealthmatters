'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Top nav: the two doorways + About, then Ask Dr. Vera and a Subscribe CTA.
// The logo links home (so no redundant "Home" item). The four secondary
// tools (Systems, Insulin Zones, Sleep Guide, Shopping List) live in the footer.
const PRIMARY_LINKS = [
  { href: '/food-as-medicine', label: 'Food as Medicine' },
  { href: '/mind-as-medicine', label: 'Mind as Medicine' },
  { href: '/#about', label: 'About' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? 'rgba(251, 248, 242, 0.96)'
          : 'rgba(31, 94, 58, 0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? 'var(--border-hairline)' : 'none',
      }}
      aria-label="Primary"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="text-2xl group-hover:scale-110 transition-transform" aria-hidden="true">🌿</span>
          <div>
            <p
              className="font-serif font-bold text-base leading-tight transition-colors"
              style={{ color: scrolled ? 'var(--ink-900)' : 'white' }}
            >
              Your Health Guide
              <sup className="text-[0.55em] font-normal align-super ml-0.5" aria-label="trademark">™</sup>
            </p>
            <p
              className="text-xs italic leading-tight transition-colors"
              style={{ color: scrolled ? 'var(--ink-500)' : 'rgba(255,255,255,0.75)' }}
            >
              Because your health matters
            </p>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-5">
          {PRIMARY_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium transition-colors"
              style={{ color: scrolled ? 'var(--ink-700)' : 'rgba(255,255,255,0.92)' }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#chat"
            className="text-sm font-medium px-4 py-2 rounded-full border transition-all"
            style={{
              borderColor: scrolled ? 'var(--ink-900)' : 'white',
              color: scrolled ? 'var(--ink-900)' : 'white',
            }}
          >
            Ask Dr. Vera
          </Link>
          <Link
            href="/subscribe"
            className="text-sm font-semibold px-4 py-2 rounded-full transition-all"
            style={{ backgroundColor: 'var(--zone-peak)', color: 'white' }}
          >
            Subscribe
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          style={{ color: scrolled ? 'var(--ink-900)' : 'white' }}
        >
          <div className="w-5 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-5 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-5 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 py-4 space-y-1"
          style={{
            backgroundColor: 'var(--paper-raised)',
            borderTop: 'var(--border-hairline)',
          }}
        >
          {PRIMARY_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium py-2.5"
              style={{ color: 'var(--ink-700)' }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#chat"
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium py-2.5"
            style={{ color: 'var(--zone-peak)' }}
          >
            🌿 Ask Dr. Vera
          </Link>
          <Link
            href="/subscribe"
            onClick={() => setMenuOpen(false)}
            className="block text-center text-sm font-semibold py-2.5 mt-2 rounded-full"
            style={{ backgroundColor: 'var(--zone-peak)', color: 'white' }}
          >
            Subscribe
          </Link>
        </div>
      )}
    </nav>
  )
}
