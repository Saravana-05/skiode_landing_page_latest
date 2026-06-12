import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  BarChart2, ArrowRight, PieChart, TrendingUp, Activity,
  Sparkles, CheckCircle2, Filter, Download, Eye,
  Zap, LayoutDashboard, Target, Boxes
} from 'lucide-react'
import dashboardScreenshot from '../../assets/platform_screenshots/dashboard_reports.png'

const ease = [0.25, 0.46, 0.45, 0.94]

const stats = [
  { value: '15+', label: 'Chart Types', icon: BarChart2 },
  { value: 'Real-time', label: 'Live Data', icon: Activity },
  { value: 'AI', label: 'Insights', icon: Sparkles },
  { value: '∞', label: 'Dashboards', icon: LayoutDashboard },
]

const widgets = [
  { type: 'kpi', label: 'Revenue', value: '$2.4M', change: '+12.5%', positive: true },
  { type: 'kpi', label: 'Active Users', value: '18,432', change: '+8.3%', positive: true },
  { type: 'kpi', label: 'Avg Response', value: '1.2s', change: '-23%', positive: true },
  { type: 'kpi', label: 'Tickets Open', value: '47', change: '+5', positive: false },
]

const chartWidgets = [
  { type: 'bar', label: 'Monthly Revenue', data: [40, 65, 50, 80, 60, 90, 75] },
  { type: 'pie', label: 'Traffic Sources', segments: [
    { label: 'Direct', pct: 35, color: '#3b82f6' },
    { label: 'Organic', pct: 30, color: '#10b981' },
    { label: 'Referral', pct: 20, color: '#8b5cf6' },
    { label: 'Social', pct: 15, color: '#f59e0b' },
  ]},
  { type: 'trend', label: 'User Growth', data: [20, 35, 28, 45, 55, 48, 65, 72, 60, 80] },
]

const features = [
  { icon: BarChart2, label: '15+ Chart Types', desc: 'Bar, line, pie, donut, area, scatter, heatmap, funnel and more', gradient: 'from-blue-500 to-cyan-400' },
  { icon: Filter, label: 'Dynamic Filters', desc: 'Date ranges, dropdowns, and search — filter data in real-time', gradient: 'from-violet-500 to-purple-400' },
  { icon: Sparkles, label: 'AI Insights', desc: 'AI detects anomalies, trends, and generates plain-English summaries', gradient: 'from-emerald-500 to-teal-400' },
  { icon: Download, label: 'Export & Share', desc: 'PDF, Excel, PNG — schedule automated reports via email', gradient: 'from-amber-500 to-orange-400' },
]

