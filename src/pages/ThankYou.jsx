import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  CheckCircle2, ArrowRight, FileText, GitBranch, ScanText,
  Bot, UserCheck, HardHat, BarChart2, Home, Mail, Clock
} from 'lucide-react'

const steps = [
  { icon: CheckCircle2, label: 'Demo request submitted',       color: '#10b981', done: true },
  { icon: Mail,         label: 'Confirmation email sent',      color: '#3b82f6', done: true },
  { icon: Clock,        label: 'Team will contact you soon',   color: '#84cc16', done: false },
]

const explore = [
  { icon: FileText,   label: 'Build Forms',                color: '#3b82f6' },
  { icon: GitBranch,  label: 'Automate Workflows',         color: '#8b5cf6' },
  { icon: ScanText,   label: 'Process Documents',          color: '#06b6d4' },
  { icon: UserCheck,  label: 'Use AI Recruiter',           color: '#f59e0b' },
  { icon: HardHat,    label: 'Construction Workflows',     color: '#f97316' },
  { icon: BarChart2,  label: 'Generate Reports',           color: '#10b981' },
]

/* Animated checkmark SVG */
function AnimatedCheck() {
  return (
    <div className="relative">
      {/* Pulse rings */}
      <motion.div className="absolute inset-0 rounded-full"
        style={{ background: 'rgba(132,204,22,0.12)' }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity }} />
      <motion.div className="absolute inset-0 rounded-full"
        style={{ background: 'rgba(59,130,246,0.08)' }}
        animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }} />
      <motion.div
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18, delay: 0.2 }}
        className="relative w-24 h-24 rounded-full flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg,#3b82f6,#84cc16)' }}>
        <CheckCircle2 size={46} color="white" strokeWidth={2} />
      </motion.div>
    </div>
  )
}

export default function ThankYou() {
  const saved = (() => {
    try { return JSON.parse(localStorage.getItem('skiode_demo_request') || '{}') } catch { return {} }
  })()

  return (
    <main className="min-h-screen pt-16" style={{ background: 'linear-gradient(135deg,#f8faff 0%,#ffffff 60%,#f0f4ff 100%)' }}>
      <div className="absolute inset-0 dot-pattern-light opacity-40 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">

        {/* Animated check */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mb-8">
          <AnimatedCheck />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ fontFamily: 'var(--font-heading)', background: 'rgba(101,163,13,0.08)', border: '1px solid rgba(101,163,13,0.2)', color: '#65a30d' }}>
            <CheckCircle2 size={11} /> Request Received
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}>
            Thank you{saved.fullName ? `, ${saved.fullName.split(' ')[0]}` : ''}!
          </h1>
          <p className="text-lg mb-2" style={{ color: '#64748b', fontFamily: 'var(--font-body)' }}>
            We've received your demo request.
          </p>
          <p className="text-base" style={{ color: '#94a3b8', fontFamily: 'var(--font-body)' }}>
            Our team will contact you shortly to schedule your personalised walkthrough.
          </p>
        </motion.div>

        {/* Status cards */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10 mb-12">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-3 px-5 py-4 rounded-2xl sm:flex-col sm:text-center sm:w-44"
              style={{ background: '#ffffff', border: `1px solid ${s.color}20`, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${s.color}15` }}>
                {s.done
                  ? <CheckCircle2 size={18} style={{ color: s.color }} />
                  : <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: s.color }} />
                }
              </div>
              <span className="text-sm font-semibold text-slate-800" style={{ fontFamily: 'var(--font-heading)' }}>{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-sm px-6 py-3 justify-center rounded-xl font-semibold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-all"
            style={{ fontFamily: 'var(--font-heading)' }}>
            <Home size={14} /> Back to Home
          </Link>
          <a href="/#platform" className="btn-primary text-sm px-6 py-3 justify-center">
            Explore Platform <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Explore section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}>
          <p className="text-sm font-semibold mb-5"
            style={{ color: '#94a3b8', fontFamily: 'var(--font-heading)' }}>
            While you wait, explore what our platform can do
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mx-auto">
            {explore.map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.85 + i * 0.06 }}
                className="flex flex-col items-center gap-2.5 p-4 rounded-2xl hover:scale-[1.03] transition-transform cursor-pointer"
                style={{ background: '#ffffff', border: `1px solid ${item.color}15`, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
                  style={{ background: `${item.color}12` }}>
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <span className="text-xs font-semibold text-slate-700" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
