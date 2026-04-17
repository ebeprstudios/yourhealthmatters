'use client'

import { useState, useEffect } from 'react'
import NewsletterForm from '@/components/ui/NewsletterForm'

export default function NewsletterPopup() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Don't show if already dismissed this session
    const wasDismissed = sessionStorage.getItem('newsletter_dismissed')
    if (wasDismissed) return

    const timer = setTimeout(() => {
      setShow(true)
    }, 30000) // 30 seconds

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
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 animate-fade-in"
        onClick={dismiss}
      />

      {/* Popup */}
      <div className="fixed bottom-0 left-0 right-0 sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-50 w-full sm:max-w-md animate-slide-up">
        <div className="bg-white sm:rounded-2xl shadow-2xl overflow-hidden mx-0 sm:mx-4">
          {/* Header */}
          <div className="bg-forest-900 px-6 py-6 text-center relative">
            <button
              onClick={dismiss}
              className="absolute top-4 right-4 text-forest-400 hover:text-white transition-colors text-xl leading-none"
              aria-label="Close"
            >
              ✕
            </button>
            <p className="text-4xl mb-2">🌿</p>
            <h2 className="font-serif text-2xl text-white mb-1">
              Weekly Health Tips
            </h2>
            <p className="text-forest-300 text-sm">
              From Erica Ehiwe · Your Health Matters
            </p>
          </div>

          {/* Body */}
          <div className="px-6 py-6">
            <p className="text-stone-600 text-sm leading-relaxed mb-5 text-center">
              Get evidence-based insights on healing foods, herbs, body systems,
              and daily protocols delivered to your inbox every week.
            </p>
            <NewsletterForm variant="popup" />
          </div>
        </div>
      </div>
    </>
  )
}
