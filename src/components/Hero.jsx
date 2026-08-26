import { motion, useScroll, useTransform } from "framer-motion"
import { Bot, CheckCircle2, Code2, Plug, TrendingUp, Workflow, Zap } from "lucide-react"
import { useRef, useState } from "react"
import platformScreenshot from "../assets/Skiode_Banner.png"
import mobileScreenshot from "../assets/skiode_mob_screen.jpeg"
import { trustedBrands } from "./TrustedBrands"

/* Prodmast-style smooth easing */
const ease = [0.25, 0.46, 0.45, 0.94]

const smooth = (delay = 0) => ({
  initial: { opacity: 0, y: 50, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease },
})

const brandInitials = (name) => {
  const words = name.trim().split(/\s+/)
  return words.length > 1
    ? words.slice(0, 2).map(word => word[0]).join('').toUpperCase()
    : name.slice(0, 2).toUpperCase()
}

const trustedBrandColors = [
  '#164065', '#2563eb', '#047857', '#7c3aed', '#c2410c', '#be123c',
  '#0369a1', '#4d7c0f', '#9333ea', '#0f766e', '#b45309', '#4338ca',
  '#15803d', '#a21caf', '#0e7490', '#b91c1c', '#1d4ed8', '#6d28d9',
  '#04705f', '#9f1239', '#3f6212', '#075985',
]

