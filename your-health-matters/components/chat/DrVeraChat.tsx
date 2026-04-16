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

  // Auto-scroll to bottom only when there are messages
  useEffect(() => {
    if (messages.length === 0 && !loading) return
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
    const lines = content.split('\n')
    const elements: React.ReactNode[] = []
    let i = 0

    while (i < lines.length) {
      const line = lines[i]

      // Disclaimer line
      if (line.startsWith('⚕️')) {
        elements.push(
          <p key={i} className="text-xs text-stone-400 italic mt-3 pt-3 border-t border-stone-200">{line}</p>
        )
        i++; continue
      }

      // Skip horizontal rules
      if (line.trim() === '---' || line.trim() === '---' || /^-{3,}$/.test(line.trim())) {
        i++; continue
      }

      // Skip table separator rows
      if (/^[|\-\s]+$/.test(line) && line.includes('|') && line.includes('-')) {
        i++; continue
      }

      // Table data rows
      if (line.startsWith('|') && line.endsWith('|')) {
        const cells = line.split('|').filter(c => c.trim())
        const isHeader = lines[i+1] && /^[|\-\s]+$/.test(lines[i+1])
        elements.push(
          <div key={i} className={`flex gap-2 text-sm py-1 ${isHeader ? 'font-semibold text-forest-900 border-b border-stone-200 mb-1' : 'text-stone-700'}`}>
            {cells.map((cell, ci) => (
              <span key={ci} className="flex-1">{cell.trim().replace(/\*\*/g, '')}</span>
            ))}
          </div>
        )
        i++; continue
      }

      // ## Headings
      if (line.startsWith('## ')) {
        const text = line.replace(/^##\s+/, '').replace(/\*\*/g, '')
        elements.push(
          <p key={i} className="font-semibold text-forest-900 text-sm mt-3 mb-1">{text}</p>
        )
        i++; continue
      }

      // # Headings
      if (line.startsWith('# ')) {
        const text = line.replace(/^#\s+/, '').replace(/\*\*/g, '')
        elements.push(
          <p key={i} className="font-bold text-forest-900 text-base mt-3 mb-1">{text}</p>
        )
        i++; continue
      }

      // Bullet points - or *
      if (line.match(/^[\-\*]\s/) || line.match(/^\d+\.\s/)) {
        const text = line.replace(/^[\-\*\d+\.]+\s/, '')
        const clean = text.replace(/\*\*(.*?)\*\*/g, '$1')
        elements.push(
          <div key={i} className="flex items-start gap-2 text-sm text-stone-700 py-0.5">
            <span className="text-forest-500 mt-0.5 flex-shrink-0">✦</span>
            <span>{clean}</span>
          </div>
        )
        i++; continue
      }

      // Empty line
      if (line.trim() === '') {
        elements.push(<div key={i} className="h-2" />)
        i++; continue
      }

      // Regular paragraph - strip ** bold markers, render clean
      const clean = line.replace(/\*\*(.*?)\*\*/g, '$1')
      elements.push(
        <p key={i} className="text-sm text-stone-700 leading-relaxed">{clean}</p>
      )
      i++
    }

    return elements
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
            <p className="text-white font-semibold text-sm font-serif">Dr. Vera, CNS</p>
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
                  : 'Nutrition, herbs, body systems, healing protocols - ask anything.'
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
            Educational only - not medical advice
          </p>
        </div>
      </div>
    </div>
  )
}
