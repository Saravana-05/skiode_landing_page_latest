import { motion } from "framer-motion"
import { FileText, GitBranch, Users, FolderOpen, ScanText, BarChart2, Bot, Plug, Brain } from "lucide-react"

const modules = [
  {
    icon:FileText, color:"#3b82f6", bg:"rgba(59,130,246,0.1)", tag:"Core",
    name:"Forms and Core Data",
    desc:"Create dynamic forms, configure domain models, manage business objects, validate fields, and control structured data without writing full custom code.",
    preview: (
      <div className="mt-3 rounded-xl overflow-hidden" style={{background:"#0d1117",border:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="p-3 space-y-2">
          {["Employee Name","Department","Joining Date"].map(f => (
            <div key={f} className="flex items-center gap-2">
              <div className="h-6 flex-1 rounded" style={{background:"rgba(59,130,246,0.1)",border:"1px solid rgba(59,130,246,0.2)"}} />
              <span className="text-xs text-white/30">{f}</span>
            </div>
          ))}
          <div className="flex gap-2 mt-2">
            <div className="h-5 w-16 rounded" style={{background:"rgba(59,130,246,0.3)"}} />
            <div className="h-5 w-12 rounded" style={{background:"rgba(255,255,255,0.06)"}} />
          </div>
        </div>
      </div>
    ),
  },
  {
    icon:GitBranch, color:"#8b5cf6", bg:"rgba(139,92,246,0.1)", tag:"Workflow",
    name:"Process Flow",
    desc:"Design complete business process flows using visual nodes, approval steps, conditions, task routing, SLA alerts, and automation triggers.",
    preview: (
      <div className="mt-3 flex items-center gap-1 flex-wrap">
        {["Start","Submit","Approve","Condition","Notify","Done"].map((n,i) => (
          <div key={n} className="flex items-center gap-1">
            <div className="px-2 py-1 rounded-lg text-xs font-medium text-white" style={{background:i===0||i===5?"#10b981":"rgba(139,92,246,0.3)",border:"1px solid rgba(139,92,246,0.3)"}}>{n}</div>
            {i<5 && <div className="w-3 h-px" style={{background:"rgba(139,92,246,0.4)"}} />}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon:Users, color:"#06b6d4", bg:"rgba(6,182,212,0.1)", tag:"Secure",
    name:"Users and Groups",
    desc:"Manage organization users, teams, groups, roles, permissions, and access policies from one centralized workspace.",
    preview: (
      <div className="mt-3 rounded-xl overflow-hidden" style={{background:"#0d1117",border:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="p-3 space-y-1.5">
          {[{name:"Admin",role:"Super Admin",c:"#ef4444"},{name:"John",role:"Manager",c:"#3b82f6"},{name:"Sara",role:"Viewer",c:"#10b981"}].map(u => (
            <div key={u.name} className="flex items-center justify-between">
              <span className="text-xs text-white/60">{u.name}</span>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{background:`${u.c}20`,color:u.c}}>{u.role}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon:FolderOpen, color:"#f59e0b", bg:"rgba(245,158,11,0.1)", tag:"Secure",
    name:"DMS",
    desc:"Upload, store, organize, search, retrieve, and manage documents with secure document management features built for enterprise teams.",
    preview: (
      <div className="mt-3 rounded-xl overflow-hidden" style={{background:"#0d1117",border:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="p-3">
          <div className="flex items-center gap-2 mb-2 px-2 py-1.5 rounded-lg" style={{background:"rgba(255,255,255,0.06)"}}>
            <div className="w-3 h-3 rounded-sm" style={{background:"rgba(245,158,11,0.5)"}} />
            <span className="text-xs text-white/40">Search documents...</span>
          </div>
          {["Invoice_2024.pdf","Contract_v2.docx","Report_Q1.xlsx"].map(f => (
            <div key={f} className="flex items-center gap-2 py-1">
              <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{background:"rgba(245,158,11,0.3)"}} />
              <span className="text-xs text-white/50">{f}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon:ScanText, color:"#10b981", bg:"rgba(16,185,129,0.1)", tag:"AI",
    name:"OCR and AI/ML",
    desc:"Extract text from invoices, forms, IDs, reports, and documents. Use AI to classify, validate, and map extracted data into workflows automatically.",
    preview: (
      <div className="mt-3 rounded-xl overflow-hidden" style={{background:"#0d1117",border:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="p-3 space-y-1.5">
          {[{f:"Invoice No",v:"INV-2847"},{f:"Amount",v:"$12,500"},{f:"Vendor",v:"TechCorp"}].map(r => (
            <div key={r.f} className="flex items-center justify-between">
              <span className="text-xs text-white/40">{r.f}</span>
              <span className="text-xs text-emerald-400 font-medium">{r.v}</span>
            </div>
          ))}
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-1 h-1.5 rounded-full" style={{background:"rgba(255,255,255,0.1)"}}>
              <div className="h-full rounded-full" style={{width:"94%",background:"#10b981"}} />
            </div>
            <span className="text-xs text-emerald-400">94.7%</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon:BarChart2, color:"#f97316", bg:"rgba(249,115,22,0.1)", tag:"Analytics",
    name:"Dashboards and Reports",
    desc:"Create real-time dashboards, charts, KPIs, reports, filters, and business intelligence views for every team and stakeholder.",
    preview: (
      <div className="mt-3 rounded-xl overflow-hidden" style={{background:"#0d1117",border:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="p-3">
          <div className="flex gap-2 mb-2">
            {[{v:"2.8K",l:"Workflows"},{v:"96K",l:"Forms"},{v:"184K",l:"Bots"}].map(k => (
              <div key={k.l} className="flex-1 rounded-lg p-1.5" style={{background:"rgba(249,115,22,0.1)"}}>
                <div className="text-sm font-bold text-white">{k.v}</div>
                <div className="text-xs text-white/30">{k.l}</div>
              </div>
            ))}
          </div>
          <div className="flex items-end gap-1 h-10">
            {[30,60,45,80,65,90,75].map((h,i) => (
              <div key={i} className="flex-1 rounded-sm" style={{height:`${h}%`,background:`rgba(249,115,22,${0.3+i*0.08})`}} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    icon:Bot, color:"#ec4899", bg:"rgba(236,72,153,0.1)", tag:"Automation",
    name:"RPA",
    desc:"Automate repetitive desktop, web, and back-office tasks such as data entry, file processing, and system updates using robotic process automation.",
    preview: (
      <div className="mt-3 flex items-center gap-1 flex-wrap">
        {["Bot","Opens App","Reads Data","Updates Record","Sends Report"].map((n,i) => (
          <div key={n} className="flex items-center gap-1">
            <div className="px-2 py-1 rounded-lg text-xs text-white" style={{background:"rgba(236,72,153,0.2)",border:"1px solid rgba(236,72,153,0.3)"}}>{n}</div>
            {i<4 && <div className="w-2 h-px" style={{background:"rgba(236,72,153,0.4)"}} />}
          </div>
        ))}
      </div>
    ),
  },
  {
    icon:Plug, color:"#14b8a6", bg:"rgba(20,184,166,0.1)", tag:"Integration",
    name:"Integration",
    desc:"Connect APIs, databases, CRMs, ERPs, webhooks, cloud apps, and custom services with secure integration connectors and visual mapping.",
    preview: (
      <div className="mt-3 rounded-xl overflow-hidden" style={{background:"#0d1117",border:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="p-3 space-y-1.5">
          <div className="text-xs text-white/30">POST /api/approval</div>
          <div className="text-xs text-teal-400 font-mono">Bearer Token auth</div>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400">200 OK Connected</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon:Brain, color:"#6366f1", bg:"rgba(99,102,241,0.1)", tag:"AI Bot",
    name:"BOT Automation",
    desc:"Create bots to handle reminders, approvals, task updates, notifications, data checks, and workflow triggers intelligently.",
    preview: (
      <div className="mt-3 rounded-xl overflow-hidden" style={{background:"#0d1117",border:"1px solid rgba(255,255,255,0.07)"}}>
        <div className="p-3 space-y-2">
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full flex-shrink-0" style={{background:"rgba(99,102,241,0.3)"}} />
            <div className="bg-indigo-900/30 rounded-xl px-3 py-1.5 text-xs text-white/70 max-w-xs">3 approvals pending. Remind managers?</div>
          </div>
          <div className="flex gap-2 justify-end">
            <div className="rounded-xl px-3 py-1.5 text-xs text-white" style={{background:"rgba(99,102,241,0.4)"}}>Yes, remind them</div>
          </div>
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full flex-shrink-0" style={{background:"rgba(99,102,241,0.3)"}} />
            <div className="rounded-xl px-3 py-1.5 text-xs text-emerald-400">Reminders sent. Dashboard updated.</div>
          </div>
        </div>
      </div>
    ),
  },
]

export default function PlatformModules() {
  return (
    <section id="platform" className="py-24" style={{background:"linear-gradient(180deg,#060e1e 0%,#0a1628 100%)"}}>
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{background:"rgba(59,130,246,0.12)",border:"1px solid rgba(59,130,246,0.3)",color:"#60a5fa"}}>
            Platform Modules
          </motion.div>
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Everything you need to build and<br className="hidden sm:block" /> automate business applications
          </motion.h2>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}}
            className="text-lg text-white/50 max-w-2xl mx-auto">
            Create apps, forms, workflows, documents, dashboards, bots, and AI-powered operations from one platform.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m,i) => (
            <motion.div key={m.name} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.07}}
              whileHover={{y:-4}} className="rounded-2xl p-6 transition-all duration-300 group"
              style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)"}}>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{background:m.bg}}>
                  <m.icon size={18} style={{color:m.color}} />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{background:`${m.color}15`,color:m.color}}>{m.tag}</span>
              </div>
              <h3 className="font-bold text-white text-base mb-2">{m.name}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-1">{m.desc}</p>
              {m.preview}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
