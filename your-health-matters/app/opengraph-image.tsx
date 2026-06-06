import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Your Health Guide — Because your health matters.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  let playfairData: ArrayBuffer | null = null
  try {
    playfairData = await fetch(
      'https://fonts.gstatic.com/s/playfairdisplay/v37/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvUDQZNLo_U2r.woff2'
    ).then((r) => r.arrayBuffer())
  } catch {
    // fall back to system serif if font fetch fails
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#1f1b2e',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background texture — radial glow */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            left: -120,
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(107,91,149,0.35) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            right: -80,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(61,42,90,0.4) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            padding: '72px 96px',
            position: 'relative',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 40,
                height: 3,
                backgroundColor: '#6b5b95',
                borderRadius: 2,
              }}
            />
            <span
              style={{
                fontFamily: playfairData ? 'Playfair Display' : 'serif',
                fontSize: 16,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#a899c9',
                fontWeight: 700,
              }}
            >
              yourhealthguide.co
            </span>
          </div>

          {/* Main title */}
          <div
            style={{
              fontFamily: playfairData ? 'Playfair Display' : 'serif',
              fontSize: 80,
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#f4f0fa',
              marginBottom: 28,
              maxWidth: 860,
            }}
          >
            Your Health Guide
            <span style={{ fontSize: 44, verticalAlign: 'super', color: '#a899c9' }}>™</span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontFamily: playfairData ? 'Playfair Display' : 'serif',
              fontSize: 28,
              fontStyle: 'italic',
              color: '#c4b8df',
              lineHeight: 1.4,
              maxWidth: 680,
              marginBottom: 48,
            }}
          >
            Because your health matters.
          </div>

          {/* Two doorways */}
          <div style={{ display: 'flex', gap: 16 }}>
            {['Food as Medicine', 'Mind as Medicine'].map((label) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: 8,
                  paddingBottom: 8,
                  paddingLeft: 20,
                  paddingRight: 20,
                  borderRadius: 100,
                  backgroundColor: 'rgba(107,91,149,0.25)',
                  border: '1px solid rgba(107,91,149,0.5)',
                  color: '#d4c8ee',
                  fontSize: 18,
                  fontFamily: 'sans-serif',
                  fontWeight: 500,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            height: 6,
            background: 'linear-gradient(90deg, #6b5b95 0%, #3d2a5a 50%, #6b5b95 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
      ...(playfairData
        ? {
            fonts: [
              {
                name: 'Playfair Display',
                data: playfairData,
                style: 'normal',
                weight: 700,
              },
            ],
          }
        : {}),
    }
  )
}
