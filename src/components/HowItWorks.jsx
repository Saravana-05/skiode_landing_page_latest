import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FileText, GitBranch, Brain, Plug, Bot, BarChart2,
  CheckCircle2, Sparkles, ArrowRight
} from "lucide-react"

import scrForms from "../assets/platform_screenshots/forms.png"
import scrProcess from "../assets/platform_screenshots/process_flow.png"
import scrIntegration from "../assets/platform_screenshots/integrations.png"
import scrBot from "../assets/platform_screenshots/Bot_Automation_1.png"
import scrOCR from "../assets/platform_screenshots/Ocr_extraction.png"
import scrDashboard from "../assets/platform_screenshots/dashboard_reports.png"

const steps = [
  {
    num: "01", icon: FileText, color: "#3b82f6",
    title: "Design Forms & Data",
    bold: "20+ field types. Drag-and-drop. Zero code.",
    screenshot: scrForms,
    caps: ["Visual Designer", "Validations", "Conditional Logic", "Mobile Ready"],
  },
  {
    num: "02", icon: GitBranch, color: "#8b5cf6",
    title: "Build Process Flow",
    bold: "Visual workflows. Approvals. SLA tracking.",
    screenshot: scrProcess,
    caps: ["Process Orchestration", "Decision Engine", "SLA Rules", "Parallel Branches"],
  },
  {
    num: "03", icon: Brain, color: "#10b981",
    title: "Add AI / ML & OCR",
    bold: "Extract data from any document instantly.",
    screenshot: scrOCR,
    caps: ["OCR Models", "AI/ML Matching", "Invoice Extraction", "QR & Barcode"],
  },
  {
    num: "04", icon: Plug, color: "#06b6d4",
    title: "Connect & Integrate",
    bold: "50+ connectors. API builder. Bolt onto any system.",
    screenshot: scrIntegration,
    caps: ["API Builder", "Data Mapping", "Pre-Built Connectors", "Webhooks"],
  },
  {
    num: "05", icon: Bot, color: "#6366f1",
    title: "Deploy BOTS & RPA",
    bold: "Automate repetitive tasks. Web & Desktop RPA.",
    screenshot: scrBot,
    caps: ["Logic BOTS", "Doc Generator", "Screen Scraping", "Desktop RPA"],
  },
  {
    num: "06", icon: BarChart2, color: "#f97316",
    title: "Launch & Monitor",
    bold: "Live dashboards. Inbuilt CI/CD. Web & Mobile.",
    screenshot: scrDashboard,
    caps: ["Live Dashboards", "Case Tracking", "CI/CD Deploy", "Reports"],
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const step = steps[active]

  return (
    <section className="py-12 relative overflow-hidden bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 rounded-full px-6 py-2.5 text-[12px] font-extrabold mb-3"
            style={{ background: "rgba(22,64,101,0.08)", border: "1px solid rgba(22,64,101,0.24)", color: "#0a2342" }}>
            <Sparkles size={14} /> Platform Walkthrough
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-[36px] font-black mb-3 leading-[1.08] tracking-tight" style={{ color: '#0a2342' }}>
            How <span style={{ color: '#164065' }}>skiode</span> works
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="text-[12px] text-slate-500 max-w-lg mx-auto leading-relaxed font-medium">
            6 steps. No code. From idea to live app.
          </motion.p>
        </div>

        {/* Step tabs — always visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-5"
        >
          {steps.map((s, i) => {
            const isActive = i === active
            return (
              <button key={s.num} onClick={() => setActive(i)}
                className="relative flex flex-col items-center gap-2 py-3 px-2 rounded-2xl transition-all duration-300"
                style={{
                  background: isActive ? "white" : "transparent",
                  border: isActive ? `2px solid ${s.color}` : "2px solid transparent",
                  boxShadow: isActive ? `0 8px 30px ${s.color}18` : "none",
                }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all"
                  style={{ background: isActive ? `${s.color}15` : "#f1f5f9" }}>
                  <s.icon size={20} style={{ color: isActive ? s.color : "#94a3b8" }} />
                </div>
                <span className="text-xs font-bold leading-tight text-center"
                  style={{ color: isActive ? s.color : "#94a3b8" }}>
                  {s.title}
                </span>
                {/* Progress dot */}
                {isActive && (
                  <motion.div layoutId="stepDot"
                    className="absolute -bottom-1 w-2 h-2 rounded-full"
                    style={{ background: s.color }} />
                )}
              </button>
            )
          })}
        </motion.div>

        {/* Main content — screenshot + highlights side by side */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl overflow-hidden"
            style={{ border: "1px solid #e2e8f0", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}
          >
            <div className="grid lg:grid-cols-[1.2fr_1fr]">

              {/* Left — Screenshot in browser frame */}
              <div className="relative">
                <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                  <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                  <div className="ml-3 flex-1 h-5 rounded-md bg-slate-100 flex items-center px-3">
                    <span className="text-[10px] text-slate-400 font-medium">skiode — {step.title}</span>
                  </div>
                </div>
                <img src={step.screenshot} alt={step.title}
                  className="w-full object-cover object-top"
                  style={{ height: "360px" }} />
              </div>

              {/* Right — Bold headline + capability pills */}
              <div className="p-6 sm:p-7 flex flex-col justify-center">
                {/* Step badge */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${step.color}12` }}>
                    <step.icon size={20} style={{ color: step.color }} />
                  </div>
                  <span className="text-xs font-black tracking-widest uppercase" style={{ color: step.color }}>
                    Step {step.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[12px] font-black uppercase tracking-wide mb-2 leading-tight" style={{ color: '#0a2342' }}>
                  {step.title}
                </h3>

                {/* Bold one-liner */}
                <p className="text-base font-semibold text-slate-600 mb-4 leading-relaxed">
                  {step.bold}
                </p>

                {/* Capabilities as visual chips */}
                <div className="grid grid-cols-2 gap-2.5">
                  {step.caps.map((cap, i) => (
                    <motion.div
                      key={cap}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl"
                      style={{ background: `${step.color}06`, border: `1px solid ${step.color}12` }}
                    >
                      <CheckCircle2 size={16} style={{ color: step.color }} className="flex-shrink-0" />
                      <span className="text-sm font-bold text-slate-700">{cap}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Step progress bar */}
        <div className="mt-6 flex items-center gap-1">
          {steps.map((s, i) => (
            <div key={s.num} className="flex-1 h-1.5 rounded-full overflow-hidden bg-slate-100 cursor-pointer"
              onClick={() => setActive(i)}>
              <div className="h-full rounded-full transition-all duration-500"
                style={{
                  width: i <= active ? "100%" : "0%",
                  background: i <= active ? s.color : "transparent",
                }} />
            </div>
          ))}
        </div>

        {/* Quick nav arrows */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => setActive(Math.max(0, active - 1))}
            disabled={active === 0}
            className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors disabled:opacity-30"
          >
            ← Previous
          </button>
          <span className="text-sm font-bold text-slate-400">
            {active + 1} / {steps.length}
          </span>
          <button
            onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
            disabled={active === steps.length - 1}
            className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors disabled:opacity-30"
          >
            Next →
          </button>
        </div>
      </div>
    </section>
  )
}
