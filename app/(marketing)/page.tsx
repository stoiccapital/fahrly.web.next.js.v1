import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoStrip from './components/LogoStrip'
import PainSection from './components/PainSection'
import ValueProps from './components/ValueProps'
import FeatureSection from './components/FeatureSection'
import DeepDive from './components/DeepDive'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
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
        <FeatureSection
          variant="right"
          title="Feature Section One"
          description="This is the first feature section that highlights a key capability of the product. It demonstrates how the solution addresses specific needs and provides value to users."
        />
        <FeatureSection
          variant="left"
          title="Feature Section Two"
          description="This is the second feature section that showcases another important aspect of the product. It explains additional functionality and benefits that users can expect."
        />
        <DeepDive />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

