import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Zap, Brain, ScanText, Bot, BarChart2, GitBranch, FileText } from 'lucide-react'
import ecosystemBackground from '../assets/cta/skiode-digital-ecosystem-bg.png'

const capabilities = [
  { icon: FileText, label: 'Form Builder', desc: 'Build powerful forms in minutes', color: '#287fea', side: 'left', top: '17%' },
  { icon: ScanText, label: 'OCR Extraction', desc: 'Turn documents into usable data', color: '#10b981', side: 'left', top: '43%' },
  { icon: BarChart2, label: 'ROI Analytics', desc: 'Measure impact, drive growth', color: '#06b6d4', side: 'left', top: '69%' },
  { icon: Brain, label: 'AI/ML Engine', desc: 'Smarter decisions, bigger outcomes', color: '#8b5cf6', side: 'right', top: '17%' },
  { icon: GitBranch, label: 'Workflow Approval', desc: 'Keep work moving, without delays', color: '#f59e0b', side: 'right', top: '43%' },
  { icon: Bot, label: 'Bot Automation', desc: 'Automate repetitive tasks, save time', color: '#ec4899', side: 'right', top: '69%' },
]

const trustItems = ['No credit card required', 'Setup in minutes', 'Enterprise-grade security', 'SOC 2 compliant', 'Cancel anytime']

const connectorPaths = [
  { d: 'M 183 145 C 225 145, 258 165, 304 190', color: '#287fea', endX: 304, endY: 190 },
  { d: 'M 183 300 C 228 300, 261 300, 304 300', color: '#10b981', endX: 304, endY: 300 },
  { d: 'M 183 455 C 225 455, 258 435, 304 410', color: '#06b6d4', endX: 304, endY: 410 },
  { d: 'M 817 145 C 775 145, 742 165, 696 190', color: '#8b5cf6', endX: 696, endY: 190 },
  { d: 'M 817 300 C 772 300, 739 300, 696 300', color: '#f59e0b', endX: 696, endY: 300 },
  { d: 'M 817 455 C 775 455, 742 435, 696 410', color: '#ec4899', endX: 696, endY: 410 },
]

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-10 sm:py-12" style={{ background: '#f7faff' }}>
      <img src={ecosystemBackground} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none" />
      <div className="absolute inset-0 bg-white/5 pointer-events-none" />

      {/* Visible paths connect each capability card to the central platform. */}
      <svg className="pointer-events-none absolute inset-0 z-[2] hidden h-full w-full lg:block" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
        {connectorPaths.map((path, index) => (
          <g key={path.d}>
            <motion.path
              d={path.d}
              fill="none"
              stroke={path.color}
              strokeWidth="1.35"
              strokeLinecap="round"
              strokeDasharray="3 5"
              opacity=".65"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: .65 }}
              viewport={{ once: true }}
              transition={{ duration: .8, delay: .2 + index * .07 }}
            />
            <circle cx={path.endX} cy={path.endY} r="7" fill={path.color} opacity=".1" />
            <circle cx={path.endX} cy={path.endY} r="3" fill="#ffffff" stroke={path.color} strokeWidth="1.5" />
          </g>
        ))}
      </svg>

      <div className="absolute inset-0 z-[3] hidden lg:block pointer-events-none">
        {capabilities.map((item, index) => (
          <motion.div key={item.label} initial={{ opacity: 0, x: item.side === 'left' ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: .12 + index * .05 }} whileHover={{ y: -4 }}
            className={`group absolute rounded-[22px] border bg-white/95 p-3.5 text-left shadow-[0_12px_30px_rgba(18,58,89,.09)] backdrop-blur-sm pointer-events-auto transition-all duration-300 ${item.label === 'Workflow Approval' ? 'w-[300px]' : 'w-[270px]'}`}
            style={{ top: item.top, left: item.side === 'left' ? '3.5%' : 'auto', right: item.side === 'right' ? '3.5%' : 'auto', borderColor: `${item.color}35` }}>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105" style={{ background: `${item.color}16`, color: item.color }}><item.icon size={22} /></span>
              <span className="min-w-0 flex-1"><strong className={`block text-base font-extrabold text-[#0b1730] ${item.label === 'Workflow Approval' ? 'whitespace-nowrap' : ''}`}>{item.label}</strong><span className="mt-1 block text-xs leading-snug text-slate-500">{item.desc}</span></span>
              <ArrowRight size={18} style={{ color: item.color }} className="transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold text-[#287fea] shadow-[0_5px_18px_rgba(40,127,234,.1)] backdrop-blur">
          <Zap size={12} className="transition-transform group-hover:translate-x-0.5" /> Get Started Today
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .08 }} className="text-[26px] font-black leading-[1.04] tracking-[-.035em] text-[#0b1730] sm:text-[30px] lg:whitespace-nowrap lg:text-[35px]">
          Turn manual processes into <span style={{ color: '#164065' }}>automated workflows</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .16 }} className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500">
          Whether it's employee onboarding, procurement approvals, or contract management — skiode brings every step into one shared system.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .24 }} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/request-demo" className="group inline-flex items-center gap-3 rounded-xl py-2 pl-6 pr-2 text-base font-semibold text-white shadow-[0_10px_28px_rgba(11,23,48,.22)] transition-all hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(11,23,48,.28)]" style={{ background: '#0b1730', color: '#ffffff' }}>
            Request Demo<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#39ff14] text-[#0b1730] shadow-[0_0_16px_rgba(57,255,20,.2)] transition-all group-hover:translate-x-0.5 group-hover:shadow-[0_0_20px_rgba(57,255,20,.4)]"><ArrowRight size={15} strokeWidth={2.5} /></span>
          </Link>
          <a href="https://studio.skiode.com/auth/login" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-7 py-3.5 text-base font-bold text-[#0b1730] transition-all hover:-translate-y-1 hover:bg-white">Explore Platform <ArrowRight size={15} /></a>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-3 text-left sm:grid-cols-2 lg:hidden">
          {capabilities.map(item => <div key={item.label} className="flex items-center gap-3 rounded-2xl border bg-white/85 p-3 shadow-sm" style={{ borderColor: `${item.color}20` }}><span className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: `${item.color}12`, color: item.color }}><item.icon size={16} /></span><span><strong className="block text-sm text-[#0b1730]">{item.label}</strong><span className="text-[10px] text-slate-500">{item.desc}</span></span></div>)}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .32 }} className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
          {trustItems.map(item => <span key={item} className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-emerald-500" />{item}</span>)}
        </motion.div>

        <div className="mt-12 text-[10px] font-bold uppercase tracking-[.25em] text-blue-400">People · Processes · Possibilities</div>
      </div>

      <div className="absolute bottom-8 left-8 hidden -rotate-3 text-xs italic leading-relaxed text-blue-400/40 xl:block">Smarter<br />Workflows<br />Happier People</div>
      <div className="absolute bottom-8 right-8 hidden rotate-3 text-xs italic leading-relaxed text-blue-400/40 xl:block">One Platform<br />Greater Impact</div>
    </section>
  )
}
