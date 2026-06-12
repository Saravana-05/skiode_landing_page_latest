import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, CalendarDays, CheckCircle2, Zap, Brain, ScanText, Bot, BarChart2, GitBranch, FileText } from "lucide-react"

const badges = [
  { icon:FileText, label:"Form Builder", c:"#3b82f6" },
  { icon:Brain, label:"AI/ML Engine", c:"#8b5cf6" },
  { icon:ScanText, label:"OCR Extraction", c:"#10b981" },
  { icon:GitBranch, label:"Workflow Approval", c:"#f59e0b" },
  { icon:BarChart2, label:"ROI Analytics", c:"#06b6d4" },
  { icon:Bot, label:"Bot Automation", c:"#ec4899" },
]

export default function FinalCTA() {
  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0" style={{background:"linear-gradient(135deg,#f0f4ff 0%,#eef6ff 50%,#f8faff 100%)"}} />
      <div className="absolute inset-0 dot-pattern-light" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{background:"radial-gradient(circle,rgba(59,130,246,0.08) 0%,transparent 70%)",filter:"blur(80px)"}} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{background:"radial-gradient(circle,rgba(132,204,22,0.06) 0%,transparent 70%)",filter:"blur(80px)"}} />

      {/* Floating feature badges */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {badges.map((b,i) => (
          <motion.div key={b.label} animate={{y:[0,-12+i%2*24,0]}} transition={{duration:4+i*0.5,repeat:Infinity,ease:"easeInOut",delay:i*0.8}}
            className="absolute flex items-center gap-2 rounded-2xl px-3 py-2.5"
            style={{
              top:`${15+i*12}%`,
              left: i%2===0?"3%":"auto",
              right: i%2===1?"3%":"auto",
              background:"rgba(255,255,255,0.9)",
              border:`1px solid ${b.c}20`,
              backdropFilter:"blur(12px)",
              boxShadow:"0 2px 12px rgba(0,0,0,0.06)",
            }}>
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{background:`${b.c}15`}}>
              <b.icon size={12} style={{color:b.c}} />
            </div>
            <span className="text-xs font-bold text-slate-700">{b.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-7"
          style={{background:"rgba(59,130,246,0.07)",border:"1px solid rgba(59,130,246,0.2)",color:"#2563eb",fontFamily:"var(--font-heading)"}}>
          <Zap size={11} /> Get Started Today
        </motion.div>

        <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.1}}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
          style={{fontFamily:"var(--font-heading)"}}>
          Turn manual processes into<br className="hidden sm:block" />
          <span className="gradient-text-blue"> digital business advantages</span>
        </motion.h2>

        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.2}}
          className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{fontFamily:"var(--font-body)"}}>
          Whether it's employee onboarding, procurement approvals, customer service, contract management,
          or manufacturing operations — skiode brings every step, approval, document, and status update
          into a single digital platform.
        </motion.p>

        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.3}}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Link to="/request-demo" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base text-white transition-all hover:scale-105"
            style={{background:"linear-gradient(135deg,#3b82f6,#84cc16)",boxShadow:"0 12px 40px rgba(59,130,246,0.25)",fontFamily:"var(--font-heading)"}}>
            <CalendarDays size={18} /> Request Demo
          </Link>
          <a href="#platform" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base text-slate-700 transition-all hover:bg-slate-100"
            style={{border:"1.5px solid rgba(0,0,0,0.12)",fontFamily:"var(--font-heading)"}}>
            Explore Platform <ArrowRight size={16} />
          </a>
        </motion.div>

        <motion.div initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.4}}
          className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          {["No credit card required","Setup in minutes","Enterprise-grade security","SOC 2 compliant","Cancel anytime"].map(t => (
            <span key={t} className="flex items-center gap-1.5">
              <CheckCircle2 size={12} style={{color:"#84cc16"}} /> {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
