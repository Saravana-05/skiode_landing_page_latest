import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Zap, TrendingDown, Clock, Eye, Code, Brain, ArrowUpRight } from "lucide-react"

/* ── Animated counter ── */
function Counter({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const isNum = !isNaN(parseFloat(target))

  useEffect(() => {
    if (!inView || !isNum) return
    const end = parseFloat(target)
    const start = 0
    const startTime = performance.now()
    function tick(now) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(Math.round(start + (end - start) * ease))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, isNum, duration])

  return <span ref={ref}>{isNum ? count : target}{suffix}</span>
}

const items = [
  {
    icon: Zap, val: "5", suffix: "x", label: "Faster App Builds",
    desc: "Build production apps in weeks — not months",
    color: "#3b82f6", gradient: "linear-gradient(135deg, #3b82f6, #60a5fa)",
    ring: "rgba(59,130,246,0.15)",
  },
  {
    icon: TrendingDown, val: "70", suffix: "%", label: "Faster Cycle Times",
    desc: "Dramatic reduction in process turnaround",
    color: "#10b981", gradient: "linear-gradient(135deg, #10b981, #34d399)",
    ring: "rgba(16,185,129,0.15)",
  },
  {
    icon: Clock, val: "Minutes", suffix: "", label: "MVP Ready",
    desc: "From idea to working solution — instantly",
    color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
    ring: "rgba(139,92,246,0.15)",
  },
  {
    icon: Eye, val: "50", suffix: "%", label: "Operational Excellence",
    desc: "Improved across tech & business teams",
    color: "#f97316", gradient: "linear-gradient(135deg, #f97316, #fb923c)",
    ring: "rgba(249,115,22,0.15)",
  },
  {
    icon: Code, val: "10", suffix: "x", label: "Productivity Boost",
    desc: "Assured productivity for individuals & teams",
    color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #22d3ee)",
    ring: "rgba(6,182,212,0.15)",
  },
  {
    icon: Brain, val: "10", suffix: "x", label: "Cost Savings",
    desc: "On all digital & automation efforts",
    color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #f472b6)",
    ring: "rgba(236,72,153,0.15)",
  },
]

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, #0d1117 0%, #111827 50%, #0d1117 100%)" }} />
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      {/* Colored glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 60%)", filter: "blur(80px)" }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 60%)", filter: "blur(80px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold mb-6"
            style={{
              background: "rgba(59,130,246,0.1)",
              border: "1px solid rgba(59,130,246,0.2)",
              color: "#60a5fa",
            }}>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Real Results, Real Impact
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight"
          >
            <span className="text-white">Numbers that </span>
            <span style={{
              background: "linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              speak louder
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.4)" }}>
            Teams that adopt skiode see immediate improvements in speed, efficiency, and visibility.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-3xl p-6 cursor-default overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${s.ring}, transparent 70%)` }} />

              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: s.gradient }} />

              <div className="relative">
                {/* Icon + arrow */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${s.color}12`, border: `1px solid ${s.color}20` }}>
                    <s.icon size={20} style={{ color: s.color }} />
                  </div>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                    style={{ background: `${s.color}10` }}>
                    <ArrowUpRight size={14} style={{ color: s.color }} />
                  </div>
                </div>

                {/* Big number */}
                <div className="text-5xl sm:text-6xl font-black mb-2 tracking-tight transition-all duration-300"
                  style={{
                    background: s.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
                  <Counter target={s.val} suffix={s.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-base font-bold text-white/80 mb-1.5">{s.label}</h3>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>{s.desc}</p>

                {/* Bottom progress bar decoration */}
                <div className="mt-5 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 1.5, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: s.gradient }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-6 mt-14 flex-wrap"
        >
          {[
            "Enterprise-grade security",
            "ISO 27001 compliant",
            "99.9% uptime SLA",
            "24/7 support",
          ].map((tag) => (
            <span key={tag} className="flex items-center gap-2 text-xs font-medium" style={{ color: "rgba(255,255,255,0.25)" }}>
              <div className="w-1 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
