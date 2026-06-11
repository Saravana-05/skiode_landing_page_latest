import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  GitBranch, Play, Pause, CheckCircle2, ArrowRight, Zap,
  Clock, Bell, ShieldCheck, Split, UserCheck, FileOutput,
  Workflow, RotateCcw, Sparkles
} from 'lucide-react'
import processVideo from '../assets/videos_process_flow/process_flow.mp4'
import scrProcess from '../assets/platform_screenshots/process_flow.png'

const ease = [0.25, 0.46, 0.45, 0.94]

const steps = [
  { icon: FileOutput,  label: 'Submit',           color: '#3b82f6',  desc: 'Initiate any request — purchase, leave, vendor onboarding.' },
  { icon: UserCheck,   label: 'Review & Route',   color: '#8b5cf6',  desc: 'Auto-route to the right approver based on rules and conditions.' },
  { icon: Split,       label: 'Parallel Branches', color: '#06b6d4', desc: 'Split into parallel tracks — finance, legal, procurement.' },
  { icon: ShieldCheck, label: 'Approve / Reject',  color: '#10b981', desc: 'Multi-level approval with escalation and SLA tracking.' },
  { icon: Bell,        label: 'Notify & Alert',    color: '#f59e0b', desc: 'Email, SMS, push — keep everyone in the loop automatically.' },
  { icon: RotateCcw,   label: 'Loop & Revise',     color: '#ec4899', desc: 'Send back for revision with comments, re-enter the flow.' },
]

const capabilities = [
  'Drag-and-drop visual builder',
  'Conditional branching & decision engine',
  'SLA tracking with auto-escalation',
  'Parallel & sequential approvals',
  'AI Wand — auto-suggest flow steps',
  'Trigger via API, form submit, or schedule',
]

export default function ProcessFlowShowcase() {
  const videoRef = useRef(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' })
  const [playing, setPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    if (!videoRef.current) return
    if (isInView && !hasInteracted) {
      videoRef.current.play().then(() => setPlaying(true)).catch(() => {})
    } else if (!isInView && !hasInteracted) {
      videoRef.current.pause()
      setPlaying(false)
    }
  }, [isInView, hasInteracted])

  const togglePlay = () => {
    setHasInteracted(true)
    if (videoRef.current.paused) {
      videoRef.current.play()
      setPlaying(true)
    } else {
      videoRef.current.pause()
      setPlaying(false)
    }
  }

  return (
    <section ref={sectionRef} className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050a18 0%, #0a0f1e 50%, #0d1225 100%)' }}>

      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 60%)', filter: 'blur(120px)' }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 60%)', filter: 'blur(80px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 rounded-full px-5 py-2 text-xs font-bold mb-6"
            style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)', color: '#a78bfa' }}
          >
            <GitBranch size={13} /> The Heart of skiode
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight"
          >
            <span className="text-white">Design any workflow.</span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #a78bfa, #60a5fa, #34d399)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              Visually. Instantly.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            From simple approvals to complex multi-department orchestrations — drag nodes,
            set conditions, add triggers. No code. Watch it in action.
          </motion.p>
        </div>

        {/* Video + Steps layout */}
        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-start">

          {/* Left — Video in dark browser frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(139,92,246,0.06)',
            }}
          >
            {/* Browser chrome */}
            <div className="flex items-center justify-between px-4 py-2.5"
              style={{ background: '#080c14', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
              </div>
              <div className="flex items-center gap-2 px-4 py-1 rounded-lg"
                style={{ background: 'rgba(255,255,255,0.04)' }}>
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#a78bfa' }} />
                <span className="text-[10px] font-medium" style={{ color: 'rgba(255,255,255,0.25)' }}>
                  skiode — Process Flow Builder
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold"
                  style={{ background: playing ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.05)',
                    color: playing ? '#34d399' : 'rgba(255,255,255,0.25)' }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: playing ? '#34d399' : 'rgba(255,255,255,0.2)' }} />
                  {playing ? 'PLAYING' : 'PAUSED'}
                </span>
              </div>
            </div>

            {/* Video area */}
            <div className="relative cursor-pointer group" onClick={togglePlay}
              style={{ background: '#0a0f1a' }}>
              <video
                ref={videoRef}
                src={processVideo}
                poster={scrProcess}
                muted
                loop
                playsInline
                className="w-full object-contain"
                style={{ aspectRatio: '16/9' }}
              />

              {/* Play/pause overlay */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
                style={{ background: playing ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.35)' }}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center backdrop-blur-sm"
                  style={{
                    background: 'rgba(139,92,246,0.25)',
                    border: '2px solid rgba(139,92,246,0.4)',
                    boxShadow: '0 8px 32px rgba(139,92,246,0.3)',
                  }}
                >
                  {playing
                    ? <Pause size={24} className="text-white" />
                    : <Play size={24} className="text-white ml-1" />
                  }
                </motion.div>
              </div>

              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                style={{ background: 'linear-gradient(transparent, rgba(10,15,26,0.9))' }} />
            </div>
          </motion.div>

          {/* Right — Flow steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="space-y-2"
          >
            <div className="mb-4">
              <h3 className="text-lg font-extrabold text-white mb-1">How a workflow flows</h3>
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                Every process follows your custom path
              </p>
            </div>

            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease }}
                className="group flex items-start gap-3 p-3 rounded-xl transition-all duration-300 cursor-default"
                style={{ border: '1px solid transparent' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${step.color}08`
                  e.currentTarget.style.borderColor = `${step.color}20`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = 'transparent'
                }}
              >
                {/* Step number + icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${step.color}12`, border: `1px solid ${step.color}20` }}>
                    <step.icon size={16} style={{ color: step.color }} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-3"
                      style={{ background: 'rgba(255,255,255,0.06)' }} />
                  )}
                </div>

                {/* Text */}
                <div className="pt-0.5">
                  <div className="text-sm font-bold text-white mb-0.5">{step.label}</div>
                  <div className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    {step.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Capabilities strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3"
        >
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.06, ease }}
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl group cursor-default"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <CheckCircle2 size={14} className="flex-shrink-0 transition-colors duration-300"
                style={{ color: 'rgba(139,92,246,0.6)' }} />
              <span className="text-xs sm:text-sm font-semibold transition-colors duration-300"
                style={{ color: 'rgba(255,255,255,0.5)' }}>
                {cap}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <a href="/request-demo"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-sm text-white transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
              boxShadow: '0 8px 32px rgba(139,92,246,0.35)',
            }}>
            See Process Flow Live <ArrowRight size={14} />
          </a>
          <div className="flex items-center gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            <span className="flex items-center gap-1.5">
              <Workflow size={11} /> Visual Builder
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Sparkles size={11} /> AI Wand
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock size={11} /> SLA Tracking
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
