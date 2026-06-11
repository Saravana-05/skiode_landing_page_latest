import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  ArrowRight, CheckCircle2, Zap, Mail, Brain, FileText,
  GitBranch, Bot, BarChart2, Users, Shield, Plug, Settings,
  MessageSquare, ScanText, Cpu, Database, Bell, ClipboardCheck,
  Workflow, ChevronRight, Sparkles, ArrowUpRight
} from "lucide-react"

/* ── Industry images from PPT ── */
import imgPharma from "../assets/use-cases/slide13.jpeg"
import imgAirport from "../assets/use-cases/slide14.jpeg"
import imgMfgTicket from "../assets/use-cases/slide15.png"
import imgAqua from "../assets/use-cases/slide16.png"
import imgFmcg from "../assets/use-cases/slide17.png"
import imgTubes from "../assets/use-cases/slide18.jpeg"
import imgStemCell from "../assets/use-cases/slide20.jpeg"

const fade = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

/* ── Feature icon mapping (matching PPT component names) ── */
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
  "Forms & Structured Data":      { icon: Database,       color: "#3b82f6" },
  "Dashboard & Reports":          { icon: BarChart2,      color: "#f97316" },
  "RPA Bot Integration":          { icon: Bot,            color: "#8b5cf6" },
  "Data Mapping Automation":      { icon: Settings,       color: "#06b6d4" },
  "Validation Rules Engine":      { icon: ClipboardCheck, color: "#10b981" },
  "Secure Access & Audit Logs":   { icon: Shield,         color: "#ef4444" },
  "Status Dashboard & Reporting": { icon: BarChart2,      color: "#f97316" },
  "Decision & Condition Logic":   { icon: Zap,            color: "#f59e0b" },
  "Document Generation Bots":     { icon: FileText,       color: "#10b981" },
  "Case Management & Audit Trail":{ icon: ClipboardCheck, color: "#8b5cf6" },
}

