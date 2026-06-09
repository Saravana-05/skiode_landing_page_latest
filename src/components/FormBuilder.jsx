import { motion } from "framer-motion"
import { Type, Hash, Calendar, ChevronDown, Upload, PenLine, Table, AlignLeft, MousePointerClick, CheckCircle2, Eye, Settings, Layers, Plus, GripVertical } from "lucide-react"

const sidebarFields = [
  { icon: Type, name: "Text Input", color: "#3b82f6" },
  { icon: Hash, name: "Number", color: "#8b5cf6" },
  { icon: Calendar, name: "Date Picker", color: "#06b6d4" },
  { icon: ChevronDown, name: "Dropdown", color: "#10b981" },
  { icon: Upload, name: "File Upload", color: "#f59e0b" },
  { icon: PenLine, name: "Signature", color: "#ec4899" },
  { icon: Table, name: "Data Table", color: "#f97316" },
  { icon: AlignLeft, name: "Rich Text", color: "#6366f1" },
  { icon: MousePointerClick, name: "Button", color: "#14b8a6" },
]

const formFields = [
  { label: "Employee Name", type: "text", val: "Arjun Sharma", required: true },
  { label: "Department", type: "select", val: "Engineering", required: true },
  { label: "Joining Date", type: "date", val: "2026-01-15", required: true },
  { label: "Manager", type: "select", val: "Priya Nair", required: false },
]

const features = [
  "Drag-and-drop field builder", "Conditional visibility rules", "Field-level validations",
  "Multi-step form wizard", "File upload with preview", "Auto-save drafts",
  "Approval workflow binding", "API data model binding",
]

