export default function Footer() {
  const socialIcons = [
    {
      label: 'Facebook',
      svg: (
        <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
        </svg>
      )
    },
    {
      label: 'Instagram',
      svg: (
        <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none"/>
        </svg>
      )
    },
    {
      label: 'X',
      svg: (
        <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      label: 'LinkedIn',
      svg: (
        <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      )
    },
    {
      label: 'YouTube',
      svg: (
        <svg width="18" height="18" fill="white" viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
          <polygon fill="#0f0f0f" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
        </svg>
      )
    },
  ]

  return (
    <>
      <section className="py-16 px-6 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center relative overflow-hidden" style={{
            borderRadius: '16px',
            border: '1px solid #343434',
            background: '#232323',
            padding: '64px 32px',
            boxShadow: '0 0 5px 6px rgba(80,80,80,0.08), 0 4px 70px 10px rgba(80,80,80,0.10)',
          }}>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 rounded-full bg-gray-800/20 blur-3xl" />
            </div>

<div
  className="absolute inset-0 flex items-end justify-center pointer-events-none"
  style={{
    zIndex: 0,
    bottom: "0px", 
  }}
>
  {[1, 2, 3, 4, 5, 6].map((i) => (
    <div
      key={i}
      style={{
        position: "absolute",
        width: `${i * 160}px`, // gap zyada
        height: `${i * 50}px`,
        borderRadius: `${i * 180}px ${i * 180}px 0 0`,
        border: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "none",
        background: "transparent",
      }}
    />
  ))}
</div>

            <div className="relative z-10">
              <h2 style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: '700',
                textAlign: 'center',
              }} className="text-4xl md:text-5xl mb-6">
                <span style={{color: '#7E7E7E'}}>Ready </span>
                <span style={{color: '#FFFFFF'}}>to get started?</span>
              </h2>
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                color: '#A0A0A0',
                fontSize: '16px',
                lineHeight: '24px',
              }} className="max-w-xl mx-auto mb-8">
                Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin.
                In enim tortor sed libero velit lectus. Egestas facilisi neque a arcu vitae dignissim.
                Sit lobortis orci risus volutpat eu habitasse.
              </p>
              <button className="bg-purple-700 hover:bg-purple-600 text-white text-sm font-medium px-8 py-3 rounded-full transition-colors">
                Book a demo
              </button>
            </div>

          </div>
        </div>
      </section>

      <footer className="px-6 py-10" style={{background: '#0f0f0f'}}>
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
            <span className="text-white font-bold text-lg" style={{fontFamily: 'DM Sans'}}>PentAi.</span>

            <p style={{color: '#A0A0A0', fontSize: '14px', fontFamily: 'DM Sans'}}>
              © 2024 by PentAi. All rights are reserved.
            </p>

            <div className="flex items-center gap-4">
              {socialIcons.map((s, i) => (
                <div key={i} title={s.label} style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '1px solid #3a3a3a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}>
                  {s.svg}
                </div>
              ))}
            </div>
          </div>

          <div style={{height: '1px', background: '#343434', marginBottom: '16px'}} />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{color: '#A0A0A0', fontSize: '12px', fontFamily: 'DM Sans'}}>
              Realised by Right Tail Corp.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" style={{color: '#A0A0A0', fontSize: '12px', fontFamily: 'DM Sans'}}
                className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" style={{color: '#A0A0A0', fontSize: '12px', fontFamily: 'DM Sans'}}
                className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}