export default function StatsSection() {
  return (
    <section className="bg-[#0f0f0f] flex flex-col items-center px-6 py-16 md:py-20 gap-10 md:gap-16">

      {/* Heading */}
      <h2 style={{
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: '600',
        letterSpacing: '0.005em',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #7E7E7E, #FFFFFF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }} className="text-3xl md:text-5xl">
        Lorem ipsum dolor sit amet<br />consectetur.
      </h2>

      {/* 3 Cards */}
      <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-5xl gap-6 md:gap-9">
        {[1,2,3].map((i) => (
          <div key={i} style={{
            borderRadius: '12px',
            border: '1px solid #505050',
            background: '#1a1a1a',
          }} className="w-full md:max-w-[317px] p-6 md:p-8 flex flex-col items-start gap-3">

            {/* 23% */}
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '700',
              lineHeight: '100%',
              letterSpacing: '0.005em',
              textAlign: 'left',
              background: 'linear-gradient(135deg, #7E7E7E, #FFFFFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }} className="text-7xl md:text-8xl">
              23<span className="text-5xl md:text-6xl">%</span>
            </p>

            {/* Description */}
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: '400',
              letterSpacing: '0.005em',
              color: '#7E7E7E',
              textAlign: 'left',
            }} className="text-sm leading-5">
              Consequat netus{' '}
              <span style={{color: '#FFFFFF', fontWeight: '700'}}>consequat</span>
              {' '}tortor vitae cursus nullam tincidunt urna.{' '}
              <span style={{color: '#FFFFFF', fontWeight: '700'}}>Tristique</span>
              {' '}leo
            </p>

          </div>
        ))}
      </div>

    </section>
  )
}