import { Lock, Camera, Fingerprint, ShieldAlert, ShieldCheck, LayoutGrid } from 'lucide-react'

export default function ProductSection() {
  const cardStyle = {
    borderRadius: '15.7px',
    border: '1.31px solid #3D3D3D',
    background: '#282828',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '9px',
    padding: '24px',
  }

  const labelStyle = {
    color: '#fff',
    fontSize: '14px',
    textAlign: 'center',
    fontFamily: 'DM Sans',
  }

  return (
    <section className="bg-[#0f0f0f] py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left side */}
        <div className="w-full md:w-[380px] flex flex-col gap-8">
          <h2 style={{
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: '600',
            lineHeight: '100%',
            letterSpacing: '0.005em',
            background: 'linear-gradient(135deg, #7E7E7E, #FFFFFF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }} className="text-3xl md:text-5xl">
            Lorem Ipsum<br />Dollar
          </h2>

          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '24px',
            letterSpacing: '0.005em',
            color: '#FFFFFF',
          }}>
            Consequat netus consequat tortor vitae cursus nullam tincidunt urna. Tristique leo consequat
          </p>

          <img
            src="/lock.png"
            alt="Lock"
            className="w-40 md:w-64 h-auto"
          />
        </div>

        {/* Right side - mobile: grid, desktop: absolute */}
        
        {/* Mobile grid */}
        <div className="w-full grid grid-cols-2 gap-4 md:hidden">
          {[
            { icon: <Lock size={28} color="white" />, label: 'Lorem Ipsum Dollar' },
            { icon: <Camera size={28} color="white" />, label: 'Lorem Ipsum Dollar' },
            { icon: <Fingerprint size={28} color="white" />, label: 'Lorem Ipsum Dollar' },
            { icon: <ShieldAlert size={28} color="white" />, label: 'Lorem Ipsum Dollar' },
            { icon: <ShieldCheck size={28} color="white" />, label: 'Lorem Ipsum Dollar' },
            { icon: <LayoutGrid size={28} color="white" />, label: 'Lorem Ipsum Dollar' },
          ].map((card, i) => (
            <div key={i} style={cardStyle}>
              {card.icon}
              <p style={labelStyle}>{card.label}</p>
            </div>
          ))}
        </div>

        {/* Desktop absolute layout */}
        <div className="hidden md:block w-[637px] relative" style={{height: '566px'}}>

          {/* Card 1 - Lock */}
          <div style={{...cardStyle, position:'absolute', top:'24px', left:'130px', width:'169px', height:'157px'}}>
            <Lock size={28} color="white" />
            <p style={labelStyle}>Lorem Ipsum Dollar</p>
          </div>

          {/* Card 2 - Camera */}
          <div style={{...cardStyle, position:'absolute', top:'24px', left:'323px', width:'288px', height:'157px'}}>
            <Camera size={28} color="white" />
            <p style={labelStyle}>Lorem Ipsum Dollar</p>
          </div>

          {/* Card 3 - Fingerprint */}
          <div style={{...cardStyle, position:'absolute', top:'205px', left:'130px', width:'255px', height:'157px'}}>
            <Fingerprint size={28} color="white" />
            <p style={labelStyle}>Lorem Ipsum Dollar</p>
          </div>

          {/* Card 4 - ShieldAlert - tall */}
          <div style={{...cardStyle, position:'absolute', top:'205px', left:'418px', width:'193px', height:'334px'}}>
            <ShieldAlert size={28} color="white" />
            <p style={labelStyle}>Lorem Ipsum Dollar</p>
          </div>

          {/* Card 5 - ShieldCheck */}
          <div style={{...cardStyle, position:'absolute', top:'382px', left:'23px', width:'169px', height:'157px'}}>
            <ShieldCheck size={28} color="white" />
            <p style={labelStyle}>Lorem Ipsum Dollar</p>
          </div>

          {/* Card 6 - LayoutGrid */}
          <div style={{...cardStyle, position:'absolute', top:'382px', left:'216px', width:'169px', height:'157px'}}>
            <LayoutGrid size={28} color="white" />
            <p style={labelStyle}>Lorem Ipsum Dollar</p>
          </div>

        </div>

      </div>
    </section>
  )
}