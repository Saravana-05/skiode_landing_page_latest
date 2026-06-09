import { motion } from 'framer-motion'
import { Layers, GitBranch, BrainCircuit, ArrowRight } from 'lucide-react'

const cards = [
  {
    icon: Layers,
    color: '#3b82f6',
    tag: 'Low-Code',
    title: 'Build Apps',
    desc: 'Create forms, pages, data models, business objects, and internal applications using drag-and-drop tools without heavy coding.',
    preview: (
      <div className="rounded-xl p-3 mt-4 space-y-2" style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)' }}>
        {[['Text Field', '#3b82f6'], ['Dropdown', '#3b82f6'], ['Date Picker', '#3b82f6']].map(([f, c]) => (
          <div key={f} className="flex items-center justify-between px-3 py-1.5 bg-white rounded-lg shadow-sm">
            <span className="text-xs text-slate-600 font-medium">{f}</span>
            <div className="w-2 h-2 rounded-full" style={{ background: c }} />
          </div>
        ))}
        <div className="flex items-center gap-1 pt-1">
          <div className="flex-1 h-7 rounded-lg" style={{ background: 'rgba(59,130,246,0.12)', border: '1px dashed rgba(59,130,246,0.3)' }} />
          <span className="text-[10px] text-blue-500 font-medium">+ Add field</span>
        </div>
      </div>
    ),
  },
  {
    icon: GitBranch,
    color: '#8b5cf6',
    tag: 'Workflow',
    title: 'Automate Processes',
    desc: 'Design approvals, task routing, SLA-based escalations, conditional branching, and business rules with a visual process builder.',
    preview: (
      <div className="rounded-xl p-3 mt-4" style={{ background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.15)' }}>
        <div className="flex items-center justify-between">
          {[['Start', '#a3e635', '#060e1e'], ['Approve', '#8b5cf6', '#fff'], ['Notify', '#22d3ee', '#fff'], ['End', '#34d399', '#fff']].map(([label, bg, text], i) => (
            <div key={label} className="flex items-center">
              <div className="w-14 text-center py-1.5 rounded-lg text-[9px] font-bold" style={{ background: `${bg}20`, border: `1px solid ${bg}50`, color: bg }}>
                {label}
              </div>
              {i < 3 && <div className="w-3 h-px" style={{ background: '#8b5cf640' }} />}
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-2">
          {['SLA Alert', 'Condition', 'API Call'].map(n => (
            <div key={n} className="px-2 py-1 rounded-lg text-[9px] font-medium" style={{ background: 'rgba(139,92,246,0.08)', color: '#8b5cf6', border: '1px solid rgba(139,92,246,0.2)' }}>{n}</div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: BrainCircuit,
    color: '#a3e635',
    tag: 'AI',
    title: 'Operate with Intelligence',
    desc: 'Use AI, OCR, bots, real-time dashboards, and automated reports to make faster decisions and reduce repetitive manual work.',
    preview: (
      <div className="rounded-xl p-3 mt-4 space-y-2" style={{ background: 'rgba(163,230,53,0.06)', border: '1px solid rgba(163,230,53,0.15)' }}>
        {[['Document Extraction', 92], ['Field Validation', 100], ['Workflow Decision', 78]].map(([label, pct]) => (
          <div key={label}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-slate-600">{label}</span>
              <span className="text-[10px] font-bold" style={{ color: '#a3e635' }}>{pct}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #a3e635, #22d3ee)' }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
]

export default function PlatformOverview() {
  return (
    <section id="platform" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: '#f0fdf8', border: '1px solid #bbf7d0', color: '#16a34a' }}
          >
            Platform Overview
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight"
          >
            One platform to design, automate,<br className="hidden sm:block" /> and scale business operations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Bring forms, workflows, documents, data, AI, integrations, and reporting together in a single low-code workspace.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${card.color}15` }}>
                    <Icon size={24} style={{ color: card.color }} />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${card.color}15`, color: card.color }}>
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
                {card.preview}
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold" style={{ color: card.color }}>
                  Learn more <ArrowRight size={12} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
