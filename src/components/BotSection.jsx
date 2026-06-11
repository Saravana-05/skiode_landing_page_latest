import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Zap, Users, DollarSign, HardHat, Settings2, CheckCircle2, ArrowRight, Bell, Database, RefreshCw, MessageSquare, Shield } from "lucide-react"
import { BotAutomationPlaceholder } from "./Placeholders"

/* ── Bot flow SVG infographic ── */
function BotFlowDiagram() {
  const steps = [
    { num: 1, label: "User Message",     color: "#3b82f6", icon: "💬" },
    { num: 2, label: "NLP Intent",       color: "#8b5cf6", icon: "🧠" },
    { num: 3, label: "Process Action",   color: "#10b981", icon: "⚡" },
    { num: 4, label: "API / ERP",        color: "#f59e0b", icon: "🔌" },
    { num: 5, label: "Smart Reply",      color: "#06b6d4", icon: "✉️"  },
  ]
  const sideActions = [
    { label: "Log to Audit",    color: "#6366f1", y: 1 },
    { label: "Notify Manager",  color: "#ec4899", y: 3 },
  ]

  return (
    <div className="rounded-2xl overflow-hidden p-5" style={{ background: "linear-gradient(135deg,#1e293b,#0f172a)", border: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">Bot Processing Pipeline</div>
      {/* Main flow */}
      <div className="flex items-center justify-between gap-1 mb-5">
        {steps.map((s, i) => (
          <div key={s.num} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="w-10 h-10 rounded-2xl flex items-center justify-center mb-2 text-lg shadow-lg"
                style={{ background: `${s.color}20`, border: `1.5px solid ${s.color}50`, boxShadow: `0 4px 20px ${s.color}25` }}>
                {s.icon}
              </motion.div>
              <div className="text-center">
                <div className="text-[9px] font-extrabold" style={{ color: s.color }}>{s.num}</div>
                <div className="text-[9px] text-white/50 text-center leading-tight" style={{ maxWidth: "52px" }}>{s.label}</div>
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex-shrink-0 mb-4">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "20px" }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}
                  className="h-px" style={{ background: `linear-gradient(90deg,${s.color},${steps[i+1].color})`, opacity: 0.5 }} />
                <div className="border-l-4 border-y-4 border-y-transparent ml-auto" style={{ borderLeftColor: `${steps[i+1].color}60`, width: 0 }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Side branches */}
      <div className="flex gap-3">
        {[
          { label: "📋 Audit Log", sub: "Every bot action tracked", color: "#6366f1" },
          { label: "🔔 Manager Alert", sub: "Escalation when needed", color: "#ec4899" },
          { label: "📊 Dashboard", sub: "Live metrics updated", color: "#10b981" },
        ].map((b, i) => (
          <div key={b.label} className="flex-1 p-2.5 rounded-xl" style={{ background: `${b.color}10`, border: `1px solid ${b.color}25` }}>
            <div className="text-[9px] font-bold text-white/70 mb-0.5">{b.label}</div>
            <div className="text-[8px] text-white/35">{b.sub}</div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-center">
        <div className="text-[7px] text-white/15">[ Replace with real product screenshot ]</div>
      </div>
    </div>
  )
}

/* ── Bot type cards with chat preview ── */
const botTypes = [
  {
    icon: Users,      title: "HR Bot",           color: "#8b5cf6", bg: "#f5f3ff",
    tasks: ["Onboarding automation", "Leave requests", "Policy Q&A", "Payslip download"],
    chat: [
      { from: "user", text: "I need 3 days leave from Jun 10" },
      { from: "bot",  text: "Leave applied for Jun 10–12 ✓\nManager notified. Balance: 14 days remaining." },
    ],
  },
  {
    icon: DollarSign, title: "Finance Bot",       color: "#10b981", bg: "#f0fdf4",
    tasks: ["Invoice submission", "Expense claims", "Payment status", "Budget queries"],
    chat: [
      { from: "user", text: "Status of invoice INV-2024-0847?" },
      { from: "bot",  text: "Pending Finance Manager approval.\nEstimated payment: Jul 5, 2025." },
    ],
  },
  {
    icon: HardHat,    title: "Construction Bot",  color: "#f59e0b", bg: "#fffbeb",
    tasks: ["Daily site reports", "Material requests", "Inspection scheduling", "Safety alerts"],
    chat: [
      { from: "user", text: "Log material request: Tower A" },
      { from: "bot",  text: "Logged: 500 steel rods, Tower A ✓\nProcurement notified. ETA: 48h." },
    ],
  },
  {
    icon: Settings2,  title: "Operations Bot",    color: "#3b82f6", bg: "#eff6ff",
    tasks: ["Asset tracking", "Vendor updates", "Shift scheduling", "SLA monitoring"],
    chat: [
      { from: "user", text: "Assign morning shift for tomorrow" },
      { from: "bot",  text: "Shift assigned: Team A, 6am–2pm ✓\n12 members notified via WhatsApp." },
    ],
  },
]

export default function BotSection() {
  const [activeBot, setActiveBot] = useState(0)
  const bot = botTypes[activeBot]

  return (
    <section className="py-24 bg-white" id="bot-automation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.25)", color: "#3b82f6" }}>
            <Bot size={11} /> Intelligent Bot Automation
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Conversational bots for every{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">department</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto">
            AI-powered bots that understand natural language, execute workflows, and connect to your systems — on WhatsApp, Teams, or any web channel.
          </motion.p>
        </div>

        {/* ── Bot pipeline infographic ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
          <BotFlowDiagram />
        </motion.div>

        {/* ── Bot type selector + detail view ── */}
        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* Bot selector tabs */}
          <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-3">
            {botTypes.map((b, i) => (
              <motion.button key={b.title}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                onClick={() => setActiveBot(i)}
                className="w-full text-left p-4 rounded-2xl border transition-all"
                style={{
                  background: activeBot === i ? b.bg : "white",
                  borderColor: activeBot === i ? `${b.color}30` : "#f1f5f9",
                  boxShadow: activeBot === i ? `0 4px 20px ${b.color}12` : "none",
                }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all"
                    style={{ background: activeBot === i ? b.color : `${b.color}12` }}>
                    <b.icon size={18} color={activeBot === i ? "white" : b.color} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-slate-800 text-sm">{b.title}</div>
                    <div className="text-xs text-slate-400 truncate">{b.tasks[0]}</div>
                  </div>
                  {activeBot === i && <div className="w-1.5 h-6 rounded-full ml-auto flex-shrink-0" style={{ background: b.color }} />}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Bot chat visual — swap BotAutomationPlaceholder body with a real screenshot */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div key={activeBot}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
                <BotAutomationPlaceholder />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom stats */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { val: "4+",    label: "Specialised bot types",      color: "#3b82f6" },
            { val: "3",     label: "Channels: WhatsApp/Teams/Web", color: "#8b5cf6" },
            { val: "70%",   label: "Queries resolved without HR", color: "#10b981" },
            { val: "24/7",  label: "Always-on automation",       color: "#f59e0b" },
          ].map(m => (
            <div key={m.label} className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all text-center">
              <div className="text-2xl font-extrabold mb-1" style={{ color: m.color }}>{m.val}</div>
              <div className="text-xs text-slate-500">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