/* ── All 8 case studies — exact PPT content ── */
const caseStudies = [
  {
    id: "pharma-sale-order",
    slide: 13,
    image: imgPharma,
    accent: "#8b5cf6",
    accentLight: "rgba(139,92,246,0.08)",
    industry: "Pharmaceutical",
    title: "Pharma Sale Order Process Automation",
    challenge: "A Pharmaceutical company faced inefficiencies in sale order processing due to reliance on emails, Excel sheets, WhatsApp, and manual workflows across six teams that includes Marketing, Accounts, Production, Quality, Management and Dispatch leading to multiple issues.",
    solution: "Delivered an automated solution to streamline the workflows leveraging skiode platform which resulted in structured processing with speed and accuracy.",
    features: ["Email Spooling", "Intelligent Data Extraction", "Decision Management", "Document Generation BOT", "Process Orchestration", "Mobile App Development module"],
    benefits: [
      "Eliminated manual handoffs across 6 teams",
      "Structured sale order processing with real-time tracking",
      "Automated document generation and routing",
      "Mobile access for field teams and management",
      "Complete audit trail for every sale order",
      "Reduced processing time by 70%",
    ],
  },
  {
    id: "vendor-operations",
    slide: 14,
    image: imgAirport,
    accent: "#3b82f6",
    accentLight: "rgba(59,130,246,0.08)",
    industry: "Airport Solutions Manufacturing",
    title: "Vendor Operations Automation for Airport Solutions",
    challenge: "A leading Airport Solution Manufacturing company, relied on manual processes for vendor operations. Vendors managed Advance Shipping Notices (ASNs) through emails, lacking a centralized system. This resulted in inefficiencies, limited visibility, and errors in shipment processing.",
    solution: "Delivered a distinctive solution leveraging skiode to streamline the existing challenges that resulted in increased operational efficiency.",
    features: ["Pre-Built Integration", "Workflow Automation", "Decision Management", "Document Generation BOT", "Dashboard", "User Groups & Users"],
    benefits: [
      "Centralized vendor communication and ASN portal",
      "Automated shipment processing and tracking",
      "Real-time visibility into vendor operations",
      "Reduced errors in shipment processing",
      "Streamlined vendor onboarding and management",
      "Increased operational efficiency across teams",
    ],
  },
  {
    id: "ticketing-tool",
    slide: 15,
    image: imgMfgTicket,
    accent: "#f97316",
    accentLight: "rgba(249,115,22,0.08)",
    industry: "Manufacturing",
    title: "Ticketing Tool for Manufacturing Company",
    challenge: "A Manufacturing Company faced recurring delays and miscommunication in handling internal service requests and incidents. Employees raised tickets via emails or phone calls, which lacked tracking, accountability, and timely resolution.",
    solution: "Implemented an automated ticketing and incident management system using skiode. The system enabled employees to raise service tickets via a unified portal, which routed requests to the right department, ensured approvals, tracked status, and maintained a complete audit trail.",
    features: ["Live reports", "Workflow Automation", "Decision Management", "Live chat facility", "Dashboard", "User Groups & Role based access"],
    benefits: [
      "Employees raise tickets by selecting the service department and filling the request form",
      "Department heads receive email notifications when a ticket is raised",
      "Live chat option enabled at each stage to support communication",
      "Tickets are closed only after requestor confirmation of issue resolution",
      "Support team accepts, rejects, or requests revisions with remarks",
      "Complete audit trail for compliance and reporting",
    ],
  },
  {
    id: "procurement-automation",
    slide: 16,
    image: imgAqua,
    accent: "#10b981",
    accentLight: "rgba(16,185,129,0.08)",
    industry: "Large Aquaculture Enterprise",
    title: "Procurement Process Automation for Aquaculture Enterprise",
    challenge: "An aquaculture enterprise, faced inefficiencies and manual overheads in their procurement operations across multiple divisions such as Hatchery, Farm, Feed Mill, and Processing Plant. The lack of a unified system led to delayed approvals, poor vendor tracking, and lack of process transparency.",
    solution: "skiode enabled end-to-end procurement automation by digitizing purchase requisitions, approvals, order generation, and vendor management through streamlined the process by eliminated delays.",
    features: ["Pre-Built Integration", "Workflow Automation", "Decision Management", "Document Generation BOT", "Dashboard", "User Groups & Role based access"],
    benefits: [
      "Procurement platform integrated with internal master data and finance systems",
      "Employees raise Indent Request digitally using role-based forms",
      "Indent go through multi-level approval flows based on pre-set conditions",
      "Approved Indents auto-generate POs and notify vendors",
      "All procurement documents stored and retrievable digitally for audits",
      "Eliminated delays across Hatchery, Farm, Feed Mill, and Processing Plant",
    ],
  },
  {
    id: "reimbursement-claims",
    slide: 17,
    image: imgFmcg,
    accent: "#ec4899",
    accentLight: "rgba(236,72,153,0.08)",
    industry: "FMCG — African & Middle East Markets",
    title: "Reimbursement/Claim Processing Automation for FMCG Group",
    challenge: "A prominent FMCG and supply chain management company serving the African and Middle East markets faced challenges in managing employee reimbursements. Manual submission of expense claims via emails resulted in inconsistencies, delayed approvals, and poor visibility into reimbursement statuses. This created pressure on the finance team and affected employee satisfaction.",
    solution: "skiode enabled a structured and fully automated reimbursement system where employees could raise claims through a digital interface. Approved claims are automatically converted into Purchase Orders (POs) for seamless integration with finance workflows and audit readiness.",
    features: ["Dynamic Forms", "Workflow Automation", "Decision Management", "Role-Based Access Control", "Dashboard", "Notification Bots"],
    benefits: [
      "Employees submit claims through a standardized form capturing all necessary details and documents",
      "Automated, multi-level approval process based on claim amount and department",
      "Track every stage of the reimbursement lifecycle — submitted, approved, rejected, paid",
      "All claims, approvals, and POs are stored digitally with complete traceability",
      "Once approved, the claim is auto-converted into a PO for traceability and processing",
      "Reduced finance team pressure and improved employee satisfaction",
    ],
  },
  {
    id: "lab-automation",
    slide: 18,
    image: imgTubes,
    accent: "#06b6d4",
    accentLight: "rgba(6,182,212,0.08)",
    industry: "Tubes Manufacturing",
    title: "Quality Test — Lab Automation for Tubes Manufacturing",
    challenge: "A large Tubes manufacturing organization operating multiple labs across its divisions faced challenges in managing lab test requests, approvals, and report tracking. The manual process — often paper-based — caused delays, lack of traceability, and inefficiencies in coordination between production, engineering, and lab teams.",
    solution: "skiode enabled complete digitization of the lab test management process. From request initiation to report submission, every step was automated and streamlined, ensuring faster turnaround, better visibility, and improved collaboration, customized report generation.",
    features: ["Forms & Structured Data", "Workflow Automation", "Decision Management", "Role-Based Access Control", "Dashboard & Reports", "Notification Bots"],
    benefits: [
      "Departments initiate lab test requests using dynamic digital forms with predefined fields",
      "Requests are automatically routed to the appropriate lab team based on sample type, department, and priority",
      "Labs acknowledge sample receipt and log test initiation and progress",
      "Lab engineers upload test reports directly to the system, notifying the requestor for review",
      "Requests go through a multi-level approval system and are assigned to lab schedules",
      "Customized report generation with complete traceability",
    ],
  },
  {
    id: "sale-order-rpa",
    slide: 19,
    image: null,
    accent: "#f59e0b",
    accentLight: "rgba(245,158,11,0.08)",
    industry: "Fuel Injection Manufacturing",
    title: "Sale Order Automation for Fuel Injection Manufacturing Company",
    challenge: "A global auto parts distribution company with deep roots in manufacturing relied heavily on Excel spreadsheets to manage goods tracking, stock updates, and inventory movements. This manual method led to frequent data mismatches, version conflicts, and delays in updating the central Oracle system. As operations scaled, the inefficiency and risk of human error grew significantly.",
    solution: "Using skiode's Robotic Process Automation (RPA), the company digitized the goods management workflow. A bot was developed to read structured Excel data, validate it, and directly push entries into Oracle in real-time, removing the need for manual intervention.",
    features: ["RPA Bot Integration", "Data Mapping Automation", "Validation Rules Engine", "Secure Access & Audit Logs", "Status Dashboard & Reporting", "Notification Bots"],
    benefits: [
      "Goods inward and outward details are entered in a predefined Excel format by field teams",
      "The RPA BOT is scheduled or triggered to fetch the latest Excel file from a secure folder or email",
      "The bot performs automatic checks for missing fields, mismatched codes, or duplication",
      "Validated data is mapped and entered into Oracle Fusion — inventory, stock ledgers, and movement entries updated instantly",
      "Success and failure logs are generated, with alerts to the operations team in case of data issues",
      "Zero manual data entry — completely automated end-to-end",
    ],
  },
  {
    id: "payment-tracking",
    slide: 20,
    image: imgStemCell,
    accent: "#ef4444",
    accentLight: "rgba(239,68,68,0.08)",
    industry: "Healthcare — Stem Cell Banking",
    title: "Outstanding Payment Tracking Workflow for Stem Cell Banking",
    challenge: "A leading healthcare and stem cell banking service provider offering subscription-based packages faced recurring issues in recovering outstanding dues from customers. Manual follow-ups and inconsistent tracking of defaulters led to delays, missed payments, and poor recovery visibility. The lack of a structured escalation — from demand notice to legal action — hindered effective resolution.",
    solution: "skiode was used to build a structured payment recovery workflow. The system automatically identifies customers with pending payments, triggers demand notices, escalates unresolved cases to legal teams, and maintains a complete audit trail of communications and actions.",
    features: ["Decision & Condition Logic", "Document Generation Bots", "Workflow Automation", "Dashboard & Reports", "Case Management & Audit Trail", "Notification Bots"],
    benefits: [
      "System scans customer subscription records in datastore for overdue payments",
      "First-level payment reminders (demand notices) are sent via email or RPAD",
      "If payment is still pending, legal notices are generated and assigned to legal officers for further action",
      "Real-time insights on pending, resolved, escalated, and closed cases",
      "All notices, responses, and activities are tracked and logged against the customer profile",
      "Complete audit trail of all communications and recovery actions",
    ],
  },
]

