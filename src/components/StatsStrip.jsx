import { motion } from 'framer-motion'
import { TrendingUp, Clock, Eye, Shield, Cpu } from 'lucide-react'

const stats = [
  { icon: TrendingUp, value: '10×', label: 'Faster app delivery', color: '#a3e635' },
  { icon: Clock, value: '70%', label: 'Less manual work', color: '#22d3ee' },
  { icon: Eye, value: '360°', label: 'Process visibility', color: '#a78bfa' },
  { icon: Shield, value: 'RBAC', label: 'Role-based governance', color: '#34d399' },
  { icon: Cpu, value: 'AI-First', label: 'Assisted automation', color: '#f97316' },
]

export default function StatsStrip() {
  return (
    <section className="bg-mint-50 border-y border-emerald-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-slate-500 mb-8"
        >
          Designed for business users, developers, IT teams, and operations leaders.
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center text-center p-5 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: `${s.color}18` }}>
                  <Icon size={22} style={{ color: s.color }} />
                </div>
                <div className="text-2xl font-extrabold text-slate-800 mb-1">{s.value}</div>
                <div className="text-xs text-slate-500 font-medium leading-tight">{s.label}</div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
