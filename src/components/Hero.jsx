import { motion } from "framer-motion"
import { ArrowRight, Play, CheckCircle2, Zap, Brain, ScanText, Bot, BarChart2, GitBranch, FileText, Users, FolderOpen, Plug, TrendingUp, Bell } from "lucide-react"

const modules = [
  { icon: FileText, name: "Forms & Core Data", color: "#3b82f6", bg: "rgba(59,130,246,0.15)" },
  { icon: GitBranch, name: "Process Flow", color: "#8b5cf6", bg: "rgba(139,92,246,0.15)" },
  { icon: Users, name: "Users & Groups", color: "#06b6d4", bg: "rgba(6,182,212,0.15)" },
  { icon: FolderOpen, name: "DMS", color: "#f59e0b", bg: "rgba(245,158,11,0.15)" },
  { icon: ScanText, name: "OCR & AI/ML", color: "#10b981", bg: "rgba(16,185,129,0.15)" },
  { icon: BarChart2, name: "Dashboards", color: "#f97316", bg: "rgba(249,115,22,0.15)" },
  { icon: Bot, name: "RPA", color: "#ec4899", bg: "rgba(236,72,153,0.15)" },
  { icon: Plug, name: "Integration", color: "#14b8a6", bg: "rgba(20,184,166,0.15)" },
  { icon: Brain, name: "BOT Automation", color: "#6366f1", bg: "rgba(99,102,241,0.15)" },
]

const activityFeed = [
  { icon: ScanText, color: "#10b981", msg: "OCR extracted 48 fields from Invoice_Q4.pdf", time: "2m ago" },
  { icon: CheckCircle2, color: "#3b82f6", msg: "Purchase approval auto-routed to Finance Manager", time: "5m ago" },
  { icon: Brain, color: "#8b5cf6", msg: "AI Recruiter shortlisted 12 candidates for Dev role", time: "8m ago" },
  { icon: Bell, color: "#f59e0b", msg: "SLA escalation triggered for pending site report", time: "12m ago" },
]

