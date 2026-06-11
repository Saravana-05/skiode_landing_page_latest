import { motion } from "framer-motion"
import { Users, Code, UserCheck, HardHat, Activity, BarChart2, CheckCircle2 } from "lucide-react"

const personas = [
  {
    icon:Users, color:"#3b82f6", bg:"rgba(59,130,246,0.08)", name:"Operations & Business",
    desc:"Automate daily processes, reduce manual follow-ups, and get real-time visibility into how work moves across your organization.",
    perks:["Asset tracking & vendor updates","Shift scheduling & SLA monitoring","Approval routing & escalations","Live status dashboards"],
  },
  {
    icon:Code, color:"#8b5cf6", bg:"rgba(139,92,246,0.08)", name:"IT & Developers",
    desc:"Clear the application backlog — let business users build apps without coding while developers focus on custom integrations and extensions.",
    perks:["Full REST API & webhooks","Inbuilt CI/CD & flow management","Custom scripting & connectors","50+ pre-built integrations"],
  },
  {
    icon:UserCheck, color:"#ec4899", bg:"rgba(236,72,153,0.08)", name:"HR Teams",
    desc:"Automate employee onboarding, leave requests, policy Q&A, and payslip downloads. Reduce HR time spent on repetitive administration.",
    perks:["Onboarding automation","Leave management workflows","AI resume screening","Employee self-service portal"],
  },
  {
    icon:HardHat, color:"#f59e0b", bg:"rgba(245,158,11,0.08)", name:"Manufacturing & Construction",
    desc:"Track orders from enquiry to dispatch, manage daily site reports, material requests, inspections, and quality lab testing.",
    perks:["Sale order automation","Lab test management","Material & procurement tracking","Daily progress reports"],
  },
  {
    icon:Activity, color:"#10b981", bg:"rgba(16,185,129,0.08)", name:"Finance & Procurement",
    desc:"Streamline invoice processing, expense claims, payment tracking, purchase approvals, and vendor management with complete audit trails.",
    perks:["Invoice & payment automation","Multi-level purchase approvals","Vendor registration workflows","Compliance & audit readiness"],
  },
  {
    icon:BarChart2, color:"#06b6d4", bg:"rgba(6,182,212,0.08)", name:"CEO & Management",
    desc:"Get complete visibility into operations, identify bottlenecks before they impact growth, and make data-driven decisions with real-time dashboards.",
    perks:["Executive dashboards & KPIs","Process performance insights","ROI tracking & analytics","Governance & compliance"],
  },
]

export default function TeamsSection() {
  return (
    <section className="py-24" style={{background:"linear-gradient(180deg,#f8faff 0%,#f0f4ff 100%)"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{background:"rgba(59,130,246,0.08)",border:"1px solid rgba(59,130,246,0.2)",color:"#3b82f6"}}>
            Built for Every Team
          </motion.div>
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Designed for every team in your organization
          </motion.h2>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}}
            className="text-lg text-slate-500 max-w-xl mx-auto">
            Whether you are in HR, IT, operations, construction, finance, or management — skiode is built for you.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {personas.map((p,i) => (
            <motion.div key={p.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
              className="enterprise-card p-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4" style={{background:p.bg}}>
                <p.icon size={22} style={{color:p.color}} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-2">{p.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">{p.desc}</p>
              <ul className="space-y-2">
                {p.perks.map(k => (
                  <li key={k} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 size={13} style={{color:p.color,flexShrink:0}} /> {k}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
