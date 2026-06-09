import { motion } from "framer-motion"
import { Zap, TrendingDown, Clock, Eye, Code, Brain } from "lucide-react"

const items = [
  { icon:Zap, val:"10x", label:"Faster app delivery", desc:"Ship apps weeks ahead of schedule", color:"#3b82f6", bg:"rgba(59,130,246,0.08)" },
  { icon:TrendingDown, val:"70%", label:"Less manual work", desc:"Automate repetitive daily tasks", color:"#10b981", bg:"rgba(16,185,129,0.08)" },
  { icon:Clock, val:"60%", label:"Faster approval cycles", desc:"Automated routing and escalation", color:"#8b5cf6", bg:"rgba(139,92,246,0.08)" },
  { icon:Eye, val:"360°", label:"Process visibility", desc:"Track every action in real-time", color:"#f97316", bg:"rgba(249,115,22,0.08)" },
  { icon:Code, val:"50%", label:"Lower dev dependency", desc:"Business teams build themselves", color:"#06b6d4", bg:"rgba(6,182,212,0.08)" },
  { icon:Brain, val:"AI", label:"Assisted daily operations", desc:"Smart decisions and automation", color:"#ec4899", bg:"rgba(236,72,153,0.08)" },
]

export default function StatsSection() {
  return (
    <section className="py-20" style={{background:"linear-gradient(135deg,#f8faff 0%,#f0f4ff 100%)"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Measurable business outcomes
          </motion.h2>
          <p className="text-slate-500 max-w-xl mx-auto">Teams that adopt Sky LowCode AI see immediate improvements in speed, efficiency, and visibility.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((s,i) => (
            <motion.div key={s.val} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
              className="enterprise-card p-5 text-center group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{background:s.bg}}>
                <s.icon size={18} style={{color:s.color}} />
              </div>
              <div className="text-3xl font-extrabold mb-1" style={{color:s.color}}>{s.val}</div>
              <div className="text-sm font-bold text-slate-800 mb-1 leading-tight">{s.label}</div>
              <div className="text-xs text-slate-400 leading-tight">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
