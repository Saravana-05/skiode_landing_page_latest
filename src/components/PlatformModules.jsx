import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Sparkles, Zap, Eye, Shield, Rocket, ChevronRight, ArrowRight,
  FlaskConical, Building2, Factory, Package, CreditCard, TestTube2, Bot, HeartPulse,
  Timer, TrendingDown, Users, CheckCircle2, BarChart2
} from "lucide-react"

import img13 from "../assets/use-cases/slide13.jpeg"
import img14 from "../assets/use-cases/slide14.jpeg"
import img15 from "../assets/use-cases/slide15.png"
import img16 from "../assets/use-cases/slide16.png"
import img17 from "../assets/use-cases/slide17.png"
import img18 from "../assets/use-cases/slide18.jpeg"
import img19 from "../assets/use-cases/slide19.png"
import img20 from "../assets/use-cases/slide20.jpeg"

const useCases = [
  {
    id: "pharma",
    label: "Pharma Sale Order",
    industry: "Pharmaceutical",
    icon: FlaskConical,
    color: "#8b5cf6",
    image: img13,
    headline: "6 teams unified into 1 automated flow",
    highlights: [
      { icon: TrendingDown, text: "70% faster processing" },
      { icon: Zap, text: "AI-powered data extraction" },
      { icon: Users, text: "6 teams → single platform" },
    ],
    features: ["Email Spooling", "Decision Management", "Doc Generation BOT", "Mobile App"],
  },
  {
    id: "airport",
    label: "Airport Vendor Ops",
    industry: "Aviation",
    icon: Building2,
    color: "#06b6d4",
    image: img14,
    headline: "Centralized vendor ops with real-time visibility",
    highlights: [
      { icon: Eye, text: "100% shipment visibility" },
      { icon: TrendingDown, text: "90% fewer errors" },
      { icon: Timer, text: "3× faster vendor response" },
    ],
    features: ["Pre-Built Integration", "Workflow Automation", "Dashboard", "User Groups"],
  },
  {
    id: "ticketing",
    label: "Mfg. Ticketing",
    industry: "Manufacturing",
    icon: Factory,
    color: "#f59e0b",
    image: img15,
    headline: "Automated incident tracking with live chat",
    highlights: [
      { icon: Timer, text: "60% faster resolution" },
      { icon: CheckCircle2, text: "100% audit trail" },
      { icon: Zap, text: "Live chat at every stage" },
    ],
    features: ["Live Reports", "Decision Management", "Live Chat", "Role-Based Access"],
  },
  {
    id: "procurement",
    label: "Aquaculture Procurement",
    industry: "Aquaculture",
    icon: Package,
    color: "#10b981",
    image: img16,
    headline: "End-to-end procurement across 4 divisions",
    highlights: [
      { icon: TrendingDown, text: "95% PO cycle reduction" },
      { icon: Shield, text: "100% compliance" },
      { icon: Users, text: "4 divisions unified" },
    ],
    features: ["Workflow Automation", "Doc Generation BOT", "Dashboard", "Role-Based Access"],
  },
  {
    id: "reimbursement",
    label: "FMCG Reimbursement",
    industry: "FMCG · Africa & ME",
    icon: CreditCard,
    color: "#ec4899",
    image: img17,
    headline: "Claims to PO — fully automated lifecycle",
    highlights: [
      { icon: Timer, text: "80% faster approvals" },
      { icon: Eye, text: "Full lifecycle tracking" },
      { icon: CheckCircle2, text: "Auto PO conversion" },
    ],
    features: ["Dynamic Forms", "Decision Management", "Notification Bots", "Dashboard"],
  },
  {
    id: "lab",
    label: "Lab Automation",
    industry: "Tubes Manufacturing",
    icon: TestTube2,
    color: "#f97316",
    image: img18,
    headline: "Paper-based labs → fully digital in weeks",
    highlights: [
      { icon: TrendingDown, text: "65% faster turnaround" },
      { icon: BarChart2, text: "Real-time report tracking" },
      { icon: Users, text: "Cross-team collaboration" },
    ],
    features: ["Structured Forms", "Workflow Automation", "Dashboard & Reports", "Notification Bots"],
  },
  {
    id: "rpa",
    label: "RPA Goods Mgmt",
    industry: "Auto Parts · Global",
    icon: Bot,
    color: "#6366f1",
    image: img19,
    headline: "Excel to Oracle — zero human intervention",
    highlights: [
      { icon: Zap, text: "0 hours manual entry" },
      { icon: CheckCircle2, text: "99.9% data accuracy" },
      { icon: Timer, text: "Real-time Oracle sync" },
    ],
    features: ["RPA Bot Integration", "Data Mapping", "Validation Engine", "Status Dashboard"],
  },
  {
    id: "payment",
    label: "Payment Recovery",
    industry: "Healthcare · Stem Cell",
    icon: HeartPulse,
    color: "#ef4444",
    image: img20,
    headline: "Automated demand notices to legal escalation",
    highlights: [
      { icon: TrendingDown, text: "40% better recovery" },
      { icon: Zap, text: "Auto legal escalation" },
      { icon: Shield, text: "100% audit trail" },
    ],
    features: ["Document Generation", "Case Management", "Decision Logic", "Notification Bots"],
  },
]