/* ── Process flow visualization for each case ── */
function ProcessFlow({ cs }) {
  const steps = cs.benefits.slice(0, 5)
  return (
    <div className="space-y-0">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.08 }}
          className="flex items-start gap-3 relative"
        >
          {/* Connector line */}
          <div className="flex flex-col items-center flex-shrink-0">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold text-white z-10"
              style={{ background: cs.accent, boxShadow: `0 4px 12px ${cs.accent}40` }}>
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className="w-px h-8" style={{ background: `${cs.accent}25` }} />
            )}
          </div>
          <div className="pb-4 pt-1">
            <p className="text-sm text-slate-600 leading-relaxed">{step}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/* ── Single case study card ── */
function CaseStudyCard({ cs, index, isReversed }) {
  return (
    <motion.div
      {...fade}
      transition={{ delay: 0.1, duration: 0.6 }}
      id={cs.id}
      className="scroll-mt-24 relative rounded-[2rem] overflow-hidden group"
      style={{
        background: "white",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
      }}
    >
      {/* Top accent gradient */}
      <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${cs.accent}, ${cs.accent}60, transparent)` }} />

      {/* Header */}
      <div className="px-6 sm:px-10 pt-8 pb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{ background: cs.accentLight, color: cs.accent, border: `1px solid ${cs.accent}20` }}>
            <Sparkles size={11} /> {cs.industry}
          </span>
          <span className="text-xs text-slate-400">Case Study #{index + 1}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">{cs.title}</h3>
      </div>

      {/* Main content grid */}
      <div className={`grid lg:grid-cols-2 gap-0 ${isReversed ? 'lg:grid-flow-dense' : ''}`}>

        {/* Image + Challenge side */}
        <div className={`relative ${isReversed ? 'lg:col-start-2' : ''}`}>
          {cs.image && (
            <div className="relative mx-6 sm:mx-10 mb-6 rounded-2xl overflow-hidden"
              style={{ height: "220px", boxShadow: `0 12px 40px ${cs.accent}15` }}>
              <img src={cs.image} alt={cs.industry}
                className="w-full h-full object-cover" />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: `linear-gradient(180deg, transparent 50%, ${cs.accent}15 100%)` }} />
            </div>
          )}

          {/* Challenge */}
          <div className="mx-6 sm:mx-10 mb-6">
            <div className="rounded-2xl p-5"
              style={{ background: "linear-gradient(135deg, #fff1f2, #fef2f2)", border: "1.5px solid #fecdd3" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-red-100">
                  <span className="text-sm">⚠️</span>
                </div>
                <span className="text-xs font-extrabold text-red-500 uppercase tracking-wider">The Challenge</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
            </div>
          </div>

          {/* Solution */}
          <div className="mx-6 sm:mx-10 mb-8">
            <div className="rounded-2xl p-5"
              style={{ background: "linear-gradient(135deg, #f0fdf4, #ecfdf5)", border: "1.5px solid #86efac" }}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-emerald-100">
                  <Zap size={13} className="text-emerald-500" />
                </div>
                <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider">The Solution</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
            </div>
          </div>
        </div>

        {/* Features + Benefits side */}
        <div className={`px-6 sm:px-10 pb-8 ${isReversed ? 'lg:col-start-1' : ''}`}>
          {/* skiode Features Used */}
          <div className="mb-7">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: cs.accentLight }}>
                <Settings size={13} style={{ color: cs.accent }} />
              </div>
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">skiode Features Leveraged</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {cs.features.map((f) => {
                const feat = featureMap[f] || { icon: Zap, color: cs.accent }
                const Icon = feat.icon
                return (
                  <div key={f}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl transition-all hover:scale-[1.02]"
                    style={{ background: `${feat.color}08`, border: `1px solid ${feat.color}12` }}>
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${feat.color}15` }}>
                      <Icon size={12} style={{ color: feat.color }} />
                    </div>
                    <span className="text-xs font-semibold text-slate-700 leading-tight">{f}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Benefits Delivered — Process Flow */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-emerald-50">
                <CheckCircle2 size={13} className="text-emerald-500" />
              </div>
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Benefits Delivered</span>
            </div>
            <ProcessFlow cs={cs} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function UseCases() {
  return (
    <div className="min-h-screen pt-20"
      style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 20%, #f0f4ff 60%, #f8faff 100%)" }}>

      {/* Hero header */}
      <div className="relative overflow-hidden py-20 sm:py-28">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 60%)", filter: "blur(80px)" }} />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 60%)", filter: "blur(80px)" }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div {...fade}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold mb-6"
            style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.15)", color: "#3b82f6" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Real-World Impact · 8 Case Studies
          </motion.div>

          <motion.h1 {...fade} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Solutions Delivered{" "}
            <span style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Across Industries
            </span>
          </motion.h1>

          <motion.p {...fade} transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            From pharmaceutical sale orders to RPA-powered Oracle integrations — explore how skiode transforms
            enterprise operations with real case studies from our customers.
          </motion.p>

          {/* Quick jump pills */}
          <motion.div {...fade} transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2">
            {caseStudies.map((cs) => (
              <a key={cs.id} href={`#${cs.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all hover:scale-105 hover:shadow-md cursor-pointer"
                style={{
                  background: "white",
                  color: cs.accent,
                  border: `1.5px solid ${cs.accent}25`,
                  boxShadow: `0 2px 8px ${cs.accent}08`,
                }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: cs.accent }} />
                {cs.industry}
                <ArrowUpRight size={10} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Case studies */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-10">
        {caseStudies.map((cs, i) => (
          <CaseStudyCard key={cs.id} cs={cs} index={i} isReversed={i % 2 === 1} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0d1117, #1a1a2e)" }}>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 60%)", filter: "blur(80px)" }} />

        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <motion.div {...fade}>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6"
              style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.25)", color: "#60a5fa" }}>
              <Sparkles size={11} /> Ready to Transform?
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
              Have a similar challenge?
            </h2>
            <p className="text-base mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Our team can assess your requirements and deliver a working solution in weeks — not months.
              Up to 2 weeks of assessment as an investment for solution strategy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/request-demo"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm text-white transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                  boxShadow: "0 8px 32px rgba(59,130,246,0.45), 0 0 0 1px rgba(96,165,250,0.2)",
                }}>
                Request Demo <ArrowRight size={15} />
              </Link>
              <Link to="/industries"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all hover:bg-white/10"
                style={{ color: "rgba(255,255,255,0.6)", border: "1.5px solid rgba(255,255,255,0.12)" }}>
                Explore Industries <ChevronRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
