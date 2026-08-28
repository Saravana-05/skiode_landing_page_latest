import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  ArrowRight, CheckCircle2, Factory, HeartPulse, Building2,
  ShoppingCart, Truck, CreditCard, Shield, BookOpen, FlaskConical,
  Anchor
} from "lucide-react"

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }

const industries = [
  {
    id: "manufacturing",
    icon: Factory, color: "#f97316",
    title: "Manufacturing",
    desc: "Track orders from enquiry to dispatch, manage shop-floor bottlenecks, production approvals, and quality coordination — all in real-time.",
    hooks: [
      "Track an order from enquiry to dispatch without opening Excel",
      "See shop-floor bottlenecks in real time",
      "Reduce process delays by 30%+",
      "Eliminate manual production coordination",
    ],
  },
  {
    id: "healthcare",
    icon: HeartPulse, color: "#ef4444",
    title: "Healthcare",
    desc: "Reduce patient paperwork, track approvals and documents digitally, eliminate service delays, and stay audit-ready at all times.",
    hooks: [
      "Reduce time on patient and insurance paperwork",
      "Track every approval and document digitally",
      "Eliminate patient service delays",
      "Stay audit-ready at all times",
    ],
  },
  {
    id: "pharma",
    icon: FlaskConical, color: "#8b5cf6",
    title: "Pharma & Life Sciences",
    desc: "Automate sale order processing, compliance workflows, lab test management, and quality reporting across manufacturing units.",
    hooks: [
      "Automate sale order processing across 6+ teams",
      "Digitize lab test requests and report tracking",
      "Maintain complete compliance trails",
      "Reduce process turnaround times by 50-70%",
    ],
  },
  {
    id: "banking",
    icon: CreditCard, color: "#3b82f6",
    title: "Banking & Financial Services",
    desc: "Accelerate customer onboarding, automate manual approvals, identify bottlenecks before customers complain, and reduce audit preparation effort.",
    hooks: [
      "Reduce customer onboarding from days to hours",
      "Automate manual approval processes",
      "Identify bottlenecks before customers complain",
      "Launch new business processes faster",
    ],
  },
  {
    id: "insurance",
    icon: Shield, color: "#10b981",
    title: "Insurance",
    desc: "Settle claims faster, track in real-time from submission to closure, ensure SLA compliance, and reduce manual effort in claims processing.",
    hooks: [
      "Accelerate claim settlement times",
      "Real-time tracking from submission to closure",
      "Ensure SLA compliance automatically",
      "Reduce manual effort in claims processing",
    ],
  },
  {
    id: "logistics",
    icon: Truck, color: "#06b6d4",
    title: "Logistics & Supply Chain",
    desc: "Track shipment exceptions instantly, eliminate cross-team follow-ups, automate dispatch approvals, and give customers real-time status updates.",
    hooks: [
      "Track every shipment exception instantly",
      "Eliminate cross-team follow-up time",
      "Automate dispatch approvals",
      "Real-time customer status updates",
    ],
  },
  {
    id: "fmcg",
    icon: ShoppingCart, color: "#ec4899",
    title: "FMCG & Retail",
    desc: "Automate reimbursements, supply chain operations, vendor management, and field team coordination across markets.",
    hooks: [
      "Automate employee reimbursement processing",
      "Streamline supply chain operations",
      "Digitize vendor management workflows",
      "Mobile access for field teams",
    ],
  },
  {
    id: "construction",
    icon: Building2, color: "#f59e0b",
    title: "Construction & Real Estate",
    desc: "Manage daily site progress reports, material requests, procurement, inspections, and project tracking — all digitally.",
    hooks: [
      "Digital daily progress reports",
      "Automated material and procurement tracking",
      "Inspection workflow automation",
      "Real-time project visibility for stakeholders",
    ],
  },
]

export default function Industries() {
  return (
    <div className="min-h-screen pt-20" style={{ background: "#f7faf9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9">
        <div className="text-center mb-8">
          <motion.div {...fade}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-semibold mb-3"
            style={{ background: "rgba(22,64,101,0.08)", border: "1px solid rgba(22,64,101,0.24)", color: "#0a2342" }}>
            Industry Solutions
          </motion.div>
          <motion.h1 {...fade} transition={{ delay: 0.1 }}
            className="text-[36px] font-extrabold mb-3 leading-tight" style={{ color: "#0a2342" }}>
            Solutions by{" "}
            <span style={{ color: "#164065" }}>
              Industry Verticals
            </span>
          </motion.h1>
          <motion.p {...fade} transition={{ delay: 0.2 }}
            className="text-[12px] text-slate-500 max-w-2xl mx-auto">
            From healthcare to logistics, skiode delivers pointed solutions across 8+ industry verticals.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {industries.map((ind, i) => (
            <motion.div key={ind.id} {...fade} transition={{ delay: i * 0.08 }}
              id={ind.id}
              className="scroll-mt-24 rounded-3xl p-5 sm:p-6 group hover:-translate-y-1 transition-all duration-300"
              style={{ background: "white", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: `${ind.color}12` }}>
                  <ind.icon size={20} style={{ color: ind.color }} />
                </div>
                <h3 className="text-[12px] font-extrabold uppercase tracking-wide" style={{ color: "#0a2342" }}>{ind.title}</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-3">{ind.desc}</p>
              <div className="space-y-1.5">
                {ind.hooks.map((h) => (
                  <div key={h} className="flex items-start gap-2">
                    <CheckCircle2 size={13} style={{ color: ind.color }} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-600">{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fade} transition={{ delay: 0.3 }}
          className="mt-8 text-center">
          <Link to="/request-demo"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm text-white transition-all hover:scale-105"
            style={{ background: "#0a2342", color: "#39ff14", boxShadow: "0 8px 24px rgba(10,35,66,0.22)" }}>
            Discuss Your Industry <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
