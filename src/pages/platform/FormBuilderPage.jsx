import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FileText, ArrowRight, GripVertical, Type, Mail, Phone, Calendar,
  Hash, ToggleLeft, List, Upload, MapPin, CheckSquare, AlignLeft,
  Sparkles, MousePointerClick, Wand2, Eye, Layers, PenTool, Boxes, X
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

const placeholders = {
  'Text Field': 'Enter your name',
  'Email': 'you@company.com',
  'Phone': '+91 98765 43210',
  'Date Picker': 'Select date',
  'Number': 'Enter a number',
  'Toggle': 'On / Off',
  'Dropdown': 'Choose department',
  'File Upload': 'Upload document',
  'Location': 'Enter address',
  'Checkbox': 'Select all that apply',
  'Text Area': 'Write a longer response',
}

const stats = [
  { value: '20+', label: 'Field Types', icon: Boxes },
  { value: '<30s', label: 'AI Generate', icon: Wand2 },
  { value: '100%', label: 'No-Code', icon: MousePointerClick },
  { value: '∞', label: 'Forms', icon: FileText },
]

const capabilities = [
  { icon: Layers, label: '20+ Field Types', desc: 'Text, date, dropdown, file, location, signature and more' },
  { icon: Wand2, label: 'AI Auto-Generate', desc: 'Describe your form in plain English, AI builds it instantly' },
  { icon: MousePointerClick, label: 'Drag & Drop Canvas', desc: 'Arrange fields visually with snap-to-grid alignment' },
  { icon: Eye, label: 'Live Preview', desc: 'See your form exactly as users will on web and mobile' },
]

