import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FileText, ArrowRight, GripVertical, Type, Mail, Phone, Calendar,
  Hash, ToggleLeft, List, Upload, MapPin, CheckSquare, AlignLeft,
  Sparkles, MousePointerClick, Wand2, Eye, Layers, Zap, PenTool, Boxes
} from 'lucide-react'
import formsScreenshot from '../../assets/platform_screenshots/forms.png'

const ease = [0.25, 0.46, 0.45, 0.94]

const fieldTypes = [
  { icon: Type, label: 'Text Field', color: '#3b82f6' },
  { icon: Mail, label: 'Email', color: '#8b5cf6' },
  { icon: Phone, label: 'Phone', color: '#06b6d4' },
  { icon: Calendar, label: 'Date Picker', color: '#10b981' },
  { icon: Hash, label: 'Number', color: '#f59e0b' },
  { icon: ToggleLeft, label: 'Toggle', color: '#ec4899' },
  { icon: List, label: 'Dropdown', color: '#6366f1' },
  { icon: Upload, label: 'File Upload', color: '#14b8a6' },
  { icon: MapPin, label: 'Location', color: '#ef4444' },
  { icon: CheckSquare, label: 'Checkbox', color: '#84cc16' },
  { icon: AlignLeft, label: 'Text Area', color: '#a855f7' },
]

const demoFields = [
  { icon: Type, label: 'Full Name', type: 'text', placeholder: 'Enter your name' },
  { icon: Mail, label: 'Email Address', type: 'email', placeholder: 'you@company.com' },
  { icon: Phone, label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210' },
  { icon: Calendar, label: 'Start Date', type: 'date', placeholder: 'Select date' },
  { icon: List, label: 'Department', type: 'dropdown', placeholder: 'Choose department' },
  { icon: Upload, label: 'Attachment', type: 'file', placeholder: 'Upload document' },
]

const stats = [
  { value: '20+', label: 'Field Types', icon: Boxes },
  { value: '<30s', label: 'AI Generate', icon: Wand2 },
  { value: '100%', label: 'No-Code', icon: MousePointerClick },
  { value: '∞', label: 'Forms', icon: FileText },
]

const capabilities = [
  { icon: Layers, label: '20+ Field Types', desc: 'Text, date, dropdown, file, location, signature and more', gradient: 'from-blue-500 to-cyan-400' },
  { icon: Wand2, label: 'AI Auto-Generate', desc: 'Describe your form in plain English, AI builds it instantly', gradient: 'from-violet-500 to-purple-400' },
  { icon: MousePointerClick, label: 'Drag & Drop Canvas', desc: 'Arrange fields visually with snap-to-grid alignment', gradient: 'from-emerald-500 to-teal-400' },
  { icon: Eye, label: 'Live Preview', desc: 'See your form exactly as users will on web and mobile', gradient: 'from-amber-500 to-orange-400' },
]

export default function FormBuilderPage() {
  const [droppedFields, setDroppedFields] = useState([])
  const [dragging, setDragging] = useState(null)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const timers = []
    demoFields.forEach((field, i) => {
      timers.push(setTimeout(() => {
        setDroppedFields(prev => [...prev, field])
        setDragging(i < demoFields.length - 1 ? i + 1 : null)
      }, 1200 + i * 800))
    })
    timers.push(setTimeout(() => setPhase(1), 1200 + demoFields.length * 800 + 500))
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
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)' }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold mb-6"
              style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.25)', color: '#60a5fa' }}>
              <PenTool size={16} /> Form Builder
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Build forms in minutes.{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #60a5fa, #06b6d4, #34d399)' }}>
                Not months.
              </span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ease }}
              className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Drag fields onto the canvas, set validations, connect to workflows — all without writing code.
              20+ field types, conditional logic, and AI-powered form generation.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, ease }}
              className="flex flex-wrap gap-4 justify-center">
              <Link to="/request-demo" className="inline-flex items-center gap-2 text-base font-bold text-white px-8 py-3.5 rounded-2xl transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', boxShadow: '0 4px 24px rgba(59,130,246,0.4)' }}>
                Try Form Builder <ArrowRight size={18} />
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
            <p className="text-base text-slate-500">Fields drag from the palette and drop onto the canvas automatically</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden mx-auto"
            style={{ border: '1px solid #e2e8f0', boxShadow: '0 25px 80px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center gap-2 px-5 py-3" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-slate-400 font-medium">skiode — Form Builder</span>
            </div>

            <div className="flex" style={{ background: '#ffffff', minHeight: 420 }}>
              <div className="w-44 p-3 border-r border-slate-100 space-y-1.5" style={{ background: '#fafbfc' }}>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">Fields</div>
                {fieldTypes.slice(0, 8).map((ft, i) => (
                  <motion.div key={ft.label}
                    animate={dragging === i ? { x: [0, 10, 0], scale: [1, 1.05, 1], opacity: [1, 0.5, 1] } : {}}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs font-semibold cursor-grab"
                    style={{ background: `${ft.color}08`, border: `1px solid ${ft.color}15`, color: ft.color }}>
                    <ft.icon size={13} />
                    {ft.label}
                  </motion.div>
                ))}
              </div>

              <div className="flex-1 p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-slate-700">Employee Onboarding Form</span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-blue-500">
                    <Sparkles size={12} /> AI Assist
                  </span>
                </div>

                <div className="space-y-2.5">
                  <AnimatePresence>
                    {droppedFields.map((field) => (
                      <motion.div key={field.label}
                        initial={{ opacity: 0, x: -40, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.5, ease, type: 'spring', stiffness: 120 }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 bg-white group hover:border-blue-200 transition-all"
                        style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                        <GripVertical size={12} className="text-slate-300" />
                        <field.icon size={15} className="text-blue-500" />
                        <div className="flex-1">
                          <div className="text-xs font-bold text-slate-700">{field.label}</div>
                          <div className="text-[10px] text-slate-400">{field.placeholder}</div>
                        </div>
                        <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-slate-50">
                          <Zap size={10} className="text-slate-400" />
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {droppedFields.length < demoFields.length && (
                    <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }}
                      className="flex items-center justify-center py-5 rounded-xl border-2 border-dashed border-blue-200">
                      <span className="text-xs text-blue-400 font-semibold">Drop field here...</span>
                    </motion.div>
                  )}

                  {phase >= 1 && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2.5 px-4 py-3 rounded-xl mt-2"
                      style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(6,182,212,0.08))', border: '1px solid rgba(16,185,129,0.2)' }}>
                      <Sparkles size={14} className="text-emerald-500" />
                      <span className="text-xs font-bold text-emerald-600">Form ready! 6 fields configured with validations.</span>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Why teams love Form Builder</h2>
            <p className="text-base text-slate-500">Everything you need to create enterprise-grade forms</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, ease }}
                className="group p-6 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <cap.icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2">{cap.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>
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
            <p className="text-base text-slate-500">The actual skiode form builder</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden"
            style={{ border: '1px solid #e2e8f0', boxShadow: '0 30px 80px rgba(0,0,0,0.1)' }}>
            <div className="flex items-center gap-2 px-5 py-3" style={{ background: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}>
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-slate-400 font-medium">skiode — Live Form Builder</span>
            </div>
            <img src={formsScreenshot} alt="skiode Form Builder" className="w-full" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to build your first form?</h2>
          <p className="text-base text-slate-400 mb-8">Get started free — no credit card required</p>
          <Link to="/request-demo" className="inline-flex items-center gap-2 text-base font-bold text-white px-8 py-4 rounded-2xl transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', boxShadow: '0 4px 24px rgba(59,130,246,0.4)' }}>
            Request Demo <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