export default function Hero() {
  const ref = useRef(null)
  const [hoveredBrand, setHoveredBrand] = useState(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <section
      ref={ref}
      className="relative flex items-center pt-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg,#f8faff 0%,#ffffff 40%,#f0f4ff 70%,#eef6ff 100%)" }}
    >
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern-light pointer-events-none opacity-70" />

      {/* Parallax radial glows */}
      <motion.div style={{ y: bgY }} className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle,rgba(59,130,246,0.10) 0%,transparent 60%)", filter: "blur(60px)" }} />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.07, 0.12, 0.07] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle,rgba(132,204,22,0.07) 0%,transparent 60%)", filter: "blur(70px)" }} />
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle,rgba(59,130,246,0.06) 0%,transparent 60%)", filter: "blur(60px)" }} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[25px] lg:py-[28px] w-full relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center">

          {/* ── Left: Text content (5 cols) ── */}
          <div className="lg:col-span-5">
            <motion.div
              {...smooth(0)}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-7"
              style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.25)", color: "#2563eb" }}
            >
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-blue-400"
              />
              AI-Led Low-Code Platform
            </motion.div>

            <motion.h1
              {...smooth(0.15)}
              className="text-4xl sm:text-5xl xl:text-[3.4rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-[0.025em]"
            >
              Simplify Operations,{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease }}
                style={{
                  background: "linear-gradient(135deg,#60a5fa,#06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                Automate Processes,
              </motion.span>{" "}
              Amplify ROI
            </motion.h1>

            <motion.p
              {...smooth(0.3)}
              className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed"
            >
              skiode helps organizations gain complete visibility, automate operations, and accelerate
              digital transformation — from idea to working application in weeks, not months.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
              className="grid grid-cols-1 sm:grid-cols-4 gap-3 mb-8"
            >
              {[
                { icon: Code2, label: "Low-Code + RPA + AI/ML", color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
                { icon: Workflow, label: "Process Orchestration", color: "#164065", bg: "#edf4f8", border: "#c8dbe7" },
                { icon: Plug, label: "50+ Integrations", color: "#059669", bg: "#ecfdf5", border: "#a7f3d0" },
                { icon: Bot, label: "Configurable Bots", color: "#65a30d", bg: "#f7fee7", border: "#d9f99d" },
              ].map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.08, ease }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group relative flex items-center px-1 py-2 text-slate-700 sm:min-h-[88px] sm:justify-center sm:p-2"
                >
                  <span
                    className="relative hidden sm:flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border shadow-[0_9px_18px_rgba(20,64,101,0.16),0_2px_5px_rgba(20,64,101,0.10)] transition-all duration-300 before:absolute before:-inset-2 before:-z-10 before:rounded-[20px] before:bg-current before:opacity-0 before:blur-md before:transition-opacity group-hover:-rotate-3 group-hover:scale-110 group-hover:shadow-[0_15px_28px_rgba(20,64,101,0.22)] group-hover:before:opacity-15"
                    style={{ background: t.bg, borderColor: t.border, color: t.color }}>
                    <t.icon size={30} strokeWidth={2.1} style={{ color: t.color }} />
                    <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white shadow-sm" style={{ background: t.color }} />
                  </span>
                  <span className="text-sm font-normal leading-snug sm:hidden">
                    {t.label}
                  </span>
                  <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 hidden w-max max-w-[230px] -translate-x-1/2 translate-y-2 rounded-xl border border-[#c8dbe7] bg-white px-4 py-3 text-center text-[20px] font-medium leading-snug text-[#164065] opacity-0 shadow-[0_12px_30px_rgba(20,64,101,0.18)] transition-all duration-200 sm:block sm:group-hover:translate-y-0 sm:group-hover:font-bold sm:group-hover:opacity-100">
                    {t.label}
                    <span className="absolute left-1/2 top-full h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-[#c8dbe7] bg-white" />
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease }}
              className="flex items-center gap-4 pt-6"
              style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div className="relative w-52 sm:w-60" aria-label={`${trustedBrands.length} trusted enterprise brands`}>
                {hoveredBrand && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="pointer-events-none absolute bottom-full left-1/2 z-40 mb-3 flex w-44 -translate-x-1/2 flex-col items-center rounded-xl border border-[#c8dbe7] bg-white p-3.5 shadow-[0_16px_40px_rgba(20,64,101,0.24)]">
                    <img src={hoveredBrand.logo} alt="" className="h-14 w-full object-contain" />
                    <span className="mt-2 text-center text-xs font-medium leading-tight text-[#164065]">{hoveredBrand.name}</span>
                    <span className="absolute left-1/2 top-full h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-[#c8dbe7] bg-white" />
                  </motion.div>
                )}
                <div className="overflow-hidden py-1">
                  <motion.div
                    className="flex w-max gap-2"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}>
                    {[...trustedBrands, ...trustedBrands].map((brand, i) => {
                      const brandIndex = i % trustedBrands.length
                      const color = trustedBrandColors[brandIndex]
                      return (
                        <button
                          type="button"
                          key={`${brand.name}-${i}`}
                          onMouseEnter={() => setHoveredBrand(brand)}
                          onMouseLeave={() => setHoveredBrand(null)}
                          onFocus={() => setHoveredBrand(brand)}
                          onBlur={() => setHoveredBrand(null)}
                          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-[10px] font-medium tracking-[0.04em] text-white ring-2 ring-white shadow-sm transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-[#7ee600]"
                          style={{ background: color }}
                          aria-label={`Show ${brand.name} logo`}>
                          {brandInitials(brand.name)}
                        </button>
                      )
                    })}
                  </motion.div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 + i * 0.05, type: "spring" }}
                      className="w-2.5 h-2.5 rounded-sm" style={{ background: '#f59e0b' }} />
                  ))}
                </div>
                <p className="text-xs text-slate-500">Trusted by {trustedBrands.length} enterprise brands</p>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Desktop + Phone (7 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: 80, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
            style={{ y: imageY }}
            className="relative mt-6 lg:col-span-7 lg:mt-0"
          >
            <motion.div style={{ scale: imageScale }} className="relative pb-14 sm:pb-16 lg:pb-24">

              {/* ── Desktop mockup ── */}
              <div className="relative mx-auto w-[96%] sm:w-full lg:w-[108%] lg:translate-x-8" style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.2))" }}>
                <motion.div
                  animate={{ opacity: [0.15, 0.25, 0.15] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-3 rounded-3xl pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(59,130,246,0.5), rgba(6,182,212,0.3))",
                    filter: "blur(25px)",
                  }} />

                <div className="relative overflow-hidden rounded-2xl"
                  style={{ border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                  <div className="flex items-center justify-between px-4 py-2.5"
                    style={{ background: "#0d1117", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex items-center gap-2 rounded-lg px-3 py-1" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>
                        skiode — Enterprise Workspace
                      </span>
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#2563eb] text-[10px] font-bold text-white">A</div>
                  </div>

                  <img src={platformScreenshot} alt="skiode platform workspace" className="block h-auto w-full" />
                </div>
              </div>

              {/* ── Phone mockup ── */}
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.7, ease }}
                className="absolute bottom-0 right-0 z-20 block sm:right-1 lg:bottom-24 lg:-right-3"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))" }}
              >
                <div className="absolute -inset-3 rounded-[32px] opacity-25 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(139,92,246,0.5), rgba(6,182,212,0.3))",
                    filter: "blur(18px)",
                  }} />

                <div className="relative w-[124px] overflow-hidden rounded-[22px] sm:w-[150px] sm:rounded-[26px] lg:w-[184px] lg:rounded-[30px]"
                  style={{
                    border: "4px solid #1a1a2e",
                    boxShadow: "inset 0 0 15px rgba(0,0,0,0.3)",
                    background: "#0d1117",
                  }}>
                  <div className="flex items-center justify-center py-1.5" style={{ background: "#0d1117" }}>
                    <div className="w-16 h-4 rounded-full flex items-center justify-center"
                      style={{ background: "#000", border: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }} />
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-3 py-0.5" style={{ background: "#0d1117" }}>
                    <span className="text-[8px] text-white/50 font-semibold">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 rounded-sm border" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
                        <div className="w-2.5 h-full rounded-sm" style={{ background: "#4ade80" }} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-2"
                    style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(6,182,212,0.08))", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="w-5 h-5 rounded-md flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg,#3b82f6,#06b6d4)" }}>
                      <span className="text-[7px] font-bold text-white">S</span>
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-white/80 block leading-tight">skiode</span>
                      <span className="text-[6px] text-white/40">Mobile App</span>
                    </div>
                    <div className="ml-auto flex items-center gap-0.5">
                      <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[6px] text-green-400 font-semibold">Live</span>
                    </div>
                  </div>

                  <div className="relative h-[168px] overflow-hidden sm:h-[215px] lg:h-[250px]">
                    <img src={mobileScreenshot} alt="skiode mobile app"
                      className="block h-auto w-full object-cover object-top" />
                    <div className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
                      style={{ background: "linear-gradient(transparent, rgba(13,17,23,0.7))" }} />
                  </div>

                  <div className="flex items-center justify-around py-2 px-2"
                    style={{ background: "#0d1117", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    {[
                      { label: "Home", active: true },
                      { label: "Tasks", active: false },
                      { label: "Alerts", active: false },
                      { label: "Profile", active: false },
                    ].map((tab) => (
                      <div key={tab.label} className="flex flex-col items-center gap-0.5">
                        <div className="w-4 h-4 rounded-md flex items-center justify-center"
                          style={{
                            background: tab.active ? "linear-gradient(135deg,#3b82f6,#06b6d4)" : "rgba(255,255,255,0.04)",
                            boxShadow: tab.active ? "0 2px 6px rgba(59,130,246,0.4)" : "none",
                          }}>
                          <div className="w-1.5 h-1.5 rounded-sm" style={{ background: tab.active ? "white" : "rgba(255,255,255,0.15)" }} />
                        </div>
                        <span className="text-[6px] font-medium" style={{ color: tab.active ? "#60a5fa" : "rgba(255,255,255,0.25)" }}>{tab.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center py-1.5" style={{ background: "#0d1117" }}>
                    <div className="w-10 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.12)" }} />
                  </div>
                </div>

              </motion.div>

              {/* ── Performance dock ── */}
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 1.1, ease }}
                className="absolute bottom-24 left-8 z-30 hidden items-center gap-1 rounded-2xl border border-white/15 bg-[#102b3f] p-1.5 shadow-[0_16px_38px_rgba(13,43,63,0.32)] lg:flex"
                style={{ right: 'calc(-8% - 32px)' }}>
                {[
                  { icon: CheckCircle2, value: '70% Faster Cycle Times', label: 'Operational Excellence', color: '#60a5fa' },
                  { icon: TrendingUp, value: '10x Productivity', label: 'For Individuals & Teams', color: '#a78bfa' },
                  { icon: Zap, value: 'Builds Apps 5x Faster', label: 'MVP Ready in Minutes', color: '#84cc16' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -3 }}
                    tabIndex={0}
                    className="group relative flex min-w-0 flex-1 items-center gap-2.5 rounded-xl px-3 py-1.5 outline-none transition-colors hover:bg-white/10 focus:bg-white/10">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 transition-transform group-hover:scale-110 group-focus:scale-110">
                      <item.icon size={18} style={{ color: item.color }} />
                    </span>
                    <span>
                      <span className="block text-[16px] font-medium leading-tight text-white">{item.value}</span>
                    </span>
                    <span className="pointer-events-none absolute left-1/2 top-full mt-3 w-max max-w-[210px] -translate-x-1/2 -translate-y-2 rounded-lg border border-white/15 bg-[#081d2c] px-3 py-2 text-center text-[13px] leading-tight text-white opacity-0 shadow-[0_10px_28px_rgba(0,0,0,0.28)] transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
                      {item.label}
                      <span className="absolute bottom-full left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rotate-45 border-l border-t border-white/15 bg-[#081d2c]" />
                    </span>
                    {index < 2 && <span className="ml-auto h-7 w-px bg-white/10" />}
                  </motion.div>
                ))}
              </motion.div>

              <div className="absolute -bottom-3 z-30 hidden items-center gap-3 lg:flex" style={{ right: 'calc(-8% - 32px)' }}>
                <a href="#" className="flex min-w-[138px] items-center gap-2 rounded-xl bg-black px-4 py-2.5 shadow-lg transition-transform duration-300 hover:-translate-y-0.5">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span><span className="block text-[8px] leading-none text-white/60">Download on the</span><span className="block text-[14px] font-medium leading-tight text-white">App Store</span></span>
                </a>
                <a href="#" className="flex min-w-[138px] items-center gap-2 rounded-xl bg-black px-4 py-2.5 shadow-lg transition-transform duration-300 hover:-translate-y-0.5">
                  <svg viewBox="0 0 24 24" width="20" height="20"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#4285F4"/><path d="M17.556 8.223L5.124.573l8.668 8.668 3.764-1.018z" fill="#EA4335"/><path d="M17.556 15.777l-3.764-3.764L5.124 23.427l12.432-7.65z" fill="#34A853"/><path d="M21.395 10.678l-3.839-2.455-4.764 3.764 4.764 3.79 3.839-2.455a1.19 1.19 0 000-2.644z" fill="#FBBC04"/></svg>
                  <span><span className="block text-[8px] leading-none text-white/60">GET IT ON</span><span className="block text-[14px] font-medium leading-tight text-white">Google Play</span></span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
