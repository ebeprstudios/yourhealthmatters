'use client'

import { useState } from 'react'

interface NewsletterFormProps {
  variant?: 'hero' | 'section' | 'footer' | 'popup'
  /** Show the optional scripture-stream opt-in. Default: false for footer/hero, true for section/popup. */
  showScriptureOptIn?: boolean
}

export default function NewsletterForm({
  variant = 'section',
  showScriptureOptIn,
}: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [scripture, setScripture] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const showScripture =
    typeof showScriptureOptIn === 'boolean'
      ? showScriptureOptIn
      : variant === 'section' || variant === 'popup'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, scripture }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus('success')
        setMessage('You are in. Check your inbox for a welcome note.')
        setEmail('')
        setName('')
        setScripture(false)
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  const scriptureField = showScripture ? (
    <label className="flex items-start gap-2 text-xs" style={{ color: 'var(--ink-500)' }}>
      <input
        type="checkbox"
        checked={scripture}
        onChange={(e) => setScripture(e.target.checked)}
        className="mt-0.5"
        aria-describedby="scripture-opt-in-help"
      />
      <span>
        Also send me <strong style={{ color: 'var(--ink-700)' }}>weekly scripture reflections</strong>{' '}
        <span id="scripture-opt-in-help" style={{ color: 'var(--ink-500)' }}>(optional)</span>
      </span>
    </label>
  ) : null

  // ── HERO VARIANT — minimal, inline, white on dark ─────────────
  if (variant === 'hero') {
    return (
      <div className="w-full max-w-md mx-auto">
        {status === 'success' ? (
          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-5 py-3">
            <span className="text-xl" aria-hidden="true">🌿</span>
            <p className="text-white text-sm font-medium">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <label className="sr-only" htmlFor="hero-email">Email address</label>
            <input
              id="hero-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-white/15 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-white/80 transition-all"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-60 whitespace-nowrap"
              style={{ color: 'var(--zone-peak)' }}
            >
              {status === 'loading' ? '...' : 'Get Tips'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-white/90 text-xs mt-2 text-center">{message}</p>
        )}
      </div>
    )
  }

  // ── FOOTER VARIANT — compact, horizontal ─────────────────────
  if (variant === 'footer') {
    return (
      <div className="w-full">
        {status === 'success' ? (
          <p className="text-sm" style={{ color: 'var(--ink-700)' }}>🌿 {message}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <label className="sr-only" htmlFor="footer-email">Email address</label>
            <input
              id="footer-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 rounded-full px-4 py-2.5 text-sm transition-all"
              style={{
                backgroundColor: 'var(--paper-raised)',
                border: 'var(--border-hairline)',
                color: 'var(--ink-900)',
              }}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="font-semibold px-5 py-2.5 rounded-full text-sm transition-all disabled:opacity-60 whitespace-nowrap"
              style={{ backgroundColor: 'var(--zone-peak)', color: 'white' }}
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-xs mt-2" style={{ color: 'var(--zone-caution)' }}>{message}</p>
        )}
      </div>
    )
  }

  // ── POPUP VARIANT — name + email + opt-in ─────────────────────
  if (variant === 'popup') {
    return (
      <div>
        {status === 'success' ? (
          <div className="text-center py-4">
            <p className="text-4xl mb-3" aria-hidden="true">🌿</p>
            <p className="font-serif text-xl mb-2" style={{ color: 'var(--ink-900)' }}>You are in!</p>
            <p className="text-sm" style={{ color: 'var(--ink-500)' }}>{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <label className="sr-only" htmlFor="popup-name">First name (optional)</label>
            <input
              id="popup-name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your first name (optional)"
              className="w-full rounded-xl px-4 py-3 text-sm transition-all"
              style={{
                backgroundColor: 'var(--paper-raised)',
                border: 'var(--border-hairline)',
                color: 'var(--ink-900)',
              }}
            />
            <label className="sr-only" htmlFor="popup-email">Email address</label>
            <input
              id="popup-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full rounded-xl px-4 py-3 text-sm transition-all"
              style={{
                backgroundColor: 'var(--paper-raised)',
                border: 'var(--border-hairline)',
                color: 'var(--ink-900)',
              }}
            />
            {scriptureField}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full font-semibold py-3 rounded-xl transition-all disabled:opacity-60 active:scale-95"
              style={{ backgroundColor: 'var(--zone-peak)', color: 'white' }}
            >
              {status === 'loading' ? 'Subscribing...' : 'Get Weekly Health Tips'}
            </button>
            {status === 'error' && (
              <p className="text-xs text-center" style={{ color: 'var(--zone-caution)' }}>{message}</p>
            )}
            <p className="text-xs text-center" style={{ color: 'var(--ink-500)' }}>
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    )
  }

  // ── SECTION VARIANT — default, full featured ──────────────────
  return (
    <div>
      {status === 'success' ? (
        <div className="text-center py-6">
          <p className="text-4xl sm:text-5xl mb-4" aria-hidden="true">🌿</p>
          <p className="font-serif text-2xl mb-2" style={{ color: 'var(--ink-900)' }}>Welcome aboard.</p>
          <p style={{ color: 'var(--ink-500)' }}>{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto">
          <label className="sr-only" htmlFor="section-name">First name (optional)</label>
          <input
            id="section-name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your first name (optional)"
            className="w-full rounded-xl px-4 py-3 transition-all"
            style={{
              backgroundColor: 'var(--paper-raised)',
              border: 'var(--border-hairline)',
              color: 'var(--ink-900)',
            }}
          />
          <label className="sr-only" htmlFor="section-email">Email address</label>
          <input
            id="section-email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="w-full rounded-xl px-4 py-3 transition-all"
            style={{
              backgroundColor: 'var(--paper-raised)',
              border: 'var(--border-hairline)',
              color: 'var(--ink-900)',
            }}
          />
          {scriptureField}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full font-semibold py-3.5 rounded-xl transition-all disabled:opacity-60 active:scale-95 text-base"
            style={{ backgroundColor: 'var(--zone-peak)', color: 'white' }}
          >
            {status === 'loading' ? 'Subscribing...' : 'Get Weekly Health Tips'}
          </button>
          {status === 'error' && (
            <p className="text-sm text-center" style={{ color: 'var(--zone-caution)' }}>{message}</p>
          )}
          <p className="text-sm text-center" style={{ color: 'var(--ink-500)' }}>
            No spam. Unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  )
}
