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
      </Routes>
      <Footer />
      <ChatBot />
    </div>
  )
}
