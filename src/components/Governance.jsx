import { motion } from "framer-motion"
import { Shield, Users, Key, FileText, Lock, GitBranch, Settings, Globe, FolderLock, Activity, CheckCircle2 } from "lucide-react"

const cards = [
  {icon:Shield, color:"#3b82f6", name:"Role-based Access Control", desc:"Fine-grained RBAC for every module and action"},
  {icon:Users, color:"#8b5cf6", name:"User and Group Management", desc:"Organize teams, departments, and org hierarchy"},
  {icon:Key, color:"#10b981", name:"Permission Matrix", desc:"Module-level access with read, write, delete control"},
  {icon:FileText, color:"#f59e0b", name:"Audit Logs", desc:"Complete history of every user action and change"},
  {icon:Lock, color:"#06b6d4", name:"Data Validation", desc:"AI and rule-based data quality enforcement"},
  {icon:GitBranch, color:"#ec4899", name:"Workflow Approval Control", desc:"Multi-step approval with delegation and escalation"},
  {icon:Settings, color:"#6366f1", name:"Environment Management", desc:"Separate dev, staging, and production environments"},
  {icon:Globe, color:"#10b981", name:"Secure API Integrations", desc:"Token-based auth and encrypted API connections"},
  {icon:FolderLock, color:"#f97316", name:"Document Access Policies", desc:"Granular document sharing and access rules"},
  {icon:Activity, color:"#a78bfa", name:"Activity Tracking", desc:"Monitor logins, edits, approvals, and access patterns"},
]

const roles = ["Viewer","Editor","Manager","Admin"]
const perms = [
  {module:"Forms",access:[true,true,true,true]},
  {module:"Workflows",access:[false,true,true,true]},
  {module:"Users",access:[false,false,true,true]},
  {module:"Reports",access:[true,true,true,true]},
  {module:"DMS",access:[true,true,true,true]},
  {module:"Audit Logs",access:[false,false,false,true]},
]

export default function Governance() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{background:"rgba(59,130,246,0.08)",border:"1px solid rgba(59,130,246,0.2)",color:"#3b82f6"}}>
            Security and Governance
          </motion.div>
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Control, governance, and security for enterprise teams
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {cards.map((c,i) => (
            <motion.div key={c.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06}}
              className="enterprise-card p-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:`${c.color}10`}}>
                <c.icon size={16} style={{color:c.color}} />
              </div>
              <h4 className="font-bold text-slate-800 text-xs mb-1 leading-tight">{c.name}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Permission matrix */}
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="enterprise-card overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100">
            <h4 className="font-bold text-slate-800 flex items-center gap-2"><Key size={15} className="text-blue-500" /> Permission Matrix</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Module</th>
                  {roles.map(r => (
                    <th key={r} className="text-center px-4 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">{r}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {perms.map((p,i) => (
                  <tr key={p.module} className={i%2===0?"bg-white":"bg-slate-50"}>
                    <td className="px-6 py-3 text-sm font-semibold text-slate-700">{p.module}</td>
                    {p.access.map((a,j) => (
                      <td key={j} className="text-center px-4 py-3">
                        {a ? <CheckCircle2 size={16} className="text-emerald-500 mx-auto" /> : <div className="w-4 h-4 rounded-full bg-slate-200 mx-auto" />}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
