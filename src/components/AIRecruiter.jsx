import { motion } from "framer-motion"
import { UserCheck, Star, CheckCircle2, X, Brain, Calendar, BarChart2, TrendingUp, Clock, Briefcase, Search, Filter, ArrowRight, Upload, Zap } from "lucide-react"
import { AIRecruiterPlaceholder } from "./Placeholders"

const workflow = [
  { label: "Job Created",        color: "#3b82f6", done: true  },
  { label: "Resumes Uploaded",   color: "#8b5cf6", done: true  },
  { label: "AI Parses Resume",   color: "#10b981", done: true  },
  { label: "Skills Matched",     color: "#06b6d4", done: true  },
  { label: "Candidate Scored",   color: "#f59e0b", done: true  },
  { label: "Shortlist Generated",color: "#f97316", done: false },
  { label: "Interview Scheduled",color: "#ec4899", done: false },
]

const candidates = [
  { name: "Arjun Sharma",       role: "Frontend Developer",  score: 94, skills: ["React","TypeScript","Node.js"], status: "Shortlisted", exp: "4 yrs", match: "95%", avatar: "#3b82f6" },
  { name: "Priya Nair",         role: "Data Analyst",        score: 88, skills: ["Python","SQL","Tableau"],       status: "Interview",   exp: "3 yrs", match: "89%", avatar: "#8b5cf6" },
  { name: "Mohammed Al Farsi",  role: "DevOps Engineer",     score: 91, skills: ["AWS","Docker","K8s"],           status: "Shortlisted", exp: "5 yrs", match: "93%", avatar: "#10b981" },
  { name: "Sarah Johnson",      role: "Product Manager",     score: 85, skills: ["Roadmapping","Jira","Scrum"],   status: "Screening",   exp: "6 yrs", match: "85%", avatar: "#f59e0b" },
]

const metrics = [
  { l: "Open Positions",    v: "12",    c: "#3b82f6", icon: Briefcase  },
  { l: "Resumes Parsed",    v: "847",   c: "#10b981", icon: Brain      },
  { l: "Shortlisted",       v: "124",   c: "#8b5cf6", icon: UserCheck  },
  { l: "Interviews Set",    v: "38",    c: "#f59e0b", icon: Calendar   },
  { l: "Avg AI Score",      v: "87%",   c: "#06b6d4", icon: TrendingUp },
  { l: "Time to Shortlist", v: "2h avg",c: "#ec4899", icon: Clock      },
]

const withoutAI = [
  "Manual screening taking 2–3 days",
  "Candidate tracking in spreadsheets",
  "Slow shortlisting with bias risk",
  "Missed top candidates due to volume",
  "Repeated manual follow-up calls",
]
const withAI = [
  "All resumes scored in minutes by AI",
  "Candidates ranked automatically by fit",
  "Clean shortlist within hours",
  "Interview follow-ups sent automatically",
  "Full pipeline visible in live dashboard",
]

function ScoreRing({ score, color }) {
  const r = 20
  const circ = 2 * Math.PI * r
  const pct = (score / 100) * circ
  return (
    <svg width="52" height="52" viewBox="0 0 52 52">
      <circle cx="26" cy="26" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3.5" />
      <circle cx="26" cy="26" r={r} fill="none" stroke={color} strokeWidth="3.5"
        strokeDasharray={`${pct} ${circ}`} strokeLinecap="round"
        transform="rotate(-90 26 26)" />
      <text x="26" y="30" textAnchor="middle" fill="white" fontSize="10" fontWeight="800">{score}</text>
    </svg>
  )
}

export default function AIRecruiter() {
  return (
    <section className="py-24 bg-white" id="ai-recruiter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.25)", color: "#8b5cf6" }}>
            <Brain size={11} /> AI Recruiter
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            AI Recruiter that works like an{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">extra HR team member</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto">
            Replace repetitive recruitment work with AI-powered candidate screening, ranking, and interview coordination — cut time-to-hire by up to 80%.
          </motion.p>
        </div>

        {/* ── AI Workflow pipeline strip ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-10 p-5 rounded-3xl"
          style={{ background: "linear-gradient(135deg,#faf5ff,#ede9fe)", border: "1px solid rgba(139,92,246,0.15)" }}>
          <div className="text-xs font-bold text-purple-500 uppercase tracking-widest mb-4 text-center">AI Recruitment Pipeline</div>
          <div className="relative">
            <div className="hidden sm:block absolute top-5 left-8 right-8 h-px" style={{ background: "linear-gradient(90deg,#3b82f6,#8b5cf6,#10b981,#06b6d4,#f59e0b,#f97316,#ec4899)", opacity: 0.25 }} />
            <div className="flex flex-col sm:flex-row items-start sm:items-start gap-4 sm:gap-0">
              {workflow.map((s, i) => (
                <div key={s.label} className="flex sm:flex-col items-center gap-3 sm:gap-2 flex-1 relative">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10 transition-all"
                    style={{
                      background: s.done ? s.color : `${s.color}15`,
                      border: `2px solid ${s.done ? s.color : `${s.color}30`}`,
                      boxShadow: s.done ? `0 4px 16px ${s.color}30` : "none",
                    }}>
                    {s.done
                      ? <CheckCircle2 size={16} color="white" />
                      : <div className="w-3 h-3 rounded-full" style={{ background: `${s.color}40` }} />
                    }
                  </motion.div>
                  <div className="sm:text-center">
                    <div className="text-xs font-semibold leading-tight" style={{ color: s.done ? s.color : "#94a3b8" }}>{s.label}</div>
                  </div>
                  {i < workflow.length - 1 && (
                    <div className="hidden sm:block absolute -right-1 top-4 z-20">
                      <ArrowRight size={12} className="text-slate-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* AI Recruiter dashboard visual — swap AIRecruiterPlaceholder body with a real screenshot */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <AIRecruiterPlaceholder />
        </motion.div>

        {/* Before vs After */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-5">
          {/* Without */}
          <div className="rounded-3xl p-6 border border-red-100" style={{ background: "linear-gradient(135deg,#fff5f5,#fff)" }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(239,68,68,0.1)" }}>
                <X size={14} style={{ color: "#ef4444" }} />
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-sm">Without AI Recruiter</div>
                <div className="text-xs text-red-400">Slow and error-prone</div>
              </div>
            </div>
            <div className="space-y-2">
              {withoutAI.map(p => (
                <div key={p} className="flex items-start gap-2.5 p-2.5 rounded-xl" style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.08)" }}>
                  <X size={12} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* With */}
          <div className="rounded-3xl p-6 border border-emerald-100" style={{ background: "linear-gradient(135deg,#f0fdf4,#fff)" }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(16,185,129,0.1)" }}>
                <Zap size={14} style={{ color: "#10b981" }} />
              </div>
              <div>
                <div className="font-extrabold text-slate-900 text-sm">With AI Recruiter</div>
                <div className="text-xs text-emerald-500">Fast, accurate, and scalable</div>
              </div>
            </div>
            <div className="space-y-2">
              {withAI.map(p => (
                <div key={p} className="flex items-start gap-2.5 p-2.5 rounded-xl" style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.12)" }}>
                  <CheckCircle2 size={12} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 font-medium">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
