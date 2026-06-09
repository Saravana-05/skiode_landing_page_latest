import { motion } from "framer-motion"
import { Code2, Plug, Webhook, Database, Lock, ArrowRight, CheckCircle2 } from "lucide-react"

const devFeatures = [
  {icon:Plug, label:"API Connector", desc:"Full REST API access"},
  {icon:Code2, label:"Custom Logic", desc:"Scripts and functions"},
  {icon:Webhook, label:"Webhooks", desc:"Event-driven triggers"},
  {icon:Database, label:"Database Queries", desc:"Direct data access"},
  {icon:Lock, label:"Secure Auth", desc:"OAuth, JWT, API keys"},
  {icon:Code2, label:"Reusable Components", desc:"Build once, use everywhere"},
]

export default function DevSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text left */}
          <div>
            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5"
              style={{background:"rgba(99,102,241,0.08)",border:"1px solid rgba(99,102,241,0.2)",color:"#6366f1"}}>
              Developer Extension
            </motion.div>
            <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}}
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              Low-code for business users.<br />
              <span className="gradient-text-blue">Extensible for developers.</span>
            </motion.h2>
            <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}}
              className="text-lg text-slate-500 mb-8 leading-relaxed">
              Business teams can build visually, while developers can extend using APIs, custom logic, scripts, and integrations to handle any complexity.
            </motion.p>
            <div className="grid grid-cols-2 gap-3">
              {devFeatures.map((f,i) => (
                <motion.div key={f.label} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.07}}
                  className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-100 bg-slate-50">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:"rgba(99,102,241,0.08)"}}>
                    <f.icon size={14} style={{color:"#6366f1"}} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">{f.label}</div>
                    <div className="text-xs text-slate-400">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Code block right */}
          <motion.div initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:0.2}}>
            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{background:"#0d1117",border:"1px solid rgba(255,255,255,0.1)"}}>
              <div className="flex items-center gap-1.5 px-5 py-3.5 border-b" style={{borderColor:"rgba(255,255,255,0.07)",background:"rgba(255,255,255,0.03)"}}>
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-white/30">approval-rules.js</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-1">
                <div className="text-white/30">{"// Custom approval rule configuration"}</div>
                <div><span className="text-purple-400">const</span> <span className="text-blue-400">approvalRule</span> <span className="text-white/60">= {"{"}</span></div>
                <div className="pl-6"><span className="text-emerald-400">module</span><span className="text-white/50">: </span><span className="text-yellow-300">"PurchaseRequest"</span><span className="text-white/50">,</span></div>
                <div className="pl-6"><span className="text-emerald-400">condition</span><span className="text-white/50">: </span><span className="text-blue-300">amount</span> <span className="text-white/60">&gt;</span> <span className="text-orange-400">50000</span><span className="text-white/50">,</span></div>
                <div className="pl-6"><span className="text-emerald-400">approver</span><span className="text-white/50">: </span><span className="text-yellow-300">"Finance Manager"</span><span className="text-white/50">,</span></div>
                <div className="pl-6"><span className="text-emerald-400">action</span><span className="text-white/50">: </span><span className="text-yellow-300">"send_for_approval"</span><span className="text-white/50">,</span></div>
                <div className="pl-6"><span className="text-emerald-400">notify</span><span className="text-white/50">: </span><span className="text-blue-400">true</span><span className="text-white/50">,</span></div>
                <div className="pl-6"><span className="text-emerald-400">slaHours</span><span className="text-white/50">: </span><span className="text-orange-400">48</span><span className="text-white/50">,</span></div>
                <div><span className="text-white/60">{"}"}</span></div>
                <div className="mt-2" />
                <div><span className="text-purple-400">await</span> <span className="text-blue-400">skyLowCode</span><span className="text-white/60">.</span><span className="text-green-400">processApproval</span><span className="text-white/60">(</span><span className="text-blue-400">approvalRule</span><span className="text-white/60">)</span></div>
                <div className="mt-4 flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400">Rule configured — workflow triggered</span>
                </div>
              </div>
            </div>

            {/* Architecture mini-diagram */}
            <div className="flex items-center gap-2 mt-4 justify-center flex-wrap">
              {["Low-code App","API Connector","Business System","Dashboard"].map((s,i) => (
                <div key={s} className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-white border border-slate-200 shadow-sm">{s}</div>
                  {i<3 && <ArrowRight size={12} className="text-slate-300" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
