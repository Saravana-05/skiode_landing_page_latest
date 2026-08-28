import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  GitBranch, ArrowRight, CheckCircle2, Clock, Bell,
  ShieldCheck, Split, UserCheck, FileOutput, RotateCcw, Sparkles,
  Zap, Workflow, Timer, Route
} from 'lucide-react'
import processScreenshot from '../../assets/platform_screenshots/process_flow.png'

const ease = [0.25, 0.46, 0.45, 0.94]

const flowNodes = [
  { id: 'start', icon: FileOutput, label: 'Start', sub: 'Form Submitted', color: '#3b82f6', x: 50, y: 10 },
  { id: 'review', icon: UserCheck, label: 'Manager Review', sub: 'Auto-assigned', color: '#8b5cf6', x: 50, y: 25 },
  { id: 'condition', icon: Split, label: 'Amount > $5K?', sub: 'Condition check', color: '#f59e0b', x: 50, y: 40 },
  { id: 'approve1', icon: ShieldCheck, label: 'VP Approval', sub: 'If Yes', color: '#10b981', x: 25, y: 55 },
  { id: 'approve2', icon: CheckCircle2, label: 'Auto-Approve', sub: 'If No', color: '#06b6d4', x: 75, y: 55 },
  { id: 'notify', icon: Bell, label: 'Notify Teams', sub: 'Email + Slack', color: '#ec4899', x: 50, y: 70 },
  { id: 'end', icon: CheckCircle2, label: 'Complete', sub: 'SLA: 2 days', color: '#10b981', x: 50, y: 85 },
]

const stats = [
  { value: '7', label: 'Node Types', icon: Route },
  { value: '<1m', label: 'Build Time', icon: Timer },
  { value: '∞', label: 'Branches', icon: Split },
  { value: 'AI', label: 'Auto-Draw', icon: Sparkles },
]

const features = [
  { icon: Split, label: 'Conditional Branching', desc: 'If/else, switch, parallel paths based on any data field' },
  { icon: Clock, label: 'SLA & Escalation', desc: 'Auto-escalate when deadlines pass, notify stakeholders' },
  { icon: Sparkles, label: 'AI Wand', desc: 'Describe your process in English — AI draws the flow' },
  { icon: RotateCcw, label: 'Loop & Revise', desc: 'Send back for corrections, re-enter the flow seamlessly' },
]

export default function ProcessFlowPage() {
  const [visibleNodes, setVisibleNodes] = useState(0)
  const [connections, setConnections] = useState(0)

  useEffect(() => {
    const timers = []
    flowNodes.forEach((_, i) => {
      timers.push(setTimeout(() => {
        setVisibleNodes(i + 1)
        if (i > 0) setConnections(i)
      }, 600 + i * 600))
    })
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
              <Workflow size={14} /> Process Flow Builder
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-4xl font-extrabold mb-4 leading-tight" style={{ color: '#39ff14' }}>
              Design workflows. Visually.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ease }}
              className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Drag nodes, set conditions, add approvals and SLA tracking.
              From simple approvals to complex multi-department orchestrations — no code required.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, ease }}
              className="flex flex-wrap gap-4 justify-center">
              <Link to="/request-demo" className="inline-flex items-center gap-2 text-base font-bold px-8 py-3.5 rounded-2xl transition-all hover:scale-105"
                style={{ background: '#ffffff', color: '#164065', boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}>
                Try Process Flow <ArrowRight size={18} />
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
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: '#164065' }}>Watch it draw — live</h2>
            <p className="text-base text-slate-500">Nodes connect automatically as you build your approval flow</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden mx-auto"
            style={{ border: '1px solid #e2e8f0', boxShadow: '0 25px 80px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between px-5 py-3" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-slate-400 font-medium">skiode — Process Flow Designer</span>
              </div>
              {visibleNodes >= flowNodes.length && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>
                  <CheckCircle2 size={14} /> Flow Complete
                </div>
              )}
            </div>

            <div className="relative bg-white" style={{ height: 460 }}>
              <div className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: 'linear-gradient(#164065 1px, transparent 1px), linear-gradient(90deg, #164065 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                {connections >= 1 && <motion.line initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} x1="50%" y1="14%" x2="50%" y2="23%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 3" />}
                {connections >= 2 && <motion.line initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} x1="50%" y1="29%" x2="50%" y2="38%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 3" />}
                {connections >= 3 && (
                  <>
                    <motion.line initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} x1="45%" y1="44%" x2="30%" y2="53%" stroke="#10b981" strokeWidth="2" strokeDasharray="4 3" />
                    <motion.line initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} x1="55%" y1="44%" x2="70%" y2="53%" stroke="#06b6d4" strokeWidth="2" strokeDasharray="4 3" />
                  </>
                )}
                {connections >= 5 && (
                  <>
                    <motion.line initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} x1="30%" y1="59%" x2="50%" y2="68%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 3" />
                    <motion.line initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} x1="70%" y1="59%" x2="50%" y2="68%" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 3" />
                  </>
                )}
                {connections >= 6 && <motion.line initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} x1="50%" y1="74%" x2="50%" y2="83%" stroke="#10b981" strokeWidth="2" strokeDasharray="4 3" />}
              </svg>

              <AnimatePresence>
                {flowNodes.slice(0, visibleNodes).map((node) => (
                  <motion.div key={node.id}
                    initial={{ opacity: 0, scale: 0.5, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, ease, type: 'spring', stiffness: 200 }}
                    className="absolute flex items-center gap-3 px-4 py-3 rounded-2xl bg-white"
                    style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, 0)', border: `2px solid ${node.color}30`, boxShadow: `0 4px 16px ${node.color}15`, zIndex: 2 }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${node.color}12` }}>
                      <node.icon size={16} style={{ color: node.color }} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">{node.label}</div>
                      <div className="text-[10px] text-slate-400">{node.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {visibleNodes >= flowNodes.length && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                  className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2.5 rounded-xl z-10"
                  style={{ background: 'rgba(22,64,101,0.06)', border: '1px solid rgba(22,64,101,0.2)' }}>
                  <Sparkles size={12} style={{ color: '#164065' }} />
                  <span className="text-xs font-bold" style={{ color: '#164065' }}>Flow complete — 7 nodes, 2 branches</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12" style={{ background: '#f8fafc' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: '#164065' }}>Why teams love Process Flow</h2>
            <p className="text-base text-slate-500">Everything you need for enterprise workflow automation</p>
          </div>
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

      {/* Screenshot */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: '#164065' }}>See it in action</h2>
            <p className="text-base text-slate-500">The actual skiode process flow designer</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden" style={{ border: '1px solid #e2e8f0', boxShadow: '0 30px 80px rgba(0,0,0,0.1)' }}>
            <div className="flex items-center gap-2 px-5 py-3" style={{ background: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}>
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-slate-400 font-medium">skiode — Live Process Flow</span>
            </div>
            <img src={processScreenshot} alt="skiode Process Flow" className="w-full" />
          </motion.div>
        </div>
      </section>
    </>
  )
}