function DashboardMockup() {
  return (
    <div className="relative" style={{ filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.5))" }}>
      {/* Outer glow ring */}
      <div className="absolute -inset-3 rounded-3xl opacity-30" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.4), rgba(139,92,246,0.2), rgba(6,182,212,0.3))", filter: "blur(20px)" }} />
      
      <div className="relative rounded-2xl overflow-hidden" style={{ background: "linear-gradient(180deg,#111827 0%,#0d1117 100%)", border: "1px solid rgba(255,255,255,0.1)" }}>
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3" style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg" style={{ background: "rgba(255,255,255,0.05)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/40 font-medium">Sky LowCode AI — Enterprise Workspace</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "linear-gradient(135deg,#3b82f6,#06b6d4)" }}>A</div>
          </div>
        </div>

        {/* Sidebar + Main */}
        <div className="flex">
          {/* Mini sidebar */}
          <div className="w-10 flex-shrink-0 flex flex-col items-center pt-4 gap-3 pb-4" style={{ background: "rgba(0,0,0,0.2)", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
            {[Zap, FileText, GitBranch, BarChart2, Users, ScanText].map((Icon, i) => (
              <div key={i} className={`w-6 h-6 rounded-lg flex items-center justify-center ${i === 0 ? "text-blue-400" : "text-white/20"}`}
                style={i === 0 ? { background: "rgba(59,130,246,0.2)" } : {}}>
                <Icon size={11} />
              </div>
            ))}
          </div>

          <div className="flex-1 p-4">
            {/* Header row */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-bold text-white">Operations Dashboard</h3>
                <p className="text-xs text-white/30">Last updated: just now</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 rounded-lg text-xs text-emerald-400 font-semibold" style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.2)" }}>
                  Live
                </div>
                <div className="px-2 py-1 rounded-lg text-xs text-white/40" style={{ background: "rgba(255,255,255,0.05)" }}>Today</div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                { label: "Active Workflows", val: "2,847", delta: "+12%", color: "#3b82f6", icon: GitBranch },
                { label: "Automations Run", val: "184K", delta: "+8%", color: "#8b5cf6", icon: Bot },
                { label: "Forms Processed", val: "96.2K", delta: "+23%", color: "#10b981", icon: FileText },
                { label: "Active Users", val: "3,410", delta: "+5%", color: "#f59e0b", icon: Users },
              ].map((m) => (
                <div key={m.label} className="rounded-xl p-2.5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <m.icon size={11} style={{ color: m.color }} />
                    <span className="text-xs font-bold" style={{ color: m.color }}>{m.delta}</span>
                  </div>
                  <div className="text-base font-extrabold text-white leading-none mb-0.5">{m.val}</div>
                  <div className="text-xs text-white/30 leading-tight">{m.label}</div>
                  {/* Mini sparkline */}
                  <div className="flex items-end gap-0.5 mt-2 h-4">
                    {[40, 65, 45, 80, 60, 90, 75, 85].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: `${m.color}${i === 7 ? "80" : "30"}` }} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Modules grid */}
            <div className="mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white/30 uppercase tracking-widest">Platform Modules</span>
                <span className="text-xs text-blue-400">9 Active</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {modules.map((m) => (
                  <div key={m.name} className="flex items-center gap-2 px-2 py-1.5 rounded-lg group transition-all hover:scale-105 cursor-pointer"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0" style={{ background: m.bg }}>
                      <m.icon size={10} style={{ color: m.color }} />
                    </div>
                    <span className="text-xs text-white/55 font-medium leading-tight truncate">{m.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity */}
            <div>
              <span className="text-xs font-bold text-white/30 uppercase tracking-widest block mb-2">Recent Activity</span>
              <div className="space-y-1">
                {activityFeed.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 px-2 py-1.5 rounded-lg" style={{ background: "rgba(255,255,255,0.02)" }}>
                    <a.icon size={10} style={{ color: a.color, flexShrink: 0 }} />
                    <span className="text-xs text-white/45 flex-1 truncate">{a.msg}</span>
                    <span className="text-xs text-white/20 flex-shrink-0">{a.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const fade = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } }

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" style={{ background: "linear-gradient(135deg,#020a18 0%,#060e1e 40%,#0a1628 70%,#0d1b3e 100%)" }}>
      {/* Grid bg */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-60" />
      {/* Radial glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle,rgba(59,130,246,0.12) 0%,transparent 60%)", filter: "blur(40px)" }} />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle,rgba(139,92,246,0.08) 0%,transparent 60%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle,rgba(6,182,212,0.07) 0%,transparent 60%)", filter: "blur(50px)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div {...fade} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-7"
              style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.35)", color: "#60a5fa" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              AI-Powered Low-Code Platform for Modern Enterprises
            </motion.div>

            <motion.h1 {...fade} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Build Apps,{" "}
              <span style={{ background: "linear-gradient(135deg,#60a5fa,#06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Automate Workflows,</span>
              {" "}and Run Business Operations with AI
            </motion.h1>

            <motion.p {...fade} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/55 mb-8 leading-relaxed max-w-lg">
              Sky LowCode AI brings forms, workflows, data, documents, OCR, bots, integrations, dashboards, and AI automation into one intelligent low-code workspace.
            </motion.p>

            <motion.div {...fade} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-sm text-white transition-all hover:scale-105 hover:shadow-2xl"
                style={{ background: "linear-gradient(135deg,#3b82f6,#06b6d4)", boxShadow: "0 8px 32px rgba(59,130,246,0.45), 0 0 0 1px rgba(96,165,250,0.2)" }}>
                Book a Demo <ArrowRight size={16} />
              </a>
              <a href="#platform"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-sm text-white transition-all hover:bg-white/10"
                style={{ border: "1.5px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>
                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                  <Play size={10} className="ml-0.5" />
                </div>
                Explore Platform
              </a>
            </motion.div>

            <motion.div {...fade} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-wrap gap-x-5 gap-y-2">
              {[
                { label: "No-code setup", color: "#3b82f6" },
                { label: "Enterprise-grade", color: "#8b5cf6" },
                { label: "AI-first automation", color: "#10b981" },
                { label: "Free trial included", color: "#f59e0b" },
              ].map(t => (
                <span key={t.label} className="flex items-center gap-1.5 text-xs text-white/40">
                  <CheckCircle2 size={11} style={{ color: t.color }} /> {t.label}
                </span>
              ))}
            </motion.div>

            {/* Social proof */}
            <motion.div {...fade} transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex items-center gap-4 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex -space-x-2">
                {["#3b82f6","#8b5cf6","#10b981","#f59e0b","#06b6d4"].map((c,i) => (
                  <div key={i} className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white ring-2" style={{ background: `linear-gradient(135deg,${c},${c}88)`, ringColor: "#0a1628" }}>
                    {["A","M","S","R","J"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => <div key={i} className="w-2.5 h-2.5 rounded-sm" style={{ background: "#f59e0b" }} />)}
                </div>
                <p className="text-xs text-white/35">Trusted by 500+ enterprise teams</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <DashboardMockup />

            {/* Floating badge 1 */}
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-2 lg:-right-8 hidden sm:flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 shadow-2xl z-10"
              style={{ background: "rgba(16,185,129,0.95)", backdropFilter: "blur(12px)", border: "1px solid rgba(16,185,129,0.5)" }}>
              <div className="w-7 h-7 rounded-xl flex items-center justify-center bg-white/20">
                <ScanText size={13} color="white" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-white">OCR Completed</div>
                <div className="text-xs text-white/75">94.7% accuracy · 48 fields</div>
              </div>
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-4 -left-2 lg:-left-6 hidden sm:flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 shadow-2xl z-10"
              style={{ background: "rgba(59,130,246,0.95)", backdropFilter: "blur(12px)", border: "1px solid rgba(96,165,250,0.4)" }}>
              <div className="w-7 h-7 rounded-xl flex items-center justify-center bg-white/20">
                <CheckCircle2 size={13} color="white" />
              </div>
              <div>
                <div className="text-xs font-extrabold text-white">Approval Routed</div>
                <div className="text-xs text-white/75">Auto-sent to Finance Team</div>
              </div>
            </motion.div>

            {/* Floating badge 3 */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -right-2 lg:-right-10 hidden lg:flex items-center gap-2 rounded-xl px-3 py-2 shadow-xl z-10"
              style={{ background: "rgba(13,27,62,0.95)", backdropFilter: "blur(12px)", border: "1px solid rgba(139,92,246,0.3)" }}>
              <TrendingUp size={12} style={{ color: "#a78bfa" }} />
              <div>
                <div className="text-xs font-bold text-white">3x faster</div>
                <div style={{ fontSize: "9px" }} className="text-white/40">processing speed</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
