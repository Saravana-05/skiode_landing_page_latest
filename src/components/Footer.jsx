import { motion } from "framer-motion"
import { Zap, Globe, Users2, Code2, PlayCircle, Mail, Phone } from "lucide-react"

const cols = [
  { title:"Platform", links:["Forms and Core Data","Process Flow","Users and Groups","DMS","OCR and AI/ML","Dashboards and Reports","RPA","Integration","BOT Automation"] },
  { title:"Solutions", links:["ERP Applications","Healthcare","AI Recruiter","Construction Management","HR Automation","Finance Workflows","CRM","Operations"] },
  { title:"Resources", links:["Blog","Documentation","API Reference","Case Studies","ROI Calculator","Help Center"] },
  { title:"Company", links:["About","Contact","Careers","Partners"] },
  { title:"Legal", links:["Privacy Policy","Terms of Service","Security","Compliance"] },
]

const socials = [
  {Icon:Globe, label:"Twitter / X"},
  {Icon:Users2, label:"LinkedIn"},
  {Icon:Code2, label:"GitHub"},
  {Icon:PlayCircle, label:"YouTube"},
]

export default function Footer() {
  return (
    <footer style={{background:"#030810",borderTop:"1px solid rgba(255,255,255,0.05)"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background:"linear-gradient(135deg,#3b82f6,#06b6d4)"}}>
                <Zap size={15} color="white" strokeWidth={2.5} />
              </div>
              <span className="font-extrabold text-base text-white">Sky <span className="gradient-text-blue">LowCode AI</span></span>
            </a>
            <p className="text-xs text-white/35 leading-relaxed mb-5">Enterprise-grade low-code AI platform for building, automating, and scaling business applications.</p>
            <div className="flex items-center gap-2 mb-5">
              {socials.map(({Icon,label}) => (
                <a key={label} href="#contact" aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-white transition-all"
                  style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)"}}>
                  <Icon size={14} />
                </a>
              ))}
            </div>
            <a href="mailto:hello@skylowcode.ai" className="flex items-center gap-2 text-xs text-white/30 hover:text-blue-400 transition-colors">
              <Mail size={13} /> hello@skylowcode.ai
            </a>
          </div>

          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#contact" className="text-xs text-white/35 hover:text-white/80 transition-colors block hover:translate-x-0.5 transition-all">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{borderColor:"rgba(255,255,255,0.06)"}}>
          <p className="text-xs text-white/25">© 2026 Sky LowCode AI. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/25">
            <span>Built with React + Tailwind CSS + Framer Motion</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
