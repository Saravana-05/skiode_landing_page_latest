import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TrustedBrands from "./components/TrustedBrands"
import StatsSection from "./components/StatsSection"
import BeforeAfter from "./components/BeforeAfter"
import PlatformModules from "./components/PlatformModules"
import HowItWorks from "./components/HowItWorks"
import FormBuilder from "./components/FormBuilder"
import ProcessFlowSection from "./components/ProcessFlowSection"
import DevSection from "./components/DevSection"
import OCRSection from "./components/OCRSection"
import BotSection from "./components/BotSection"
import AIRecruiter from "./components/AIRecruiter"
import ConstructionSection from "./components/ConstructionSection"
import ROICalculator from "./components/ROICalculator"
import Solutions from "./components/Solutions"
import Integrations from "./components/Integrations"
import Governance from "./components/Governance"
import TeamsSection from "./components/TeamsSection"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"
import FinalCTA from "./components/FinalCTA"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustedBrands />
      <StatsSection />
      <BeforeAfter />
      <PlatformModules />
      <HowItWorks />
      <FormBuilder />
      <ProcessFlowSection />
      <DevSection />
      <OCRSection />
      <BotSection />
      <AIRecruiter />
      <ConstructionSection />
      <ROICalculator />
      <Solutions />
      <Integrations />
      <Governance />
      <TeamsSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}
