import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'The Inner Courtroom | Station 2 Deep-Dive | Mind as Medicine'
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
          backgroundColor: '#13111e',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background texture — subtle radial purple glow top-left */}
        <div
          style={{
            position: 'absolute',
            top: -140,
            left: -140,
            width: 750,
            height: 750,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(61,42,90,0.45) 0%, transparent 70%)',
          }}
        />
        {/* Secondary glow bottom-right */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            right: -100,
            width: 550,
            height: 550,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(61,42,90,0.3) 0%, transparent 70%)',
          }}
        />

        {/* Scales watermark — large emoji, right-center, semi-transparent */}
        <div
          style={{
            position: 'absolute',
            right: 80,
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 220,
            opacity: 0.18,
            lineHeight: 1,
            display: 'flex',
          }}
        >
          ⚖️
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            padding: '72px 96px',
            position: 'relative',
            maxWidth: 820,
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
                backgroundColor: '#a88a3d',
                borderRadius: 2,
              }}
            />
            <span
              style={{
                fontFamily: playfairData ? 'Playfair Display' : 'serif',
                fontSize: 16,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#a88a3d',
                fontWeight: 700,
              }}
            >
              yourhealthguide.co · Station 2 Deep-Dive
            </span>
          </div>

          {/* Main title */}
          <div
            style={{
              fontFamily: playfairData ? 'Playfair Display' : 'serif',
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#f2f0f8',
              marginBottom: 28,
            }}
          >
            The Inner Courtroom
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontFamily: playfairData ? 'Playfair Display' : 'serif',
              fontSize: 24,
              fontStyle: 'italic',
              color: '#b8aed4',
              lineHeight: 1.5,
              maxWidth: 680,
              marginBottom: 0,
            }}
          >
            Binary collapse, dramatized: the mind convenes a verdict about your worth before the evidence is in.
          </div>
        </div>

        {/* Bottom bar — gold to purple */}
        <div
          style={{
            height: 6,
            background: 'linear-gradient(90deg, #a88a3d 0%, #3d2a5a 100%)',
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
