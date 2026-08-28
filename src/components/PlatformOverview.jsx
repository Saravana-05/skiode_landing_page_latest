import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Zap, FileText, GitBranch, BrainCircuit, Bot, Plug, BarChart2,
  ScanText, CheckCircle2, Layers, Monitor, Cpu,
} from 'lucide-react'

import scrForms from '../assets/platform_screenshots/forms.png'
import scrProcess from '../assets/platform_screenshots/process_flow.png'
import scrDMS from '../assets/platform_screenshots/DMS.png'
import scrOCR from '../assets/platform_screenshots/Ocr_extraction.png'
import scrDashboard from '../assets/platform_screenshots/dashboard_reports.png'
import scrBot from '../assets/platform_screenshots/Bot_Automation_1.png'
import scrIntegrations from '../assets/platform_screenshots/integrations.png'
import scrRPA from '../assets/platform_screenshots/RPA.png'
import scrMain from '../assets/platform_screenshots/main_page.png'

const ease = [0.25, 0.46, 0.45, 0.94]
const brandColor = '#123a59'

const pillars = [
  {
    id: 'build',
    icon: Layers,
    color: brandColor,
    tag: 'Build',
    title: 'Low-Code App Builder',
    highlight: 'Drag. Drop. Ship.',
    points: ['20+ field types', 'Visual form designer', 'Web & mobile ready', 'Inbuilt CI/CD'],
    pointDetails: ['Flexible inputs for every use case', 'Build screens without writing code', 'Deploy once, work everywhere', 'Ship updates with confidence'],
    screenshot: scrForms,
    secondaryShot: scrDMS,
    secondaryLabel: 'Document Management',
  },
  {
    id: 'automate',
    icon: GitBranch,
    color: '#8b5cf6',
    tag: 'Automate',
    title: 'Process Orchestration',
    highlight: 'Workflows that think.',
    points: ['Visual process builder', 'SLA tracking & alerts', 'Approval routing', 'Decision engine'],
    pointDetails: ['Design workflows visually', 'Keep every process on time', 'Send work to the right people', 'Automate complex business rules'],
    screenshot: scrProcess,
    secondaryShot: scrDashboard,
    secondaryLabel: 'Dashboards & Reports',
  },
  {
    id: 'intelligence',
    icon: BrainCircuit,
    color: '#10b981',
    tag: 'Intelligence',
    title: 'AI, Bots & RPA',
    highlight: 'Automate everything.',
    points: ['OCR extraction', 'AI/ML matching', 'Configurable bots', 'Screen scraping & RPA'],
    pointDetails: ['Turn documents into usable data', 'Find the right information, always', 'No-code bots with real impact', 'Automate work in any application'],
    screenshot: scrBot,
    secondaryShot: scrOCR,
    secondaryLabel: 'OCR & AI Extraction',
  },
  {
    id: 'connect',
    icon: Plug,
    color: '#06b6d4',
    tag: 'Connect',
    title: '50+ Integrations',
    highlight: 'Bolt onto any system.',
    points: ['API builder', 'Pre-built connectors', 'Data mapping', 'Webhooks & triggers'],
    pointDetails: ['Create secure APIs visually', 'Connect your tools in minutes', 'Move clean data between systems', 'React instantly to every event'],
    screenshot: scrIntegrations,
    secondaryShot: scrRPA,
    secondaryLabel: 'RPA Automation',
  },
]

