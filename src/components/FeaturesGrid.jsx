import { motion } from 'framer-motion'
import { Users, Box, Plug, BarChart3, BrainCircuit, FileBox, Bot, RefreshCw } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Citizen Developers',
    subtitle: 'Designed for Everyone',
    desc: 'Empower business users to build apps without coding expertise.',
    color: '#3b82f6',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: Box,
    title: 'Simple Architecture',
    subtitle: 'Keep it Simple',
    desc: 'Clean, modular design that scales without complexity.',
    color: '#8b5cf6',
    gradient: 'from-violet-500 to-violet-600',
  },
  {
    icon: Plug,
    title: 'Bolt onto Any System',
    subtitle: 'Seamless Integration',
    desc: 'Connect with ERP, CRM, HRMS, or any existing system instantly.',
    color: '#06b6d4',
    gradient: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: BarChart3,
    title: 'Dashboards & Reports',
    subtitle: 'Real-time Insights',
    desc: 'Live analytics and visual reports for instant decision-making.',
    color: '#f59e0b',
    gradient: 'from-amber-500 to-amber-600',
  },
  {
    icon: BrainCircuit,
    title: 'AI/ML Led Platform',
    subtitle: 'Intelligence Built-in',
    desc: 'AI-powered automation, predictions, and smart recommendations.',
    color: '#10b981',
    gradient: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: FileBox,
    title: 'In-Built DMS',
    subtitle: 'Document Management',
    desc: 'Store, manage, and retrieve documents with version control.',
    color: '#ec4899',
    gradient: 'from-pink-500 to-pink-600',
  },
  {
    icon: Bot,
    title: 'Deploy BOTS',
    subtitle: 'RPA Automation',
    desc: 'Automate repetitive tasks with intelligent bot deployment.',
    color: '#84cc16',
    gradient: 'from-lime-500 to-lime-600',
  },
  {
    icon: RefreshCw,
    title: 'Stateful & Stateless',
    subtitle: 'Flexible Workflows',
    desc: 'Support both long-running processes and quick stateless operations.',
    color: '#f97316',
    gradient: 'from-orange-500 to-orange-600',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-12 relative overflow-hidden" style={{ background: '#f7faf9' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold mb-3"
            style={{ background: 'rgba(22,64,101,0.08)', border: '1px solid rgba(22,64,101,0.24)', color: '#0a2342' }}>
            ✦ Platform Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[36px] font-extrabold mb-3 leading-tight" style={{ color: '#0a2342' }}>
            Everything you need.{' '}
            <span style={{ color: '#164065' }}>
              Nothing you don't.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[12px] text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A complete low-code platform with 8 powerful capabilities to digitize, automate, and scale your business operations.
          </motion.p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.3, ease: 'easeOut' } }}
              className="group relative rounded-2xl p-5 bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Top color accent line */}
              <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: '#164065' }} />

              {/* Icon */}
              <div className="relative mb-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${f.color}12`, border: `1px solid ${f.color}20` }}
                >
                  <f.icon size={26} style={{ color: f.color }} strokeWidth={1.8} />
                </div>
              </div>

              {/* Subtitle label */}
              <div
                className="text-[11px] font-bold uppercase tracking-wider mb-2"
                style={{ color: f.color }}
              >
                {f.subtitle}
              </div>

              {/* Title */}
              <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-snug group-hover:text-slate-800 transition-colors">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-500 leading-relaxed">
                {f.desc}
              </p>

              {/* Bottom arrow indicator on hover */}
              <div className="mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                <span className="text-xs font-bold" style={{ color: f.color }}>Learn more</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ color: f.color }}>
                  <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className="flex -space-x-1">
              {['#3b82f6','#8b5cf6','#10b981','#f59e0b'].map(c => (
                <div key={c} className="w-3 h-3 rounded-full border-2 border-white" style={{ background: c }} />
              ))}
            </div>
            <span className="text-sm text-slate-600 font-medium">All features work together as <strong className="text-slate-900">one unified platform</strong></span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
