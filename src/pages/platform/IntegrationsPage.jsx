import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Plug, ArrowRight, Zap, CheckCircle2, RefreshCw, Sparkles,
  Shield, Code, Cloud, ArrowLeftRight, Loader2, Cable,
  CircleDot, Workflow, Lock, Database
} from 'lucide-react'
import integrationsScreenshot from '../../assets/platform_screenshots/integrations.png'
import oracleLogo from '../../assets/integrations/oracle.jpeg'
import sapLogo from '../../assets/integrations/sap.png'
import netsuiteLogo from '../../assets/integrations/netsuite.png'
import dynamics365Logo from '../../assets/integrations/dynamics365.png'
import googleLogo from '../../assets/integrations/google.jpeg'
import microsoftLogo from '../../assets/integrations/microsoft.jpeg'
import sageLogo from '../../assets/integrations/sage.png'

const ease = [0.25, 0.46, 0.45, 0.94]

const connectors = [
  { name: 'Oracle Fusion', logo: oracleLogo, category: 'ERP', color: '#C74634', sync: 'Sales Orders, Invoices, AP/AR' },
  { name: 'SAP S/4HANA', logo: sapLogo, category: 'ERP', color: '#0070F2', sync: 'Materials, Purchase Orders, GL' },
  { name: 'NetSuite', logo: netsuiteLogo, category: 'ERP', color: '#125580', sync: 'Customers, Vendors, Transactions' },
  { name: 'Dynamics 365', logo: dynamics365Logo, category: 'CRM', color: '#002050', sync: 'Leads, Opportunities, Accounts' },
  { name: 'Google Workspace', logo: googleLogo, category: 'Productivity', color: '#4285F4', sync: 'Drive, Sheets, Gmail, Calendar' },
  { name: 'Microsoft 365', logo: microsoftLogo, category: 'Productivity', color: '#0078D4', sync: 'Teams, SharePoint, Outlook' },
  { name: 'Sage Intacct', logo: sageLogo, category: 'Accounting', color: '#00DC82', sync: 'Journals, Bills, Bank Feeds' },
]

const stats = [
  { value: '50+', label: 'Connectors', icon: Plug },
  { value: '99.9%', label: 'Uptime SLA', icon: Shield },
  { value: '<2s', label: 'Avg Sync', icon: Zap },
  { value: '24/7', label: 'Monitoring', icon: CircleDot },
]

const features = [
  { icon: Code, label: 'REST & SOAP APIs', desc: 'Pre-built adapters with auto-auth for any endpoint' },
  { icon: RefreshCw, label: 'Real-Time Sync', desc: 'Bi-directional webhooks, polling, or event triggers' },
  { icon: Shield, label: 'Secure Auth', desc: 'OAuth 2.0, API keys, certs — encrypted at rest' },
  { icon: Cloud, label: '50+ Connectors', desc: 'ERP, CRM, HRMS, email, storage and more' },
]

