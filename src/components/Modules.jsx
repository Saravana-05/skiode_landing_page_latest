import { motion } from 'framer-motion'
import { Layout, GitBranch, Users, FolderOpen, ScanText, BarChart3, Bot, Link2, MessageSquare } from 'lucide-react'

const modules = [
  {
    icon: Layout, color: '#3b82f6', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)',
    tag: 'Low-Code', title: 'Forms & Core Data',
    desc: 'Create dynamic forms, configure domain models, manage core business data, validate fields, and build structured applications faster.',
  },
  {
    icon: GitBranch, color: '#8b5cf6', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)',
    tag: 'Workflow', title: 'Process Flow',
    desc: 'Design approval workflows, task routing, escalations, conditions, and business process automation with a visual process builder.',
  },
  {
    icon: Users, color: '#06b6d4', bg: 'rgba(6,182,212,0.08)', border: 'rgba(6,182,212,0.2)',
    tag: 'Secure', title: 'Users & Groups',
    desc: 'Manage users, roles, permissions, teams, access policies, and organization-level governance.',
  },
  {
    icon: FolderOpen, color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)',
    tag: 'Secure', title: 'DMS',
    desc: 'Store, organize, search, retrieve, and manage documents with secure document management capabilities.',
  },
  {
    icon: ScanText, color: '#a3e635', bg: 'rgba(163,230,53,0.08)', border: 'rgba(163,230,53,0.2)',
    tag: 'AI', title: 'OCR & AI/ML',
    desc: 'Extract data from documents, classify content, detect patterns, and automate data entry using OCR and AI/ML.',
  },
  {
    icon: BarChart3, color: '#ec4899', bg: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.2)',
    tag: 'Analytics', title: 'Dashboards & Reports',
    desc: 'Create real-time dashboards, reports, charts, KPIs, and analytics views for business decision-making.',
  },
  {
    icon: Bot, color: '#ef4444', bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.2)',
    tag: 'Automation', title: 'RPA',
    desc: 'Automate repetitive desktop, web, and back-office tasks using robotic process automation.',
  },
  {
    icon: Link2, color: '#14b8a6', bg: 'rgba(20,184,166,0.08)', border: 'rgba(20,184,166,0.2)',
    tag: 'Integration', title: 'Integration',
    desc: 'Connect APIs, databases, CRMs, ERPs, cloud apps, webhooks, and external business systems.',
  },
  {
    icon: MessageSquare, color: '#f97316', bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.2)',
    tag: 'AI', title: 'BOT Automation',
    desc: 'Create intelligent bots for task handling, alerts, reminders, approvals, and workflow triggers.',
  },
]

export default function Modules() {
  return (
    <section id="modules" className="py-24" style={{ background: 'linear-gradient(135deg, #060e1e 0%, #0a1628 50%, #060e1e 100%)' }}>
      <div className="absolute inset-0 dot-pattern pointer-events-none" style={{ position: 'relative' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: 'rgba(163,230,53,0.1)', border: '1px solid rgba(163,230,53,0.25)', color: '#a3e635' }}
          >
            9 Integrated Modules
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight"
          >
            Every capability your business<br className="hidden sm:block" /> needs, fully integrated
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            From data capture to intelligent automation — all nine modules work together in one unified low-code workspace.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod, i) => {
            const Icon = mod.icon
            return (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                whileHover={{ y: -4, borderColor: mod.color }}
                className="group rounded-2xl p-6 cursor-pointer transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ background: mod.bg, border: `1px solid ${mod.border}` }}
                  >
                    <Icon size={22} style={{ color: mod.color }} />
                  </div>
                  <span
                    className="text-[9px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: `${mod.color}15`, color: mod.color, border: `1px solid ${mod.color}30` }}
                  >
                    {mod.tag}
                  </span>
                </div>
                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-lime-400 transition-colors duration-200">{mod.title}</h3>
                <p className="text-sm text-white/45 leading-relaxed">{mod.desc}</p>
                <div className="mt-4 h-px" style={{ background: `linear-gradient(90deg, ${mod.color}40, transparent)` }} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
