import { motion } from 'framer-motion'
import { CheckCircle2, XCircle, Minus } from 'lucide-react'

const rows = [
  { feature: 'Build forms & data models', traditional: 'months', sky: true },
  { feature: 'Create visual workflows', traditional: false, sky: true },
  { feature: 'Manage roles & permissions', traditional: 'partial', sky: true },
  { feature: 'Connect external APIs', traditional: 'manual code', sky: true },
  { feature: 'Automate document processing', traditional: false, sky: true },
  { feature: 'Generate real-time reports', traditional: 'BI tools needed', sky: true },
  { feature: 'Deploy and iterate quickly', traditional: false, sky: true },
  { feature: 'Change business rules live', traditional: false, sky: true },
  { feature: 'Add AI automation', traditional: false, sky: true },
  { feature: 'Scale operations', traditional: 'expensive', sky: true },
]

function Cell({ value }) {
  if (value === true) return <CheckCircle2 size={18} style={{ color: '#a3e635' }} className="mx-auto" />
  if (value === false) return <XCircle size={18} className="text-slate-300 mx-auto" />
  return <span className="text-[11px] font-medium text-slate-400">{value}</span>
}

export default function Comparison() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: 'rgba(163,230,53,0.1)', border: '1px solid rgba(163,230,53,0.25)', color: '#16a34a' }}
          >
            Platform Value
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight"
          >
            Everything you need in one<br className="hidden sm:block" /> low-code AI platform
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-xl mx-auto"
          >
            See why teams switch from traditional development to skiode.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white"
        >
          {/* Header */}
          <div className="grid grid-cols-3 text-sm font-bold text-center">
            <div className="py-4 px-6 text-slate-500 text-left">Feature</div>
            <div className="py-4 px-4 bg-slate-100 text-slate-400">Traditional Dev.</div>
            <div className="py-4 px-4 text-white" style={{ background: 'linear-gradient(135deg, #0a1628, #0d1b3e)' }}>
              <div>skiode</div>
              <div className="text-[10px] text-lime-400 font-normal">Recommended</div>
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.feature}
              className="grid grid-cols-3 text-center items-center border-t border-slate-100"
              style={{ background: i % 2 === 0 ? 'white' : '#f8fafc' }}
            >
              <div className="py-3.5 px-6 text-sm font-medium text-slate-700 text-left">{row.feature}</div>
              <div className="py-3.5 px-4 flex items-center justify-center bg-slate-50">
                <Cell value={row.traditional} />
              </div>
              <div className="py-3.5 px-4 flex items-center justify-center" style={{ background: 'rgba(10,22,40,0.03)' }}>
                <Cell value={row.sky} />
              </div>
            </div>
          ))}

          {/* Footer */}
          <div className="p-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ background: 'rgba(163,230,53,0.04)' }}>
            <p className="text-sm text-slate-600 font-medium">All features included from day one — no add-ons, no hidden costs.</p>
            <a href="#contact" className="shrink-0 px-6 py-2.5 rounded-xl font-bold text-sm transition-all" style={{ background: '#a3e635', color: '#060e1e' }}>
              Get Started Free
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
