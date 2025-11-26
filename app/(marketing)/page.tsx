import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoStrip from './components/LogoStrip'
import PainSection from './components/PainSection'
import ValueProps from './components/ValueProps'
import FeatureSection from './components/FeatureSection'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Security from './components/Security'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-[#050509]">
      <Navbar />
      <main className="space-y-24 md:space-y-32 lg:space-y-40 pt-16">
        <Hero />
        <LogoStrip />
        <PainSection />
        <ValueProps />
        <FeatureSection />
        <Testimonials />
        <Pricing />
        <Security />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

