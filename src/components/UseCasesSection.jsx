import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import {
  ArrowRight, CheckCircle2, Zap, ChevronRight, Sparkles,
  Mail, Brain, FileText, GitBranch, Bot, BarChart2, Users,
  Shield, Plug, Settings, MessageSquare, Cpu, Database,
  Bell, ClipboardCheck, ArrowUpRight
} from "lucide-react"

/* ── Industry images from PPT ── */
import imgPharma from "../assets/use-cases/slide13.jpeg"
import imgAirport from "../assets/use-cases/slide14.jpeg"
import imgMfgTicket from "../assets/use-cases/slide15.png"
import imgAqua from "../assets/use-cases/slide16.png"
import imgFmcg from "../assets/use-cases/slide17.png"
import imgTubes from "../assets/use-cases/slide18.jpeg"
import imgStemCell from "../assets/use-cases/slide20.jpeg"

const featureMap = {
  "Email Spooling":               { icon: Mail,           color: "#3b82f6" },
  "Intelligent Data Extraction":  { icon: Brain,          color: "#8b5cf6" },
  "Decision Management":          { icon: Zap,            color: "#f59e0b" },
  "Document Generation BOT":      { icon: FileText,       color: "#10b981" },
  "Process Orchestration":        { icon: GitBranch,      color: "#06b6d4" },
  "Mobile App Development module":{ icon: Cpu,            color: "#ec4899" },
  "Pre-Built Integration":        { icon: Plug,           color: "#3b82f6" },
  "Workflow Automation":          { icon: GitBranch,      color: "#8b5cf6" },
  "Dashboard":                    { icon: BarChart2,      color: "#f97316" },
  "User Groups & Users":          { icon: Users,          color: "#06b6d4" },
  "Live reports":                 { icon: BarChart2,      color: "#f97316" },
  "Live chat facility":           { icon: MessageSquare,  color: "#10b981" },
  "User Groups & Role based access": { icon: Shield,     color: "#ef4444" },
  "Dynamic Forms":                { icon: FileText,       color: "#3b82f6" },
  "Role-Based Access Control":    { icon: Shield,         color: "#ef4444" },
  "Notification Bots":            { icon: Bell,           color: "#ec4899" },
  "RPA Bot Integration":          { icon: Bot,            color: "#8b5cf6" },
  "Data Mapping Automation":      { icon: Settings,       color: "#06b6d4" },
  "Validation Rules Engine":      { icon: ClipboardCheck, color: "#10b981" },
  "Status Dashboard & Reporting": { icon: BarChart2,      color: "#f97316" },
  "Decision & Condition Logic":   { icon: Zap,            color: "#f59e0b" },
  "Document Generation Bots":     { icon: FileText,       color: "#10b981" },
  "Case Management & Audit Trail":{ icon: ClipboardCheck, color: "#8b5cf6" },
}

