import { motion } from "framer-motion"
import { UserCheck, Star, CheckCircle2, X, Brain, Calendar, BarChart2, TrendingUp, Clock, Briefcase, Search, Filter } from "lucide-react"

const candidates = [
  { name: "Arjun Sharma", role: "Frontend Developer", score: 94, skills: ["React", "TypeScript", "Node.js"], status: "Shortlisted", exp: "4 yrs", match: "95%", avatar: "#3b82f6" },
  { name: "Priya Nair", role: "Data Analyst", score: 88, skills: ["Python", "SQL", "Tableau"], status: "Interview", exp: "3 yrs", match: "89%", avatar: "#8b5cf6" },
  { name: "Mohammed Al Farsi", role: "DevOps Engineer", score: 91, skills: ["AWS", "Docker", "K8s"], status: "Shortlisted", exp: "5 yrs", match: "93%", avatar: "#10b981" },
  { name: "Sarah Johnson", role: "Product Manager", score: 85, skills: ["Roadmapping", "Jira", "Analytics"], status: "Screening", exp: "6 yrs", match: "85%", avatar: "#f59e0b" },
]

const workflow = [
  { label: "Job Created", color: "#3b82f6", done: true },
  { label: "Resume Uploaded", color: "#8b5cf6", done: true },
  { label: "AI Parses Resume", color: "#10b981", done: true },
  { label: "Skills Matched", color: "#06b6d4", done: true },
  { label: "Candidate Scored", color: "#f59e0b", done: false },
  { label: "Shortlist Generated", color: "#f97316", done: false },
  { label: "Interview Scheduled", color: "#ec4899", done: false },
  { label: "HR Dashboard Updated", color: "#10b981", done: false },
]

const withoutAI = [
  "Manual resume screening taking 2-3 days", "Repeated follow-up calls to candidates",
  "Candidate tracking in Excel spreadsheets", "Slow shortlisting process with bias risk", "Missed top candidates due to volume",
]
const withAI = [
  "AI reads and scores all resumes in minutes", "Candidates ranked automatically by fit score",
  "HR gets a clean shortlist within hours", "Interview follow-ups sent automatically", "Hiring pipeline visible in live dashboard",
]