export default function PlatformModules() {
  const [active, setActive] = useState(0)
  const uc = useCases[active]

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #f8faff 0%, #f0f4ff 50%, #eef6ff 100%)" }}>
      <div className="absolute inset-0 dot-pattern-light pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none transition-all duration-1000"
        style={{ background: `radial-gradient(circle, ${uc.color}08 0%, transparent 60%)`, filter: "blur(100px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 rounded-full px-6 py-2.5 text-sm font-extrabold mb-6"
            style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))", border: "1px solid rgba(59,130,246,0.2)", color: "#2563eb" }}>
            <Sparkles size={14} /> Real Solutions. Real Results.
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.08] tracking-tight text-slate-900">
            Turn manual processes into <br className="hidden sm:block" />
            <span style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>digital advantages</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="text-lg sm:text-xl max-w-2xl mx-auto text-slate-500 leading-relaxed font-medium">
            See how enterprises across industries automated their critical processes with skiode.
          </motion.p>
        </div>

        {/* Tabs — horizontal scrollable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex gap-2 overflow-x-auto pb-2 mb-8 hide-scrollbar"
        >
          {useCases.map((u, i) => {
            const isActive = i === active
            return (
              <button key={u.id} onClick={() => setActive(i)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 flex-shrink-0"
                style={{
                  background: isActive ? "white" : "transparent",
                  color: isActive ? u.color : "#94a3b8",
                  border: isActive ? `1.5px solid ${u.color}30` : "1.5px solid transparent",
                  boxShadow: isActive ? `0 4px 16px ${u.color}15` : "none",
                }}>
                <u.icon size={16} />
                {u.label}
              </button>
            )
          })}
        </motion.div>

        {/* Main showcase card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={uc.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl overflow-hidden"
            style={{ border: "1px solid #e2e8f0", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}
          >
            <div className="grid lg:grid-cols-2">

              {/* Left — Image */}
              <div className="relative h-64 sm:h-80 lg:h-auto lg:min-h-[420px] overflow-hidden">
                <img src={uc.image} alt={uc.label}
                  className="w-full h-full object-cover" />
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{
                  background: `linear-gradient(135deg, ${uc.color}cc 0%, ${uc.color}40 100%)`,
                  mixBlendMode: "multiply",
                }} />
                {/* Content on image */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm">
                      <uc.icon size={20} className="text-white" />
                    </div>
                    <span className="text-white/80 text-sm font-bold">{uc.industry}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">{uc.headline}</h3>
                </div>
              </div>

              {/* Right — Key highlights */}
              <div className="p-6 sm:p-8 flex flex-col">

                {/* Impact highlights — big and visual */}
                <div className="space-y-4 mb-6 flex-1">
                  <p className="text-xs uppercase tracking-[0.15em] font-extrabold text-slate-400 mb-2">Key Results</p>
                  {uc.highlights.map((h, i) => (
                    <motion.div
                      key={h.text}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-2xl"
                      style={{ background: `${uc.color}06`, border: `1px solid ${uc.color}12` }}
                    >
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${uc.color}12` }}>
                        <h.icon size={20} style={{ color: uc.color }} />
                      </div>
                      <span className="text-base sm:text-lg font-bold text-slate-800">{h.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Features used */}
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.15em] font-extrabold text-slate-400 mb-3">skiode Features Used</p>
                  <div className="flex flex-wrap gap-2">
                    {uc.features.map(f => (
                      <span key={f} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                        style={{ background: `${uc.color}08`, color: uc.color, border: `1px solid ${uc.color}15` }}>
                        <CheckCircle2 size={12} />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a href={`/use-cases#${uc.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold transition-all hover:gap-3"
                  style={{ color: uc.color }}>
                  Read full case study <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom navigation dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {useCases.map((u, i) => (
            <button key={u.id} onClick={() => setActive(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === active ? "32px" : "10px",
                height: "10px",
                background: i === active ? u.color : "#cbd5e1",
              }} />
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-wrap items-center justify-center gap-8 sm:gap-14"
        >
          {[
            { icon: Rocket, num: "5×", label: "Faster app builds" },
            { icon: TrendingDown, num: "70%", label: "Cycle time reduction" },
            { icon: Users, num: "10×", label: "Productivity boost" },
            { icon: Zap, num: "50+", label: "Integrations ready" },
          ].map(s => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "rgba(59,130,246,0.08)" }}>
                <s.icon size={20} className="text-blue-500" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black gradient-text-blue">{s.num}</div>
                <div className="text-xs text-slate-400 font-semibold">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}