export default function FormBuilderPage() {
  const [droppedFields, setDroppedFields] = useState([
    { id: 'starter-1', icon: Type, label: 'Full Name', placeholder: 'Enter your name' },
    { id: 'starter-2', icon: Mail, label: 'Email Address', placeholder: 'you@company.com' },
  ])
  const [isDragActive, setIsDragActive] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const canvasRef = useRef(null)
  const idCounter = useRef(0)

  const addField = (ft) => {
    idCounter.current += 1
    setDroppedFields(prev => [...prev, {
      id: `field-${idCounter.current}`,
      icon: ft.icon,
      label: ft.label,
      placeholder: placeholders[ft.label] || 'Field value',
    }])
    setHasInteracted(true)
  }

  const removeField = (id) => setDroppedFields(prev => prev.filter(f => f.id !== id))

  const handleFieldDragEnd = (ft, event) => {
    setIsDragActive(false)
    const rect = canvasRef.current?.getBoundingClientRect()
    const point = event.changedTouches ? event.changedTouches[0] : event
    if (rect && point.clientX >= rect.left && point.clientX <= rect.right && point.clientY >= rect.top && point.clientY <= rect.bottom) {
      addField(ft)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-10 relative overflow-hidden" style={{ background: '#164065' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold mb-4"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', color: '#ffffff' }}>
              <PenTool size={14} /> Form Builder
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-4xl font-extrabold mb-4 leading-tight" style={{ color: '#39ff14' }}>
              Build forms in minutes. Not months.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ease }}
              className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Drag fields onto the canvas, set validations, connect to workflows — all without writing code.
              20+ field types, conditional logic, and AI-powered form generation.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, ease }}
              className="flex flex-wrap gap-4 justify-center">
              <Link to="/request-demo" className="inline-flex items-center gap-2 text-base font-bold px-8 py-3.5 rounded-2xl transition-all hover:scale-105"
                style={{ background: '#ffffff', color: '#164065', boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}>
                Try Form Builder <ArrowRight size={18} />
              </Link>
              <Link to="/platform" className="inline-flex items-center gap-2 text-base font-bold text-white/80 hover:text-white px-7 py-3.5 rounded-2xl border border-white/25 hover:border-white/50 transition-all"
                style={{ background: 'rgba(255,255,255,0.04)' }}>
                Back to Platform
              </Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, ease }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, ease }}
                className="text-center p-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
                <s.icon size={20} className="text-white/70 mx-auto mb-2" />
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-xs text-slate-300 font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: '#164065' }}>Watch it build — live</h2>
            <p className="text-base text-slate-500">Try it yourself — drag any field from the palette and drop it onto the canvas</p>
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

            <div className="flex relative" style={{ background: '#ffffff', minHeight: 420 }}>
              <div className="w-44 p-3 border-r border-slate-100 space-y-1.5 relative" style={{ background: '#fafbfc' }}>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">Fields</div>
                {fieldTypes.slice(0, 8).map((ft) => (
                  <motion.div key={ft.label}
                    drag
                    dragSnapToOrigin
                    dragElastic={0.15}
                    dragMomentum={false}
                    whileDrag={{ scale: 1.1, zIndex: 50, boxShadow: '0 14px 28px rgba(0,0,0,0.18)' }}
                    onDragStart={() => setIsDragActive(true)}
                    onDragEnd={(e) => handleFieldDragEnd(ft, e)}
                    className="flex items-center gap-2 px-2.5 py-2 rounded-xl text-xs font-semibold cursor-grab active:cursor-grabbing select-none touch-none"
                    style={{ background: `${ft.color}08`, border: `1px solid ${ft.color}15`, color: ft.color }}>
                    <ft.icon size={13} />
                    {ft.label}
                  </motion.div>
                ))}

                {/* Hint arrow — pointing at the canvas, fades once the visitor drags something */}
                <AnimatePresence>
                  {!hasInteracted && (
                    <motion.svg initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute pointer-events-none hidden sm:block"
                      style={{ top: 128, left: 148, width: 70, height: 40, zIndex: 20 }}
                      viewBox="0 0 70 40" fill="none">
                      <motion.path d="M3 6 C 30 2, 45 32, 64 30" stroke="#164065" strokeWidth="2" strokeLinecap="round"
                        strokeDasharray="4 5" animate={{ strokeDashoffset: [0, -18] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />
                      <path d="M64 30 L57 26 M64 30 L60 37" stroke="#164065" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex-1 p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-slate-700">Employee Onboarding Form</span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: '#164065' }}>
                    <Sparkles size={12} /> AI Assist
                  </span>
                </div>

                <div ref={canvasRef} className="space-y-2.5 rounded-2xl p-1.5 transition-colors duration-150"
                  style={isDragActive ? { background: 'rgba(22,64,101,0.05)', outline: '2px dashed rgba(22,64,101,0.4)', outlineOffset: '-2px' } : {}}>
                  <AnimatePresence initial={false}>
                    {droppedFields.map((field) => (
                      <motion.div key={field.id} layout
                        initial={{ opacity: 0, x: -40, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.4, ease, type: 'spring', stiffness: 120 }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 bg-white group transition-all"
                        style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                        <GripVertical size={12} className="text-slate-300" />
                        <field.icon size={15} style={{ color: '#164065' }} />
                        <div className="flex-1">
                          <div className="text-xs font-bold text-slate-700">{field.label}</div>
                          <div className="text-[10px] text-slate-400">{field.placeholder}</div>
                        </div>
                        <button onClick={() => removeField(field.id)} aria-label={`Remove ${field.label}`}
                          className="w-6 h-6 rounded-lg flex items-center justify-center bg-slate-50 opacity-0 group-hover:opacity-100 hover:bg-red-50 transition-all">
                          <X size={12} className="text-slate-400 hover:text-red-500" />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  <motion.div layout
                    animate={isDragActive ? { opacity: 1, scale: 1.01 } : { opacity: [0.35, 0.7, 0.35] }}
                    transition={isDragActive ? { duration: 0.15 } : { repeat: Infinity, duration: 1.6 }}
                    className="flex items-center justify-center py-5 rounded-xl border-2 border-dashed transition-colors"
                    style={{ borderColor: isDragActive ? '#164065' : '#bfdbfe' }}>
                    <span className="text-xs font-semibold" style={{ color: isDragActive ? '#164065' : '#93c5fd' }}>
                      {isDragActive ? 'Release to drop field' : 'Drag a field here to add it'}
                    </span>
                  </motion.div>

                  {droppedFields.length >= 4 && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2.5 px-4 py-3 rounded-xl mt-2"
                      style={{ background: 'rgba(22,64,101,0.06)', border: '1px solid rgba(22,64,101,0.2)' }}>
                      <Sparkles size={14} style={{ color: '#164065' }} />
                      <span className="text-xs font-bold" style={{ color: '#164065' }}>
                        Form ready! {droppedFields.length} fields configured with validations.
                      </span>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-12" style={{ background: '#f8fafc' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: '#164065' }}>Why teams love Form Builder</h2>
            <p className="text-base text-slate-500">Everything you need to create enterprise-grade forms</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, ease }}
                className="group p-6 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform"
                  style={{ background: '#164065' }}>
                  <cap.icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-extrabold mb-2" style={{ color: '#164065' }}>{cap.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: '#164065' }}>See it in action</h2>
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
    </>
  )
}
