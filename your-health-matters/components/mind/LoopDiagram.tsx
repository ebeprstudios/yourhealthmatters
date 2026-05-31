'use client'

import { STATIONS } from '@/lib/data/stations'

/**
 * Six-station loop diagram — wheel on desktop, vertical chain on mobile.
 *
 * Desktop: SVG circle with six nodes; arrows run clockwise 1→2→3→4→5→6 and
 * a curved arc on the outside returns 6→1 to make the loop visible.
 * Mobile: vertical chain of cards with down arrows + a final "↻ back to
 * Station 1" indicator at the bottom.
 *
 * Each node is a button that scrolls to its #station-N anchor.
 */
export default function LoopDiagram() {
  return (
    <>
      <div className="hidden md:block">
        <WheelLoop />
      </div>
      <div className="md:hidden">
        <ChainLoop />
      </div>
    </>
  )
}

// ──────────────────────────────────────────────────────────────────────
// Desktop — circular wheel
// ──────────────────────────────────────────────────────────────────────

function WheelLoop() {
  const size = 720
  const cx = size / 2
  const cy = size / 2
  const r = 260 // node ring radius
  const nodeR = 78 // node radius

  // Compute station node positions (start at top, go clockwise)
  const positions = STATIONS.map((s, i) => {
    const angle = (-Math.PI / 2) + (i * 2 * Math.PI) / STATIONS.length
    return {
      station: s,
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
      angle,
    }
  })

  // Calculate arc paths between adjacent nodes
  const arrows = positions.map((p, i) => {
    const next = positions[(i + 1) % positions.length]
    const isReturn = i === positions.length - 1 // 6 → 1
    return { from: p, to: next, isReturn }
  })

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="w-full max-w-3xl mx-auto"
      role="img"
      aria-label="The six-station mind-body loop, arranged as a wheel."
    >
      {/* Defs: arrowhead marker */}
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#6b5b95" />
        </marker>
        <marker id="arrowhead-return" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill="#a88a3d" />
        </marker>
      </defs>

      {/* Connecting arrows between adjacent nodes (inside the ring) */}
      {arrows.map(({ from, to, isReturn }, i) => {
        if (isReturn) {
          // Curved arc on the outside of the wheel, 6 → 1
          const midAngle = ((from.angle + to.angle + 2 * Math.PI) / 2) % (2 * Math.PI)
          const outerR = r + 130
          const mx = cx + outerR * Math.cos(midAngle - Math.PI)
          const my = cy + outerR * Math.sin(midAngle - Math.PI)
          // Start point on outer edge of "from", end on outer edge of "to"
          const startX = from.x + (nodeR + 6) * Math.cos(from.angle)
          const startY = from.y + (nodeR + 6) * Math.sin(from.angle)
          const endX = to.x + (nodeR + 6) * Math.cos(to.angle + Math.PI)
          const endY = to.y + (nodeR + 6) * Math.sin(to.angle + Math.PI)
          return (
            <path
              key={i}
              d={`M ${startX} ${startY} Q ${mx} ${my} ${endX} ${endY}`}
              fill="none"
              stroke="#a88a3d"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              markerEnd="url(#arrowhead-return)"
              opacity="0.75"
            />
          )
        }
        // Straight inner arrow between adjacent nodes
        // Shorten endpoints so the arrow lives between the node circles
        const dx = to.x - from.x
        const dy = to.y - from.y
        const dist = Math.hypot(dx, dy)
        const ux = dx / dist
        const uy = dy / dist
        const startX = from.x + ux * (nodeR + 4)
        const startY = from.y + uy * (nodeR + 4)
        const endX = to.x - ux * (nodeR + 8)
        const endY = to.y - uy * (nodeR + 8)
        return (
          <line
            key={i}
            x1={startX}
            y1={startY}
            x2={endX}
            y2={endY}
            stroke="#6b5b95"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
            opacity="0.65"
          />
        )
      })}

      {/* Station nodes */}
      {positions.map(({ station, x, y }) => (
        <g key={station.number}>
          <a href={`#station-${station.number}`} aria-label={`Jump to Station ${station.number}: ${station.name}`}>
            <circle
              cx={x}
              cy={y}
              r={nodeR}
              fill={station.colorHex}
              stroke="white"
              strokeWidth="3"
              style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
            />
            <text
              x={x}
              y={y - 6}
              textAnchor="middle"
              fill="white"
              fontFamily="Playfair Display, Georgia, serif"
              fontSize="38"
              fontWeight="bold"
              style={{ pointerEvents: 'none' }}
            >
              {station.number}
            </text>
            <text
              x={x}
              y={y + 22}
              textAnchor="middle"
              fill="white"
              fontFamily="Inter, system-ui, sans-serif"
              fontSize="13"
              fontWeight="600"
              style={{ pointerEvents: 'none', letterSpacing: '0.04em' }}
            >
              {station.name.toUpperCase()}
            </text>
          </a>
        </g>
      ))}
    </svg>
  )
}

// ──────────────────────────────────────────────────────────────────────
// Mobile — vertical chain
// ──────────────────────────────────────────────────────────────────────

function ChainLoop() {
  return (
    <ol className="flex flex-col items-center gap-3" aria-label="The six-station mind-body loop, arranged vertically.">
      {STATIONS.map((s, i) => (
        <li key={s.number} className="w-full max-w-sm">
          <a
            href={`#station-${s.number}`}
            className="block rounded-2xl p-4 text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ backgroundColor: s.colorHex, color: 'white' }}
            aria-label={`Jump to Station ${s.number}: ${s.name}`}
          >
            <p className="font-serif text-2xl mb-1">{s.number}</p>
            <p className="text-xs font-semibold uppercase tracking-wider opacity-95">{s.name}</p>
          </a>
          {i < STATIONS.length - 1 && (
            <div className="flex justify-center py-2" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b5b95" strokeWidth="2">
                <line x1="12" y1="4" x2="12" y2="20" />
                <polyline points="6 14 12 20 18 14" />
              </svg>
            </div>
          )}
        </li>
      ))}
      {/* Return arrow back to Station 1 */}
      <li className="text-center pt-2" aria-hidden="true">
        <p className="text-sm" style={{ color: '#a88a3d' }}>
          ↻ back to Station 1, the loop closes
        </p>
      </li>
    </ol>
  )
}
