import { Link } from "react-router-dom"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Play, CheckCircle2, TrendingUp, Zap, Smartphone, Monitor } from "lucide-react"
import { useRef } from "react"
import platformScreenshot from "../assets/hero_platform.png"
import mobileScreenshot from "../assets/skiode_mob_screen.jpeg"

/* Prodmast-style smooth easing */
const ease = [0.25, 0.46, 0.45, 0.94]

const smooth = (delay = 0) => ({
  initial: { opacity: 0, y: 50, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease },
})

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full relative">
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
              className="text-4xl sm:text-5xl xl:text-[3.4rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight"
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
              {...smooth(0.4)}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <Link
                to="/request-demo"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg,#3b82f6,#06b6d4)",
                  boxShadow: "0 8px 32px rgba(59,130,246,0.45), 0 0 0 1px rgba(96,165,250,0.2)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Request Demo
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
              <a
                href="#platform"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-sm text-slate-700 transition-all duration-300 hover:bg-slate-100"
                style={{ border: "1.5px solid rgba(0,0,0,0.12)" }}
              >
                <div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center">
                  <Play size={10} className="ml-0.5" />
                </div>
                Explore Platform
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
              className="flex flex-wrap gap-x-5 gap-y-2 mb-8"
            >
              {[
                { label: "Low-Code + RPA + AI/ML", color: "#3b82f6" },
                { label: "Process Orchestration", color: "#8b5cf6" },
                { label: "50+ Integrations", color: "#10b981" },
                { label: "Configurable Bots", color: "#f59e0b" },
              ].map((t, i) => (
                <motion.span
                  key={t.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.08, ease }}
                  className="flex items-center gap-1.5 text-xs text-slate-500"
                >
                  <CheckCircle2 size={11} style={{ color: t.color }} /> {t.label}
                </motion.span>
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
              <div className="flex -space-x-2">
                {["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b", "#06b6d4"].map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + i * 0.06, type: "spring", stiffness: 300 }}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white ring-2 ring-white"
                    style={{ background: `linear-gradient(135deg,${c},${c}88)` }}>
                    {["A", "M", "S", "R", "J"][i]}
                  </motion.div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.1 + i * 0.05, type: "spring" }}
                      className="w-2.5 h-2.5 rounded-sm" style={{ background: "#f59e0b" }} />
                  ))}
                </div>
                <p className="text-xs text-slate-400">Trusted by 500+ enterprise teams</p>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Desktop + Phone (7 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: 80, filter: "blur(12px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.3, ease }}
            style={{ y: imageY }}
            className="lg:col-span-7 relative"
          >
            <motion.div style={{ scale: imageScale }} className="relative">

              {/* ── Desktop mockup ── */}
              <div className="relative" style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.2))" }}>
                {/* Glow */}
                <motion.div
                  animate={{ opacity: [0.15, 0.25, 0.15] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-3 rounded-3xl pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(59,130,246,0.5), rgba(6,182,212,0.3))",
                    filter: "blur(25px)",
                  }} />

                <div className="relative rounded-2xl overflow-hidden"
                  style={{ border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
                  <div className="flex items-center justify-between px-4 py-2.5"
                    style={{ background: "#0d1117", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-lg" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>
                        skiode — Enterprise Workspace
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: "linear-gradient(135deg,#3b82f6,#06b6d4)" }}>A</div>
                  </div>

                  <img src={platformScreenshot} alt="skiode platform workspace"
                    className="block w-full h-auto" />
                </div>

                {/* Web Platform label */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                  transition={{
                    opacity: { duration: 0.6, delay: 0.8 },
                    scale: { duration: 0.6, delay: 0.8 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                  }}
                  className="absolute -top-4 left-4 flex items-center gap-1.5 rounded-xl px-3 py-2 shadow-lg z-30"
                  style={{
                    background: "rgba(59,130,246,0.95)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(96,165,250,0.4)",
                  }}>
                  <Monitor size={11} color="white" />
                  <span className="text-[10px] font-bold text-white">Web Platform</span>
                </motion.div>
              </div>

              {/* ── Phone mockup ── */}
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.7, ease }}
                className="absolute right-[-20px] lg:right-[-30px] bottom-[-40px] z-20 hidden sm:block"
                style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))" }}
              >
                <div className="absolute -inset-3 rounded-[32px] opacity-25 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(139,92,246,0.5), rgba(6,182,212,0.3))",
                    filter: "blur(18px)",
                  }} />

                <div className="relative rounded-[30px] overflow-hidden"
                  style={{
                    width: "170px",
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

                  <div className="relative overflow-hidden" style={{ height: "260px" }}>
                    <img src={mobileScreenshot} alt="skiode mobile app"
                      style={{
                        display: "block",
                        width: "320%",
                        height: "auto",
                        objectFit: "cover",
                        transform: "translateX(-8%) translateY(-3%)",
                      }} />
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

                {/* Mobile App label */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
                  transition={{
                    opacity: { duration: 0.6, delay: 1 },
                    scale: { duration: 0.6, delay: 1 },
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                  }}
                  className="absolute -top-3 -left-3 flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 shadow-lg z-30"
                  style={{
                    background: "rgba(139,92,246,0.95)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(167,139,250,0.4)",
                  }}>
                  <Smartphone size={10} color="white" />
                  <span className="text-[9px] font-bold text-white">Mobile App</span>
                </motion.div>

                <div className="flex items-center gap-1.5 mt-2.5 justify-center">
                  <a href="#" className="flex items-center gap-1 rounded-lg px-2 py-1.5 transition-all duration-300 hover:scale-105"
                    style={{ background: "#000", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="white">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div>
                      <div className="text-[5px] text-white/60 leading-none">Download on the</div>
                      <div className="text-[8px] font-bold text-white leading-tight">App Store</div>
                    </div>
                  </a>
                  <a href="#" className="flex items-center gap-1 rounded-lg px-2 py-1.5 transition-all duration-300 hover:scale-105"
                    style={{ background: "#000", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <svg viewBox="0 0 24 24" width="12" height="12">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#4285F4"/>
                      <path d="M17.556 8.223L5.124.573l8.668 8.668 3.764-1.018z" fill="#EA4335"/>
                      <path d="M17.556 15.777l-3.764-3.764L5.124 23.427l12.432-7.65z" fill="#34A853"/>
                      <path d="M21.395 10.678l-3.839-2.455-4.764 3.764 4.764 3.79 3.839-2.455a1.19 1.19 0 000-2.644z" fill="#FBBC04"/>
                    </svg>
                    <div>
                      <div className="text-[5px] text-white/60 leading-none">GET IT ON</div>
                      <div className="text-[8px] font-bold text-white leading-tight">Google Play</div>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* ── Floating stat badges ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 1.2 },
                  scale: { duration: 0.6, delay: 1.2, type: "spring" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                }}
                className="absolute -top-5 right-12 hidden sm:flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 shadow-2xl z-30"
                style={{
                  background: "rgba(16,185,129,0.95)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(16,185,129,0.5)",
                }}>
                <div className="w-7 h-7 rounded-xl flex items-center justify-center bg-white/20">
                  <Zap size={13} color="white" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-white">Builds Apps 5x Faster</div>
                  <div className="text-xs text-white/75">MVP ready in minutes</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1, y: [0, 8, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 1.4 },
                  scale: { duration: 0.6, delay: 1.4, type: "spring" },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
                }}
                className="absolute -bottom-5 left-4 hidden sm:flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 shadow-2xl z-30"
                style={{
                  background: "rgba(59,130,246,0.95)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(96,165,250,0.4)",
                }}>
                <div className="w-7 h-7 rounded-xl flex items-center justify-center bg-white/20">
                  <CheckCircle2 size={13} color="white" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-white">70% Faster Cycle Times</div>
                  <div className="text-xs text-white/75">Operational excellence</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 1.6 },
                  scale: { duration: 0.6, delay: 1.6, type: "spring" },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
                }}
                className="absolute top-1/2 -left-4 hidden lg:flex items-center gap-2 rounded-xl px-3 py-2 shadow-xl z-30"
                style={{
                  background: "rgba(13,27,62,0.95)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(139,92,246,0.3)",
                }}>
                <TrendingUp size={12} style={{ color: "#a78bfa" }} />
                <div>
                  <div className="text-xs font-bold text-white">10x Productivity</div>
                  <div style={{ fontSize: "9px" }} className="text-white/40">for individuals & teams</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
