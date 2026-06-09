import { motion } from "framer-motion"
import { CheckCircle2, GitBranch, Settings, User, Clock, Bell, Zap, AlertCircle, RefreshCw, FileOutput } from "lucide-react"

const connectorLine = "rgba(255,255,255,0.12)"

function FlowNode({ label, color, icon: Icon, type = "rect", active = false, children }) {
  const base = "flex items-center justify-center text-xs font-bold text-white transition-all"
  if (type === "start" || type === "end") {
    return (
      <div className={`${base} w-24 h-10 rounded-full shadow-lg`} style={{ background: active ? color : `${color}88`, boxShadow: active ? `0 0 20px ${color}60` : "none" }}>
        <Icon size={12} className="mr-1.5" />{label}
      </div>
    )
  }
  if (type === "diamond") {
    return (
      <div className="relative w-36 h-10 flex items-center justify-center" style={{ transform: "skewX(-12deg)" }}>
        <div className={`absolute inset-0 rounded-xl`} style={{ background: `${color}25`, border: `1.5px solid ${color}60` }} />
        <span className="relative z-10 text-xs font-bold text-white" style={{ transform: "skewX(12deg)" }}>
          {label}
        </span>
      </div>
    )
  }
  return (
    <div className={`${base} px-4 h-10 rounded-xl`}
      style={{ background: active ? color : `${color}20`, border: `1.5px solid ${color}${active ? "ff" : "50"}`, boxShadow: active ? `0 0 16px ${color}40` : "none", minWidth: "150px" }}>
      {Icon && <Icon size={11} className="mr-1.5 opacity-80" />}{label}
    </div>
  )
}

function Arrow({ dir = "down", color = connectorLine }) {
  if (dir === "right") return (
    <div className="flex items-center mx-1">
      <div className="h-px w-6" style={{ background: color }} />
      <div className="border-l-4 border-y-4 border-y-transparent" style={{ borderLeftColor: color }} />
    </div>
  )
  return (
    <div className="flex flex-col items-center my-1">
      <div className="w-px h-5" style={{ background: color }} />
      <div className="border-t-4 border-x-4 border-x-transparent" style={{ borderTopColor: color }} />
    </div>
  )
}

export default function ProcessFlowSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(180deg,#060e1e 0%,#0a1628 100%)" }}>
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.3)", color: "#a78bfa" }}>
            <GitBranch size={11} /> Process Flow Builder
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Design workflows visually
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-xl mx-auto">
            Turn complex business processes into clear, automated flow diagrams with visual nodes and connectors.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Workflow diagram */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {/* Toolbar */}
              <div className="flex items-center gap-2 px-5 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}>
                <GitBranch size={14} style={{ color: "#a78bfa" }} />
                <span className="text-sm font-bold text-white">Purchase Request Workflow</span>
                <div className="ml-auto flex items-center gap-2">
                  <div className="flex gap-1.5">
                    {["Nodes", "Conditions", "Actions"].map(t => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-lg text-white/50 cursor-pointer hover:bg-white/10 transition-colors">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-emerald-400" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col items-center">
                {/* Flow */}
                <FlowNode label="Start" color="#10b981" icon={Zap} type="start" active />
                <Arrow />
                <FlowNode label="Form Submitted" color="#3b82f6" icon={CheckCircle2} active />
                <Arrow />
                <FlowNode label="Validate Data" color="#06b6d4" icon={CheckCircle2} />
                <Arrow />
                <FlowNode label="Manager Approval" color="#8b5cf6" icon={User} active />
                <Arrow />
                <FlowNode label="Condition: Approved?" color="#f59e0b" icon={AlertCircle} type="diamond" />

                {/* Branching */}
                <div className="flex items-start gap-8 mt-1">
                  {/* YES */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="w-px h-4" style={{ background: connectorLine }} />
                    </div>
                    <span className="text-xs font-extrabold text-emerald-400 mb-2">YES</span>
                    <FlowNode label="Generate Document" color="#10b981" icon={FileOutput} />
                    <Arrow />
                    <FlowNode label="Notify Stakeholders" color="#10b981" icon={Bell} />
                    <Arrow />
                    <FlowNode label="Completed" color="#10b981" icon={CheckCircle2} type="end" active />
                  </div>
                  {/* NO */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="w-px h-4" style={{ background: connectorLine }} />
                    </div>
                    <span className="text-xs font-extrabold text-red-400 mb-2">NO</span>
                    <FlowNode label="Send for Correction" color="#ef4444" icon={AlertCircle} />
                    <Arrow />
                    <FlowNode label="Resubmit" color="#f97316" icon={RefreshCw} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right panels */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="lg:col-span-2 flex flex-col gap-4">
            {/* Active node panel */}
            <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(139,92,246,0.3)" }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(139,92,246,0.2)" }}>
                  <User size={13} style={{ color: "#a78bfa" }} />
                </div>
                <span className="text-sm font-bold text-white">Manager Approval</span>
                <div className="ml-auto w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              </div>
              <div className="space-y-3">
                {[
                  { icon: User, label: "Assignee", val: "Finance Manager", c: "#8b5cf6" },
                  { icon: Clock, label: "SLA Time", val: "48 hours", c: "#f59e0b" },
                  { icon: Bell, label: "Notification", val: "Email + Slack", c: "#3b82f6" },
                  { icon: Zap, label: "Auto Escalate", val: "After 48h", c: "#ef4444" },
                  { icon: Settings, label: "API Trigger", val: "POST /approve", c: "#10b981" },
                ].map(p => (
                  <div key={p.label} className="flex items-center justify-between p-2.5 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="flex items-center gap-2">
                      <p.icon size={12} style={{ color: p.c }} />
                      <span className="text-xs text-white/40">{p.label}</span>
                    </div>
                    <span className="text-xs font-bold text-white">{p.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats panel */}
            <div className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-xs font-bold text-white/40 uppercase tracking-wider mb-3">Workflow Analytics</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { l: "Avg Completion", v: "2.4h", c: "#10b981" },
                  { l: "SLA Breaches", v: "2%", c: "#3b82f6" },
                  { l: "Auto-approved", v: "68%", c: "#8b5cf6" },
                  { l: "This Month", v: "1,284", c: "#f59e0b" },
                ].map(s => (
                  <div key={s.l} className="rounded-xl p-3" style={{ background: `${s.c}10`, border: `1px solid ${s.c}25` }}>
                    <div className="text-xl font-extrabold mb-0.5" style={{ color: s.c }}>{s.v}</div>
                    <div className="text-xs text-white/40 leading-tight">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
