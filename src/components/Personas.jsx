import { motion } from 'framer-motion'
import { User, Code2, ShieldCheck, BarChart3, ArrowRight } from 'lucide-react'

const personas = [
  {
    icon: User, color: '#a3e635', bg: 'from-lime-50 to-green-50',
    border: 'border-lime-100', tag: 'Business Users',
    title: 'Build without waiting',
    desc: 'Create apps, automate work, and manage business processes without depending on long development cycles or IT queues.',
    points: ['Drag-and-drop form builder', 'No-code workflow automation', 'Self-service dashboards'],
  },
  {
    icon: Code2, color: '#3b82f6', bg: 'from-blue-50 to-indigo-50',
    border: 'border-blue-100', tag: 'Developers',
    title: 'Extend and integrate',
    desc: 'Use APIs, custom logic, reusable components, and platform extensions to build beyond what the visual tools offer.',
    points: ['Full REST API access', 'Custom scripts and webhooks', 'Component library'],
  },
  {
    icon: ShieldCheck, color: '#8b5cf6', bg: 'from-violet-50 to-purple-50',
    border: 'border-violet-100', tag: 'IT Leaders',
    title: 'Govern and control',
    desc: 'Maintain enterprise security, user governance, audit compliance, and platform scalability across your organization.',
    points: ['Role-based access control', 'Complete audit trails', 'Enterprise SSO support'],
  },
  {
    icon: BarChart3, color: '#22d3ee', bg: 'from-cyan-50 to-sky-50',
    border: 'border-cyan-100', tag: 'Operations Teams',
    title: 'Track and improve',
    desc: 'Reduce manual tasks, monitor process performance, improve visibility, and optimize business operations with real-time data.',
    points: ['Process analytics', 'Automated reporting', 'SLA tracking'],
  },
]

export default function Personas() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)', color: '#0891b2' }}
          >
            Built For Every Team
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight"
          >
            Made for every team that builds<br className="hidden sm:block" /> and runs business processes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-xl mx-auto"
          >
            Whether you write code or configure workflows, skiode adapts to how your team works best.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {personas.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`bg-gradient-to-br ${p.bg} border ${p.border} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group`}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}>
                  <Icon size={22} style={{ color: p.color }} />
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${p.color}15`, color: p.color }}>
                  {p.tag}
                </span>
                <h3 className="font-bold text-slate-900 text-lg mt-3 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{p.desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {p.points.map(pt => (
                    <li key={pt} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: p.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: p.color }}>
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
