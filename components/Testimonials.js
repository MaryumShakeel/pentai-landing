export default function Testimonials() {
  const testimonials = [
    {
      img: '/l1.png',
      name: 'Floyd Miles',
      text: 'Magnis lacus laoreet pharetra commodo ac semper nam. Malesuada viverra mattis pellentesque consectetur nunc dignissim gravida duis. Ornare at turpis purus leo metus arcu arcu sed faucibus.',
    },
    {
      img: '/l2.png',
      name: 'Esther Howard',
      text: 'Arcu augue egestas nec facilisis volutpat tortor tempus vitae sit.',
    },
    {
      img: '/l3.png',
      name: 'Erat consectetur',
      text: 'Diam tellus risus venenatis arcu sed pretium enim. Gravida odio tincidunt sem risus sit. Ac enim odio id accumsan pretium quisque venenatis suscipit lobortis.',
    },
    {
      img: '/l4.png',
      name: 'Mauris pulvinar',
      text: 'Quis ultricies molestie massa elit convallis lectus orci. Accumsan vulputate tempor dapibus nunc.',
    },
    {
      img: '/l5.png',
      name: 'Egestas mauris',
      text: 'Magna id ut eu amet blandit sit auctor gravida. Massa praesent neque et elementum suspendisse.',
    },
    {
      img: '/l6.png',
      name: 'Aliquet rhoncus',
      text: 'Urna pellentesque in elementum lacus amet tristique. Nec elementum lacus urna quis odio. Posuere facilisi ultricies et donec mauris ornare interdum dui ut.',
    },
    {
      img: '/l7.png',
      name: 'Placerat nisl',
      text: 'Tristique nulla proin augue sit aliquam donec ornare. Aliquam diam egestas egestas feugiat lacinia. Facilisis sagittis nibh morbi ornare nunc luctus sit aliquet. Molestie sed viverra vel integer diam.',
    },
    {
      img: '/l8.png',
      name: 'Magna tellus',
      text: 'Leo praesent quisque placerat adipiscing eget sed rutrum pharetra. Tellus id vitae arcu lobortis. Elementum eu facilisis at quam pellentesque volutpat a. Dictum eleifend nunc aenean auctor.',
    },
  ]

  return (
    <section style={{
      background: '#0f0f0f',
      paddingTop: '64px',
      paddingBottom: '64px',
      width: '100%',
    }}>
      <div className="mx-auto flex flex-col px-4" style={{
        maxWidth: '1280px',
        gap: '36px',
      }}>

        <h2 style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '48px',
          fontWeight: '600',
          lineHeight: '100%',
          letterSpacing: '0.005em',
          color: '#ECEDEE',
          textAlign: 'center',
        }}>
          Tons of others love using PentAi.
        </h2>

        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
          {testimonials.map((t, i) => (
            <div key={i} style={{
              borderRadius: '12px',
              background: '#232323',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }} className="break-inside-avoid mb-4">
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    flexShrink: 0,
                  }}
                />
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#ECEDEE',
                }}>
                  {t.name}
                </p>
              </div>

              {/* Text */}
              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '24px',
                letterSpacing: '0.005em',
                color: '#A0A0A0',
              }}>
                {t.text}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}