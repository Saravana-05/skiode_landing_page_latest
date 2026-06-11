import { motion } from 'framer-motion'
import { CreditCard, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PricingSection from '../components/PricingSection'
import ROICalculator from '../components/ROICalculator'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function PricingPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-28 pb-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-30"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold mb-6"
            style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', color: '#3b82f6' }}
          >
            <CreditCard size={14} /> Pricing & Plans
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-5 leading-tight"
          >
            Simple pricing.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Powerful platform.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-lg text-slate-500 max-w-xl mx-auto"
          >
            Start free for 6 months. Scale as you grow. No hidden fees.
          </motion.p>
        </div>
      </section>

      <PricingSection />
      <div id="roi-calculator"><ROICalculator /></div>
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  )
}