export default function PlatformOverview() {
  const [active, setActive] = useState(2)
  const pillar = pillars[active]

  return (
    <section id="platform-overview" className="homepage-section relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 52%, #edf4f8 100%)' }}>
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(18,58,89,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-9 sm:mb-11">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="section-eyebrow inline-flex items-center gap-2 rounded-full px-5 py-2 font-bold mb-3"
            style={{ background: 'rgba(18,58,89,0.08)', border: '1px solid rgba(18,58,89,0.24)', color: brandColor }}
          >
            <Zap size={14} /> Platform Overview
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.035em] text-slate-950 mb-4 leading-[1.05]"
          >
            See it in action.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#123a59] to-[#245672]">
              Not just words.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="section-lead text-base sm:text-lg text-slate-500 max-w-none mx-auto leading-relaxed"
          >
            Build, automate, connect, and deploy — all from one visual workspace.
          </motion.p>
        </div>

        {/* Connected product rail */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="relative flex lg:grid lg:grid-cols-4 gap-1.5 p-2 rounded-[22px] mb-5 overflow-x-auto lg:overflow-hidden snap-x snap-mandatory"
          style={{ background: '#0d3553', border: '1px solid rgba(255,255,255,.08)', boxShadow: '0 12px 30px rgba(18,58,89,.16)' }}>
          {pillars.map((p, i) => {
            const isActive = i === active
            return (
              <motion.button type="button" key={p.id} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)} aria-pressed={isActive}
                whileHover={{ y: -2 }} whileTap={{ scale: .985 }}
                className="relative z-10 flex min-w-[185px] lg:min-w-0 items-center gap-3 rounded-2xl px-4 py-2.5 text-left transition-shadow duration-300 snap-start"
                style={{
                  background: isActive ? 'linear-gradient(180deg, #ffffff 0%, #f8fbfc 100%)' : 'transparent',
                  border: isActive ? '1px solid rgba(16,185,129,.24)' : '1px solid transparent',
                  boxShadow: isActive ? '0 7px 20px rgba(0,0,0,.16), 0 0 0 1px rgba(16,185,129,.06)' : 'none',
                }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: isActive ? '#e8f8f2' : 'rgba(255,255,255,.09)', color: isActive ? '#059669' : '#d9e7ef' }}>
                  <p.icon size={18} />
                </div>
                <div className="relative z-10">
                  <span className="block text-[10px] font-extrabold leading-none tracking-[.14em] mb-1.5" style={{ color: isActive ? '#475569' : '#c8d9e4' }}>0{i + 1}</span>
                  <span className="block text-base font-black leading-none tracking-[.01em]" style={{ color: isActive ? '#047857' : '#ffffff', textShadow: isActive ? 'none' : '0 1px 2px rgba(0,0,0,.25)' }}>{p.tag}</span>
                </div>
                {i < pillars.length - 1 && !isActive && (
                  <span className="hidden lg:block absolute left-[72%] -right-2 top-1/2 -translate-y-1/2 h-px bg-emerald-400/35">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-emerald-400/10 shadow-[0_0_10px_rgba(52,211,153,.6)]" />
                  </span>
                )}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Product showcase */}
        <AnimatePresence mode="wait">
          <motion.div key={pillar.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease }} className="grid lg:grid-cols-[1.45fr_1fr] rounded-3xl overflow-hidden bg-white border border-white"
            style={{ boxShadow: '0 18px 55px rgba(18,58,89,.14)' }}>
            <div className="relative p-2 sm:p-3" style={{ background: '#dce8ef' }}>
              <div className="rounded-2xl overflow-hidden h-full" style={{ background: '#071d30', boxShadow: '0 15px 30px rgba(4,24,40,.25)' }}>
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400" /><span className="w-2.5 h-2.5 rounded-full bg-amber-300" /><span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <div className="ml-3 rounded-full px-4 py-1 text-[10px] text-slate-300 border border-white/10 bg-white/5">skiode.app / workspace / {pillar.id}</div>
                </div>
                <motion.img key={pillar.screenshot} src={pillar.screenshot} alt={pillar.title}
                  initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .5 }}
                  className="w-full h-[330px] sm:h-[410px] object-cover object-top" />
              </div>
              <motion.div initial={{ opacity: 0, scale: .92, y: 15 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: .45, delay: .18 }}
                className="absolute bottom-5 right-5 w-[210px] sm:w-[245px] rounded-2xl border border-white/80 bg-white/95 backdrop-blur-md p-4 shadow-2xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-[11px] font-black tracking-wide text-[#123a59]"><Cpu size={15} className="text-emerald-500" />AI PROCESSING</div>
                  <span className="relative flex w-2.5 h-2.5"><span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" /><span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-500" /></span>
                </div>
                <div className="space-y-2.5">
                  {['Document detected', 'Data extracted', 'AI matching'].map((step) => (
                    <div key={step} className="flex items-center justify-between text-[10px] font-bold text-slate-600"><span className="flex items-center gap-2"><CheckCircle2 size={13} className="text-emerald-500" />{step}</span><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /></div>
                  ))}
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-700"><span className="flex items-center gap-2"><span className="w-[13px] h-[13px] rounded-full border-2 border-emerald-500 border-r-transparent animate-spin" />Workflow triggered</span><span className="text-emerald-600">LIVE</span></div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .28 }}
                className="absolute left-5 bottom-5 hidden sm:block rounded-2xl border border-emerald-400/40 bg-[#0b2941]/90 backdrop-blur-md px-4 py-3 text-white shadow-[0_8px_30px_rgba(16,185,129,.2)]">
                <div className="flex items-center gap-2 text-xs font-extrabold"><span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.9)]" />Live Platform</div>
                <div className="mt-1 text-[10px] text-slate-300">Real impact. Real results.</div>
              </motion.div>
            </div>

            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center"><pillar.icon size={20} /></div>
                <span className="text-xs font-extrabold uppercase tracking-[.13em] text-emerald-600">{pillar.tag}</span>
              </div>
              <motion.h3 key={`t-${pillar.id}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="text-[clamp(1.45rem,3vw,2.5rem)] font-black tracking-[-0.025em] text-slate-950 leading-tight mb-2 whitespace-nowrap">{pillar.title}</motion.h3>
              <p className="text-lg sm:text-xl font-extrabold text-emerald-500 leading-tight mb-6">{pillar.highlight}</p>
              <div className="divide-y divide-slate-200 mb-7">
                {pillar.points.map((pt, i) => (
                  <motion.div key={pt} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: .08 + i * .05 }} className="grid sm:grid-cols-[1fr_1.25fr] gap-1 sm:gap-4 py-3 items-center">
                    <div className="flex items-center gap-3 text-sm font-extrabold text-slate-800">
                      <span className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0"><CheckCircle2 size={14} className="text-emerald-500" /></span>{pt}
                    </div>
                    <span className="pl-10 sm:pl-0 text-xs text-slate-500">{pillar.pointDetails[i]}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
