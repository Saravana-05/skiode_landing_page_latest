import Hero from '../components/Hero'
import TrustedBrands from '../components/TrustedBrands'
import StatsSection from '../components/StatsSection'
import BeforeAfter from '../components/BeforeAfter'
import InteractiveShowcase from '../components/InteractiveShowcase'
import PlatformOverview from '../components/PlatformOverview'
import ProcessFlowShowcase from '../components/ProcessFlowShowcase'
import IntegrationsShowcase from '../components/IntegrationsShowcase'
import FinalCTA from '../components/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <StatsSection />
      <BeforeAfter />
      <InteractiveShowcase />
      <div id="platform"></div>
      <PlatformOverview />
      <ProcessFlowShowcase />
      <IntegrationsShowcase />
      <FinalCTA />
    </>
  )
}
