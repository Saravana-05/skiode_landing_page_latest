import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    q:"What is skiode?",
    a:"skiode is an AI-led low-code platform built to simplify enterprise business operations. It combines BPM, RPA, workflow automation, process orchestration, rule engines, configurable bots, dashboards, OCR, AI/ML, and visual designing into one unified platform — enabling organizations to build apps 5x faster and achieve 10x productivity gains.",
  },
  {
    q:"Can business users build apps without coding?",
    a:"Yes. Business users can create forms, workflows, pages, reports, and dashboards using visual drag-and-drop builders. No programming knowledge is required. Business teams can configure their own automations independently.",
  },
  {
    q:"Can developers extend the platform?",
    a:"Absolutely. Developers can extend apps using REST APIs, custom scripts, webhooks, integration connectors, and reusable code components. The platform is built to support both visual configuration and programmatic extension.",
  },
  {
    q:"Does the platform support workflow automation?",
    a:"Yes. The Process Flow Builder lets you design complete business workflows with approval steps, conditions, SLA rules, task routing, escalations, notifications, and automation triggers — all configured visually.",
  },
  {
    q:"How does OCR automation work?",
    a:"skiode uses AI-powered OCR to extract text, fields, and data from uploaded documents such as invoices, IDs, medical forms, and contracts. Extracted data is mapped automatically into forms and can trigger approval workflows.",
  },
  {
    q:"What is AI Recruiter?",
    a:"AI Recruiter is a built-in AI module that automates resume parsing, candidate skill matching, candidate ranking, shortlist generation, interview scheduling, and recruiter communication — reducing manual HR effort significantly.",
  },
  {
    q:"Can this be used for construction management?",
    a:"Yes. skiode has a dedicated construction management solution covering site progress tracking, material requests, contractor management, daily reports, safety checklists, document uploads, budget tracking, and project dashboards.",
  },
  {
    q:"Does it support role-based permissions?",
    a:"Yes. The platform includes a complete role-based access control (RBAC) system with user and group management, permission matrices per module, document access policies, and audit logs for every user action.",
  },
  {
    q:"Can it connect with existing systems?",
    a:"Yes. skiode offers 50+ leading platform integrations including SAP ERP, Oracle Fusion, Tally Prime, QuickBooks, Salesforce, HubSpot, Microsoft Teams, WhatsApp API, Google Workspace, SharePoint, AWS S3, Zapier, Twilio, Power BI, and more — with full REST API and webhook support for custom integrations.",
  },
  {
    q:"How can ROI be measured?",
    a:"Use our built-in ROI Calculator to estimate monthly hours saved, cost reduction, approval cycle improvement, and productivity gains based on your team size, manual hours, and approval volumes.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{background:"rgba(59,130,246,0.08)",border:"1px solid rgba(59,130,246,0.2)",color:"#3b82f6"}}>
            FAQ
          </motion.div>
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Frequently asked questions
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f,i) => (
            <motion.div key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
              className="border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors">
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpen(open===i ? null : i)}
              >
                <span className="font-semibold text-slate-800 pr-4 text-sm">{f.q}</span>
                <ChevronDown size={16} className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${open===i?"rotate-180":""}`} />
              </button>
              <AnimatePresence initial={false}>
                {open===i && (
                  <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.25}}>
                    <div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
