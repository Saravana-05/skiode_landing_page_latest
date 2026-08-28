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
      <section className="pt-24 pb-8 relative overflow-hidden" style={{ background: '#f7faf9' }}>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold mb-3"
            style={{ background: 'rgba(22,64,101,0.08)', border: '1px solid rgba(22,64,101,0.24)', color: '#0a2342' }}
          >
            <Zap size={14} /> Platform Deep Dive
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-[36px] font-extrabold mb-3 leading-tight"
            style={{ color: '#0a2342' }}
          >
            Everything you need.{' '}
            <span style={{ color: '#164065' }}>
              Nothing you don't.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-[12px] text-slate-500 max-w-xl mx-auto mb-5"
          >
            Explore the full capabilities of skiode — from drag-and-drop form building to AI-powered automation and 50+ integrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link to="/request-demo" className="inline-flex items-center gap-2 rounded-xl text-sm font-bold px-6 py-3" style={{ background: '#0a2342', color: '#39ff14' }}>
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
