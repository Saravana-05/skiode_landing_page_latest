import { motion } from "framer-motion"
import { Globe, Zap, Code2, Database, ArrowRight, CheckCircle2, Link } from "lucide-react"

const connectors = [
  { name: "SAP ERP", cat: "ERP", color: "#3b82f6" },
  { name: "Oracle Fusion", cat: "ERP", color: "#f59e0b" },
  { name: "Tally Prime", cat: "Finance", color: "#10b981" },
  { name: "QuickBooks", cat: "Finance", color: "#06b6d4" },
  { name: "Salesforce", cat: "CRM", color: "#3b82f6" },
  { name: "HubSpot", cat: "CRM", color: "#f97316" },
  { name: "Microsoft Teams", cat: "Comm", color: "#8b5cf6" },
  { name: "WhatsApp API", cat: "Comm", color: "#10b981" },
  { name: "Google Workspace", cat: "Productivity", color: "#ef4444" },
  { name: "SharePoint", cat: "DMS", color: "#3b82f6" },
  { name: "AWS S3", cat: "Cloud", color: "#f59e0b" },
  { name: "Zapier", cat: "Automation", color: "#ff6b35" },
  { name: "Twilio", cat: "SMS", color: "#ec4899" },
  { name: "Power BI", cat: "Analytics", color: "#f59e0b" },
]

const catColors = { ERP:"#3b82f6", Finance:"#10b981", CRM:"#8b5cf6", Comm:"#06b6d4", Productivity:"#f59e0b", DMS:"#ec4899", Cloud:"#f97316", Automation:"#ff6b35", SMS:"#ec4899", Analytics:"#3b82f6" }

export default function Integrations() {
  return (
    <section className="py-24 bg-white" id="integrations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", color: "#3b82f6" }}>
            <Link size={11} /> Integrations & APIs
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Connects to the tools your<br className="hidden sm:block" /> business already uses
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-xl mx-auto">
            Pre-built connectors to 50+ enterprise systems. Full REST API + Webhooks for custom integrations.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Connector grid */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
              {connectors.map((c, i) => (
                <motion.div key={c.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-md transition-all cursor-default">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-extrabold text-xs flex-shrink-0" style={{ background: catColors[c.cat] || "#3b82f6" }}>
                    {c.name[0]}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800 leading-tight">{c.name}</div>
                    <div className="text-xs text-slate-400">{c.cat}</div>
                  </div>
                </motion.div>
              ))}
              <div className="flex items-center justify-center px-3 py-2.5 rounded-2xl border-2 border-dashed border-slate-200 text-xs text-slate-400 font-semibold">
                + 36 more
              </div>
            </div>
          </motion.div>

          {/* API mockup */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl border border-slate-800" style={{ background: "#0d1117" }}>
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
              <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/70" /><div className="w-3 h-3 rounded-full bg-amber-500/70" /><div className="w-3 h-3 rounded-full bg-emerald-500/70" /></div>
              <span className="text-xs text-white/40 font-mono ml-2">Sky LowCode API · REST v2</span>
              <div className="ml-auto flex items-center gap-1.5 px-2 py-1 rounded text-xs" style={{ background: "rgba(16,185,129,0.15)", color: "#10b981" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />200 OK
              </div>
            </div>
            <div className="p-5 font-mono text-sm space-y-2.5" style={{ fontFamily: "'Fira Code',monospace" }}>
              <div><span className="text-blue-400">POST</span> <span className="text-white/80">/api/v2/workflows/trigger</span></div>
              <div className="text-white/30 text-xs mt-1">// Request payload</div>
              <div className="rounded-xl p-4 space-y-1" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div><span className="text-amber-300">{"{"}</span></div>
                <div className="pl-4"><span className="text-cyan-300">"workflow_id"</span><span className="text-white/50">: </span><span className="text-emerald-300">"wf_invoice_approval_01"</span><span className="text-white/50">,</span></div>
                <div className="pl-4"><span className="text-cyan-300">"trigger_by"</span><span className="text-white/50">: </span><span className="text-emerald-300">"api"</span><span className="text-white/50">,</span></div>
                <div className="pl-4"><span className="text-cyan-300">"payload"</span><span className="text-white/50">: {"{"}</span></div>
                <div className="pl-8"><span className="text-cyan-300">"invoice_id"</span><span className="text-white/50">: </span><span className="text-emerald-300">"INV-2024-00847"</span><span className="text-white/50">,</span></div>
                <div className="pl-8"><span className="text-cyan-300">"amount"</span><span className="text-white/50">: </span><span className="text-purple-300">88725</span><span className="text-white/50">,</span></div>
                <div className="pl-8"><span className="text-cyan-300">"auto_approve"</span><span className="text-white/50">: </span><span className="text-orange-300">false</span></div>
                <div className="pl-4"><span className="text-white/50">{"}"}</span></div>
                <div><span className="text-amber-300">{"}"}</span></div>
              </div>
              <div className="text-white/30 text-xs mt-2">// Response</div>
              <div className="rounded-xl p-4 space-y-1" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
                <div><span className="text-amber-300">{"{"}</span></div>
                <div className="pl-4"><span className="text-cyan-300">"status"</span><span className="text-white/50">: </span><span className="text-emerald-300">"triggered"</span><span className="text-white/50">,</span></div>
                <div className="pl-4"><span className="text-cyan-300">"run_id"</span><span className="text-white/50">: </span><span className="text-emerald-300">"run_xk9m2p"</span><span className="text-white/50">,</span></div>
                <div className="pl-4"><span className="text-cyan-300">"next_step"</span><span className="text-white/50">: </span><span className="text-emerald-300">"manager_approval"</span></div>
                <div><span className="text-amber-300">{"}"}</span></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
