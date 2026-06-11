import { motion } from "framer-motion"
import { HardHat, CheckCircle2, Clock, AlertTriangle, BarChart2, Users, FileText, TrendingUp, Shield, Camera, ArrowRight, Zap, Bell } from "lucide-react"
import { ConstructionDashboardPlaceholder } from "./Placeholders"

const projects = [
  { name: "Tower Block A — Al Reem Island", pct: 68, color: "#3b82f6", tasks: 142, done: 97,  site: "Abu Dhabi", days: 18 },
  { name: "Mall Foundation — Dubai Hills",  pct: 42, color: "#f59e0b", tasks: 86,  done: 36,  site: "Dubai",     days: 45 },
  { name: "Highway Section 3 — SZR",        pct: 89, color: "#10b981", tasks: 63,  done: 56,  site: "Dubai",     days: 6  },
]

const approvalFlow = [
  { step: "Site Engineer submits daily report", actor: "Engineer",    color: "#3b82f6", done: true  },
  { step: "AI validates photos & dimensions",   actor: "AI Engine",   color: "#8b5cf6", done: true  },
  { step: "QC Inspector reviews & signs",       actor: "Inspector",   color: "#10b981", done: true  },
  { step: "Project Manager approves",           actor: "PM",          color: "#06b6d4", done: true  },
  { step: "Client notified automatically",      actor: "Client Portal",color: "#f59e0b", done: false },
  { step: "Documents archived in DMS",          actor: "System",      color: "#ec4899", done: false },
]

const alerts = [
  { type: "warning", msg: "Mall Foundation – Rebar delivery delayed 2 days", time: "2m ago",  color: "#f59e0b" },
  { type: "check",   msg: "Tower Block A – Floor 18 inspection passed ✓",    time: "14m ago", color: "#10b981" },
  { type: "info",    msg: "Highway Section 3 – Final QC scheduled Jun 15",    time: "1h ago",  color: "#3b82f6" },
]

const features = [
  { icon: Camera,       label: "Photo evidence upload",          color: "#3b82f6" },
  { icon: CheckCircle2, label: "AI-validated site inspections",  color: "#8b5cf6" },
  { icon: Clock,        label: "SLA-driven task escalation",     color: "#f59e0b" },
  { icon: Shield,       label: "Full compliance documentation",  color: "#10b981" },
  { icon: BarChart2,    label: "Real-time progress dashboards",  color: "#06b6d4" },
  { icon: FileText,     label: "Automated report generation",    color: "#ec4899" },
]

export default function ConstructionSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="construction" style={{ background: "linear-gradient(180deg,#fafafa 0%,#fff7ed 100%)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(245,158,11,0.05) 0%, transparent 50%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.25)", color: "#d97706" }}>
            <HardHat size={11} /> Construction Management
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Site-to-boardroom visibility.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">Zero paperwork.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto">
            Real-time project tracking, automated site approvals, and full compliance documentation — built for GCC construction teams managing multiple sites.
          </motion.p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* ── Left: Dashboard (2 cols) — swap ConstructionDashboardPlaceholder with a real screenshot ── */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="lg:col-span-2">
            <ConstructionDashboardPlaceholder />
          </motion.div>

          {/* ── Right column ── */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="flex flex-col gap-5">
            {/* Approval flow */}
            <div className="rounded-3xl p-5 border border-slate-200 bg-white shadow-lg flex-1">
              <div className="text-sm font-bold text-slate-800 mb-4">Site Report Approval Flow</div>
              <div className="space-y-2.5">
                {approvalFlow.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {/* Step connector */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-7 h-7 rounded-xl flex items-center justify-center"
                        style={{ background: s.done ? s.color : `${s.color}12`, border: `1.5px solid ${s.done ? s.color : `${s.color}30`}`, boxShadow: s.done ? `0 2px 8px ${s.color}30` : "none" }}>
                        {s.done
                          ? <CheckCircle2 size={11} color="white" />
                          : <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: `${s.color}50` }} />
                        }
                      </div>
                      {i < approvalFlow.length - 1 && (
                        <div className="w-px h-4 mt-1" style={{ background: s.done ? `${s.color}30` : "#f1f5f9" }} />
                      )}
                    </div>
                    <div className="pb-2">
                      <div className={`text-xs font-semibold leading-tight ${s.done ? "text-slate-800" : "text-slate-400"}`}>{s.step}</div>
                      <div className="text-xs mt-0.5" style={{ color: s.done ? s.color : "#cbd5e1" }}>{s.actor}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="rounded-3xl p-5 border border-slate-200 bg-white shadow-md">
              <div className="text-sm font-bold text-slate-800 mb-3">Key Capabilities</div>
              <div className="space-y-2">
                {features.map(f => (
                  <div key={f.label} className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${f.color}12` }}>
                      <f.icon size={11} style={{ color: f.color }} />
                    </div>
                    <span className="text-xs text-slate-600">{f.label}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-4 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold text-white transition-all hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg,#f59e0b,#f97316)", boxShadow: "0 6px 20px rgba(245,158,11,0.25)" }}>
                See Construction Demo <ArrowRight size={13} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
