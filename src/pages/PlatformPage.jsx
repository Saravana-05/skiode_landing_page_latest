import { motion } from 'framer-motion'
import { Zap, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import FeaturesGrid from '../components/FeaturesGrid'
import HowItWorks from '../components/HowItWorks'
import IntegrationsShowcase from '../components/IntegrationsShowcase'
import FinalCTA from '../components/FinalCTA'

const ease = [0.25, 0.46, 0.45, 0.94]

export default function PlatformPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-28 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)' }}>
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
            <Zap size={14} /> Platform Deep Dive
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-5 leading-tight"
          >
            Everything you need.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Nothing you don't.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-lg text-slate-500 max-w-xl mx-auto mb-8"
          >
            Explore the full capabilities of skiode — from drag-and-drop form building to AI-powered automation and 50+ integrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link to="/request-demo" className="btn-primary text-sm px-6 py-3">
              Request Demo <ArrowRight size={14} />
            </Link>
            <a href="#how-it-works" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors px-6 py-3 rounded-xl border border-slate-200 hover:border-blue-200 bg-white">
              See How It Works
            </a>
          </motion.div>
        </div>
      </section>

      <FeaturesGrid />
      <div id="how-it-works" />
      <HowItWorks />
      <IntegrationsShowcase />
      <FinalCTA />
    </>
  )
}
