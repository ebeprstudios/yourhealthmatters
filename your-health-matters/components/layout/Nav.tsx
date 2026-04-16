'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-forest-100'
          : 'bg-forest-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="text-2xl group-hover:scale-110 transition-transform">🌿</span>
          <div>
            <p className={`font-serif font-bold text-base leading-tight transition-colors ${
              scrolled ? 'text-forest-900' : 'text-white'
            }`}>
              Erica Ehiwe
            </p>
            <p className={`text-xs leading-tight transition-colors ${
              scrolled ? 'text-forest-600' : 'text-forest-200'
            }`}>
              Your Health Matters
            </p>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { href: '/#guides', label: 'Healing Guides' },
            { href: '/#about', label: 'About' },
            { href: '/legal', label: 'Legal' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors hover:text-forest-400 ${
                scrolled ? 'text-stone-600' : 'text-white/90'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#chat"
            className={`text-sm font-medium px-4 py-2 rounded-full border transition-all hover:bg-forest-900 hover:text-white hover:border-forest-900 ${
              scrolled
                ? 'border-forest-900 text-forest-900'
                : 'border-white text-white hover:bg-white hover:text-forest-900'
            }`}
          >
            Ask Dr. Vera
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-forest-900' : 'text-white'}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-5 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-5 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-forest-100 px-4 py-4 space-y-3">
          {[
            { href: '/#guides', label: 'Healing Guides' },
            { href: '/#about', label: 'About' },
            { href: '/legal', label: 'Legal' },
            { href: '/#chat', label: '🌿 Ask Dr. Vera' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-stone-700 hover:text-forest-900 py-2"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
