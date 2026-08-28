import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  GitBranch, Play, Pause, CheckCircle2, Zap,
  Bell, ShieldCheck, Split, UserCheck, FileOutput,
  RotateCcw, Heart, MousePointer2, WandSparkles
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

const capabilityGroups = [
  { title: 'Visual Builder', desc: 'Drag, connect and configure workflows without code.', icon: MousePointer2, color: '#6366f1', items: ['Drag-and-drop builder', 'Parallel & sequential approvals'] },
  { title: 'Intelligent Automation', desc: 'AI Wand suggests the next steps and conditions.', icon: WandSparkles, color: '#10b981', ai: true, items: ['AI Wand — auto-suggest flow steps', 'Trigger via API, form submit, or schedule'] },
  { title: 'Enterprise Control', desc: 'SLA tracking, escalation, approvals and auditability.', icon: ShieldCheck, color: '#eab308', items: ['Conditional branching & decision engine', 'SLA tracking with auto-escalation'] },
]

export default function ProcessFlowShowcase() {
  const videoRef = useRef(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' })
  const [playing, setPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [autoStep, setAutoStep] = useState(0)
  const [interactionStep, setInteractionStep] = useState(null)
  const collapseTimerRef = useRef(null)
  const visibleStep = interactionStep ?? (playing ? autoStep : null)

  useEffect(() => {
    if (!videoRef.current || hasInteracted) return
    // Debounced so a fast scroll-past doesn't fire play() then pause()
    // back-to-back, which janks the in-flight smooth-scroll animation.
    const timer = setTimeout(() => {
      if (isInView) {
        videoRef.current.play().then(() => setPlaying(true)).catch(() => {})
      } else {
        videoRef.current.pause()
        setPlaying(false)
      }
    }, 200)
    return () => clearTimeout(timer)
  }, [isInView, hasInteracted])

  useEffect(() => {
    if (!playing) return
    const timer = setInterval(() => setAutoStep(step => (step + 1) % steps.length), 2400)
    return () => clearInterval(timer)
  }, [playing])

  useEffect(() => () => clearTimeout(collapseTimerRef.current), [])

  const openStep = (index) => {
    clearTimeout(collapseTimerRef.current)
    setInteractionStep(index)
  }

  const closeStep = () => {
    clearTimeout(collapseTimerRef.current)
    collapseTimerRef.current = setTimeout(() => setInteractionStep(null), 100)
  }

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
    <section id="process-flow-showcase" ref={sectionRef} className="homepage-section relative overflow-hidden"
      style={{ background: 'radial-gradient(circle at 50% 18%, #062a2b 0%, #081426 34%, #050a18 72%)' }}>

      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      {/* Abstract workflow heart / energy core */}
      <div aria-hidden="true" className="absolute -top-2 left-1/2 -translate-x-1/2 w-[720px] max-w-[88vw] h-[350px] pointer-events-none">
      <motion.svg viewBox="0 0 800 390" preserveAspectRatio="xMidYMid meet"
        animate={{ scale: [1, 1.018, 1], opacity: [.52, .7, .52] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full h-full overflow-visible">
        <defs>
          <filter id="heartGlow"><feGaussianBlur stdDeviation="9" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
          <linearGradient id="heartLeft" x1="0" x2="1"><stop stopColor="#10b981" stopOpacity=".12" /><stop offset="1" stopColor="#34d399" stopOpacity=".8" /></linearGradient>
          <linearGradient id="heartRight" x1="0" x2="1"><stop stopColor="#34d399" stopOpacity=".65" /><stop offset="1" stopColor="#8b5cf6" stopOpacity=".65" /></linearGradient>
        </defs>
        <path d="M400 335 C345 278 132 190 150 83 C164 0 300 8 400 113" fill="none" stroke="url(#heartLeft)" strokeWidth="3" filter="url(#heartGlow)" />
        <path d="M400 335 C455 278 668 190 650 83 C636 0 500 8 400 113" fill="none" stroke="url(#heartRight)" strokeWidth="3" filter="url(#heartGlow)" />
        <path d="M400 315 C350 262 175 188 188 99 C198 34 302 38 400 130" fill="none" stroke="#34d399" strokeOpacity=".22" />
        <path d="M400 315 C450 262 625 188 612 99 C602 34 498 38 400 130" fill="none" stroke="#a78bfa" strokeOpacity=".2" />
      </motion.svg>
      </div>
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[340px] bg-gradient-to-b from-transparent via-emerald-400/20 to-emerald-400/5 pointer-events-none" />
      {[18, 31, 67, 81].map((left, i) => (
        <motion.span key={left} aria-hidden="true" className="absolute top-20 w-1 h-1 rounded-full bg-emerald-300 pointer-events-none"
          style={{ left: `${left}%` }} animate={{ y: [0, 180, 300], opacity: [0, .7, 0] }} transition={{ duration: 7 + i, delay: i * 1.1, repeat: Infinity, ease: 'linear' }} />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow inline-flex items-center gap-2.5 rounded-full px-5 py-2 font-bold mb-3 backdrop-blur-md"
            style={{ background: 'rgba(15,23,42,.68)', border: '1px solid rgba(139,92,246,.5)', color: '#f8fafc', boxShadow: '0 0 28px rgba(139,92,246,.18)' }}
          >
            <Heart size={13} /> The Heart of skiode
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-.035em] mb-3 leading-[1.03]"
          >
            <span className="text-white">Design any workflow. </span>
            <span style={{ color: '#39ff14', textShadow: '0 0 18px rgba(57,255,20,.28)' }}>
              Visually. Instantly.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="section-lead text-base sm:text-lg max-w-none mx-auto leading-relaxed text-slate-400"
          >
            From simple approvals to complex multi-department orchestrations — drag nodes,
            set conditions, add triggers. No code. Watch it in action.
          </motion.p>
        </div>

        {/* Video + Steps layout */}
        <div className="grid lg:grid-cols-[minmax(0,1fr)_370px] gap-6 items-start">

          {/* Left — Video in dark browser frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 70px rgba(16,185,129,.1), 0 0 100px rgba(139,92,246,.06)',
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

            </div>
          </motion.div>

          {/* Right — Flow steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="space-y-1 relative min-w-0 lg:pl-1"
          >
            <div className="mb-4">
              <h3 className="text-lg font-extrabold text-white mb-1">How a workflow flows</h3>
              <p className="text-xs text-slate-400">
                Every process follows your custom path
              </p>
            </div>

            <div className="space-y-1" role="list" aria-label="Workflow steps">
              {steps.map((step, i) => {
                const isActive = visibleStep === i
                return (
                  <motion.button
                    type="button"
                    role="listitem"
                    key={step.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease }}
                    onMouseEnter={() => openStep(i)}
                    onMouseLeave={closeStep}
                    onFocus={() => openStep(i)}
                    onBlur={closeStep}
                    onClick={() => setInteractionStep(current => current === i ? null : i)}
                    aria-expanded={isActive}
                    className="group relative w-full grid grid-cols-[22px_14px_38px_minmax(0,1fr)] gap-2 items-start px-2 py-2 rounded-xl text-left transition-colors duration-300"
                    style={{
                      background: isActive ? `${step.color}0d` : 'transparent',
                      border: `1px solid ${isActive ? `${step.color}2b` : 'transparent'}`,
                      boxShadow: isActive ? `0 8px 24px ${step.color}0f` : 'none',
                    }}
                  >
                    <span className="pt-2.5 text-[9px] font-bold text-right text-slate-500">0{i + 1}</span>

                    <span className="relative flex justify-center pt-3">
                      {i > 0 && <span className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-px h-6 bg-white/10" />}
                      {i < steps.length - 1 && <span className="absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-8 bg-white/10" />}
                      <motion.span animate={{ scale: isActive ? [1, 1.3, 1] : 1 }} transition={{ duration: 1.8, repeat: isActive ? Infinity : 0 }}
                        className="relative z-10 w-2 h-2 rounded-full"
                        style={{ background: isActive ? step.color : '#526475', boxShadow: isActive ? `0 0 14px ${step.color}` : 'none' }} />
                    </span>

                    <span className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{ background: `${step.color}${isActive ? '22' : '12'}`, border: `1px solid ${step.color}${isActive ? '45' : '22'}`, color: step.color, transform: isActive ? 'scale(1.05)' : 'scale(1)', boxShadow: isActive ? `0 0 16px ${step.color}25` : 'none' }}>
                      <step.icon size={15} />
                    </span>

                    <span className="min-w-0 pt-2">
                      <span className="block text-sm font-bold text-white leading-tight">{step.label}</span>
                      <motion.span initial={false}
                        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0, y: isActive ? 0 : -4, marginTop: isActive ? 5 : 0 }}
                        transition={{ duration: 0.28, ease }}
                        className="block overflow-hidden text-xs leading-relaxed text-slate-400">
                        {step.desc}
                      </motion.span>
                    </span>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

        </div>

        {/* Capabilities strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-7 grid md:grid-cols-3 gap-4"
        >
          {capabilityGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.06, ease }}
              className="relative overflow-hidden rounded-2xl group cursor-default"
              style={{ background: 'rgba(8,20,38,.8)', border: `1px solid ${group.ai ? 'rgba(16,185,129,.65)' : 'rgba(255,255,255,.09)'}`, boxShadow: group.ai ? '0 0 34px rgba(16,185,129,.1)' : 'none' }}
            >
              {group.ai && <span className="absolute right-0 top-0 rounded-bl-xl px-3 py-1.5 text-[9px] font-black tracking-wide text-white bg-violet-600">POWERED BY AI</span>}
              <div className="flex gap-4 p-5 pb-4">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${group.color}25`, color: group.color }}><group.icon size={22} /></div>
                <div><h3 className="text-base font-extrabold text-white">{group.title}</h3><p className="text-xs text-slate-400 mt-1 leading-relaxed">{group.desc}</p></div>
              </div>
              <div className="border-t border-white/[.06] px-5 py-3 space-y-2 bg-white/[.015]">
                {group.items.map(item => <div key={item} className="flex items-center gap-2 text-xs text-slate-300"><CheckCircle2 size={13} style={{ color: group.color }} />{item}</div>)}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
