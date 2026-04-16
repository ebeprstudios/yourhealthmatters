'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface DrVeraChatProps {
  pageScope?: string
  compact?: boolean
}

export default function DrVeraChat({ pageScope, compact = false }: DrVeraChatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [dots, setDots] = useState('.')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Animated thinking dots
  useEffect(() => {
    if (!loading) return
    const interval = setInterval(() => {
      setDots(d => d.length >= 3 ? '.' : d + '.')
    }, 400)
    return () => clearInterval(interval)
  }, [loading])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function sendMessage() {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: 'user', content: text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: messages,
          pageScope,
        }),
      })
      const data = await res.json()
      if (data.response) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
      }
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I\'m temporarily unavailable. Please try again in a moment. ⚕️',
      }])
    } finally {
      setLoading(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  function formatMessage(content: string) {
    // Convert markdown-ish to styled spans
    const lines = content.split('\n')
    return lines.map((line, i) => {
      if (line.startsWith('⚕️')) {
        return (
          <p key={i} className="text-xs text-stone-400 italic mt-3 pt-3 border-t border-stone-200">
            {line}
          </p>
        )
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={i} className="font-semibold text-forest-900 mt-2">{line.slice(2, -2)}</p>
      }
      if (line.startsWith('- ') || line.startsWith('• ')) {
        return (
          <p key={i} className="ml-3 before:content-['·'] before:mr-2 before:text-forest-500">
            {line.slice(2)}
          </p>
        )
      }
      if (line === '') return <div key={i} className="h-2" />
      return <p key={i}>{line}</p>
    })
  }

  return (
    <div className={`${compact ? '' : 'fixed bottom-6 right-6 z-50'}`}>
      {/* Toggle button */}
      {!compact && (
        <button
          onClick={() => setIsOpen(o => !o)}
          className="w-16 h-16 rounded-full bg-forest-900 text-white shadow-2xl flex items-center justify-center text-2xl hover:bg-forest-700 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Chat with Dr. Vera"
        >
          {isOpen ? '✕' : '🌿'}
        </button>
      )}

      {/* Chat panel */}
      <div
        className={`
          ${compact ? 'w-full' : 'absolute bottom-20 right-0 w-[360px] sm:w-[420px]'}
          bg-white rounded-2xl shadow-2xl border border-forest-200 overflow-hidden
          transition-all duration-400 origin-bottom-right
          ${!compact && (isOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-90 pointer-events-none'
          )}
          ${compact ? 'block' : ''}
        `}
      >
        {/* Header */}
        <div className="bg-forest-900 px-5 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-forest-700 flex items-center justify-center text-xl flex-shrink-0">
            🌿
          </div>
          <div>
            <p className="text-white font-semibold text-sm font-serif">Dr. Vera Holloway, CNS</p>
            <p className="text-forest-300 text-xs">Holistic Nutrition Specialist</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-forest-300 text-xs">Online</span>
          </div>
        </div>

        {/* Messages */}
        <div
          className="chat-messages overflow-y-auto bg-cream-50 p-4 space-y-4"
          style={{ height: compact ? '380px' : '340px' }}
        >
          {messages.length === 0 && (
            <div className="text-center pt-6">
              <div className="text-4xl mb-3">🌿</div>
              <p className="text-forest-900 font-semibold text-sm font-serif mb-1">
                Ask Dr. Vera anything
              </p>
              <p className="text-stone-400 text-xs leading-relaxed">
                {pageScope
                  ? 'Ask me about the topics in this guide, or any holistic health question.'
                  : 'Nutrition, herbs, body systems, healing protocols — ask anything.'
                }
              </p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {[
                  'What lowers LDL naturally?',
                  'Best foods for kidneys',
                  'How do I stabilize glucose?',
                ].map(q => (
                  <button
                    key={q}
                    onClick={() => { setInput(q); inputRef.current?.focus() }}
                    className="text-xs bg-forest-50 text-forest-700 border border-forest-200 rounded-full px-3 py-1.5 hover:bg-forest-100 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-forest-900 flex items-center justify-center text-sm mr-2 flex-shrink-0 mt-1">
                  🌿
                </div>
              )}
              <div
                className={`
                  max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed
                  ${msg.role === 'user'
                    ? 'bg-forest-900 text-white rounded-br-none'
                    : 'bg-white text-stone-700 shadow-sm border border-stone-100 rounded-bl-none'
                  }
                `}
              >
                {msg.role === 'assistant'
                  ? <div className="space-y-1">{formatMessage(msg.content)}</div>
                  : msg.content
                }
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-full bg-forest-900 flex items-center justify-center text-sm flex-shrink-0">
                🌿
              </div>
              <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-stone-100">
                <span className="text-forest-600 text-sm font-medium">
                  Dr. Vera is thinking{dots}
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-stone-100 p-3 bg-white">
          <div className="flex gap-2 items-end">
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask Dr. Vera a question..."
              rows={1}
              className="flex-1 resize-none rounded-xl border border-stone-200 px-3 py-2.5 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:border-forest-400 focus:ring-2 focus:ring-forest-100 max-h-24 overflow-y-auto"
              style={{ fieldSizing: 'content' } as React.CSSProperties}
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="w-10 h-10 rounded-xl bg-forest-900 text-white flex items-center justify-center hover:bg-forest-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95 flex-shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
          <p className="text-xs text-stone-400 mt-2 text-center">
            Educational only — not medical advice
          </p>
        </div>
      </div>
    </div>
  )
}
