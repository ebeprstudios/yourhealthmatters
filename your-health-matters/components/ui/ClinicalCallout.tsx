import type { ReactNode } from 'react'

type CalloutVariant = 'clinical' | 'warning' | 'firststep'

interface ClinicalCalloutProps {
  variant?: CalloutVariant
  title: string
  children: ReactNode
}

const VARIANT_TOKEN: Record<CalloutVariant, { bg: string; accent: string }> = {
  clinical: { bg: 'var(--callout-clinical)', accent: 'var(--zone-peak)' },
  warning: { bg: 'var(--callout-warning)', accent: 'var(--zone-caution)' },
  firststep: { bg: 'var(--callout-firststep)', accent: 'var(--zone-declining)' },
}

/**
 * Inline clinical callout. Use for juice/salad rules, drug-interaction
 * warnings, and practical-first-step blocks. Required by Section 7 of the
 * brand prompt wherever the related content is shown.
 */
export default function ClinicalCallout({
  variant = 'clinical',
  title,
  children,
}: ClinicalCalloutProps) {
  const tokens = VARIANT_TOKEN[variant]
  const isWarning = variant === 'warning'
  return (
    <aside
      role={isWarning ? 'alert' : undefined}
      className="rounded-2xl p-5 sm:p-6 relative"
      style={{
        backgroundColor: tokens.bg,
        borderLeft: `4px solid ${tokens.accent}`,
        color: 'var(--ink-900)',
      }}
    >
      <h3
        className="font-serif text-lg mb-2 flex items-center gap-2"
        style={{ color: tokens.accent }}
      >
        <span aria-hidden="true">{isWarning ? '⚠' : variant === 'firststep' ? '✦' : '•'}</span>
        <span>{title}</span>
      </h3>
      <div className="text-sm leading-relaxed" style={{ color: 'var(--ink-700)' }}>
        {children}
      </div>
    </aside>
  )
}
