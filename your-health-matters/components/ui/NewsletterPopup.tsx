'use client'

import { useState, useEffect } from 'react'
import NewsletterForm from '@/components/ui/NewsletterForm'

export default function NewsletterPopup() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem('newsletter_dismissed')
    if (wasDismissed) return
    const timer = setTimeout(() => setShow(true), 30000)
    return () => clearTimeout(timer)
  }, [])

  function dismiss() {
    setShow(false)
    setDismissed(true)
    sessionStorage.setItem('newsletter_dismissed', 'true')
  }

  if (!show || dismissed) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
        onClick={dismiss}
      />

      {/* Popup - perfectly centered using flex on all screen sizes */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-md pointer-events-auto animate-scale-in">

          {/* Header */}
          <div className="bg-forest-900 px-6 py-6 text-center relative">
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 text-forest-400 hover:text-white transition-colors text-xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-forest-700"
              aria-label="Close"
            >
              ✕
            </button>
            <p className="text-4xl mb-2">🌿</p>
            <h2 className="font-serif text-2xl text-white mb-1">
              Your Health. Every Week.
            </h2>
            <p className="text-forest-300 text-sm">
              From Erica Ehiwe - Your Health Matters
            </p>
          </div>

          {/* Body */}
          <div className="px-6 pt-5 pb-2">
            <p className="text-stone-600 text-sm leading-relaxed text-center mb-4">
              Join the community learning how food heals. Every week you receive two emails:
            </p>

            <div className="space-y-3 mb-5">
              <div className="flex items-start gap-3 bg-forest-50 rounded-xl px-4 py-3">
                <span className="text-lg flex-shrink-0">📖</span>
                <div>
                  <p className="text-forest-900 font-semibold text-sm">
                    Friday - Weekly Health Edition
                  </p>
                  <p className="text-stone-500 text-xs leading-relaxed mt-0.5">
                    Scripture of the week, healing food, herb, and a clinical protocol tip grounded in evidence and faith.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-amber-50 rounded-xl px-4 py-3">
                <span className="text-lg flex-shrink-0">🥗</span>
                <div>
                  <p className="text-amber-900 font-semibold text-sm">
                    Saturday - Weekly Meal Prep Guide
                  </p>
                  <p className="text-stone-500 text-xs leading-relaxed mt-0.5">
                    A full week of healing meals organized around your body's natural insulin time zones - so every meal works with your biology, not against it.
                  </p>
                </div>
              </div>
            </div>

            {/* Insulin zone teaser */}
            <div className="flex gap-2 mb-5">
              {[
                { label: 'Peak Zone', time: '6am - 2pm', color: 'bg-forest-100 text-forest-800' },
                { label: 'Midday', time: '12pm - 3pm', color: 'bg-amber-100 text-amber-800' },
                { label: 'Evening', time: '5pm - 7pm', color: 'bg-purple-100 text-purple-800' },
              ].map(({ label, time, color }) => (
                <div key={label} className={`flex-1 rounded-lg px-2 py-2 text-center ${color}`}>
                  <p className="font-semibold text-xs">{label}</p>
                  <p className="text-xs opacity-70">{time}</p>
                </div>
              ))}
            </div>

            <NewsletterForm variant="popup" />
          </div>

          <div className="px-6 pb-5">
            <p className="text-stone-400 text-xs text-center">
              No spam. No selling your data. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
