export default function DashboardSection() {
  return (
    <section className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8">
        
        {/* Heading */}
        <div className="text-center">
          <h2 style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: '700',
            letterSpacing: '0.005em',
            textAlign: 'center',
          }} className="text-3xl md:text-4xl lg:text-5xl mb-4">
            <span style={{color: '#7E7E7E'}} className="font-light">Lorem ipsum </span>
            <span style={{color: '#FFFFFF'}}>dolor sit amet</span>
            <br />
            <span style={{color: '#FFFFFF'}}>consectetur.</span>
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '28px',
            letterSpacing: '0.005em',
            color: '#ECEDEE',
            textAlign: 'center',
          }}>
            Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla
          </p>
        </div>

        {/* Dashboard Image */}
        <div className="w-full rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
          <img
            src="/dashboard.png"
            alt="Financial Dashboard"
            className="w-full h-auto"
          />
        </div>

      </div>
    </section>
  )
}