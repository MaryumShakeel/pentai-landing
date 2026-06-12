import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import DashboardSection from '../components/DashboardSection'
import StatsSection from '../components/StatsSection'
import ProductSection from '../components/ProductSection'
import FeaturesSection from '../components/FeaturesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] text-white">
      <Navbar />
      <Hero />
      <DashboardSection />
      <StatsSection />
      <ProductSection />
      <FeaturesSection />
      <TestimonialsSection />

      <Testimonials />

      <Footer />
    </main>
  )
}