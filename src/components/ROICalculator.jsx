import { useState } from "react"
import { motion } from "framer-motion"
import { DollarSign, Clock, TrendingUp, Zap, Users, ArrowRight, Calculator } from "lucide-react"

function Slider({ label, icon: Icon, color, min, max, step, value, onChange, format }) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${color}15` }}>
            <Icon size={13} style={{ color }} />
          </div>
          <span className="text-sm font-semibold text-slate-700">{label}</span>
        </div>
        <span className="text-sm font-extrabold" style={{ color }}>{format(value)}</span>
      </div>
      <div className="relative h-2 rounded-full bg-slate-100">
        <div className="absolute left-0 top-0 h-full rounded-full" style={{ width: `${pct}%`, background: `linear-gradient(90deg,${color},${color}99)` }} />
        <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(+e.target.value)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-lg" style={{ left: `calc(${pct}% - 8px)`, background: color }} />
      </div>
      <div className="flex justify-between text-xs text-slate-300">
        <span>{format(min)}</span><span>{format(max)}</span>
      </div>
    </div>
  )
}

export default function ROICalculator() {
  const [employees, setEmployees] = useState(50)
  const [hoursPerWeek, setHoursPerWeek] = useState(10)
  const [hourlyCost, setHourlyCost] = useState(40)
  const [approvals, setApprovals] = useState(100)

  const weeklySaving = employees * hoursPerWeek * 0.7 * hourlyCost
  const annualSaving = weeklySaving * 52
  const approvalTime = approvals * 2.5 * 52
  const approvalSaved = approvalTime * hourlyCost
  const totalROI = annualSaving + approvalSaved
  const roi3yr = totalROI * 3
  const payback = Math.round(12000 / (totalROI / 12))

  const fmt = v => `$${v.toLocaleString()}`
  const fmtH = v => `${v}h`

  return (
    <section className="py-24" id="roi" style={{ background: "linear-gradient(135deg,#0a1628,#1e1b4b)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(163,230,53,0.1)", border: "1px solid rgba(163,230,53,0.25)", color: "#a3e635" }}>
            <Calculator size={11} /> ROI Calculator
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            See your exact savings<br className="hidden sm:block" /> before you commit
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-xl mx-auto">
            Drag the sliders to reflect your team. Our model calculates time and cost savings in real time.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Sliders */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-3xl p-8 space-y-7"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(20px)" }}>
            <h3 className="font-extrabold text-white text-lg mb-2">Your Organization</h3>
            <Slider label="Total Employees" icon={Users} color="#3b82f6" min={10} max={500} step={5} value={employees} onChange={setEmployees} format={v => `${v} people`} />
            <Slider label="Hours Wasted on Manual Work/Week" icon={Clock} color="#8b5cf6" min={2} max={40} step={1} value={hoursPerWeek} onChange={setHoursPerWeek} format={fmtH} />
            <Slider label="Average Hourly Cost (USD)" icon={DollarSign} color="#10b981" min={15} max={150} step={5} value={hourlyCost} onChange={setHourlyCost} format={v => `$${v}`} />
            <Slider label="Monthly Approval Tasks" icon={Zap} color="#f59e0b" min={10} max={500} step={10} value={approvals} onChange={setApprovals} format={v => `${v} tasks`} />
            <div className="pt-2 text-xs text-white/30 text-center">* Based on industry benchmarks. Assumes 70% automation efficiency.</div>
          </motion.div>

          {/* Results */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
            {[
              { label: "Annual Labour Savings", value: fmt(Math.round(annualSaving)), sub: "From automating manual hours", color: "#3b82f6", icon: Clock },
              { label: "Annual Approval Savings", value: fmt(Math.round(approvalSaved)), sub: "From automated workflows", color: "#10b981", icon: Zap },
              { label: "Total Annual Savings", value: fmt(Math.round(totalROI)), sub: "Combined productivity + approvals", color: "#a3e635", icon: TrendingUp, large: true },
              { label: "3-Year Total ROI", value: fmt(Math.round(roi3yr)), sub: "Cumulative over 36 months", color: "#f59e0b", icon: DollarSign },
              { label: "Payback Period", value: `~${payback} months`, sub: "Based on $12,000/yr starting plan", color: "#ec4899", icon: ArrowRight },
            ].map((r, i) => (
              <motion.div key={r.label} layout
                className={`flex items-center justify-between px-6 py-4 rounded-2xl border transition-all ${r.large ? "py-6" : ""}`}
                style={{ background: r.large ? `${r.color}10` : "rgba(255,255,255,0.04)", borderColor: r.large ? `${r.color}40` : "rgba(255,255,255,0.08)" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${r.color}20` }}>
                    <r.icon size={16} style={{ color: r.color }} />
                  </div>
                  <div>
                    <div className={`font-semibold text-white ${r.large ? "text-base" : "text-sm"}`}>{r.label}</div>
                    <div className="text-xs text-white/40">{r.sub}</div>
                  </div>
                </div>
                <div className={`font-extrabold flex-shrink-0 ${r.large ? "text-3xl" : "text-xl"}`} style={{ color: r.color }}>{r.value}</div>
              </motion.div>
            ))}

            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-2xl font-extrabold text-slate-900 text-base flex items-center justify-center gap-2 mt-2"
              style={{ background: "linear-gradient(135deg,#a3e635,#4ade80)" }}>
              Get Custom ROI Analysis <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
