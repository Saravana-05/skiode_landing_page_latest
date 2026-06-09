import { motion } from "framer-motion"
import { HardHat, CheckCircle2, Clock, AlertTriangle, BarChart2, Users, FileText, Camera, TrendingUp, Shield } from "lucide-react"

const projects = [
  { name: "Tower Block A — Al Reem Island", pct: 68, color: "#3b82f6", tasks: 142, done: 97, site: "Abu Dhabi", days: 18 },
  { name: "Mall Foundation — Dubai Hills", pct: 42, color: "#f59e0b", tasks: 86, done: 36, site: "Dubai", days: 45 },
  { name: "Highway Section 3 — SZR", pct: 89, color: "#10b981", tasks: 63, done: 56, site: "Dubai", days: 6 },
]

const approvalFlow = [
  { step: "Site Engineer submits daily report", actor: "Engineer", color: "#3b82f6", done: true },
  { step: "AI validates photos & dimensions", actor: "AI Engine", color: "#8b5cf6", done: true },
  { step: "QC Inspector reviews & signs", actor: "Inspector", color: "#10b981", done: true },
  { step: "Project Manager approves", actor: "PM", color: "#06b6d4", done: true },
  { step: "Client notified automatically", actor: "Client Portal", color: "#f59e0b", done: false },
  { step: "Documents archived in DMS", actor: "System", color: "#ec4899", done: false },
  { step: "Dashboard updated live", actor: "Dashboard", color: "#10b981", done: false },
]

const alerts = [
  { type: "warning", msg: "Mall Foundation – Rebar delivery delayed 2 days", time: "2m ago" },
  { type: "check", msg: "Tower Block A – Floor 18 inspection passed ✓", time: "14m ago" },
  { type: "info", msg: "Highway Section 3 – Final QC scheduled for Jun 15", time: "1h ago" },
]

export default function ConstructionSection() {
  return (
    <section className="py-24" id="construction" style={{ background: "linear-gradient(135deg,#fafafa,#fff7ed)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.25)", color: "#f59e0b" }}>
            <HardHat size={11} /> Construction Management
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Site-to-boardroom visibility,<br className="hidden sm:block" /> zero paperwork
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-xl mx-auto">
            Real-time project tracking, automated site approvals, and full compliance documentation — built for GCC construction teams.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Project Dashboard */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <BarChart2 size={16} className="text-amber-500" />
                <span className="font-bold text-slate-900">Live Project Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-slate-400">Live</span>
              </div>
            </div>

            {/* Summary tiles */}
            <div className="grid grid-cols-4 border-b border-slate-100">
              {[
                { l: "Active Sites", v: "3", c: "#3b82f6", icon: HardHat },
                { l: "Open Tasks", v: "45", c: "#f59e0b", icon: Clock },
                { l: "Team Members", v: "128", c: "#10b981", icon: Users },
                { l: "Docs Processed", v: "2,841", c: "#8b5cf6", icon: FileText },
              ].map((m, i) => (
                <div key={m.l} className={`px-4 py-4 text-center ${i < 3 ? "border-r border-slate-100" : ""}`}>
                  <div className="flex justify-center mb-1"><m.icon size={13} style={{ color: m.c }} /></div>
                  <div className="text-xl font-extrabold mb-0.5" style={{ color: m.c }}>{m.v}</div>
                  <div className="text-xs text-slate-400">{m.l}</div>
                </div>
              ))}
            </div>

            {/* Projects list */}
            <div className="p-5 space-y-4">
              {projects.map((p, i) => (
                <motion.div key={p.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="font-bold text-slate-800 text-sm mb-0.5">{p.name}</div>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span>📍 {p.site}</span>
                        <span>{p.tasks} tasks · {p.done} done</span>
                        <span className="font-semibold" style={{ color: p.days < 10 ? "#ef4444" : "#f59e0b" }}>{p.days} days left</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-extrabold" style={{ color: p.color }}>{p.pct}%</div>
                      <div className="text-xs text-slate-400">complete</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2.5 rounded-full bg-slate-100 overflow-hidden">
                      <motion.div className="h-full rounded-full" style={{ background: `linear-gradient(90deg,${p.color},${p.color}88)` }}
                        initial={{ width: 0 }} whileInView={{ width: `${p.pct}%` }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 + i * 0.1 }} />
                    </div>
                    <div className="flex -space-x-1.5">
                      {["#3b82f6","#8b5cf6","#10b981"].map((c, ai) => (
                        <div key={ai} className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold" style={{ background: c }}>
                          {String.fromCharCode(65 + ai)}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Activity alerts */}
            <div className="px-5 pb-5 space-y-2">
              {alerts.map((a, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-xl border text-sm"
                  style={{ borderColor: a.type === "warning" ? "#fed7aa" : a.type === "check" ? "#bbf7d0" : "#bfdbfe",
                    background: a.type === "warning" ? "#fff7ed" : a.type === "check" ? "#f0fdf4" : "#eff6ff" }}>
                  {a.type === "warning" ? <AlertTriangle size={13} className="text-amber-500 flex-shrink-0" /> : <CheckCircle2 size={13} className={a.type === "check" ? "text-emerald-500 flex-shrink-0" : "text-blue-500 flex-shrink-0"} />}
                  <span className="text-slate-700 flex-1">{a.msg}</span>
                  <span className="text-xs text-slate-400 flex-shrink-0">{a.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Approval Workflow */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
              <Shield size={15} className="text-blue-500" />
              <span className="font-bold text-slate-900">Approval Workflow</span>
            </div>
            <div className="p-5 space-y-2">
              {approvalFlow.map((s, i) => (
                <motion.div key={s.step} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 border-2`}
                      style={{ borderColor: s.done ? s.color : "#e2e8f0", background: s.done ? s.color : "white" }}>
                      {s.done ? <CheckCircle2 size={13} color="white" /> : <div className="w-2 h-2 rounded-full bg-slate-200" />}
                    </div>
                    {i < approvalFlow.length - 1 && <div className="w-px flex-1 my-0.5" style={{ background: s.done ? `${s.color}40` : "#e2e8f0", minHeight: "16px" }} />}
                  </div>
                  <div className={`pb-2 ${i === approvalFlow.length - 1 ? "pb-0" : ""}`}>
                    <div className={`text-sm font-semibold leading-tight ${s.done ? "text-slate-800" : "text-slate-400"}`}>{s.step}</div>
                    <div className="text-xs mt-0.5 font-medium" style={{ color: s.done ? s.color : "#94a3b8" }}>{s.actor}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Quick stats */}
            <div className="p-5 pt-0">
              <div className="rounded-2xl p-4" style={{ background: "linear-gradient(135deg,#0a1628,#1e1b4b)" }}>
                <div className="text-xs text-white/60 mb-3 font-semibold uppercase tracking-wide">This Month</div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { l: "Reports Filed", v: "384", c: "#3b82f6" },
                    { l: "Approvals", v: "297", c: "#10b981" },
                    { l: "Avg Cycle", v: "4.2h", c: "#a78bfa" },
                    { l: "SLA Met", v: "98%", c: "#f59e0b" },
                  ].map(s => (
                    <div key={s.l} className="text-center p-2 rounded-xl" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div className="font-extrabold" style={{ color: s.c }}>{s.v}</div>
                      <div className="text-xs text-white/40">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
