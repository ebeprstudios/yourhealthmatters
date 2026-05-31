'use client'

import { useMemo, useState } from 'react'
import type { OrganSystem, Food, ProtocolLevel } from '@/lib/types'

interface ShoppingListFormProps {
  organSystems: OrganSystem[]
  foods: Food[]
}

const LEVEL_LABEL: Record<Exclude<ProtocolLevel, never>, string> = {
  1: 'Level 1, Starter',
  2: 'Level 2, Intermediate',
  3: 'Level 3, Pro',
}

/**
 * Printable shopping list generator.
 * User picks one or more organ systems + a protocol level. The list is
 * derived from the typed food data and rendered with a print stylesheet
 * so any browser can save it as PDF natively (no server PDF dependency).
 */
export default function ShoppingListForm({ organSystems, foods }: ShoppingListFormProps) {
  const [selected, setSelected] = useState<string[]>([])
  const [level, setLevel] = useState<ProtocolLevel>(1)

  function toggle(slug: string) {
    setSelected((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    )
  }

  const list = useMemo(() => {
    if (selected.length === 0) return null
    const matched = foods.filter((f) =>
      f.organSystems.some((s) => selected.includes(s)),
    )
    const vegetables = matched.filter((f) => f.type === 'vegetable')
    const fruitsList = matched.filter((f) => f.type === 'fruit')
    const herbs = matched.filter((f) => f.type === 'herb')
    // Level 1 omits herbs; Level 2 includes top herbs only; Level 3 = full set
    const includedHerbs =
      level === 1 ? [] : level === 2 ? herbs.slice(0, Math.max(3, herbs.length / 2)) : herbs
    return { vegetables, fruits: fruitsList, herbs: includedHerbs }
  }, [selected, level, foods])

  const selectedSystems = organSystems.filter((s) => selected.includes(s.slug))

  return (
    <div className="space-y-8">
      {/* Selection panel, hidden from print */}
      <section
        className="no-print rounded-2xl p-6"
        style={{ backgroundColor: 'var(--paper-raised)', border: 'var(--border-hairline)', boxShadow: 'var(--shadow-card)' }}
      >
        <h2 className="font-serif text-2xl mb-4" style={{ color: 'var(--ink-900)' }}>
          Build your list
        </h2>

        <fieldset className="mb-6">
          <legend className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--ink-700)' }}>
            Choose one or more organ systems
          </legend>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {organSystems.map((s) => {
              const isOn = selected.includes(s.slug)
              return (
                <label
                  key={s.slug}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer text-sm"
                  style={{
                    backgroundColor: isOn ? s.colorHex : 'var(--paper-sunk)',
                    color: isOn ? 'white' : 'var(--ink-700)',
                    border: `1px solid ${isOn ? s.colorHex : 'var(--ink-100)'}`,
                  }}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={isOn}
                    onChange={() => toggle(s.slug)}
                    aria-label={s.name}
                  />
                  <span aria-hidden="true">{isOn ? '✓' : '+'}</span>
                  <span>{s.name}</span>
                </label>
              )
            })}
          </div>
        </fieldset>

        <fieldset className="mb-6">
          <legend className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--ink-700)' }}>
            Protocol level
          </legend>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((lvl) => {
              const isOn = level === lvl
              return (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setLevel(lvl as ProtocolLevel)}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: isOn ? 'var(--zone-peak)' : 'var(--paper-sunk)',
                    color: isOn ? 'white' : 'var(--ink-700)',
                    border: `1px solid ${isOn ? 'var(--zone-peak)' : 'var(--ink-100)'}`,
                  }}
                  aria-pressed={isOn}
                >
                  {LEVEL_LABEL[lvl as 1 | 2 | 3]}
                </button>
              )
            })}
          </div>
          <p className="text-xs mt-2" style={{ color: 'var(--ink-500)' }}>
            Level 1 starts with whole foods only. Level 2 adds top herbs.
            Level 3 includes the full herb library where applicable.
          </p>
        </fieldset>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            disabled={!list}
            className="inline-flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full transition-all text-sm shadow-md disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ backgroundColor: 'var(--zone-peak)', color: 'white' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            Print or Save as PDF
          </button>
          <button
            type="button"
            onClick={() => setSelected([])}
            disabled={selected.length === 0}
            className="inline-flex items-center gap-2 font-medium px-5 py-2.5 rounded-full transition-all text-sm disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ backgroundColor: 'var(--paper-sunk)', color: 'var(--ink-700)' }}
          >
            Clear selection
          </button>
        </div>
      </section>

      {/* Printable preview */}
      {list && (
        <article
          className="rounded-2xl p-6 sm:p-10 max-w-prose mx-auto"
          style={{
            backgroundColor: 'var(--paper-raised)',
            border: 'var(--border-hairline)',
            color: 'var(--ink-900)',
          }}
        >
          <header className="mb-6 pb-4" style={{ borderBottom: 'var(--border-hairline)' }}>
            <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--ink-500)' }}>
              Your Health Guide · Shopping List
            </p>
            <h2 className="font-serif text-2xl mt-1" style={{ color: 'var(--ink-900)' }}>
              {selectedSystems.map((s) => s.name).join(' · ')}
            </h2>
            <p className="text-sm mt-1" style={{ color: 'var(--ink-500)' }}>
              {LEVEL_LABEL[level as 1 | 2 | 3]} · Generated{' '}
              {new Date().toLocaleDateString(undefined, {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </header>

          <Section title="Vegetables" items={list.vegetables.map((f) => f.name)} />
          <Section title="Fruits" items={list.fruits.map((f) => f.name)} />
          {list.herbs.length > 0 && (
            <Section title="Herbs" items={list.herbs.map((f) => f.name)} />
          )}

          <footer className="mt-8 pt-4 text-xs leading-relaxed" style={{ borderTop: 'var(--border-hairline)', color: 'var(--ink-500)' }}>
            <p>
              Educational only. Not medical advice. Always consult your
              physician before making changes to your diet, supplements, or
              medications, especially if you are pregnant, nursing, on
              prescription medications, or managing a chronic condition.
            </p>
          </footer>
        </article>
      )}
    </div>
  )
}

function Section({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null
  return (
    <section className="mb-6">
      <h3 className="font-serif text-lg mb-3" style={{ color: 'var(--ink-900)' }}>
        {title}
      </h3>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm" style={{ color: 'var(--ink-700)' }}>
        {items.map((name) => (
          <li key={name} className="flex items-baseline gap-2">
            <span aria-hidden="true">☐</span>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
