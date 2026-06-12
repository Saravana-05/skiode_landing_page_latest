import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'
import Home from './pages/Home'
import PlatformPage from './pages/PlatformPage'
import PricingPage from './pages/PricingPage'
import RequestDemo from './pages/RequestDemo'
import ThankYou from './pages/ThankYou'
import UseCases from './pages/UseCases'
import Industries from './pages/Industries'
import FormBuilderPage from './pages/platform/FormBuilderPage'
import ProcessFlowPage from './pages/platform/ProcessFlowPage'
import OcrPage from './pages/platform/OcrPage'
import BotsPage from './pages/platform/BotsPage'
import DashboardsPage from './pages/platform/DashboardsPage'
import UsersPermissionsPage from './pages/platform/UsersPermissionsPage'
import IntegrationsPage from './pages/platform/IntegrationsPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/platform/form-builder" element={<FormBuilderPage />} />
        <Route path="/platform/process-flow" element={<ProcessFlowPage />} />
        <Route path="/platform/ocr" element={<OcrPage />} />
        <Route path="/platform/bots" element={<BotsPage />} />
        <Route path="/platform/dashboards" element={<DashboardsPage />} />
        <Route path="/platform/users-permissions" element={<UsersPermissionsPage />} />
        <Route path="/platform/integrations" element={<IntegrationsPage />} />
      </Routes>
      <Footer />
      <ChatBot />
    </div>
  )
}
