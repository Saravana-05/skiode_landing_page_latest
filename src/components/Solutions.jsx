import { motion } from "framer-motion"
import { Building2, HeartPulse, UserCheck, HardHat, DollarSign, Briefcase, ScanText, Activity, ArrowRight } from "lucide-react"

const solutions = [
  { icon:Building2, color:"#3b82f6", bg:"rgba(59,130,246,0.08)", name:"ERP Applications", desc:"Build custom ERP modules for sales, purchase, inventory, approvals, finance, operations, and reporting.", tags:["Sales","Purchase","Inventory","Finance"] },
  { icon:HeartPulse, color:"#ec4899", bg:"rgba(236,72,153,0.08)", name:"Healthcare Workflows", desc:"Manage patient records, medical forms, approvals, insurance documents, prescriptions, and operational dashboards.", tags:["Patient Records","Insurance","Approvals"] },
  { icon:UserCheck, color:"#8b5cf6", bg:"rgba(139,92,246,0.08)", name:"AI Recruiter / HR Automation", desc:"Automate resume screening, candidate ranking, interview scheduling, onboarding, employee forms, and HR approvals.", tags:["AI Recruiter","Onboarding","HR Forms"] },
  { icon:HardHat, color:"#f59e0b", bg:"rgba(245,158,11,0.08)", name:"Construction Management", desc:"Track site progress, material requests, contractor work, expenses, documents, approvals, and daily reports.", tags:["Site Tracking","Materials","Contractors"] },
  { icon:DollarSign, color:"#10b981", bg:"rgba(16,185,129,0.08)", name:"Finance Approval Workflows", desc:"Automate invoice approvals, expense claims, purchase requests, payment workflows, and audit reports.", tags:["Invoices","Expense Claims","Audit"] },
  { icon:Briefcase, color:"#06b6d4", bg:"rgba(6,182,212,0.08)", name:"CRM and Lead Management", desc:"Track leads, automate follow-ups, assign sales tasks, monitor pipelines, and generate sales reports.", tags:["Leads","Pipeline","Follow-ups"] },
  { icon:ScanText, color:"#6366f1", bg:"rgba(99,102,241,0.08)", name:"Document Processing", desc:"Extract, classify, validate, and route documents automatically using OCR and AI without manual intervention.", tags:["OCR","AI","Classification"] },
  { icon:Activity, color:"#f97316", bg:"rgba(249,115,22,0.08)", name:"Operations Management", desc:"Manage daily tasks, process approvals, reports, notifications, and business operations with full visibility.", tags:["Daily Tasks","Approvals","Dashboards"] },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{background:"rgba(59,130,246,0.08)",border:"1px solid rgba(59,130,246,0.2)",color:"#3b82f6"}}>
            Solutions
          </motion.div>
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Solutions built for real business operations
          </motion.h2>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}}
            className="text-lg text-slate-500 max-w-xl mx-auto">
            Purpose-built solutions for ERP, healthcare, HR, construction, finance, CRM, and operations teams.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((s,i) => (
            <motion.div key={s.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.07}}
              className="enterprise-card p-5 group cursor-pointer">
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4" style={{background:s.bg}}>
                <s.icon size={20} style={{color:s.color}} />
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm mb-2 leading-tight">{s.name}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {s.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-full font-medium" style={{background:`${s.color}10`,color:s.color}}>{t}</span>
                ))}
              </div>
              <a href="#contact" className="inline-flex items-center gap-1 text-xs font-bold transition-colors" style={{color:s.color}}>
                Learn more <ArrowRight size={11} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
