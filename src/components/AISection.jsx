import { motion } from 'framer-motion'
import { Brain, CheckCircle2, ScanText, Sparkles, FileText, Bot, TrendingUp, Settings, Zap } from 'lucide-react'

const features = [
  { icon: ScanText, text: 'OCR-based document extraction' },
  { icon: Sparkles, text: 'AI-assisted form creation' },
  { icon: CheckCircle2, text: 'Smart field validation' },
  { icon: Bot, text: 'Intelligent task assignment' },
  { icon: TrendingUp, text: 'Auto-generated reports' },
  { icon: Settings, text: 'Workflow recommendations' },
  { icon: Zap, text: 'Business rule automation' },
  { icon: Brain, text: 'AI chatbot for operations' },
]

function AIMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Glow */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(34,211,238,0.15) 0%, transparent 70%)',
        filter: 'blur(30px)',
        transform: 'scale(1.3)',
      }} />

      <div
        className="relative rounded-2xl overflow-hidden"
        style={{ background: 'rgba(13,27,62,0.9)', border: '1px solid rgba(34,211,238,0.2)', boxShadow: '0 24px 80px rgba(0,0,0,0.4)' }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(34,211,238,0.05)' }}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(34,211,238,0.15)', border: '1px solid rgba(34,211,238,0.3)' }}>
            <Brain size={16} style={{ color: '#22d3ee' }} />
          </div>
          <div>
            <div className="text-xs font-bold text-white">AI Automation Engine</div>
            <div className="text-[10px] text-white/40">Processing document batch #4821</div>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-[10px] text-lime-400 font-semibold">Active</span>
          </div>
        </div>

        <div className="p-4 space-y-3">
          {/* Document upload */}
          <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(163,230,53,0.12)', border: '1px solid rgba(163,230,53,0.25)' }}>
                <FileText size={14} style={{ color: '#a3e635' }} />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Invoice_Q4_2026.pdf</div>
                <div className="text-[10px] text-white/40">3.2 MB • Uploaded just now</div>
              </div>
              <div className="ml-auto px-2 py-0.5 rounded-md text-[9px] font-bold" style={{ background: 'rgba(163,230,53,0.15)', color: '#a3e635' }}>OCR</div>
            </div>
            <div className="space-y-1.5">
              {[['Vendor Name', 'Skylimit Digital Pvt Ltd', 100], ['Invoice No.', 'INV-2026-4821', 100], ['Amount', '₹ 84,500', 98], ['Due Date', '30 Jul 2026', 95]].map(([k, v, conf]) => (
                <div key={k} className="flex items-center justify-between px-2 py-1.5 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <span className="text-[10px] text-white/40">{k}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-medium text-white">{v}</span>
                    <span className="text-[9px] font-bold" style={{ color: conf === 100 ? '#a3e635' : '#22d3ee' }}>{conf}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI confidence */}
          <div className="rounded-xl p-3 flex items-center gap-3" style={{ background: 'rgba(163,230,53,0.06)', border: '1px solid rgba(163,230,53,0.15)' }}>
            <Brain size={18} style={{ color: '#a3e635' }} />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-white/60 font-medium">Overall AI Confidence</span>
                <span className="text-xs font-bold" style={{ color: '#a3e635' }}>94.7%</span>
              </div>
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div className="h-full rounded-full" style={{ width: '94.7%', background: 'linear-gradient(90deg, #a3e635, #22d3ee)' }} />
              </div>
            </div>
          </div>

          {/* Suggested action */}
          <div className="rounded-xl p-3 flex items-start gap-3" style={{ background: 'rgba(34,211,238,0.06)', border: '1px solid rgba(34,211,238,0.15)' }}>
            <Sparkles size={16} style={{ color: '#22d3ee' }} className="mt-0.5 shrink-0" />
            <div>
              <div className="text-[10px] font-bold text-white mb-0.5">Suggested Action</div>
              <div className="text-[10px] text-white/50">Route to Finance Approval workflow → Manager Level 2</div>
            </div>
          </div>

          {/* Bot notification */}
          <div className="rounded-xl p-3 flex items-center gap-3" style={{ background: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.15)' }}>
            <Bot size={14} style={{ color: '#a78bfa' }} />
            <div>
              <div className="text-[10px] font-bold text-white">BOT Notification</div>
              <div className="text-[10px] text-white/45">Approval request sent to Rajesh Kumar — Finance Head</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AISection() {
  return (
    <section id="ai" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a1628 0%, #060e1e 100%)' }}>
      <div className="absolute inset-0 grid-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5"
              style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.25)', color: '#22d3ee' }}
            >
              <Brain size={12} /> AI & Automation
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight"
            >
              AI built into<br />
              <span className="gradient-text-lime">every workflow</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-white/55 leading-relaxed mb-8"
            >
              Use AI agents, OCR, intelligent document processing, smart validation, and automated decisioning to reduce manual work and accelerate operations across your entire organization.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((f, i) => {
                const Icon = f.icon
                return (
                  <motion.div
                    key={f.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="flex items-center gap-3 rounded-xl px-4 py-3"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <Icon size={16} style={{ color: '#22d3ee' }} className="shrink-0" />
                    <span className="text-sm text-white/70 font-medium">{f.text}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <AIMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
