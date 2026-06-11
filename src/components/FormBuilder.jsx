import { useState } from "react"
import { motion } from "framer-motion"
import {
  Type, Hash, Calendar, ChevronDown, Upload, PenLine, Table, AlignLeft,
  MousePointerClick, CheckCircle2, Settings, GripVertical, Database,
  Shield, Zap, ArrowRight, Eye, FileText, Layers
} from "lucide-react"
import { FormBuilderPlaceholder } from "./Placeholders"

const sidebarFields = [
  { icon: Type,             name: "Text",         color: "#3b82f6" },
  { icon: AlignLeft,        name: "Textarea",      color: "#6366f1" },
  { icon: Hash,             name: "Number",        color: "#8b5cf6" },
  { icon: Calendar,         name: "Date",          color: "#06b6d4" },
  { icon: ChevronDown,      name: "Dropdown",      color: "#10b981" },
  { icon: Layers,           name: "Multi Select",  color: "#14b8a6" },
  { icon: CheckCircle2,     name: "Checkbox",      color: "#f59e0b" },
  { icon: MousePointerClick,name: "Radio",         color: "#f97316" },
  { icon: Table,            name: "Table",         color: "#ec4899" },
  { icon: Upload,           name: "File",          color: "#a78bfa" },
  { icon: PenLine,          name: "Signature",     color: "#e11d48" },
  { icon: Database,         name: "Default Field", color: "#64748b" },
]

const canvasFields = [
  { label: "Employee Name",   type: "text",   val: "Arjun Sharma",    required: true,  active: true  },
  { label: "Department",      type: "select", val: "Engineering",     required: true,  active: false },
  { label: "Joining Date",    type: "date",   val: "2026-01-15",      required: true,  active: false },
  { label: "Manager",        type: "select", val: "Priya Nair",      required: false, active: false },
]

const propPanel = [
  { l: "Field Label",    v: "Employee Name",  type: "text"   },
  { l: "Required",       v: "Yes",            type: "toggle" },
  { l: "Validation",     v: "Min 3 characters", type: "text" },
  { l: "Visibility",     v: "Always visible", type: "text"   },
  { l: "Default Value",  v: "None",           type: "text"   },
  { l: "API Binding",    v: "user.fullName",  type: "code"   },
]

const steps = [
  { num: "01", icon: FileText, title: "Create Record",      desc: "Name your form and set its purpose & context",     color: "#3b82f6" },
  { num: "02", icon: Shield,   title: "Configure Access",   desc: "Add user groups with Read / Write permissions",     color: "#8b5cf6" },
  { num: "03", icon: Layers,   title: "Drag Fields",        desc: "Drag-and-drop field types onto the form canvas",    color: "#06b6d4" },
  { num: "04", icon: Zap,      title: "Set Rules",          desc: "Add validations, conditions, and API bindings",     color: "#10b981" },
  { num: "05", icon: Eye,      title: "Publish & Use",      desc: "Save structure and use in workflows or dashboards", color: "#f59e0b" },
]

const features = [
  "Drag-and-drop field builder",
  "Conditional visibility rules",
  "Field-level validations",
  "Multi-step form wizard",
  "File upload with preview",
  "Auto-save drafts",
  "Approval workflow binding",
  "API data model binding",
]

export default function FormBuilder() {
  const [activeField, setActiveField] = useState(0)

  return (
    <section className="py-24 relative overflow-hidden" id="forms" style={{ background: "linear-gradient(180deg,#f8faff 0%,#eef2ff 100%)" }}>
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(59,130,246,0.3),transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", color: "#3b82f6" }}>
            <Layers size={11} /> Forms &amp; Core Data
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Build enterprise forms &amp; data structures{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">visually</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto">
            Define your core data records, drag fields onto a canvas, configure validations and governance — then connect directly to workflows and dashboards.
          </motion.p>
        </div>

        {/* How it works steps */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-10 relative">
          {/* Connecting line */}
          <div className="absolute top-6 left-0 right-0 hidden lg:block" style={{ height: "1px", background: "linear-gradient(90deg,transparent,rgba(59,130,246,0.2),rgba(99,102,241,0.2),rgba(16,185,129,0.2),transparent)" }} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {steps.map((s, i) => (
              <motion.div key={s.num} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group">
                <div className="relative mb-3">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-md border border-slate-100 group-hover:shadow-lg transition-all"
                    style={{ boxShadow: `0 4px 16px ${s.color}20` }}>
                    <s.icon size={20} style={{ color: s.color }} />
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-extrabold"
                    style={{ background: s.color, fontSize: "9px" }}>{s.num}</div>
                </div>
                <div className="text-sm font-bold text-slate-800 mb-1">{s.title}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Builder mock ── */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden mb-12"
          style={{ border: "1px solid #dde5f4", boxShadow: "0 40px 100px rgba(59,130,246,0.08), 0 0 0 1px #dde5f4" }}>

          {/* App chrome bar */}
          <div className="flex items-stretch border-b border-slate-200 bg-white">
            <div className="flex items-center gap-2 px-5 py-3 border-r border-slate-200">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
            <div className="flex items-center gap-1 px-3 py-2 flex-1 bg-slate-50/80">
              {["Architect", "Designer", "Metadata", "DMS Config"].map((tab, i) => (
                <button key={tab} className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${i === 0 ? "bg-blue-600 text-white shadow-sm" : "text-slate-500 hover:bg-white hover:shadow-sm"}`}>
                  {i === 0 && <span className="mr-1 opacity-70">&lt;/&gt;</span>}
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50/80 border-l border-slate-200">
              <span className="text-xs text-slate-400">Employee Onboarding Form</span>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold text-amber-600" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)" }}>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Draft
              </div>
              <button className="px-3 py-1.5 rounded-lg text-xs font-bold text-white" style={{ background: "linear-gradient(135deg,#3b82f6,#4f46e5)" }}>
                Create Structure
              </button>
            </div>
          </div>

          {/* Form builder visual — swap FormBuilderPlaceholder body with a real screenshot */}
          <FormBuilderPlaceholder />
        </motion.div>

        {/* Feature chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {features.map((f, i) => (
            <motion.div key={f} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
              <CheckCircle2 size={14} style={{ color: "#3b82f6" }} className="flex-shrink-0" />
              <span className="text-sm font-medium text-slate-700 leading-tight">{f}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
