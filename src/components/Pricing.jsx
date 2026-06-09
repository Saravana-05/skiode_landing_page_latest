import { motion } from "framer-motion"
import { CheckCircle2, Zap, ArrowRight, Building2, Users, Star } from "lucide-react"

const plans = [
  {
    name: "Starter", icon: Zap, price: "$99", period: "/month", color: "#3b82f6",
    desc: "For growing teams automating their first workflows",
    highlight: false,
    features: [
      "Up to 5 users", "10 process workflows", "Form Builder (basic)", "OCR up to 500 docs/mo",
      "1 bot automation", "Standard integrations (10+)", "Email support", "99.5% uptime SLA",
    ],
  },
  {
    name: "Business", icon: Users, price: "$299", period: "/month", color: "#8b5cf6",
    desc: "For mid-size teams needing full automation suite",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Up to 50 users", "Unlimited workflows", "Advanced Form & Page Builder", "OCR unlimited documents",
      "4 bot types (HR/Finance/Ops/Custom)", "AI Recruiter module", "50+ integrations + API",
      "Role-based access control", "Priority support", "99.9% SLA",
    ],
  },
  {
    name: "Enterprise", icon: Building2, price: "Custom", period: "", color: "#10b981",
    desc: "For large organizations with complex requirements",
    highlight: false,
    badge: "Best Value",
    features: [
      "Unlimited users", "All Business features", "Construction Management module", "White-label deployment",
      "Dedicated success manager", "Custom integrations & SDK", "On-premise or private cloud",
      "SOC 2 Type II + ISO 27001", "SLA guarantee 99.99%", "24/7 enterprise support",
    ],
  },
]

export default function Pricing() {
  return (
    <section className="py-24" id="pricing" style={{ background: "linear-gradient(135deg,#f8fafc,#f0f9ff)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", color: "#3b82f6" }}>
            Simple Pricing
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Pricing that scales with<br className="hidden sm:block" /> your organization
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500">No hidden fees. Cancel anytime. Free 14-day trial on all plans.</motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className={`rounded-3xl overflow-hidden border transition-all relative ${p.highlight ? "shadow-2xl scale-105" : "border-slate-200 shadow-md"}`}
              style={{ borderColor: p.highlight ? p.color : "#e2e8f0", background: p.highlight ? `linear-gradient(135deg,${p.color}05,white)` : "white" }}>
              {p.badge && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 text-xs font-extrabold text-white rounded-b-xl" style={{ background: p.color }}>
                    {p.badge}
                  </div>
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4 mt-2">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: `${p.color}15` }}>
                    <p.icon size={18} style={{ color: p.color }} />
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900">{p.name}</div>
                    <div className="text-xs text-slate-400">{p.desc}</div>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-slate-900">{p.price}</span>
                  {p.period && <span className="text-slate-400 ml-1">{p.period}</span>}
                  {!p.period && <div className="text-sm text-slate-400 mt-1">Tailored to your team size</div>}
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 mb-6 transition-all"
                  style={{ background: p.highlight ? p.color : "transparent", color: p.highlight ? "white" : p.color, border: `2px solid ${p.color}` }}>
                  {p.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"} <ArrowRight size={14} />
                </motion.button>
                <div className="space-y-2.5">
                  {p.features.map(f => (
                    <div key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} style={{ color: p.color }} className="mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-8 text-sm text-slate-400">
          All plans include 14-day free trial · No credit card required · Cancel anytime
        </motion.div>
      </div>
    </section>
  )
}
