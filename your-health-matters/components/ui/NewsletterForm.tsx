'use client'

import { useState } from 'react'

interface NewsletterFormProps {
  variant?: 'hero' | 'section' | 'footer' | 'popup'
}

export default function NewsletterForm({ variant = 'section' }: NewsletterFormProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setMessage('You are in! Check your inbox for a welcome note.')
        setEmail('')
        setName('')
      } else {
        setStatus('error')
        setMessage('Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  // ── HERO VARIANT — minimal, inline, white on dark ─────────────
  if (variant === 'hero') {
    return (
      <div className="w-full max-w-md mx-auto">
        {status === 'success' ? (
          <div className="flex items-center gap-3 bg-forest-700/60 backdrop-blur-sm border border-forest-400/40 rounded-full px-5 py-3">
            <span className="text-xl">🌿</span>
            <p className="text-white text-sm font-medium">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-white/15 backdrop-blur-sm border border-white/30 text-white placeholder-white/50 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-white text-forest-900 font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-cream transition-all hover:scale-105 active:scale-95 disabled:opacity-60 whitespace-nowrap"
            >
              {status === 'loading' ? '...' : 'Get Tips'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-red-300 text-xs mt-2 text-center">{message}</p>
        )}
      </div>
    )
  }

  // ── FOOTER VARIANT — compact, horizontal ─────────────────────
  if (variant === 'footer') {
    return (
      <div className="w-full">
        {status === 'success' ? (
          <p className="text-forest-300 text-sm text-center">🌿 {message}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 bg-forest-800 border border-forest-600 text-white placeholder-forest-500 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-forest-400 transition-all"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-forest-500 text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:bg-forest-400 transition-all disabled:opacity-60 whitespace-nowrap"
            >
              {status === 'loading' ? '...' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-xs mt-2">{message}</p>
        )}
      </div>
    )
  }

  // ── POPUP VARIANT — name + email, full card ───────────────────
  if (variant === 'popup') {
    return (
      <div>
        {status === 'success' ? (
          <div className="text-center py-4">
            <p className="text-4xl mb-3">🌿</p>
            <p className="font-serif text-xl text-forest-900 mb-2">You are in!</p>
            <p className="text-stone-500 text-sm">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your first name (optional)"
              className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-100 transition-all"
            />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-100 transition-all"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-forest-900 text-white font-semibold py-3 rounded-xl hover:bg-forest-700 transition-all disabled:opacity-60 active:scale-95"
            >
              {status === 'loading' ? 'Subscribing...' : 'Get Weekly Health Tips'}
            </button>
            {status === 'error' && (
              <p className="text-red-500 text-xs text-center">{message}</p>
            )}
            <p className="text-stone-400 text-xs text-center">
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
          <p className="text-4xl sm:text-5xl mb-4">🌿</p>
          <p className="font-serif text-2xl text-forest-900 mb-2">Welcome aboard!</p>
          <p className="text-stone-500">{message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your first name (optional)"
            className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-100 transition-all bg-white"
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-100 transition-all bg-white"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-forest-900 text-white font-semibold py-3.5 rounded-xl hover:bg-forest-700 transition-all disabled:opacity-60 active:scale-95 text-base"
          >
            {status === 'loading' ? 'Subscribing...' : 'Get Weekly Health Tips'}
          </button>
          {status === 'error' && (
            <p className="text-red-500 text-sm text-center">{message}</p>
          )}
          <p className="text-stone-400 text-sm text-center">
            No spam. Unsubscribe anytime.
          </p>
        </form>
      )}
    </div>
  )
}
