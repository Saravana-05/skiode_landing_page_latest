import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, ChevronDown, Menu, X, ArrowRight, LayoutGrid, GitBranch, Users, FolderOpen, Brain, BarChart2, Bot, Plug, Settings, FileText, Database, Monitor, Shield, Search, Book, Building2, HeartPulse, UserCheck, HardHat, DollarSign, Briefcase, ScanText, Activity, Sparkles, FileCode, Globe, BookOpen, Calculator, LifeBuoy, ChevronRight, Workflow } from "lucide-react"

const platformCols = [
  { label:"Build", items:[
    {icon:FileText, name:"Forms and Core Data", desc:"Dynamic forms, data models"},
    {icon:Database, name:"Data Model Builder", desc:"Entities, fields, relationships"},
    {icon:Monitor, name:"Page Builder", desc:"Layouts, tables, dashboards"},
    {icon:LayoutGrid, name:"Form Builder", desc:"Drag-and-drop field designer"},
    {icon:Workflow, name:"Workflow Builder", desc:"Visual process configuration"},
  ]},
  { label:"Automate", items:[
    {icon:GitBranch, name:"Process Flow", desc:"Approval flows and routing"},
    {icon:Bot, name:"RPA Automation", desc:"Desktop and web task automation"},
    {icon:Sparkles, name:"BOT Automation", desc:"Smart bots for reminders"},
    {icon:Settings, name:"Business Rules", desc:"Conditions, SLAs, triggers"},
    {icon:Shield, name:"Approval Workflows", desc:"Multi-level approval routing"},
  ]},
  { label:"Intelligence", items:[
    {icon:ScanText, name:"OCR and AI/ML", desc:"Document extraction and AI"},
    {icon:Brain, name:"AI Assistant", desc:"Conversational AI for ops"},
    {icon:BarChart2, name:"Dashboards and Reports", desc:"Real-time analytics"},
    {icon:Activity, name:"Predictive Insights", desc:"AI-powered forecasting"},
    {icon:Search, name:"Smart Validation", desc:"AI-assisted quality checks"},
  ]},
  { label:"Manage", items:[
    {icon:Users, name:"Users and Groups", desc:"Teams, roles, org management"},
    {icon:Shield, name:"Role Permissions", desc:"Fine-grained access control"},
    {icon:FolderOpen, name:"DMS", desc:"Secure document management"},
    {icon:Plug, name:"Integrations", desc:"APIs, databases, cloud apps"},
    {icon:FileCode, name:"Audit Logs", desc:"Activity tracking compliance"},
  ]},
]

const solutionsItems = [
  {icon:Building2, name:"ERP Applications", desc:"Sales, purchase, inventory"},
  {icon:HeartPulse, name:"Healthcare Workflows", desc:"Patient records, approvals"},
  {icon:UserCheck, name:"HR and Recruitment", desc:"AI Recruiter, onboarding"},
  {icon:HardHat, name:"Construction Management", desc:"Site progress, materials"},
  {icon:DollarSign, name:"Finance Approvals", desc:"Invoice, expense workflows"},
  {icon:Briefcase, name:"CRM and Leads", desc:"Lead tracking, follow-ups"},
  {icon:ScanText, name:"Document Processing", desc:"OCR, extraction, classification"},
  {icon:Activity, name:"Operations Management", desc:"Daily tasks, reporting"},
]

const aiItems = [
  {icon:UserCheck, name:"AI Recruiter", desc:"Resume parsing, ranking"},
  {icon:ScanText, name:"OCR Automation", desc:"Invoice, ID extraction"},
  {icon:FileText, name:"AI Document Processing", desc:"Classify and route docs"},
  {icon:Brain, name:"AI Workflow Decisions", desc:"Smart routing"},
  {icon:Bot, name:"AI Chatbot", desc:"Conversational automation"},
  {icon:BarChart2, name:"AI Reports", desc:"Auto-generated insights"},
  {icon:Shield, name:"AI Data Validation", desc:"Quality checks"},
]

