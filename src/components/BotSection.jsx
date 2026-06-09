import { motion } from "framer-motion"
import { Bot, Zap, MessageSquare, Users, DollarSign, HardHat, Settings2, CheckCircle2, ArrowRight, Send, ChevronRight } from "lucide-react"

const botTypes = [
  { icon: Users, title: "HR Bot", color: "#8b5cf6", bg: "#f5f3ff", tasks: ["Onboarding automation","Leave requests","Policy Q&A","Payslip download"], chat: [{ from: "user", text: "I need to apply for 3 days leave" }, { from: "bot", text: "Sure! Leave applied for Jun 10-12. Your manager has been notified. Remaining balance: 14 days." }] },
  { icon: DollarSign, title: "Finance Bot", color: "#10b981", bg: "#f0fdf4", tasks: ["Invoice submission","Expense claims","Payment status","Budget queries"], chat: [{ from: "user", text: "Status of invoice INV-2024-0847?" }, { from: "bot", text: "Invoice is pending approval from Finance Manager. Estimated payment: Jul 5, 2025." }] },
  { icon: HardHat, title: "Construction Bot", color: "#f59e0b", bg: "#fffbeb", tasks: ["Daily site reports","Material requests","Inspection scheduling","Safety alerts"], chat: [{ from: "user", text: "Log material request for Tower A" }, { from: "bot", text: "Request logged: 500 steel rods, Tower A. Procurement notified. ETA: 48 hours." }] },
  { icon: Settings2, title: "Operations Bot", color: "#3b82f6", bg: "#eff6ff", tasks: ["Asset tracking","Vendor updates","Shift scheduling","SLA monitoring"], chat: [{ from: "user", text: "Assign shift for tomorrow morning" }, { from: "bot", text: "Shift assigned to Team A (6am–2pm). 12 members notified via WhatsApp." }] },
]

const flowNodes = [
  { label: "User Message", color: "#3b82f6" },
  { label: "NLP Engine", color: "#8b5cf6" },
  { label: "Intent Detected", color: "#06b6d4" },
  { label: "Process Action", color: "#10b981" },
  { label: "ERP / API", color: "#f59e0b" },
  { label: "Smart Reply", color: "#ec4899" },
]

export default function BotSection() {
  return (
    <section className="py-24 bg-white" id="bot-automation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.25)", color: "#3b82f6" }}>
            <Bot size={11} /> Intelligent Bot Automation
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Conversational bots for every<br className="hidden sm:block" /> department in your organization
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-xl mx-auto">
            AI-powered bots that understand natural language, execute workflows, and connect to your systems — on WhatsApp, Teams, or web.
          </motion.p>
        </div>

        {/* Flow diagram */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 flex items-center justify-center gap-0 flex-wrap">
          {flowNodes.map((n, i) => (
            <div key={n.label} className="flex items-center">
              <div className="flex flex-col items-center gap-2 px-1">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-lg"
                  style={{ background: `linear-gradient(135deg,${n.color},${n.color}88)`, boxShadow: `0 4px 16px ${n.color}40` }}>
                  {i + 1}
                </div>
                <span className="text-xs font-bold text-center text-slate-600" style={{ maxWidth: "72px" }}>{n.label}</span>
              </div>
              {i < flowNodes.length - 1 && (
                <ChevronRight size={16} className="text-slate-300 mb-4 mx-0.5" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Bot cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {botTypes.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-3xl border overflow-hidden shadow-md hover:shadow-xl transition-all"
              style={{ background: "white", borderColor: `${b.color}20` }}>
              {/* Header */}
              <div className="p-5 pb-3" style={{ background: b.bg }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: b.color }}>
                    <b.icon size={18} color="white" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold" style={{ background: "white", color: b.color, border: `1px solid ${b.color}30` }}>
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: b.color }} />
                    Active
                  </div>
                </div>
                <h3 className="font-extrabold text-slate-900 mb-2">{b.title}</h3>
                <div className="space-y-1">
                  {b.tasks.map(t => (
                    <div key={t} className="flex items-center gap-1.5 text-xs text-slate-600">
                      <CheckCircle2 size={10} style={{ color: b.color }} />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              {/* Chat preview */}
              <div className="p-4 space-y-2">
                <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wide">Live preview</div>
                {b.chat.map((msg, mi) => (
                  <div key={mi} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                    {msg.from === "bot" && (
                      <div className="w-5 h-5 rounded-full flex items-center justify-center mr-1.5 flex-shrink-0 mt-0.5" style={{ background: b.color }}>
                        <Bot size={10} color="white" />
                      </div>
                    )}
                    <div className={`text-xs rounded-2xl px-3 py-2 leading-snug max-w-[85%] ${msg.from === "user" ? "text-white rounded-br-sm" : "text-slate-700 rounded-bl-sm"}`}
                      style={{ background: msg.from === "user" ? b.color : "#f8fafc", border: msg.from === "bot" ? "1px solid #e2e8f0" : "none" }}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {/* Input area */}
                <div className="flex items-center gap-2 mt-3 px-3 py-2 rounded-xl border border-slate-200 bg-slate-50">
                  <span className="text-xs text-slate-300 flex-1">Message {b.title}...</span>
                  <Send size={11} style={{ color: b.color }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-5 rounded-3xl" style={{ background: "linear-gradient(135deg,#0a1628,#1e1b4b)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div>
              <div className="text-white font-extrabold text-lg">Works on WhatsApp, Teams, Web & SMS</div>
              <div className="text-white/50 text-sm">Deploy to any channel with zero code</div>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}>
              Deploy Bot <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