export default function AIRecruiter() {
  return (
    <section className="py-24 bg-white" id="ai-automation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.25)", color: "#8b5cf6" }}>
            <Brain size={11} /> AI Recruiter
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            AI Recruiter that works like an<br className="hidden sm:block" /> extra HR team member
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-xl mx-auto">
            Replace repetitive recruitment work with AI-powered candidate screening, ranking, and interview coordination.
          </motion.p>
        </div>

        {/* AI Workflow steps */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
          <div className="flex items-center justify-center gap-0 flex-wrap">
            {workflow.map((s, i) => (
              <div key={s.label} className="flex items-center">
                <div className={`flex flex-col items-center gap-1.5 px-2`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all`}
                    style={{ background: s.done ? s.color : `${s.color}15`, border: `2px solid ${s.done ? s.color : `${s.color}30`}`, boxShadow: s.done ? `0 4px 12px ${s.color}40` : "none" }}>
                    {s.done ? <CheckCircle2 size={16} color="white" /> : <div className="w-3 h-3 rounded-full" style={{ background: `${s.color}40` }} />}
                  </div>
                  <span className="text-xs font-semibold text-center leading-tight" style={{ color: s.done ? s.color : "#94a3b8", maxWidth: "70px" }}>{s.label}</span>
                </div>
                {i < workflow.length - 1 && (
                  <div className="w-6 h-px mx-0 mb-5" style={{ background: i < workflow.filter(w => w.done).length ? `linear-gradient(90deg,${s.color},${workflow[i+1].color})` : "#e2e8f0" }} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 mb-12">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4" style={{ background: "linear-gradient(135deg,#1e1b4b,#312e81)" }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(167,139,250,0.2)" }}>
                <Brain size={15} style={{ color: "#a78bfa" }} />
              </div>
              <div>
                <span className="font-bold text-white text-sm">AI Recruiter Dashboard</span>
                <p className="text-xs text-white/40">Powered by Sky AI Engine v2</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg" style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-semibold">AI Active</span>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-0 border-b border-slate-100">
            {[
              { l: "Open Positions", v: "12", c: "#3b82f6", icon: Briefcase },
              { l: "Resumes Parsed", v: "847", c: "#10b981", icon: Brain },
              { l: "Shortlisted", v: "124", c: "#8b5cf6", icon: UserCheck },
              { l: "Interviews Set", v: "38", c: "#f59e0b", icon: Calendar },
              { l: "Avg AI Score", v: "87%", c: "#06b6d4", icon: TrendingUp },
              { l: "Time to Shortlist", v: "2h avg", c: "#ec4899", icon: Clock },
            ].map((m, i) => (
              <div key={m.l} className={`p-4 text-center ${i < 5 ? "border-r border-slate-100" : ""}`}>
                <div className="flex items-center justify-center mb-2">
                  <m.icon size={14} style={{ color: m.c }} />
                </div>
                <div className="text-xl font-extrabold mb-0.5" style={{ color: m.c }}>{m.v}</div>
                <div className="text-xs text-slate-400 leading-tight">{m.l}</div>
              </div>
            ))}
          </div>

          {/* Candidate table */}
          <div className="p-6 bg-white">
            <div className="flex items-center justify-between mb-5">
              <h4 className="font-extrabold text-slate-900">AI-Ranked Candidate Pipeline</h4>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50">
                  <Search size={12} className="text-slate-400" />
                  <span className="text-xs text-slate-400">Search candidates...</span>
                </div>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50">
                  <Filter size={12} /> Filter
                </button>
              </div>
            </div>
            <div className="space-y-2">
              {candidates.map((c, i) => (
                <motion.div key={c.name} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl border transition-all hover:border-purple-200 hover:bg-purple-50/20 cursor-pointer"
                  style={{ borderColor: "#f1f5f9" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-white flex-shrink-0 text-sm"
                    style={{ background: `linear-gradient(135deg,${c.avatar},${c.avatar}88)` }}>
                    {c.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800 text-sm">{c.name}</span>
                      <span className="text-xs text-slate-400">· {c.exp} experience</span>
                    </div>
                    <div className="text-xs text-slate-400">{c.role}</div>
                  </div>
                  <div className="flex gap-1.5 flex-wrap hidden sm:flex">
                    {c.skills.slice(0, 3).map(s => (
                      <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">{s}</span>
                    ))}
                  </div>
                  {/* AI score gauge */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="relative w-12 h-12">
                      <svg viewBox="0 0 40 40" className="w-12 h-12 -rotate-90">
                        <circle cx="20" cy="20" r="16" fill="none" stroke="#f1f5f9" strokeWidth="4" />
                        <circle cx="20" cy="20" r="16" fill="none" stroke={c.score > 90 ? "#10b981" : c.score > 85 ? "#3b82f6" : "#f59e0b"} strokeWidth="4"
                          strokeDasharray={`${c.score} 100`} strokeLinecap="round" />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-extrabold" style={{ color: c.score > 90 ? "#10b981" : c.score > 85 ? "#3b82f6" : "#f59e0b" }}>{c.score}</span>
                    </div>
                    <span className="text-xs text-slate-400 mt-0.5">AI Score</span>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full flex-shrink-0 ${c.status === "Shortlisted" ? "bg-purple-100 text-purple-700" : c.status === "Interview" ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"}`}>
                    {c.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Before vs After */}
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-3xl p-7" style={{ background: "#fff8f0", border: "1.5px solid #fed7aa" }}>
            <div className="flex items-center gap-2 mb-5">
              <X size={16} className="text-orange-500" />
              <h4 className="font-extrabold text-slate-900">Without AI Recruiter</h4>
            </div>
            <div className="space-y-2.5">
              {withoutAI.map(t => (
                <div key={t} className="flex items-center gap-2.5 p-2.5 rounded-xl" style={{ background: "rgba(254,215,170,0.3)" }}>
                  <X size={13} className="text-red-400 flex-shrink-0" />
                  <span className="text-sm text-slate-600">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-3xl p-7" style={{ background: "#f0fdf4", border: "1.5px solid #86efac" }}>
            <div className="flex items-center gap-2 mb-5">
              <Brain size={16} className="text-purple-500" />
              <h4 className="font-extrabold text-slate-900">With AI Recruiter</h4>
            </div>
            <div className="space-y-2.5">
              {withAI.map(t => (
                <div key={t} className="flex items-center gap-2.5 p-2.5 rounded-xl" style={{ background: "rgba(134,239,172,0.2)" }}>
                  <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