export default function FormBuilder() {
  return (
    <section className="py-24" style={{ background: "linear-gradient(180deg,#f8faff 0%,#eef2ff 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", color: "#3b82f6" }}>
            Visual Form Builder
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Build forms without starting from scratch
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-xl mx-auto">
            Create powerful business forms using drag-and-drop fields, validations, rules, and actions.
          </motion.p>
        </div>

        {/* Builder mockup */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-2xl mb-12"
          style={{ border: "1px solid #e2e8f0", boxShadow: "0 40px 100px rgba(59,130,246,0.1),0 0 0 1px #e2e8f0" }}>
          
          {/* App bar */}
          <div className="flex items-center gap-0 border-b border-slate-200">
            <div className="flex items-center gap-3 px-5 py-3.5 border-r border-slate-200 bg-white">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
            </div>
            <div className="flex items-center gap-1 px-4 py-2.5 bg-slate-50 flex-1">
              {["Form Builder", "Page Builder", "Workflow", "Preview"].map((tab, i) => (
                <button key={tab}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${i === 0 ? "bg-blue-100 text-blue-700" : "text-slate-500 hover:bg-slate-100"}`}>
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 border-l border-slate-200">
              <Eye size={14} className="text-slate-400" />
              <button className="px-3 py-1.5 rounded-lg text-xs font-bold text-white" style={{ background: "linear-gradient(135deg,#3b82f6,#06b6d4)" }}>Publish</button>
            </div>
          </div>

          <div className="flex" style={{ minHeight: "420px" }}>
            {/* Left: Field Palette */}
            <div className="w-48 flex-shrink-0 bg-slate-50 border-r border-slate-200 p-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">Field Types</p>
              <div className="space-y-0.5">
                {sidebarFields.map((f) => (
                  <div key={f.name} className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl cursor-grab hover:bg-white hover:shadow-sm transition-all group">
                    <GripVertical size={10} className="text-slate-300 flex-shrink-0" />
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${f.color}15` }}>
                      <f.icon size={12} style={{ color: f.color }} />
                    </div>
                    <span className="text-xs text-slate-600 group-hover:text-slate-900 font-medium">{f.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center: Canvas */}
            <div className="flex-1 bg-white p-6 overflow-y-auto">
              {/* Form header */}
              <div className="mb-5 pb-4 border-b border-dashed border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-extrabold text-slate-900">Employee Onboarding Form</h3>
                    <p className="text-xs text-slate-400 mt-0.5">HR Department · Step 1 of 3 · Draft</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-xs text-slate-400">Unsaved changes</span>
                  </div>
                </div>
                {/* Progress */}
                <div className="flex gap-2 mt-3">
                  {["Personal Info", "Documents", "Approvals"].map((s, i) => (
                    <div key={s} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${i === 0 ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-400"}`}>
                      <div className={`w-3 h-3 rounded-full flex items-center justify-center text-white`} style={{ background: i === 0 ? "#3b82f6" : "#e2e8f0", fontSize: "8px" }}>{i + 1}</div>
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {formFields.map((f, i) => (
                  <motion.div key={f.label} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="group relative rounded-xl p-4 transition-all cursor-pointer hover:ring-2 ring-blue-200"
                    style={{ background: "#f8faff", border: "1px solid #e0eaff" }}>
                    {/* Drag handle */}
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100">
                      <GripVertical size={14} className="text-slate-300" />
                    </div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      {f.label} {f.required && <span className="text-red-400">*</span>}
                    </label>
                    {f.type === "select" ? (
                      <div className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-slate-700 bg-white border border-slate-200">
                        {f.val} <ChevronDown size={14} className="text-slate-400" />
                      </div>
                    ) : f.type === "date" ? (
                      <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-slate-700 bg-white border border-slate-200">
                        <Calendar size={13} className="text-blue-400" /> {f.val}
                      </div>
                    ) : (
                      <div className="px-3 py-2.5 rounded-xl text-sm text-slate-700 bg-white border border-slate-200">{f.val}</div>
                    )}
                    {/* Active indicator */}
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100">
                      <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                        <Settings size={9} color="white" />
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Upload field */}
                <div className="rounded-xl p-4 cursor-pointer hover:ring-2 ring-blue-200 transition-all" style={{ background: "#f8faff", border: "1px solid #e0eaff" }}>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Upload Documents</label>
                  <div className="border-2 border-dashed border-blue-200 rounded-xl p-4 text-center bg-white hover:border-blue-400 transition-colors">
                    <Upload size={20} className="text-blue-300 mx-auto mb-1" />
                    <p className="text-xs text-slate-400">Drag files here or <span className="text-blue-500 font-semibold">browse</span></p>
                    <p className="text-xs text-slate-300 mt-1">PDF, DOCX, PNG — max 10MB</p>
                  </div>
                </div>

                <button className="w-full py-3 rounded-2xl font-bold text-white text-sm hover:scale-105 transition-transform"
                  style={{ background: "linear-gradient(135deg,#3b82f6,#06b6d4)", boxShadow: "0 8px 24px rgba(59,130,246,0.3)" }}>
                  Submit and Start Approval
                </button>
              </div>
            </div>

            {/* Right: Properties */}
            <div className="w-56 flex-shrink-0 bg-slate-50 border-l border-slate-200 p-4">
              <div className="flex items-center gap-2 mb-4">
                <Settings size={13} className="text-blue-500" />
                <p className="text-xs font-bold text-slate-700">Field Properties</p>
              </div>
              <div className="space-y-3">
                {[
                  { l: "Field Label", v: "Employee Name", type: "text" },
                  { l: "Required", v: "Yes", type: "toggle" },
                  { l: "Validation", v: "Min 3 characters", type: "text" },
                  { l: "Visibility", v: "Always visible", type: "text" },
                  { l: "Default Value", v: "None", type: "text" },
                  { l: "Placeholder", v: "Enter full name", type: "text" },
                  { l: "API Binding", v: "user.fullName", type: "code" },
                ].map((p) => (
                  <div key={p.l}>
                    <div className="text-xs text-slate-400 mb-1">{p.l}</div>
                    <div className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white ${p.type === "code" ? "font-mono text-blue-600" : "text-slate-700"} ${p.type === "toggle" ? "text-emerald-600" : ""}`}>
                      {p.v}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs font-bold text-slate-400 mb-2">Conditional Rules</p>
                <div className="text-xs p-2 rounded-lg bg-purple-50 border border-purple-100 text-purple-700 font-medium">
                  Show if: dept = "HR"
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {features.map((f, i) => (
            <motion.div key={f} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
              <CheckCircle2 size={14} className="text-blue-500 flex-shrink-0" />
              <span className="text-sm font-medium text-slate-700">{f}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