export default function IntegrationsPage() {
  const [connected, setConnected] = useState(0)
  const [phase, setPhase] = useState('connecting') // connecting | syncing | done

  useEffect(() => {
    const timers = []
    connectors.forEach((_, i) => {
      timers.push(setTimeout(() => setConnected(i + 1), 300 + i * 450))
    })
    const connectEnd = 300 + connectors.length * 450
    timers.push(setTimeout(() => setPhase('syncing'), connectEnd + 200))
    timers.push(setTimeout(() => setPhase('done'), connectEnd + 1600))
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-24 pb-10 relative overflow-hidden" style={{ background: '#164065' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold mb-4"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', color: '#ffffff' }}>
              <Cable size={14} /> Integrations Hub
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-4xl font-extrabold mb-4 leading-tight" style={{ color: '#39ff14' }}>
              Connect everything. Seamlessly.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ease }}
              className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              50+ pre-built connectors for Oracle, SAP, NetSuite, Dynamics 365, Google, Microsoft, and more.
              Bi-directional sync with zero-code configuration.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, ease }}
              className="flex flex-wrap gap-4 justify-center">
              <Link to="/request-demo" className="inline-flex items-center gap-2 text-base font-bold px-8 py-3.5 rounded-2xl transition-all hover:scale-105"
                style={{ background: '#ffffff', color: '#164065', boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}>
                Explore Integrations <ArrowRight size={18} />
              </Link>
              <Link to="/platform" className="inline-flex items-center gap-2 text-base font-bold text-white/80 hover:text-white px-7 py-3.5 rounded-2xl border border-white/25 hover:border-white/50 transition-all"
                style={{ background: 'rgba(255,255,255,0.04)' }}>
                Back to Platform
              </Link>
            </motion.div>
          </div>

          {/* Stats bar */}
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

      {/* ── Live Connection Demo ── */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: '#164065' }}>Watch it connect — live</h2>
            <p className="text-base text-slate-500">Each connector authenticates, maps fields, and syncs in seconds</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden mx-auto max-w-4xl"
            style={{ border: '1px solid #e2e8f0', boxShadow: '0 25px 80px rgba(0,0,0,0.08)' }}>
            {/* Title bar */}
            <div className="flex items-center justify-between px-5 py-3" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-slate-400 font-medium">skiode — Integration Hub</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: phase === 'done' ? 'rgba(16,185,129,0.1)' : phase === 'syncing' ? 'rgba(245,158,11,0.1)' : 'rgba(59,130,246,0.1)',
                  color: phase === 'done' ? '#10b981' : phase === 'syncing' ? '#f59e0b' : '#3b82f6'
                }}>
                {phase === 'done' ? <><CheckCircle2 size={14} /> All Systems Connected</> :
                  phase === 'syncing' ? <><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}><RefreshCw size={12} /></motion.div> Syncing Data</> :
                    <><Plug size={14} /> Connecting...</>}
              </div>
            </div>

            <div className="p-6 bg-white">
              {/* Connector rows */}
              <div className="space-y-3 mb-5">
                <AnimatePresence>
                  {connectors.slice(0, connected).map((c) => (
                    <motion.div key={c.name}
                      initial={{ opacity: 0, x: -40, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.5, ease, type: 'spring', stiffness: 120 }}
                      className="flex items-center gap-4 px-5 py-4 rounded-2xl group hover:shadow-md transition-all"
                      style={{ background: `${c.color}06`, border: `1.5px solid ${c.color}15` }}>
                      {/* Logo */}
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform"
                        style={{ border: `2px solid ${c.color}20`, boxShadow: `0 4px 16px ${c.color}10` }}>
                        <img src={c.logo} alt={c.name} className="w-10 h-10 object-contain" />
                      </div>
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2.5 mb-1">
                          <span className="text-base font-extrabold text-slate-800">{c.name}</span>
                          <span className="text-[11px] px-2.5 py-1 rounded-full font-bold tracking-wide uppercase"
                            style={{ background: `${c.color}12`, color: c.color }}>{c.category}</span>
                        </div>
                        <div className="text-sm text-slate-400">{c.sync}</div>
                      </div>
                      {/* Status */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2, delay: Math.random() }}
                          className="w-2.5 h-2.5 rounded-full" style={{ background: c.color, boxShadow: `0 0 8px ${c.color}60` }} />
                        <ArrowLeftRight size={16} className="text-slate-300" />
                        <CheckCircle2 size={20} style={{ color: c.color }} />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {connected < connectors.length && (
                  <motion.div animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ repeat: Infinity, duration: 1.5 }}
                    className="flex items-center gap-4 px-5 py-4 rounded-2xl border-2 border-dashed border-emerald-200">
                    <Loader2 size={20} className="text-emerald-400 animate-spin" />
                    <span className="text-sm text-emerald-500 font-bold">Discovering connectors...</span>
                  </motion.div>
                )}
              </div>

              {/* Sync pipeline */}
              {phase !== 'connecting' && (
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl p-5 mb-4" style={{ background: 'rgba(22,64,101,0.04)', border: '1px solid rgba(22,64,101,0.15)' }}>
                  <div className="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2" style={{ color: '#164065' }}>
                    <Workflow size={14} /> Data Sync Pipeline
                  </div>
                  <div className="flex items-center gap-2">
                    {[
                      { icon: Lock, label: 'Auth', done: true },
                      { icon: Database, label: 'Map Fields', done: true },
                      { icon: RefreshCw, label: 'Sync', done: phase === 'done' },
                      { icon: CheckCircle2, label: 'Verified', done: phase === 'done' },
                    ].map((step, i) => (
                      <div key={step.label} className="flex items-center gap-2 flex-1">
                        <div className={`flex items-center gap-2 px-3 py-2.5 rounded-xl flex-1 transition-all ${step.done ? '' : 'opacity-40'}`}
                          style={{ background: step.done ? 'rgba(16,185,129,0.12)' : 'rgba(0,0,0,0.03)', border: `1px solid ${step.done ? 'rgba(16,185,129,0.3)' : 'rgba(0,0,0,0.06)'}` }}>
                          <step.icon size={15} style={{ color: step.done ? '#10b981' : '#94a3b8' }} />
                          <span className="text-xs font-bold" style={{ color: step.done ? '#10b981' : '#94a3b8' }}>{step.label}</span>
                        </div>
                        {i < 3 && <ArrowRight size={12} className="text-slate-300 flex-shrink-0" />}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {phase === 'done' && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-2xl"
                  style={{ background: 'rgba(22,64,101,0.06)', border: '1px solid rgba(22,64,101,0.2)' }}>
                  <Sparkles size={16} style={{ color: '#164065' }} />
                  <span className="text-sm font-bold" style={{ color: '#164065' }}>7 connectors active · Bi-directional sync · Real-time webhooks enabled</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Bento Connector Grid ── */}
      <section className="py-12" style={{ background: '#164065' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: '#39ff14' }}>Your entire tech stack, connected</h2>
            <p className="text-base text-slate-300">Pre-built connectors ready to go in minutes</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {connectors.map((c, i) => (
              <motion.div key={c.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06, ease }}
                className="group relative p-6 rounded-3xl cursor-pointer transition-all duration-300 hover:scale-[1.03]"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `${c.color}12`, border: `1px solid ${c.color}30` }} />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center overflow-hidden mb-4 group-hover:shadow-lg transition-shadow"
                    style={{ boxShadow: `0 4px 20px ${c.color}15` }}>
                    <img src={c.logo} alt={c.name} className="w-11 h-11 object-contain" />
                  </div>
                  <h3 className="text-lg font-extrabold text-white mb-1">{c.name}</h3>
                  <span className="inline-block text-[11px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wide mb-2"
                    style={{ background: `${c.color}20`, color: c.color }}>{c.category}</span>
                  <p className="text-sm text-slate-400">{c.sync}</p>
                </div>
              </motion.div>
            ))}
            {/* 50+ more card */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.45, ease }}
              className="group relative p-6 rounded-3xl cursor-pointer transition-all duration-300 hover:scale-[1.03] flex flex-col items-center justify-center text-center"
              style={{ background: 'rgba(255,255,255,0.04)', border: '2px dashed rgba(57,255,20,0.35)' }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(57,255,20,0.12)' }}>
                <Plug size={28} style={{ color: '#39ff14' }} />
              </div>
              <h3 className="text-lg font-extrabold mb-1" style={{ color: '#39ff14' }}>50+ More</h3>
              <p className="text-sm text-slate-300">REST · SOAP · GraphQL · Custom</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: '#164065' }}>Three steps. Zero code.</h2>
            <p className="text-base text-slate-500">From connector to live sync in under 5 minutes</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Choose Connector', desc: 'Pick from 50+ pre-built connectors or add a custom REST/SOAP endpoint. OAuth, API keys, and certificates all supported out of the box.', icon: Plug },
              { step: '02', title: 'Map & Configure', desc: 'Visually drag-and-drop to map fields between skiode and your system. Set sync direction, schedule, and transformation rules.', icon: ArrowLeftRight },
              { step: '03', title: 'Sync & Monitor', desc: 'Go live with real-time or scheduled sync. Every data exchange is logged — auto-retry on failures, alerts when you need them.', icon: RefreshCw },
            ].map((s, i) => (
              <motion.div key={s.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.15, ease }}
                className="relative group">
                <div className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: '#164065' }}>
                      <s.icon size={26} className="text-white" />
                    </div>
                    <span className="text-5xl font-black text-slate-100">{s.step}</span>
                  </div>
                  <h3 className="text-xl font-extrabold mb-3" style={{ color: '#164065' }}>{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Cards ── */}
      <section className="py-12" style={{ background: '#f8fafc' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, ease }}
                className="group p-6 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform"
                  style={{ background: '#164065' }}>
                  <f.icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-extrabold mb-2" style={{ color: '#164065' }}>{f.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Real Screenshot ── */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: '#164065' }}>See it in action</h2>
            <p className="text-base text-slate-500">The actual skiode integrations manager</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden"
            style={{ border: '1px solid #e2e8f0', boxShadow: '0 30px 80px rgba(0,0,0,0.1)' }}>
            <div className="flex items-center gap-2 px-5 py-3" style={{ background: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}>
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-slate-400 font-medium">skiode — Integrations Manager</span>
            </div>
            <img src={integrationsScreenshot} alt="skiode Integrations" className="w-full" />
          </motion.div>
        </div>
      </section>
    </>
  )
}
