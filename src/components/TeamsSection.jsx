import { motion } from "framer-motion"
import { Users, Code, UserCheck, HardHat, Activity, BarChart2, CheckCircle2 } from "lucide-react"

const personas = [
  {
    icon:Users, color:"#3b82f6", bg:"rgba(59,130,246,0.08)", name:"Business Users",
    desc:"Create forms, workflows, and reports without waiting for long development cycles. Configure your own automations.",
    perks:["No-code app builder","Self-service workflows","Instant report generation","Form-based data collection"],
  },
  {
    icon:Code, color:"#8b5cf6", bg:"rgba(139,92,246,0.08)", name:"Developers",
    desc:"Extend apps with APIs, scripts, custom components, and secure integrations while business teams handle the visual layer.",
    perks:["Full API access","Custom scripting","Webhooks and events","Reusable components"],
  },
  {
    icon:UserCheck, color:"#ec4899", bg:"rgba(236,72,153,0.08)", name:"HR Teams",
    desc:"Use AI Recruiter to reduce manual screening, follow-ups, and interview coordination. Onboard employees faster.",
    perks:["AI resume screening","Candidate ranking","Interview scheduling","Onboarding automation"],
  },
  {
    icon:HardHat, color:"#f59e0b", bg:"rgba(245,158,11,0.08)", name:"Construction Teams",
    desc:"Track site work, approvals, materials, contractors, photos, and progress reports from one connected platform.",
    perks:["Site progress tracking","Material approvals","Photo and document uploads","Safety checklists"],
  },
  {
    icon:Activity, color:"#10b981", bg:"rgba(16,185,129,0.08)", name:"Operations Teams",
    desc:"Automate daily processes, assign tasks, monitor status, improve accountability, and reduce manual follow-ups.",
    perks:["Task assignment automation","Approval routing","Escalation alerts","Live status dashboards"],
  },
  {
    icon:BarChart2, color:"#06b6d4", bg:"rgba(6,182,212,0.08)", name:"Management",
    desc:"Get real-time dashboards, reports, ROI visibility, and process performance insights for faster decisions.",
    perks:["Executive dashboards","Process KPIs","ROI tracking","Audit and compliance"],
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
            Whether you are in HR, IT, operations, construction, finance, or management — Sky LowCode AI is built for you.
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
