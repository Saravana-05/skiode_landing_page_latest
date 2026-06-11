import { useState, useEffect, useRef, useCallback } from "react"

import { motion, AnimatePresence } from "framer-motion"
import {
  FileText, GitBranch, BarChart2, Bot, ScanText, Plug, Brain,
  Users, FolderOpen, Cpu, Sparkles, ArrowRight, Play, Pause,
  Monitor, ChevronLeft, ChevronRight, Zap
} from "lucide-react"

/* ── Real platform screenshots ── */
import scrMain from "../assets/platform_screenshots/main_page.png"
import scrForms from "../assets/platform_screenshots/forms.png"
import scrProcess from "../assets/platform_screenshots/process_flow.png"
import scrUsers from "../assets/platform_screenshots/user_groups.png"
import scrDMS from "../assets/platform_screenshots/DMS.png"
import scrOCR from "../assets/platform_screenshots/Ocr_extraction.png"
import scrDashboard from "../assets/platform_screenshots/dashboard_reports.png"
import scrRPA from "../assets/platform_screenshots/RPA.png"
import scrIntegration from "../assets/platform_screenshots/integrations.png"
import scrBot1 from "../assets/platform_screenshots/Bot_Automation_1.png"
import scrBot2 from "../assets/platform_screenshots/Bot_Automation_2.png"

/* ── Slides config ── */
const slides = [
  {
    id: "workspace",
    label: "Workspace",
    icon: Monitor,
    color: "#3b82f6",
    image: scrMain,
    tagline: "Project Workspace",
    desc: "Manage your organization resources and monitor real-time performance. Active Workflows, Automations, Forms Processed — all at a glance.",
  },
  {
    id: "forms",
    label: "Forms & Data",
    icon: FileText,
    color: "#3b82f6",
    image: scrForms,
    tagline: "Form Architectural Designer",
    desc: "Drag and drop fields to structure your core data record. 20+ field types — Text, Number, Date, Dropdown, File, Signature, Table, Rich Text and more.",
  },
  {
    id: "process-flow",
    label: "Process Flow",
    icon: GitBranch,
    color: "#8b5cf6",
    image: scrProcess,
    tagline: "Visual Process Builder",
    desc: "Design approval workflows visually — Submit, Review, Approve/Reject, Procurement. Drag nodes, set conditions, add triggers with AI WAND.",
  },
  {
    id: "users",
    label: "Users & Groups",
    icon: Users,
    color: "#06b6d4",
    image: scrUsers,
    tagline: "User & Access Management",
    desc: "Manage organizational roles, access policies, and group structures. Define role-based permissions for every team and department.",
  },
  {
    id: "dms",
    label: "DMS",
    icon: FolderOpen,
    color: "#f59e0b",
    image: scrDMS,
    tagline: "Document Management System",
    desc: "Configure cloud or internal storage connections. Efficiently store, manage, and retrieve documents with enterprise-grade DMS.",
  },
  {
    id: "ocr",
    label: "OCR & AI/ML",
    icon: ScanText,
    color: "#10b981",
    image: scrOCR,
    tagline: "OCR & Extraction Models",
    desc: "Configure vision models for data extraction — Aadhar Card, PAN Card, PDF to Text, QR & Barcode, Invoice Extraction with AI-powered accuracy.",
  },
  {
    id: "dashboards",
    label: "Dashboards",
    icon: BarChart2,
    color: "#f97316",
    image: scrDashboard,
    tagline: "Dashboards & Reports",
    desc: "Visualize data insights with customizable dashboards. Pie charts, reports, case tracking, and project status — all in real-time.",
  },
  {
    id: "rpa",
    label: "RPA",
    icon: Cpu,
    color: "#ec4899",
    image: scrRPA,
    tagline: "Robotic Process Automation",
    desc: "Web RPA and Desktop Automation — automate website actions, extract data, simulate keystrokes, and perform desktop-level tasks automatically.",
  },
  {
    id: "integration",
    label: "Integration",
    icon: Plug,
    color: "#06b6d4",
    image: scrIntegration,
    tagline: "API Integration Builder",
    desc: "Connect APIs with visual data mapping — Path, Params, Auth, Headers, Body, Response. Import JSON, AI Generate, and Preview in real-time.",
  },
  {
    id: "bots",
    label: "BOT Automation",
    icon: Bot,
    color: "#6366f1",
    image: scrBot1,
    tagline: "Process Bots",
    desc: "Configure internal logic bots and custom scripts — GD Extract Bot, Excel to JSON Bot, Invoice Generator, Doc Generator, QR Generator, Doc Builder.",
  },
]

const AUTOPLAY_INTERVAL = 5000

