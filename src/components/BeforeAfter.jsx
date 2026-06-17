import { motion } from "framer-motion"
import {
  FileText, GitBranch, FolderOpen, ScanText, BarChart2, Bot, Plug, Users, Cpu,
  Sparkles, Shield, Bell, Smartphone, ArrowRight, X, Check
} from "lucide-react"

/* ── All the old tools people juggle ── */
const oldTools = [
  "Excel", "Google Forms", "Paper Forms", "Visio", "Email Chains",
  "UiPath", "Automation Anywhere", "ABBYY", "Manual Data Entry",
  "Intercom", "Freshdesk", "WhatsApp Bots", "Zapier", "Custom APIs",
  "Tableau", "Power BI", "SharePoint", "Dropbox", "BambooHR",
  "Active Directory", "Flutter", "Slack Alerts", "Jira", "Trello",
]

/* ── skiode modules ── */
const modules = [
  { icon: FileText, name: "Form Builder", color: "#3b82f6", bg: "#dbeafe" },
  { icon: GitBranch, name: "Process Flow", color: "#8b5cf6", bg: "#ede9fe" },
  { icon: Cpu, name: "RPA", color: "#ec4899", bg: "#fce7f3" },
  { icon: ScanText, name: "OCR / AI", color: "#10b981", bg: "#d1fae5" },
  { icon: Bot, name: "BOTS", color: "#6366f1", bg: "#e0e7ff" },
  { icon: Plug, name: "Integration", color: "#06b6d4", bg: "#cffafe" },
  { icon: BarChart2, name: "Dashboards", color: "#f97316", bg: "#ffedd5" },
  { icon: FolderOpen, name: "DMS", color: "#f59e0b", bg: "#fef3c7" },
  { icon: Users, name: "Users", color: "#3b82f6", bg: "#dbeafe" },
  { icon: Shield, name: "Rules", color: "#10b981", bg: "#d1fae5" },
  { icon: Smartphone, name: "Mobile", color: "#8b5cf6", bg: "#ede9fe" },
  { icon: Bell, name: "SLA", color: "#f97316", bg: "#ffedd5" },
]

export default function WhatSkiodeReplaces() {
  return (
    <section id="before-after" className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 50%, #f8faff 100%)" }}>
      <div className="absolute inset-0 dot-pattern-light pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold mb-5"
            style={{ background: "rgba(59,130,246,0.07)", border: "1px solid rgba(59,130,246,0.15)", color: "#3b82f6" }}>
            <Sparkles size={12} /> BPM + Lowcode + RPA + AI — All In One
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-5 leading-tight">
            One platform, <span className="gradient-text-blue">zero fragmentation</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Stop managing a dozen subscriptions. skiode replaces them all.
          </motion.p>
        </div>

        {/* Two-panel comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="grid lg:grid-cols-[1fr_auto_1fr] gap-0 items-stretch"
        >
          {/* LEFT — chaos panel */}
          <div className="rounded-2xl lg:rounded-r-none p-8 relative overflow-hidden"
            style={{ background: "#f8f9fb", border: "1px solid #e2e8f0", borderRight: "none" }}>
            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-slate-200">
                <X size={14} className="text-slate-500" strokeWidth={3} />
              </div>
              <span className="text-sm font-extrabold text-slate-500 uppercase tracking-wider">Without skiode</span>
            </div>
            {/* Scattered tool pills */}
            <div className="flex flex-wrap gap-2">
              {oldTools.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.02 }}
                  className="px-3 py-1.5 rounded-lg text-sm font-semibold"
                  style={{
                    background: "white",
                    border: "1px solid #e2e8f0",
                    color: "#64748b",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}>
                  {tool}
                </motion.span>
              ))}
            </div>
            {/* Subtle chaos markers */}
            <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-400 font-medium">
              <span>24+ separate licenses</span>
              <span>·</span>
              <span>No unified view</span>
              <span>·</span>
              <span>Complex integrations</span>
            </div>
          </div>

          {/* CENTER — arrow divider */}
          <div className="hidden lg:flex flex-col items-center justify-center px-0 relative z-10">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center"
              style={{ border: "2px solid #e2e8f0", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
              <ArrowRight size={20} className="text-blue-500" />
            </div>
          </div>
          {/* Mobile arrow */}
          <div className="flex lg:hidden items-center justify-center py-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm rotate-90">
              <ArrowRight size={16} className="text-blue-500" />
            </div>
          </div>

          {/* RIGHT — skiode clean panel */}
          <div className="rounded-2xl lg:rounded-l-none p-8 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #f0f7ff 0%, #f5f0ff 100%)",
              border: "1px solid #dbeafe",
              borderLeft: "none",
            }}>
            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}>
                <Check size={14} className="text-white" strokeWidth={3} />
              </div>
              <span className="text-sm font-extrabold uppercase tracking-wider"
                style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                With skiode
              </span>
            </div>
            {/* Clean module grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {modules.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.04 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white group hover:shadow-lg transition-all duration-300"
                  style={{ border: "1px solid #e8edf4" }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: m.bg }}>
                    <m.icon size={20} style={{ color: m.color }} strokeWidth={1.8} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-700 text-center leading-tight">{m.name}</span>
                </motion.div>
              ))}
            </div>
            {/* Benefits */}
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold" style={{ color: "#3b82f6" }}>
              <span>1 platform</span>
              <span>·</span>
              <span>1 license</span>
              <span>·</span>
              <span>Zero integration headaches</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {[
            { num: "50+", label: "Integrations ready" },
            { num: "5×", label: "Faster app builds" },
            { num: "70%", label: "Cycle time reduction" },
            { num: "10×", label: "Productivity boost" },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-black gradient-text-blue">{s.num}</div>
              <div className="text-sm text-slate-400 font-semibold mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
