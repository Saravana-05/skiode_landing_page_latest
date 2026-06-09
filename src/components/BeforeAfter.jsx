import { motion } from "framer-motion"
import { X, CheckCircle2, ArrowRight, Clock, AlertTriangle, Zap } from "lucide-react"

const before = [
  { text: "Forms managed through spreadsheets and emails", pain: "2-3 days delay" },
  { text: "Approvals stuck in email chains without tracking", pain: "No visibility" },
  { text: "Documents scattered across folders and drives", pain: "Data lost" },
  { text: "Manual data entry from PDFs and scanned images", pain: "High error rate" },
  { text: "No clear ownership or task tracking system", pain: "Accountability gap" },
  { text: "Every small change requires developer involvement", pain: "High cost" },
  { text: "Reports compiled manually at end of week", pain: "Always outdated" },
  { text: "HR team manually screening hundreds of resumes", pain: "Weeks wasted" },
  { text: "Construction updates shared via WhatsApp calls", pain: "No audit trail" },
  { text: "No visibility on pending tasks or bottlenecks", pain: "Operations stall" },
]

const after = [
  { text: "Forms built with drag-and-drop in hours, not days", gain: "Same day" },
  { text: "Approvals routed automatically with SLA tracking", gain: "Real-time" },
  { text: "All documents in one secure, searchable DMS", gain: "Instant access" },
  { text: "OCR extracts data automatically with 94%+ accuracy", gain: "Zero errors" },
  { text: "Every task has owner, deadline, and audit trail", gain: "Full visibility" },
  { text: "Business teams self-configure workflows visually", gain: "No dev needed" },
  { text: "Reports generated instantly with live dashboards", gain: "Always live" },
  { text: "AI Recruiter ranks candidates in minutes", gain: "10x faster" },
  { text: "Construction tracked with workflows, photos, approvals", gain: "Traceable" },
  { text: "Live dashboards show every bottleneck in real-time", gain: "Full control" },
]

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5"
            style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", color: "#3b82f6" }}>
            Platform Impact
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Before vs After Sky LowCode AI
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-xl mx-auto">
            See the transformation when manual, scattered operations become automated and intelligent.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-11 gap-4 items-start">
          {/* Before */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl overflow-hidden"
            style={{ background: "linear-gradient(135deg,#fff1f2,#fff5f5)", border: "2px solid #fecdd3", boxShadow: "0 20px 60px rgba(239,68,68,0.08)" }}>
            <div className="px-6 py-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg,#fee2e2,#fef2f2)", borderBottom: "1px solid #fecdd3" }}>
              <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center">
                <AlertTriangle size={16} className="text-red-500" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm">Before</h3>
                <p className="text-xs text-red-500">Manual, scattered, and slow</p>
              </div>
              <div className="ml-auto px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-600">10+ pain points</div>
            </div>
            <div className="p-5 space-y-2.5">
              {before.map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="flex items-start justify-between gap-3 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(239,68,68,0.1)" }}>
                  <div className="flex items-start gap-2.5 flex-1">
                    <X size={13} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 leading-snug">{b.text}</span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 bg-red-50 text-red-500 whitespace-nowrap">{b.pain}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center arrow */}
          <div className="lg:col-span-1 flex lg:flex-col items-center justify-center gap-2 py-4">
            <div className="w-10 h-10 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center">
              <ArrowRight size={18} className="text-blue-500 hidden lg:block" />
              <ArrowRight size={18} className="text-blue-500 lg:hidden rotate-90" />
            </div>
            <div className="hidden lg:flex flex-col items-center gap-1">
              <div className="w-px h-16" style={{ background: "linear-gradient(180deg,#3b82f6,transparent)" }} />
              <Zap size={14} className="text-blue-400" />
              <div className="w-px h-16" style={{ background: "linear-gradient(180deg,transparent,#10b981)" }} />
            </div>
          </div>

          {/* After */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl overflow-hidden"
            style={{ background: "linear-gradient(135deg,#f0fdf4,#ecfdf5)", border: "2px solid #86efac", boxShadow: "0 20px 60px rgba(16,185,129,0.08)" }}>
            <div className="px-6 py-4 flex items-center gap-3" style={{ background: "linear-gradient(135deg,#dcfce7,#f0fdf4)", borderBottom: "1px solid #86efac" }}>
              <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center">
                <Zap size={16} className="text-emerald-500" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm">After</h3>
                <p className="text-xs text-emerald-600">Automated, connected, and intelligent</p>
              </div>
              <div className="ml-auto px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">10x outcomes</div>
            </div>
            <div className="p-5 space-y-2.5">
              {after.map((a, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="flex items-start justify-between gap-3 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(16,185,129,0.15)" }}>
                  <div className="flex items-start gap-2.5 flex-1">
                    <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium leading-snug">{a.text}</span>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0 bg-emerald-50 text-emerald-600 whitespace-nowrap">{a.gain}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-8 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: "linear-gradient(135deg,#eff6ff,#f0f9ff)", border: "1px solid #bfdbfe" }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#3b82f6,#06b6d4)" }}>
              <Zap size={18} color="white" />
            </div>
            <div>
              <p className="font-extrabold text-slate-900 text-sm">Ready to make the switch?</p>
              <p className="text-xs text-slate-500">Join 500+ teams already using Sky LowCode AI</p>
            </div>
          </div>
          <a href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-white flex-shrink-0 hover:scale-105 transition-transform"
            style={{ background: "linear-gradient(135deg,#3b82f6,#06b6d4)", boxShadow: "0 4px 16px rgba(59,130,246,0.3)" }}>
            Start Free Trial <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