const useCases = [
  {
    id: "pharma-sale-order",
    accent: "#8b5cf6",
    image: imgPharma,
    industry: "Pharmaceutical",
    title: "Pharma Sale Order Process Automation",
    challenge: "A Pharmaceutical company faced inefficiencies in sale order processing due to reliance on emails, Excel sheets, WhatsApp, and manual workflows across six teams — Marketing, Accounts, Production, Quality, Management and Dispatch.",
    solution: "Delivered an automated solution to streamline the workflows leveraging skiode platform which resulted in structured processing with speed and accuracy.",
    features: ["Email Spooling", "Intelligent Data Extraction", "Decision Management", "Document Generation BOT", "Process Orchestration", "Mobile App Development module"],
    keyBenefits: ["6-team workflow automated", "70% faster processing", "Complete audit trail"],
  },
  {
    id: "vendor-operations",
    accent: "#3b82f6",
    image: imgAirport,
    industry: "Airport Solutions Mfg",
    title: "Vendor Operations Automation for Airport Solutions",
    challenge: "A leading Airport Solution Manufacturing company relied on manual processes for vendor operations. Vendors managed ASNs through emails, lacking a centralized system — resulting in inefficiencies, limited visibility, and errors.",
    solution: "Delivered a distinctive solution leveraging skiode to streamline vendor challenges that resulted in increased operational efficiency.",
    features: ["Pre-Built Integration", "Workflow Automation", "Decision Management", "Document Generation BOT", "Dashboard", "User Groups & Users"],
    keyBenefits: ["Centralized vendor portal", "Automated ASN processing", "Real-time visibility"],
  },
  {
    id: "ticketing-tool",
    accent: "#f97316",
    image: imgMfgTicket,
    industry: "Manufacturing",
    title: "Ticketing Tool for Manufacturing Company",
    challenge: "A Manufacturing Company faced recurring delays and miscommunication in handling internal service requests. Employees raised tickets via emails or phone calls, which lacked tracking, accountability, and timely resolution.",
    solution: "Implemented an automated ticketing and incident management system — unified portal, auto-routing, live chat, status tracking, and complete audit trail.",
    features: ["Live reports", "Workflow Automation", "Decision Management", "Live chat facility", "Dashboard", "User Groups & Role based access"],
    keyBenefits: ["Unified service portal", "Live chat at every stage", "Requestor confirmation flow"],
  },
  {
    id: "procurement-automation",
    accent: "#10b981",
    image: imgAqua,
    industry: "Aquaculture Enterprise",
    title: "Procurement Process Automation",
    challenge: "An aquaculture enterprise faced inefficiencies across Hatchery, Farm, Feed Mill, and Processing Plant divisions. Lack of a unified system led to delayed approvals, poor vendor tracking, and no process transparency.",
    solution: "skiode enabled end-to-end procurement automation — digitizing purchase requisitions, approvals, order generation, and vendor management, eliminating delays.",
    features: ["Pre-Built Integration", "Workflow Automation", "Decision Management", "Document Generation BOT", "Dashboard", "User Groups & Role based access"],
    keyBenefits: ["Multi-level approval flows", "Auto-generated POs", "Finance system integration"],
  },
  {
    id: "reimbursement-claims",
    accent: "#ec4899",
    image: imgFmcg,
    industry: "FMCG — Africa & ME",
    title: "Reimbursement/Claim Processing Automation",
    challenge: "A prominent FMCG company serving African and Middle East markets faced challenges managing employee reimbursements — manual emails, inconsistencies, delayed approvals, and poor visibility affecting employee satisfaction.",
    solution: "skiode enabled a fully automated reimbursement system. Approved claims are automatically converted into Purchase Orders for seamless finance integration and audit readiness.",
    features: ["Dynamic Forms", "Workflow Automation", "Decision Management", "Role-Based Access Control", "Dashboard", "Notification Bots"],
    keyBenefits: ["Auto PO conversion", "Full lifecycle tracking", "Digital traceability"],
  },
  {
    id: "lab-automation",
    accent: "#06b6d4",
    image: imgTubes,
    industry: "Tubes Manufacturing",
    title: "Quality Test — Lab Automation",
    challenge: "A large Tubes manufacturer operating multiple labs faced challenges managing lab test requests, approvals, and report tracking. Paper-based processes caused delays and poor coordination between production, engineering, and lab teams.",
    solution: "skiode enabled complete digitization of the lab test management process — request initiation to report submission — ensuring faster turnaround and customized report generation.",
    features: ["Workflow Automation", "Decision Management", "Role-Based Access Control", "Dashboard", "Notification Bots"],
    keyBenefits: ["Auto-routing by priority", "Multi-level approvals", "Custom report generation"],
  },
  {
    id: "sale-order-rpa",
    accent: "#f59e0b",
    image: null,
    industry: "Fuel Injection Mfg",
    title: "Sale Order RPA — Excel to Oracle",
    challenge: "A global auto parts company relied on Excel for goods tracking, stock updates, and inventory. Manual methods led to data mismatches, version conflicts, and delays updating the Oracle system.",
    solution: "Using skiode's RPA, a bot reads structured Excel data, validates it, and pushes entries into Oracle in real-time — removing manual intervention entirely.",
    features: ["RPA Bot Integration", "Data Mapping Automation", "Validation Rules Engine", "Status Dashboard & Reporting", "Notification Bots"],
    keyBenefits: ["Zero manual data entry", "Real-time Oracle sync", "Auto validation & alerts"],
  },
  {
    id: "payment-tracking",
    accent: "#ef4444",
    image: imgStemCell,
    industry: "Stem Cell Banking",
    title: "Outstanding Payment Recovery Workflow",
    challenge: "A stem cell banking provider faced recurring issues recovering outstanding dues. Manual follow-ups, inconsistent tracking, and no structured escalation from demand notice to legal action hindered resolution.",
    solution: "skiode built a structured recovery workflow — auto-identifying overdue customers, triggering demand notices, escalating to legal teams, and maintaining complete audit trails.",
    features: ["Decision & Condition Logic", "Document Generation Bots", "Workflow Automation", "Dashboard", "Case Management & Audit Trail", "Notification Bots"],
    keyBenefits: ["Auto demand notices", "Legal escalation flow", "Recovery dashboard"],
  },
]

