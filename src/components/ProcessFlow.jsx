import { motion } from 'framer-motion'
import { FileInput, ShieldCheck, UserCog, ScanText, Link2, BarChart3, CheckCircle2 } from 'lucide-react'

const nodes = [
  { icon: FileInput, label: 'Request Submitted', color: '#a3e635', desc: 'Form capture' },
  { icon: ShieldCheck, label: 'Data Validation', color: '#3b82f6', desc: 'Rules engine' },
  { icon: UserCog, label: 'Manager Approval', color: '#8b5cf6', desc: 'Role routing' },
  { icon: ScanText, label: 'AI Doc Check', color: '#22d3ee', desc: 'OCR + AI/ML' },
  { icon: Link2, label: 'System Integration', color: '#f59e0b', desc: 'API connector' },
  { icon: BarChart3, label: 'Report Generated', color: '#ec4899', desc: 'Analytics' },
  { icon: CheckCircle2, label: 'Completed', color: '#34d399', desc: 'Audit logged' },
]

const features = [
  'Multi-level approval routing', 'SLA escalation and alerts', 'Conditional branching logic',
  'Role-based task assignment', 'Email and in-app notifications', 'Complete audit trails',
  'Third-party API actions', 'Intelligent bot actions',
]

export default function ProcessFlow() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#060e1e' }}>
      <div className="absolute inset-0 grid-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: 'rgba(163,230,53,0.1)', border: '1px solid rgba(163,230,53,0.25)', color: '#a3e635' }}
          >
            Process Orchestration
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight"
          >
            Orchestrate complex processes<br className="hidden sm:block" /> from start to finish
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Connect people, systems, data, bots, and AI into one automated business flow that runs reliably at enterprise scale.
          </motion.p>
        </div>

        {/* Desktop horizontal workflow */}
        <div className="hidden lg:block mb-12">
          <div className="flex items-center justify-between">
            {nodes.map((node, i) => {
              const Icon = node.icon
              return (
                <div key={node.label} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, y: -4 }}
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 cursor-pointer shadow-lg"
                      style={{
                        background: `${node.color}18`,
                        border: `1px solid ${node.color}40`,
                        boxShadow: `0 0 20px ${node.color}20`,
                      }}
                    >
                      <Icon size={22} style={{ color: node.color }} />
                    </motion.div>
                    <div className="text-center max-w-[90px]">
                      <div className="text-[11px] font-bold text-white leading-tight mb-1">{node.label}</div>
                      <div className="text-[9px] text-white/30">{node.desc}</div>
                    </div>
                  </motion.div>
                  {i < nodes.length - 1 && (
                    <div className="flex items-center mx-2 mb-6">
                      <div className="w-8 h-px" style={{ background: `linear-gradient(90deg, ${node.color}60, ${nodes[i+1].color}60)` }} />
                      <div className="w-0 h-0 border-t-2 border-b-2 border-l-4 border-transparent" style={{ borderLeftColor: nodes[i+1].color + '80' }} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile vertical workflow */}
        <div className="lg:hidden space-y-3 mb-10">
          {nodes.map((node, i) => {
            const Icon = node.icon
            return (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-4 rounded-2xl px-4 py-3"
                style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${node.color}25` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${node.color}15`, border: `1px solid ${node.color}30` }}>
                  <Icon size={18} style={{ color: node.color }} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{node.label}</div>
                  <div className="text-[10px] text-white/35">{node.desc}</div>
                </div>
                <span className="ml-auto text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${node.color}15`, color: node.color }}>
                  Step {i + 1}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {features.map(f => (
            <span key={f} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-white/60" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <CheckCircle2 size={11} style={{ color: '#a3e635' }} />
              {f}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
