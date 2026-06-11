import { motion } from "framer-motion"
import { GitBranch, CheckCircle2, User, Clock, Bell, Zap, AlertCircle, RefreshCw, FileOutput, ArrowRight, Shield, Settings, Play } from "lucide-react"
import { WorkflowPlaceholder } from "./Placeholders"

const nodeDetails = [
  { icon: User,       label: "Assignee",     val: "Finance Manager",  c: "#8b5cf6" },
  { icon: Clock,      label: "SLA Time",     val: "48 hours",         c: "#f59e0b" },
  { icon: Bell,       label: "Notification", val: "Email + Slack",    c: "#3b82f6" },
  { icon: Zap,        label: "Auto Escalate",val: "After 48h",        c: "#ef4444" },
  { icon: Settings,   label: "API Trigger",  val: "POST /approve",    c: "#10b981" },
  { icon: Shield,     label: "Audit Trail",  val: "Full log",         c: "#06b6d4" },
]

const analytics = [
  { l: "Avg Completion", v: "2.4h",  c: "#10b981" },
  { l: "SLA Breaches",   v: "2%",   c: "#3b82f6" },
  { l: "Auto-approved",  v: "68%",  c: "#8b5cf6" },
  { l: "This Month",     v: "1,284",c: "#f59e0b" },
]

const features = [
  { icon: GitBranch,  label: "Visual process builder",        c: "#8b5cf6" },
  { icon: User,       label: "Multi-level approvals",          c: "#3b82f6" },
  { icon: Clock,      label: "SLA rules & auto-escalation",    c: "#f59e0b" },
  { icon: Bell,       label: "Smart notifications",            c: "#06b6d4" },
  { icon: RefreshCw,  label: "Reusable process templates",     c: "#10b981" },
  { icon: Shield,     label: "Complete audit trail",           c: "#ec4899" },
  { icon: Zap,        label: "API and webhook triggers",       c: "#f97316" },
  { icon: FileOutput, label: "Automated document generation",  c: "#6366f1" },
]

export default function ProcessFlowSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="process-flow" style={{ background: "linear-gradient(180deg,#faf5ff 0%,#f8faff 100%)" }}>
      <div className="absolute inset-0 dot-pattern-light pointer-events-none opacity-60" />
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(139,92,246,0.06) 0%,transparent 70%)", filter: "blur(80px)" }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(59,130,246,0.05) 0%,transparent 70%)", filter: "blur(80px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)", color: "#7c3aed" }}>
            <GitBranch size={11} /> Process Flow Builder
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Design workflows visually.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Run them automatically.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto">
            Turn complex business processes into clear, automated flow diagrams with drag-and-drop nodes, conditional logic, SLA rules, and smart notifications.
          </motion.p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* ── Left: SVG Flow Diagram ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="lg:col-span-3 rounded-3xl overflow-hidden"
            style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
            {/* Toolbar */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b" style={{ borderColor: "rgba(0,0,0,0.06)", background: "#f8fafc" }}>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex items-center gap-2 ml-2">
                {["Configure", "Align", "Adjust", "Undo", "Redo"].map(t => (
                  <button key={t} className="text-xs px-2 py-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors">{t}</button>
                ))}
              </div>
              <div className="ml-auto flex items-center gap-2">
                <button className="text-xs px-2.5 py-1 rounded-lg border text-slate-500" style={{ borderColor: "rgba(0,0,0,0.12)" }}>Save Locally</button>
                <button className="text-xs px-3 py-1.5 rounded-lg font-semibold text-white flex items-center gap-1.5" style={{ background: "linear-gradient(135deg,#10b981,#059669)" }}>
                  <Play size={9} /> Export Process
                </button>
                <button className="text-xs px-3 py-1.5 rounded-lg font-semibold text-white flex items-center gap-1.5" style={{ background: "linear-gradient(135deg,#8b5cf6,#6366f1)" }}>
                  ✨ AI WAND
                </button>
              </div>
            </div>

            <div className="flex">
              {/* Side node palette */}
              <div className="w-10 flex-shrink-0 flex flex-col items-center py-4 gap-3 border-r" style={{ borderColor: "rgba(0,0,0,0.06)", background: "#f1f5f9" }}>
                {[
                  { icon: "⊙", label: "Start" },
                  { icon: "□", label: "Task" },
                  { icon: "◇", label: "Gate" },
                  { icon: "↯", label: "Trigger" },
                  { icon: "⊛", label: "Wait" },
                  { icon: "⚡", label: "Action" },
                  { icon: "⊕", label: "Script" },
                  { icon: "📅", label: "Timer" },
                  { icon: "🔔", label: "Notify" },
                  { icon: "⊗", label: "End" },
                ].map((n, i) => (
                  <div key={i} title={n.label}
                    className="w-7 h-7 rounded-lg flex items-center justify-center cursor-pointer transition-all hover:bg-white/10"
                    style={{ fontSize: "12px", color: "#94a3b8" }}>
                    {n.icon}
                  </div>
                ))}
              </div>

              {/* Workflow visual — swap WorkflowPlaceholder body with a real screenshot or SVG */}
              <div className="flex-1 overflow-auto p-4">
                <WorkflowPlaceholder />
              </div>
            </div>
          </motion.div>

          {/* ── Right panels ── */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4">
            {/* Active node config */}
            <div className="rounded-2xl p-5" style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.25)" }}>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(139,92,246,0.2)" }}>
                  <User size={14} style={{ color: "#a78bfa" }} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Manager Approval</div>
                  <div className="text-xs text-slate-400">Active node — click to configure</div>
                </div>
                <div className="ml-auto w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              </div>
              <div className="space-y-2">
                {nodeDetails.map(p => (
                  <div key={p.label} className="flex items-center justify-between px-3 py-2.5 rounded-xl" style={{ background: "#f8fafc", border: "1px solid rgba(0,0,0,0.06)" }}>
                    <div className="flex items-center gap-2">
                      <p.icon size={11} style={{ color: p.c }} />
                      <span className="text-xs text-slate-500">{p.label}</span>
                    </div>
                    <span className="text-xs font-semibold text-slate-800">{p.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics */}
            <div className="rounded-2xl p-5" style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.07)" }}>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Workflow Analytics</p>
              <div className="grid grid-cols-2 gap-2">
                {analytics.map(s => (
                  <div key={s.l} className="rounded-xl p-3" style={{ background: `${s.c}10`, border: `1px solid ${s.c}20` }}>
                    <div className="text-xl font-extrabold mb-0.5" style={{ color: s.c }}>{s.v}</div>
                    <div className="text-xs text-slate-500 leading-tight">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features list */}
            <div className="rounded-2xl p-5" style={{ background: "#f8fafc", border: "1px solid rgba(0,0,0,0.06)" }}>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Capabilities</p>
              <div className="grid grid-cols-1 gap-1.5">
                {features.map(f => (
                  <div key={f.label} className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${f.c}15` }}>
                      <f.icon size={11} style={{ color: f.c }} />
                    </div>
                    <span className="text-xs text-slate-600">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a href="#contact" className="flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm text-white transition-all hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg,#8b5cf6,#4f46e5)", boxShadow: "0 8px 24px rgba(139,92,246,0.3)" }}>
              Build a Process Flow <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