export default function UseCasesSection() {
  const [active, setActive] = useState(0)
  const cs = useCases[active]

  return (
    <section className="py-16 relative overflow-hidden"
      style={{ background: "#f7faf9" }}>
      <div className="absolute inset-0 dot-pattern-light pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-bold mb-4"
            style={{ background: "rgba(22,64,101,0.08)", border: "1px solid rgba(22,64,101,0.24)", color: "#0a2342" }}>
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#164065" }} />
            Solutions Delivered · By Industry Verticals
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-[36px] font-extrabold mb-3 leading-tight" style={{ color: "#0a2342" }}>
            Real-World{" "}
            <span style={{ color: "#164065" }}>
              Case Studies
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-[12px] text-slate-500 max-w-xl mx-auto">
            From pharma sale orders to RPA-powered Oracle integrations — see how skiode transforms enterprise operations.
          </motion.p>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">

          {/* Left: Tab list */}
          <div className="lg:col-span-4 space-y-1.5">
            {useCases.map((uc, i) => (
              <motion.button
                key={uc.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActive(i)}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all duration-300"
                style={{
                  background: active === i ? "white" : "transparent",
                  border: active === i ? "1.5px solid rgba(22,64,101,0.3)" : "1.5px solid transparent",
                  boxShadow: active === i ? "0 6px 24px rgba(10,35,66,0.08)" : "none",
                }}>
                {/* Thumbnail */}
                <div className="w-10 h-10 rounded-xl flex-shrink-0 overflow-hidden"
                  style={{
                    background: uc.image ? "transparent" : "rgba(22,64,101,0.08)",
                    border: active === i ? "1.5px solid rgba(22,64,101,0.3)" : "1.5px solid rgba(0,0,0,0.06)",
                  }}>
                  {uc.image ? (
                    <img src={uc.image} alt={uc.industry} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Bot size={16} style={{ color: "#0a2342" }} />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-bold uppercase tracking-wider" style={{ color: active === i ? "#0a2342" : "#94a3b8" }}>
                    {uc.industry}
                  </div>
                  <div className="text-[12px] font-semibold truncate" style={{ color: active === i ? "#0a2342" : "#64748b" }}>
                    {uc.title.length > 35 ? uc.title.slice(0, 35) + "…" : uc.title}
                  </div>
                </div>
                <ChevronRight size={14} className="flex-shrink-0" style={{ color: active === i ? "#164065" : "#d1d5db" }} />
              </motion.button>
            ))}
          </div>

          {/* Right: Active case detail */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl overflow-hidden"
                style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>

                {/* Top accent line */}
                <div className="h-1" style={{ background: "#164065" }} />

                {/* Image banner */}
                {cs.image && (
                  <div className="relative overflow-hidden" style={{ height: "180px" }}>
                    <img src={cs.image} alt={cs.industry}
                      className="w-full h-full object-cover" />
                    <div className="absolute inset-0 pointer-events-none"
                      style={{ background: "rgba(10,35,66,0.22)" }} />
                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white"
                        style={{ background: "#0a2342", color: "#39ff14", backdropFilter: "blur(8px)" }}>
                        <Sparkles size={10} /> {cs.industry}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  {/* Title */}
                  {!cs.image && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
                      style={{ background: "rgba(22,64,101,0.08)", color: "#0a2342" }}>
                      <Sparkles size={10} /> {cs.industry}
                    </span>
                  )}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-5 leading-tight">{cs.title}</h3>

                  {/* Challenge & Solution */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="rounded-xl p-4"
                      style={{ background: "#f4f7f9", border: "1px solid rgba(10,35,66,0.14)" }}>
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="text-xs">⚠️</span>
                        <span className="text-[12px] font-extrabold uppercase tracking-wider" style={{ color: "#0a2342" }}>Challenge</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div className="rounded-xl p-4"
                      style={{ background: "rgba(22,64,101,0.06)", border: "1px solid rgba(22,64,101,0.2)" }}>
                      <div className="flex items-center gap-1.5 mb-2">
                        <Zap size={11} style={{ color: "#164065" }} />
                        <span className="text-[12px] font-extrabold uppercase tracking-wider" style={{ color: "#0a2342" }}>Solution</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <span className="text-[12px] font-bold uppercase tracking-wider mb-2.5 block" style={{ color: "#0a2342" }}>skiode Features Leveraged</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cs.features.map((f) => {
                        const feat = featureMap[f] || { icon: Zap, color: cs.accent }
                        const Icon = feat.icon
                        return (
                          <span key={f}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium"
                            style={{ background: `${feat.color}08`, color: feat.color, border: `1px solid ${feat.color}12` }}>
                            <Icon size={10} /> {f}
                          </span>
                        )
                      })}
                    </div>
                  </div>

                  {/* Key benefits */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cs.keyBenefits.map((b) => (
                      <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                        style={{ background: `${cs.accent}08`, color: cs.accent }}>
                        <CheckCircle2 size={11} /> {b}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link to={`/use-cases#${cs.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold transition-all hover:gap-3"
                    style={{ color: cs.accent }}>
                    Read Full Case Study <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mt-8">
          <Link to="/use-cases"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-bold text-white transition-all hover:scale-105"
            style={{ background: "#0a2342", color: "#39ff14", boxShadow: "0 8px 24px rgba(10,35,66,0.2)" }}>
            View All 8 Case Studies <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
