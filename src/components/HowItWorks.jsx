import { motion } from "framer-motion"
import { Database, FileText, Monitor, GitBranch, Brain, Plug, Rocket } from "lucide-react"

const steps = [
  { icon:Database, color:"#3b82f6", num:"01", title:"Create Data Model", desc:"Define entities, fields, relationships, validations, and business rules." },
  { icon:FileText, color:"#8b5cf6", num:"02", title:"Build Forms", desc:"Drag fields, add sections, configure visibility, validations, and actions." },
  { icon:Monitor, color:"#06b6d4", num:"03", title:"Design Pages", desc:"Create layouts, tables, dashboards, detail views, buttons, and filters." },
  { icon:GitBranch, color:"#10b981", num:"04", title:"Configure Process Flow", desc:"Add approval steps, conditions, task owners, SLA rules, and notifications." },
  { icon:Brain, color:"#f97316", num:"05", title:"Add AI and Automation", desc:"Use OCR, bots, AI decisions, document extraction, and RPA actions." },
  { icon:Plug, color:"#ec4899", num:"06", title:"Connect Systems", desc:"Integrate APIs, databases, cloud services, CRMs, ERPs, and webhooks." },
  { icon:Rocket, color:"#a78bfa", num:"07", title:"Launch and Monitor", desc:"Deploy applications, track usage, view dashboards, and improve workflows." },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{background:"rgba(59,130,246,0.08)",border:"1px solid rgba(59,130,246,0.2)",color:"#3b82f6"}}>
            How It Works
          </motion.div>
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            How Sky LowCode AI works
          </motion.h2>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}}
            className="text-lg text-slate-500 max-w-xl mx-auto">
            From idea to working application, everything happens visually.
          </motion.p>
        </div>

        {/* Desktop horizontal flow */}
        <div className="hidden lg:block relative">
          <div className="absolute top-10 left-0 right-0 h-px" style={{background:"linear-gradient(90deg,transparent,#3b82f6,#a78bfa,transparent)"}} />
          <div className="grid grid-cols-7 gap-2">
            {steps.map((s,i) => (
              <motion.div key={s.num} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                className="flex flex-col items-center text-center relative">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 relative z-10 shadow-lg" style={{background:`linear-gradient(135deg,${s.color}20,${s.color}10)`,border:`2px solid ${s.color}30`,background:"white"}}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{background:`${s.color}15`}}>
                    <s.icon size={20} style={{color:s.color}} />
                  </div>
                </div>
                <div className="text-xs font-bold mb-1" style={{color:s.color}}>{s.num}</div>
                <div className="font-bold text-slate-800 text-sm mb-2 leading-tight">{s.title}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical flow */}
        <div className="lg:hidden space-y-4">
          {steps.map((s,i) => (
            <motion.div key={s.num} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*0.08}}
              className="flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{background:`${s.color}15`}}>
                <s.icon size={20} style={{color:s.color}} />
              </div>
              <div>
                <div className="text-xs font-bold mb-1" style={{color:s.color}}>Step {s.num}</div>
                <div className="font-bold text-slate-800 text-sm mb-1">{s.title}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{s.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