function MiniBar({ data }) {
  const max = Math.max(...data)
  return (
    <div className="flex items-end gap-1.5 h-24">
      {data.map((v, i) => (
        <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${(v / max) * 100}%` }}
          transition={{ delay: 0.1 * i, duration: 0.5, ease }}
          className="flex-1 rounded-md"
          style={{ background: `linear-gradient(180deg, #3b82f6, #06b6d4)`, minWidth: 8 }} />
      ))}
    </div>
  )
}

function MiniPie({ segments }) {
  let cumulative = 0
  const gradientParts = segments.map(s => {
    const start = cumulative
    cumulative += s.pct
    return `${s.color} ${start}% ${cumulative}%`
  })
  return (
    <div className="flex items-center gap-4">
      <motion.div initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease }}
        className="w-20 h-20 rounded-full flex-shrink-0"
        style={{ background: `conic-gradient(${gradientParts.join(', ')})` }} />
      <div className="space-y-1">
        {segments.map(s => (
          <div key={s.label} className="flex items-center gap-2 text-[10px]">
            <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
            <span className="text-slate-600 font-semibold">{s.label} ({s.pct}%)</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MiniTrend({ data }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const points = data.map((v, i) => `${(i / (data.length - 1)) * 100},${100 - ((v - min) / range) * 80}`).join(' ')
  return (
    <svg viewBox="0 0 100 100" className="w-full h-20" preserveAspectRatio="none">
      <motion.polyline initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease }}
        points={points} fill="none" stroke="url(#trendGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="trendGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function DashboardsPage() {
  const [visibleWidgets, setVisibleWidgets] = useState(0)
  const [chartsVisible, setChartsVisible] = useState(false)

  useEffect(() => {
    const timers = []
    widgets.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleWidgets(i + 1), 400 + i * 300))
    })
    timers.push(setTimeout(() => setChartsVisible(true), 400 + widgets.length * 300 + 200))
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)' }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold mb-6"
              style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', color: '#60a5fa' }}>
              <LayoutDashboard size={16} /> Dashboards & Reports
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              See everything.{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #34d399, #fbbf24)' }}>
                Decide faster.
              </span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ease }}
              className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Drag widgets onto your canvas — KPI cards, bar charts, pie charts, trend lines.
              Connect live data, add filters, and share with your team. No code.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, ease }}
              className="flex flex-wrap gap-4 justify-center">
              <Link to="/request-demo" className="inline-flex items-center gap-2 text-base font-bold text-white px-8 py-3.5 rounded-2xl transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #10b981)', boxShadow: '0 4px 24px rgba(59,130,246,0.4)' }}>
                Try Dashboards <ArrowRight size={18} />
              </Link>
              <Link to="/platform" className="inline-flex items-center gap-2 text-base font-bold text-slate-300 hover:text-white px-7 py-3.5 rounded-2xl border border-slate-600 hover:border-slate-400 transition-all"
                style={{ background: 'rgba(255,255,255,0.04)' }}>
                Back to Platform
              </Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, ease }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, ease }}
                className="text-center p-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
                <s.icon size={20} className="text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-xs text-slate-400 font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Watch it build — live</h2>
            <p className="text-base text-slate-500">KPI cards and charts populate as you add widgets</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden mx-auto"
            style={{ border: '1px solid #e2e8f0', boxShadow: '0 25px 80px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between px-5 py-3" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-slate-400 font-medium">skiode — Dashboard Builder</span>
              </div>
              {chartsVisible && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>
                  <CheckCircle2 size={14} /> Dashboard Ready
                </div>
              )}
            </div>

            <div className="p-6 bg-white" style={{ minHeight: 420 }}>
              {/* KPI Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <AnimatePresence>
                  {widgets.slice(0, visibleWidgets).map((w) => (
                    <motion.div key={w.label}
                      initial={{ opacity: 0, y: 15, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.4, ease }}
                      className="p-4 rounded-2xl border border-slate-100"
                      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">{w.label}</div>
                      <div className="text-xl font-extrabold text-slate-900">{w.value}</div>
                      <div className={`text-xs font-bold mt-1 ${w.positive ? 'text-emerald-500' : 'text-red-500'}`}>
                        {w.change}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Charts */}
              {chartsVisible && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="grid sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl border border-slate-100">
                    <div className="text-xs font-bold text-slate-700 mb-3">{chartWidgets[0].label}</div>
                    <MiniBar data={chartWidgets[0].data} />
                  </div>
                  <div className="p-4 rounded-2xl border border-slate-100">
                    <div className="text-xs font-bold text-slate-700 mb-3">{chartWidgets[1].label}</div>
                    <MiniPie segments={chartWidgets[1].segments} />
                  </div>
                  <div className="p-4 rounded-2xl border border-slate-100">
                    <div className="text-xs font-bold text-slate-700 mb-3">{chartWidgets[2].label}</div>
                    <MiniTrend data={chartWidgets[2].data} />
                  </div>
                </motion.div>
              )}

              {chartsVisible && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl mt-4"
                  style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(59,130,246,0.08))', border: '1px solid rgba(16,185,129,0.2)' }}>
                  <Sparkles size={14} className="text-emerald-500" />
                  <span className="text-xs font-bold text-emerald-600">Dashboard ready — 4 KPIs + 3 charts configured</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Why teams love Dashboards</h2>
            <p className="text-base text-slate-500">Everything you need for data-driven decisions</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, ease }}
                className="group p-6 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <f.icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2">{f.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">See it in action</h2>
            <p className="text-base text-slate-500">The actual skiode dashboard builder</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden" style={{ border: '1px solid #e2e8f0', boxShadow: '0 30px 80px rgba(0,0,0,0.1)' }}>
            <div className="flex items-center gap-2 px-5 py-3" style={{ background: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}>
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-slate-400 font-medium">skiode — Dashboard Reports</span>
            </div>
            <img src={dashboardScreenshot} alt="skiode Dashboards" className="w-full" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to visualize your data?</h2>
          <p className="text-base text-slate-400 mb-8">Build dashboards in minutes, not weeks</p>
          <Link to="/request-demo" className="inline-flex items-center gap-2 text-base font-bold text-white px-8 py-4 rounded-2xl transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #10b981)', boxShadow: '0 4px 24px rgba(59,130,246,0.4)' }}>
            Request Demo <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
