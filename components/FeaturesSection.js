
'use client'
import { useEffect, useState } from 'react'

export default function FeaturesSection() {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const generated = Array.from({length: 45}, (_, i) => ({
      id: i,
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * 100)}%`,
      size: Math.floor(Math.random() * 3) + 1,
    }))
    setStars(generated)
  }, [])

  const checkItems = [
    'Pellentesque odio sit sem nulla fringilla cum diam morbi at. Consectetur enim nulla risus elementum mattis.',
    'Pellentesque odio sit sem nulla fringilla cum diam morbi at. Consectetur enim nulla risus elementum mattis.',
    'Pellentesque odio sit sem nulla fringilla cum diam morbi at. Consectetur enim nulla risus elementum mattis.',
    'Pellentesque odio sit sem nulla fringilla cum diam morbi at. Consectetur enim nulla risus elementum mattis.',
  ]

  return (
    <section className="bg-[#0f0f0f] w-full px-6" style={{
      paddingTop: '64px',
      paddingBottom: '64px',
    }}>
      <div className="mx-auto flex flex-col gap-16" style={{maxWidth: '1024px'}}>

        <div className="flex flex-col md:flex-row gap-9">
          {['/dashboard.png', '/dashboard1.png'].map((img, i) => (
            <div key={i} style={{
              width: '100%',
              maxWidth: '494px',
              height: '480px',
              borderRadius: '12px',
              background: '#232323',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <img
                src={img}
                alt="Dashboard"
                style={{
                  position: 'absolute',
                  top: '63px',
                  left: '73px',
                  width: '538px',
                  height: '351px',
                  borderRadius: '8px',
                }}
              />
            </div>
          ))}
        </div>

        {/* Text section with stars + ellipse */}
        <div className="relative overflow-hidden" style={{
          paddingBottom: '200px',
        }}>

          {stars.map((star) => (
            <div key={star.id} style={{
              position: 'absolute',
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: '50%',
              background: '#ffffff',
              boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(255,255,255,0.6)`,
              pointerEvents: 'none',
              zIndex: 0,
            }} />
          ))}

          <div className="flex flex-col md:flex-row gap-9 relative" style={{zIndex: 1}}>
            {[0, 1].map((i) => (
              <div key={i} className="flex flex-col" style={{gap: '30px', width: '100%', maxWidth: '494px'}}>

                <h3 style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '36px',
                  fontWeight: '600',
                  lineHeight: '40px',
                  letterSpacing: '0.005em',
                  color: '#9BA1A6',
                }}>
                  Lorem Ipsum{' '}
                  <span style={{color: '#FFFFFF'}}>Dolar Sed congue</span>
                </h3>

                <ul className="flex flex-col gap-4">
                  {checkItems.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div style={{
                        minWidth: '30.88px',
                        minHeight: '30.88px',
                        borderRadius: '50%',
                        background: '#EDEDED',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '2px',
                        flexShrink: 0,
                      }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '20px',
                        fontWeight: '400',
                        lineHeight: '28px',
                        letterSpacing: '0.005em',
                        color: '#ECEDEE',
                        maxWidth: '446px',
                      }}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

          <div style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100vw',
            zIndex: 0,
          }}>
            <svg viewBox="0 0 1440 493" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <defs>
                <linearGradient id="ellipseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#A0A0A0" />
                  <stop offset="100%" stopColor="#505050" stopOpacity="0" />
                </linearGradient>
              </defs>
              <ellipse
                cx="720"
                cy="0"
                rx="720"
                ry="493"
                fill="none"
                stroke="url(#ellipseGrad)"
                strokeWidth="2"
              />
            </svg>
          </div>

        </div>
      </div>
    </section>
  )
}