export default function InteractiveShowcase() {
  const [active, setActive] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef(null)
  const progressRef = useRef(null)
  const current = slides[active]

  /* ── Autoplay logic ── */
  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }, [])

  const goPrev = useCallback(() => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
  }, [])

  useEffect(() => {
    if (!isPlaying) {
      clearInterval(timerRef.current)
      clearInterval(progressRef.current)
      return
    }

    setProgress(0)
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + (100 / (AUTOPLAY_INTERVAL / 50)), 100))
    }, 50)

    timerRef.current = setTimeout(() => {
      goNext()
    }, AUTOPLAY_INTERVAL)

    return () => {
      clearTimeout(timerRef.current)
      clearInterval(progressRef.current)
    }
  }, [active, isPlaying, goNext])

  const handleTabClick = (i) => {
    setActive(i)
    setProgress(0)
  }

  return (
    <section className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050a18 0%, #0d1117 40%, #0a0f1a 100%)" }}>

      {/* Background effects */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${current.color}08 0%, transparent 60%)`, filter: "blur(100px)", transition: "background 1s" }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 60%)", filter: "blur(80px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold mb-6"
            style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)", color: "#60a5fa" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Interactive Platform Tour
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            <span className="text-white">Experience the </span>
            <span style={{
              background: "linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Platform Live
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.35)" }}>
            Explore every module of skiode — click a tab or sit back and watch the tour.
          </motion.p>
        </div>

        {/* ── Main showcase ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          {/* ── Tab bar ── */}
          <div className="flex items-center gap-1 px-4 py-3 rounded-t-2xl overflow-x-auto hide-scrollbar"
            style={{ background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            {slides.map((slide, i) => {
              const isActive = i === active
              return (
                <button
                  key={slide.id}
                  onClick={() => handleTabClick(i)}
                  className="relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-semibold whitespace-nowrap transition-all duration-300 flex-shrink-0"
                  style={{
                    background: isActive ? `${slide.color}15` : "transparent",
                    color: isActive ? slide.color : "rgba(255,255,255,0.3)",
                    border: isActive ? `1px solid ${slide.color}30` : "1px solid transparent",
                  }}>
                  <slide.icon size={12} />
                  {slide.label}
                  {/* Active progress under tab */}
                  {isActive && isPlaying && (
                    <div className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full overflow-hidden" style={{ background: `${slide.color}15` }}>
                      <div className="h-full rounded-full transition-all duration-100 ease-linear"
                        style={{ width: `${progress}%`, background: slide.color }} />
                    </div>
                  )}
                </button>
              )
            })}

            {/* Play/Pause */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="ml-auto flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-semibold transition-all flex-shrink-0"
              style={{
                background: isPlaying ? "rgba(16,185,129,0.1)" : "rgba(255,255,255,0.05)",
                color: isPlaying ? "#10b981" : "rgba(255,255,255,0.3)",
                border: `1px solid ${isPlaying ? "rgba(16,185,129,0.2)" : "rgba(255,255,255,0.08)"}`,
              }}>
              {isPlaying ? <Pause size={11} /> : <Play size={11} />}
              {isPlaying ? "Auto" : "Paused"}
            </button>
          </div>

          {/* ── Screenshot / Video area ── */}
          <div className="relative rounded-b-2xl overflow-hidden"
            style={{
              background: "#0d1117",
              border: "1px solid rgba(255,255,255,0.06)",
              borderTop: "none",
              boxShadow: `0 40px 100px rgba(0,0,0,0.5), 0 0 60px ${current.color}08`,
            }}>

            {/* Browser chrome */}
            <div className="flex items-center justify-between px-5 py-2.5"
              style={{ background: "#080c14", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
              </div>
              <div className="flex items-center gap-2 px-4 py-1 rounded-lg" style={{ background: "rgba(255,255,255,0.04)" }}>
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: current.color }} />
                <span className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.25)" }}>
                  skiode — {current.tagline}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {/* Slide counter */}
                <span className="text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.15)" }}>
                  {String(active + 1).padStart(2, "0")}/{String(slides.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="relative" style={{ aspectRatio: "16/8.5", minHeight: "380px" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={current.image}
                    alt={current.tagline}
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Bottom gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                    style={{ background: "linear-gradient(transparent, rgba(13,17,23,0.95))" }} />

                  {/* Bottom info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center"
                          style={{ background: `${current.color}20` }}>
                          <current.icon size={12} style={{ color: current.color }} />
                        </div>
                        <span className="text-sm font-bold text-white">{current.tagline}</span>
                      </div>
                      <p className="text-xs max-w-lg" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {current.desc}
                      </p>
                    </div>

                    {/* Navigation arrows */}
                    <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                      <button onClick={goPrev}
                        className="w-8 h-8 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                        <ChevronLeft size={14} style={{ color: "rgba(255,255,255,0.4)" }} />
                      </button>
                      <button onClick={goNext}
                        className="w-8 h-8 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                        <ChevronRight size={14} style={{ color: "rgba(255,255,255,0.4)" }} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress bar — full width */}
            <div className="h-0.5" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="h-full transition-all duration-100 ease-linear"
                style={{ width: `${((active / slides.length) * 100) + (progress / slides.length)}%`, background: `linear-gradient(90deg, ${current.color}, ${current.color}60)` }} />
            </div>
          </div>

          {/* ── Bottom module dots / mini thumbnails ── */}
          <div className="flex items-center justify-center gap-1.5 mt-5">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => handleTabClick(i)}
                className="group relative transition-all duration-300"
              >
                <div
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? "28px" : "8px",
                    height: "8px",
                    background: i === active ? slide.color : "rgba(255,255,255,0.1)",
                  }}
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <a href="/request-demo"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-sm text-white transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
              boxShadow: "0 8px 32px rgba(59,130,246,0.4)",
            }}>
            Request Live Demo <ArrowRight size={14} />
          </a>
          <div className="flex items-center gap-3 text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            <span className="flex items-center gap-1.5">
              <Monitor size={11} /> 9 Modules
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Plug size={11} /> 50+ Integrations
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Sparkles size={11} /> AI-Powered
            </span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}
