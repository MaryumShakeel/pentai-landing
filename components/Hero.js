export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 md:pt-40 pb-0 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-purple-900/20 blur-[120px]" />
      </div>

      {/* Hero text */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: '700',
          letterSpacing: '0.005em',
          textAlign: 'center',
        }} className="text-3xl md:text-5xl lg:text-6xl mb-4">
          <span style={{color: '#7E7E7E'}}>Lorem ipsum </span>
          <span style={{color: '#FFFFFF'}}>dolor sit amet</span>
          <br />
          <span style={{color: '#FFFFFF'}}>consectetur</span>
        </h1>

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: '400',
          letterSpacing: '0.005em',
          color: '#ECEDEE',
          textAlign: 'center',
        }} className="text-sm md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
          Arcu phasellus enim leo nulla tortor faucibus. Sed odio ultrices est
          vivamus mauris fames et. Sed lacus purus in tellus.
        </p>

        <div className="flex justify-center">
          <img
            src="/button.png"
            alt="Book a demo"
            className="cursor-pointer hover:opacity-80 transition-opacity w-32 md:w-auto"
          />
        </div>
      </div>

      {/* Supporters */}
      <div style={{
        background: 'radial-gradient(ellipse at center, #2d1b4e 0%, #0f0f0f 70%)',
        paddingTop: '60px',
        paddingBottom: '32px',
        paddingLeft: '10px',
        paddingRight: '10px',
        gap: '47px',
      }} className="relative z-10 w-full mt-16 md:mt-24 flex flex-col items-center">

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '20px',
          fontWeight: '600',
          lineHeight: '32px',
          letterSpacing: '0.005em',
          color: '#ECEDEE',
          textAlign: 'center',
        }}>Our Supporters</p>

        <div style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: '400',
          letterSpacing: '0.005em',
        }} className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm md:text-xl">
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} style={{color: '#FFFFFF'}}>
              Supporter-logo
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}