const industriesItems = [
  {icon:HeartPulse, name:"Healthcare"}, {icon:HardHat, name:"Construction"},
  {icon:Building2, name:"Retail"}, {icon:Settings, name:"Manufacturing"},
  {icon:Globe, name:"Logistics"}, {icon:BookOpen, name:"Education"},
  {icon:DollarSign, name:"Finance"}, {icon:Briefcase, name:"Professional Services"},
]

const resourcesItems = [
  {icon:Book, name:"Blog", desc:"Latest articles and updates"},
  {icon:BookOpen, name:"Documentation", desc:"Guides and references"},
  {icon:FileCode, name:"API Reference", desc:"Full API documentation"},
  {icon:Briefcase, name:"Case Studies", desc:"Customer success stories"},
  {icon:Calculator, name:"ROI Calculator", desc:"Estimate your savings"},
  {icon:LifeBuoy, name:"Help Center", desc:"Support and tutorials"},
]

const megaMenus = {Platform:"platform",Solutions:"solutions","AI Automation":"ai",Industries:"industries",Resources:"resources"}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const enter = (menu) => { clearTimeout(timeoutRef.current); setActiveMenu(menu) }
  const leave = () => { timeoutRef.current = setTimeout(() => setActiveMenu(null), 150) }

  const navStyle = scrolled
    ? {background:"rgba(255,255,255,0.96)",backdropFilter:"blur(24px)",boxShadow:"0 1px 0 rgba(0,0,0,0.08),0 4px 24px rgba(0,0,0,0.06)"}
    : {background:"transparent"}

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={navStyle}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background:"linear-gradient(135deg,#3b82f6,#06b6d4)"}}>
              <Zap size={15} color="white" strokeWidth={2.5} />
            </div>
            <span className={`font-extrabold text-base tracking-tight ${scrolled?"text-slate-900":"text-white"}`}>
              Sky <span className="gradient-text-blue">LowCode AI</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-0.5">
            {["Platform","Solutions","AI Automation","Industries","Resources","Pricing","Contact"].map(item => (
              <div key={item} className="relative"
                onMouseEnter={() => megaMenus[item] ? enter(megaMenus[item]) : null}
                onMouseLeave={megaMenus[item] ? leave : undefined}
              >
                <a href={megaMenus[item] ? "#" : `#${item.toLowerCase().replace(" ","-")}`}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${scrolled?"text-slate-600 hover:text-blue-600 hover:bg-blue-50":"text-white/80 hover:text-white hover:bg-white/10"}`}
                >
                  {item}
                  {megaMenus[item] && <ChevronDown size={13} className={`transition-transform duration-200 ${activeMenu===megaMenus[item]?"rotate-180":""}`} />}
                </a>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <a href="#contact" className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${scrolled?"text-slate-600 hover:text-blue-600 hover:bg-blue-50":"text-white/80 hover:text-white"}`}>Login</a>
            <a href="#contact" className="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:scale-105" style={{background:"linear-gradient(135deg,#3b82f6,#06b6d4)",boxShadow:"0 4px 14px rgba(59,130,246,0.35)"}}>Book a Demo</a>
          </div>

          <button className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled?"text-slate-700 hover:bg-slate-100":"text-white hover:bg-white/10"}`} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {activeMenu && (
          <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:0.18}}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100"
            style={{boxShadow:"0 20px 60px rgba(0,0,0,0.1)"}}
            onMouseEnter={() => clearTimeout(timeoutRef.current)} onMouseLeave={leave}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {activeMenu === "platform" && (
                <div className="flex gap-5">
                  {platformCols.map(col => (
                    <div key={col.label} className="flex-1">
                      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 px-2">{col.label}</p>
                      <div className="space-y-0.5">
                        {col.items.map(item => (
                          <a key={item.name} href="#platform" className="mega-item flex items-start gap-2.5 px-2 py-2.5 rounded-lg group transition-all">
                            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{background:"rgba(59,130,246,0.08)"}}>
                              <item.icon size={13} style={{color:"#3b82f6"}} />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">{item.name}</div>
                              <div className="text-xs text-slate-400 mt-0.5 leading-tight">{item.desc}</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="w-52 flex-shrink-0">
                    <div className="rounded-2xl p-5 h-full flex flex-col" style={{background:"linear-gradient(135deg,#0a1628,#1a3a6e)"}}>
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{background:"rgba(96,165,250,0.2)"}}>
                        <Zap size={16} color="#60a5fa" />
                      </div>
                      <h4 className="font-bold text-white text-sm mb-2">Explore the Workspace</h4>
                      <p className="text-xs text-white/50 leading-relaxed mb-4 flex-1">See how forms, workflows, AI, documents, bots, and reports work together.</p>
                      <a href="#platform" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors">View Platform <ArrowRight size={11} /></a>
                    </div>
                  </div>
                </div>
              )}
              {activeMenu === "solutions" && (
                <div className="grid grid-cols-4 gap-1">
                  {solutionsItems.map(item => (
                    <a key={item.name} href="#solutions" className="mega-item flex items-start gap-2.5 px-3 py-3 rounded-lg group transition-all">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:"rgba(99,102,241,0.08)"}}>
                        <item.icon size={14} style={{color:"#6366f1"}} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">{item.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5 leading-tight">{item.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
              {activeMenu === "ai" && (
                <div className="flex gap-6">
                  <div className="flex-1 grid grid-cols-3 gap-1">
                    {aiItems.map(item => (
                      <a key={item.name} href="#ai-automation" className="mega-item flex items-start gap-2.5 px-3 py-3 rounded-lg group transition-all">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:"rgba(139,92,246,0.08)"}}>
                          <item.icon size={14} style={{color:"#8b5cf6"}} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-800 group-hover:text-purple-600 transition-colors">{item.name}</div>
                          <div className="text-xs text-slate-400 mt-0.5 leading-tight">{item.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="w-60 flex-shrink-0">
                    <div className="rounded-2xl p-5" style={{background:"linear-gradient(135deg,#1e1b4b,#312e81)"}}>
                      <Sparkles size={20} color="#a78bfa" className="mb-3" />
                      <h4 className="font-bold text-white text-sm mb-2">AI-First Operations</h4>
                      <p className="text-xs text-white/55 leading-relaxed">Use AI to screen candidates, extract documents, validate data, and make smart decisions automatically.</p>
                    </div>
                  </div>
                </div>
              )}
              {activeMenu === "industries" && (
                <div className="grid grid-cols-4 gap-1 max-w-2xl">
                  {industriesItems.map(item => (
                    <a key={item.name} href="#solutions" className="mega-item flex items-center gap-2.5 px-3 py-3 rounded-lg group transition-all">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:"rgba(20,184,166,0.08)"}}>
                        <item.icon size={14} style={{color:"#14b8a6"}} />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 group-hover:text-teal-600 transition-colors">{item.name}</span>
                    </a>
                  ))}
                </div>
              )}
              {activeMenu === "resources" && (
                <div className="grid grid-cols-3 gap-1 max-w-xl">
                  {resourcesItems.map(item => (
                    <a key={item.name} href="#contact" className="mega-item flex items-start gap-2.5 px-3 py-3 rounded-lg group transition-all">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{background:"rgba(59,130,246,0.08)"}}>
                        <item.icon size={14} style={{color:"#3b82f6"}} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">{item.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5 leading-tight">{item.desc}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}}
            className="lg:hidden overflow-hidden bg-white border-t border-slate-100 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {["Platform","Solutions","AI Automation","Industries","Resources","Pricing","Contact"].map(item => (
                <a key={item} href={`#${item.toLowerCase().replace(" ","-")}`} className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  {item} <ChevronRight size={14} className="text-slate-400" />
                </a>
              ))}
              <div className="pt-3 space-y-2 border-t border-slate-100">
                <a href="#contact" className="block w-full py-2.5 text-center rounded-xl text-sm font-semibold border border-slate-200 text-slate-700">Login</a>
                <a href="#contact" className="block w-full py-2.5 text-center rounded-xl text-sm font-bold text-white" style={{background:"linear-gradient(135deg,#3b82f6,#06b6d4)"}}>Book a Demo</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
