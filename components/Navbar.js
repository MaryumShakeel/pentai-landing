import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <img
        src="/navbar.png"
        alt="Navbar"
        className="w-full h-auto"
      />
    </nav>
  )
}