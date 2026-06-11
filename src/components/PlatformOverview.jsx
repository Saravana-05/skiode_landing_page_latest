import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Zap, FileText, GitBranch, BrainCircuit, Bot, Plug, BarChart2,
  ScanText, CheckCircle2, ArrowRight, Layers, Monitor, Cpu,
  Rocket, TrendingDown, Link2, Gauge
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

const pillars = [
  {
    id: 'build',
    icon: Layers,
    color: '#3b82f6',
    tag: 'Build',
    title: 'Low-Code App Builder',
    highlight: 'Drag. Drop. Ship.',
    points: ['20+ field types', 'Visual form designer', 'Web & mobile ready', 'Inbuilt CI/CD'],
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
    screenshot: scrIntegrations,
    secondaryShot: scrRPA,
    secondaryLabel: 'RPA Automation',
  },
]

const stats = [
  { val: '5×', label: 'Faster Development', icon: Rocket, color: '#3b82f6', bg: '#dbeafe' },
  { val: '70%', label: 'Less Manual Work', icon: TrendingDown, color: '#8b5cf6', bg: '#ede9fe' },
  { val: '50+', label: 'Integrations Ready', icon: Link2, color: '#10b981', bg: '#d1fae5' },
  { val: '10×', label: 'Productivity Boost', icon: Gauge, color: '#f59e0b', bg: '#fef3c7' },
]

export default function PlatformOverview() {
  const [active, setActive] = useState(0)
  const pillar = pillars[active]

  return (
    <section id="platform-overview" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8faff 50%, #f0f4ff 100%)' }}>
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold mb-5"
            style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', color: '#3b82f6' }}
          >
            <Zap size={14} /> Platform Overview
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 leading-tight"
          >
            See it in action.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Not just words.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-lg text-slate-500 max-w-xl mx-auto"
          >
            Build, automate, connect, and deploy — all from one visual workspace.
          </motion.p>
        </div>

        {/* Pillar selector tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {pillars.map((p, i) => {
            const isActive = i === active
            return (
              <div
                key={p.id}
                onMouseEnter={() => setActive(i)}
                className="flex items-center gap-2.5 px-5 py-3 rounded-2xl transition-all duration-400 border cursor-pointer"
                style={{
                  background: isActive ? 'white' : 'transparent',
                  borderColor: isActive ? p.color : '#e2e8f0',
                  boxShadow: isActive ? `0 8px 24px ${p.color}15` : 'none',
                }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                  style={{ background: isActive ? `${p.color}12` : '#f1f5f9' }}>
                  <p.icon size={18} style={{ color: isActive ? p.color : '#94a3b8' }} />
                </div>
                <span className="text-sm font-bold transition-colors"
                  style={{ color: isActive ? p.color : '#94a3b8' }}>
                  {p.tag}
                </span>
              </div>
            )
          })}
        </motion.div>

        {/* Main visual card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pillar.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease }}
            className="rounded-3xl overflow-hidden bg-white border border-slate-100"
            style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.06)' }}
          >
            <div className="grid lg:grid-cols-[1fr_0.75fr]">

              {/* Left — Big screenshot with browser frame */}
              <div className="relative bg-slate-50">
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-slate-100">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                  <div className="ml-3 flex-1 h-5 rounded-md bg-white border border-slate-100 flex items-center px-3">
                    <span className="text-[10px] text-slate-400 font-medium">skiode.app / {pillar.tag.toLowerCase()}</span>
                  </div>
                </div>

                <motion.img
                  key={pillar.screenshot}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease }}
                  src={pillar.screenshot}
                  alt={pillar.title}
                  className="w-full object-cover object-top"
                  style={{ height: '380px' }}
                />

                {/* Floating secondary screenshot thumbnail */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease }}
                  className="absolute bottom-4 right-4 w-44 rounded-xl overflow-hidden shadow-2xl border-2 border-white z-10"
                >
                  <img src={pillar.secondaryShot} alt={pillar.secondaryLabel}
                    className="w-full h-24 object-cover object-top" />
                  <div className="bg-white px-2.5 py-1.5">
                    <span className="text-[10px] font-bold text-slate-600">{pillar.secondaryLabel}</span>
                  </div>
                </motion.div>
              </div>

              {/* Right — Content */}
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                {/* Tag + icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                    style={{ background: `${pillar.color}10`, border: `1px solid ${pillar.color}18` }}>
                    <pillar.icon size={22} style={{ color: pillar.color }} />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.15em]" style={{ color: pillar.color }}>
                    {pillar.tag}
                  </span>
                </div>

                {/* Title */}
                <motion.h3
                  key={`t-${pillar.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08, ease }}
                  className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2 leading-tight"
                >
                  {pillar.title}
                </motion.h3>

                {/* Bold one-liner */}
                <motion.p
                  key={`h-${pillar.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.12, ease }}
                  className="text-lg font-semibold mb-6"
                  style={{ color: pillar.color }}
                >
                  {pillar.highlight}
                </motion.p>

                {/* Feature points with icons */}
                <div className="space-y-3 mb-8">
                  {pillar.points.map((pt, i) => (
                    <motion.div
                      key={pt}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.1 + i * 0.06, ease }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${pillar.color}10` }}>
                        <CheckCircle2 size={14} style={{ color: pillar.color }} />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{pt}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <a href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group"
                  style={{ color: pillar.color }}>
                  Explore {pillar.tag}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease }}
              whileHover={{ y: -6, boxShadow: `0 12px 32px ${s.color}20`, transition: { duration: 0.25 } }}
              className="relative group p-5 rounded-2xl bg-white border border-slate-100 overflow-hidden cursor-default"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
            >
              {/* Colored accent line top */}
              <div className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${s.color}, ${s.color}80)` }} />

              {/* Icon circle */}
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ background: s.bg }}>
                <s.icon size={20} style={{ color: s.color }} strokeWidth={2.2} />
              </div>

              {/* Big number */}
              <div className="text-3xl sm:text-4xl font-black mb-1 tracking-tight" style={{ color: s.color }}>
                {s.val}
              </div>

              {/* Label */}
              <div className="text-sm font-bold text-slate-600">{s.label}</div>

              {/* Subtle bg glow on hover */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: s.color, filter: 'blur(20px)' }} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
