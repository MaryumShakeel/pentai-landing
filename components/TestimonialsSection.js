export default function TestimonialsSection() {
  const features = [
    {
      title: 'Feature 1',
      desc: 'Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.',
    },
    {
      title: 'Feature 2',
      desc: 'Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.',
    },
    {
      title: 'Feature 3',
      desc: 'Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla netus sollicitudin. In enim tortor sed libero velit lectus.',
    },
  ]

  return (
    <section className="bg-[#0f0f0f] w-full px-6" style={{
      paddingTop: '80px',
      paddingBottom: '80px',
    }}>
      <div className="mx-auto flex flex-col" style={{
        maxWidth: '1024px',
        gap: '64px',
      }}>

        <h2 style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: '600',
          lineHeight: '100%',
          letterSpacing: '0.005em',
          color: '#ECEDEE',
          textAlign: 'center',
        }} className="text-3xl md:text-5xl">
          Lorem ipsum dolor
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">

          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {features.map((f, i) => (
              <div key={i} style={{
                borderRadius: '6px',
                border: '1px solid #3D3D3D',
                background: '#282828',
                padding: '20px 16px',
                gap: '8px',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '20px',
                  fontWeight: '600',
                  lineHeight: '28px',
                  letterSpacing: '0.005em',
                  color: '#ECEDEE',
                }}>
                  {f.title}
                </p>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '16px',
                  fontWeight: '500',
                  lineHeight: '24px',
                  letterSpacing: '0.005em',
                  color: '#ECEDEE',
                }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/2" style={{
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #3D3D3D',
            minHeight: '300px',
          }}>
            <img
              src="/dashboard.png"
              alt="Dashboard"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}