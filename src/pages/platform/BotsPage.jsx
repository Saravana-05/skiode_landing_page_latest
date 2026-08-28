import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Bot, ArrowRight, Sparkles, CheckCircle2, Play, Loader2,
  Cog, FileText, Mail, Database, Globe, Shield,
  Zap, Clock, RotateCcw, Boxes
} from 'lucide-react'
import botScreenshot1 from '../../assets/platform_screenshots/Bot_Automation_1.png'
import rpaScreenshot from '../../assets/platform_screenshots/RPA.png'

const ease = [0.25, 0.46, 0.45, 0.94]

const botSteps = [
  { icon: Globe, label: 'Open Portal', sub: 'Navigate to HR portal', color: '#3b82f6', status: 'done' },
  { icon: FileText, label: 'Fill Form', sub: 'Enter employee details', color: '#8b5cf6', status: 'done' },
  { icon: Database, label: 'Query DB', sub: 'Validate against records', color: '#06b6d4', status: 'done' },
  { icon: Mail, label: 'Send Email', sub: 'Notify approver', color: '#ec4899', status: 'done' },
  { icon: Shield, label: 'Verify', sub: 'Check compliance rules', color: '#f59e0b', status: 'done' },
  { icon: CheckCircle2, label: 'Complete', sub: 'Task finished', color: '#10b981', status: 'done' },
]

const botTemplates = [
  { icon: Mail, label: 'Email Processor', desc: 'Parse, categorize, and route incoming emails automatically' },
  { icon: FileText, label: 'Invoice Bot', desc: 'Extract invoice data and create entries in your ERP system' },
  { icon: Database, label: 'Data Migration', desc: 'Move data between systems with validation and error handling' },
  { icon: Globe, label: 'Web Scraper', desc: 'Collect data from websites on a schedule, export to sheets' },
]

const stats = [
  { value: '50+', label: 'Pre-built Bots', icon: Boxes },
  { value: '24/7', label: 'Always On', icon: Clock },
  { value: '10x', label: 'Faster', icon: Zap },
  { value: '0', label: 'Code Lines', icon: Bot },
]

export default function BotsPage() {
  const [completedSteps, setCompletedSteps] = useState(0)
  const [running, setRunning] = useState(true)

  useEffect(() => {
    const timers = []
    botSteps.forEach((_, i) => {
      timers.push(setTimeout(() => setCompletedSteps(i + 1), 800 + i * 700))
    })
    timers.push(setTimeout(() => setRunning(false), 800 + botSteps.length * 700 + 300))
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-10 relative overflow-hidden" style={{ background: '#164065' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold mb-4"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', color: '#ffffff' }}>
              <Bot size={14} /> BOT & RPA Engine
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-4xl font-extrabold mb-4 leading-tight" style={{ color: '#39ff14' }}>
              Automate anything. With bots.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ease }}
              className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Build software bots that handle repetitive tasks — fill forms, send emails,
              query databases, and navigate web portals. 24/7, zero errors, no code.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, ease }}
              className="flex flex-wrap gap-4 justify-center">
              <Link to="/request-demo" className="inline-flex items-center gap-2 text-base font-bold px-8 py-3.5 rounded-2xl transition-all hover:scale-105"
                style={{ background: '#ffffff', color: '#164065', boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}>
                Try BOT Engine <ArrowRight size={18} />
              </Link>
              <Link to="/platform" className="inline-flex items-center gap-2 text-base font-bold text-white/80 hover:text-white px-7 py-3.5 rounded-2xl border border-white/25 hover:border-white/50 transition-all"
                style={{ background: 'rgba(255,255,255,0.04)' }}>
                Back to Platform
              </Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, ease }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, ease }}
                className="text-center p-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
                <s.icon size={20} className="text-white/70 mx-auto mb-2" />
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-xs text-slate-300 font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: '#164065' }}>Watch it execute — live</h2>
            <p className="text-base text-slate-500">A bot runs through 6 steps automatically</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden mx-auto max-w-3xl"
            style={{ border: '1px solid #e2e8f0', boxShadow: '0 25px 80px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between px-5 py-3" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-slate-400 font-medium">skiode — Bot Runner</span>
              </div>
              {!running && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>
                  <CheckCircle2 size={14} /> All Steps Complete
                </div>
              )}
            </div>

            <div className="p-6 bg-white" style={{ minHeight: 380 }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: '#164065' }}>
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-800">Employee Onboarding Bot</div>
                  <div className="text-xs text-slate-400">6-step automated workflow</div>
                </div>
                {running && (
                  <div className="ml-auto flex items-center gap-2">
                    <Loader2 size={14} className="text-emerald-500 animate-spin" />
                    <span className="text-xs font-bold text-emerald-500">Running...</span>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <AnimatePresence>
                  {botSteps.slice(0, completedSteps).map((step, i) => (
                    <motion.div key={step.label}
                      initial={{ opacity: 0, x: -20, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.4, ease }}
                      className="flex items-center gap-4 px-4 py-3.5 rounded-xl"
                      style={{ background: `${step.color}06`, border: `1px solid ${step.color}15` }}>
                      <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${step.color}12` }}>
                        <step.icon size={15} style={{ color: step.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-800">{step.label}</div>
                        <div className="text-[10px] text-slate-400">{step.sub}</div>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <span className="text-[10px] font-bold text-emerald-500">Done</span>
                        <CheckCircle2 size={14} className="text-emerald-500" />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {running && completedSteps < botSteps.length && (
                  <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }}
                    className="flex items-center justify-center py-4 rounded-xl border-2 border-dashed border-emerald-200">
                    <span className="text-xs text-emerald-400 font-semibold">Executing next step...</span>
                  </motion.div>
                )}
              </div>

              {!running && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl mt-4"
                  style={{ background: 'rgba(22,64,101,0.06)', border: '1px solid rgba(22,64,101,0.2)' }}>
                  <Sparkles size={14} style={{ color: '#164065' }} />
                  <span className="text-xs font-bold" style={{ color: '#164065' }}>Bot completed in 4.2s — 6/6 steps successful</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bot Templates */}
      <section className="py-12" style={{ background: '#f8fafc' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: '#164065' }}>Pre-built bot templates</h2>
            <p className="text-base text-slate-500">Start with a template and customize for your workflow</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {botTemplates.map((t, i) => (
              <motion.div key={t.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, ease }}
                className="group p-6 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform"
                  style={{ background: '#164065' }}>
                  <t.icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-extrabold mb-2" style={{ color: '#164065' }}>{t.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: '#164065' }}>See it in action</h2>
            <p className="text-base text-slate-500">The actual skiode bot & RPA engine</p>
          </div>
          <div className="space-y-8">
            {[{ img: botScreenshot1, alt: 'Bot Automation', label: 'Bot Automation' }, { img: rpaScreenshot, alt: 'RPA Engine', label: 'RPA Engine' }].map((s) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="rounded-3xl overflow-hidden" style={{ border: '1px solid #e2e8f0', boxShadow: '0 30px 80px rgba(0,0,0,0.1)' }}>
                <div className="flex items-center gap-2 px-5 py-3" style={{ background: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}>
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-slate-400 font-medium">skiode — {s.label}</span>
                </div>
                <img src={s.img} alt={s.alt} className="w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
