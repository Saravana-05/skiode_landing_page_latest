import { motion } from "framer-motion"
import { ArrowRight, CalendarDays, CheckCircle2, Zap, Brain, ScanText, Bot, BarChart2, GitBranch, FileText } from "lucide-react"

const badges = [
  { icon:FileText, label:"Form Builder", c:"#3b82f6" },
  { icon:Brain, label:"AI Recruiter", c:"#8b5cf6" },
  { icon:ScanText, label:"OCR Extraction", c:"#10b981" },
  { icon:GitBranch, label:"Workflow Approval", c:"#f59e0b" },
  { icon:BarChart2, label:"ROI Analytics", c:"#06b6d4" },
  { icon:Bot, label:"Bot Automation", c:"#ec4899" },
]

export default function FinalCTA() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0" style={{background:"linear-gradient(135deg,#060e1e 0%,#0d1b3e 50%,#060e1e 100%)"}} />
      <div className="absolute inset-0 dot-pattern" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{background:"radial-gradient(circle,rgba(59,130,246,0.1) 0%,transparent 70%)",filter:"blur(60px)"}} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{background:"radial-gradient(circle,rgba(139,92,246,0.08) 0%,transparent 70%)",filter:"blur(60px)"}} />

      {/* Floating feature badges */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {badges.map((b,i) => (
          <motion.div key={b.label} animate={{y:[0,-12+i%2*24,0]}} transition={{duration:4+i*0.5,repeat:Infinity,ease:"easeInOut",delay:i*0.8}}
            className="absolute flex items-center gap-2 rounded-2xl px-3 py-2.5"
            style={{
              top:`${15+i*12}%`,
              left: i%2===0?"3%":"auto",
              right: i%2===1?"3%":"auto",
              background:"rgba(13,27,62,0.9)",
              border:`1px solid ${b.c}30`,
              backdropFilter:"blur(12px)",
            }}>
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{background:`${b.c}20`}}>
              <b.icon size={12} style={{color:b.c}} />
            </div>
            <span className="text-xs font-bold text-white/80">{b.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-7"
          style={{background:"rgba(59,130,246,0.12)",border:"1px solid rgba(59,130,246,0.3)",color:"#60a5fa"}}>
          <Zap size={11} /> Get Started Today
        </motion.div>

        <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Move from manual work to<br className="hidden sm:block" />
          <span className="gradient-text-blue"> intelligent automation</span>
        </motion.h2>

        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}}
          className="text-lg text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
          Build apps, automate workflows, process documents, manage teams, and make faster decisions with Sky LowCode AI — the platform built for modern enterprise operations.
        </motion.p>

        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.3}}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base text-white transition-all hover:scale-105"
            style={{background:"linear-gradient(135deg,#3b82f6,#06b6d4)",boxShadow:"0 12px 40px rgba(59,130,246,0.4)"}}>
            <CalendarDays size={18} /> Book a Demo
          </a>
          <a href="#platform" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base text-white transition-all hover:bg-white/10"
            style={{border:"1.5px solid rgba(255,255,255,0.2)"}}>
            Start Building <ArrowRight size={16} />
          </a>
        </motion.div>

        <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.4}}
          className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/35">
          {["No credit card required","Setup in minutes","Free trial included","Enterprise SLA available","Cancel anytime"].map(t => (
            <span key={t} className="flex items-center gap-1.5">
              <CheckCircle2 size={12} style={{color:"#3b82f6"}} /> {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
