import { motion } from "framer-motion"
import { ScanText, CheckCircle2, Zap, FileText, ArrowRight, Eye, Database, Bell, RefreshCw } from "lucide-react"

const extractedFields = [
  { label: "Invoice Number", value: "INV-2024-00847", conf: 99, color: "#10b981" },
  { label: "Vendor Name", value: "Acme Suppliers LLC", conf: 97, color: "#3b82f6" },
  { label: "Invoice Date", value: "05 June 2025", conf: 99, color: "#10b981" },
  { label: "Due Date", value: "05 July 2025", conf: 98, color: "#10b981" },
  { label: "Amount (Excl. Tax)", value: "AED 84,500.00", conf: 96, color: "#3b82f6" },
  { label: "Tax (VAT 5%)", value: "AED 4,225.00", conf: 95, color: "#f59e0b" },
  { label: "Total Amount", value: "AED 88,725.00", conf: 98, color: "#10b981" },
  { label: "PO Reference", value: "PO-2025-0312", conf: 97, color: "#3b82f6" },
]

const autoActions = [
  { label: "Journal entry posted to Tally ERP", done: true, color: "#10b981" },
  { label: "PO matched and validated", done: true, color: "#10b981" },
  { label: "Approval sent to Finance Manager", done: true, color: "#3b82f6" },
  { label: "Invoice stored in DMS folder", done: true, color: "#8b5cf6" },
  { label: "Vendor notified via email", done: false, color: "#f59e0b" },
  { label: "Payment scheduled (NET 30)", done: false, color: "#f97316" },
]

export default function OCRSection() {
  return (
    <section className="py-24" id="ocr" style={{ background: "linear-gradient(135deg,#f8fafc,#f0f9ff)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)", color: "#10b981" }}>
            <ScanText size={11} /> Intelligent OCR & Document Processing
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            From scanned document to<br className="hidden sm:block" /> completed action — automatically
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-xl mx-auto">
            AI reads invoices, forms and contracts, extracts structured data with confidence scores, then triggers downstream workflows.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Column 1 - Document */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText size={15} className="text-blue-500" />
                <span className="font-bold text-sm text-slate-800">Scanned Document</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(16,185,129,0.1)", color: "#10b981" }}>
                <Eye size={10} /> Analyzing
              </div>
            </div>
            <div className="p-5">
              {/* Document preview mockup */}
              <div className="rounded-2xl p-4 mb-4 relative overflow-hidden" style={{ background: "linear-gradient(135deg,#f8fafc,#f0f4ff)", border: "2px dashed #c7d2fe" }}>
                {/* Document lines simulation */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="w-20 h-3 rounded bg-blue-200 mb-1" />
                      <div className="w-16 h-2 rounded bg-slate-200" />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                      <FileText size={16} className="text-blue-500" />
                    </div>
                  </div>
                  <div className="border-b border-slate-200 pb-2 mb-2">
                    <div className="text-xs font-bold text-slate-700 mb-1">TAX INVOICE</div>
                    <div className="grid grid-cols-2 gap-1">
                      {["Invoice No", "INV-2024-00847", "Date", "05 Jun 2025", "PO Ref", "PO-2025-0312", "Due Date", "05 Jul 2025"].map((t, i) => (
                        <div key={i} className={`text-xs py-0.5 rounded px-1 ${i % 2 === 0 ? "text-slate-400" : "font-semibold text-slate-700"}`}>{t}</div>
                      ))}
                    </div>
                  </div>
                  {/* Table rows */}
                  {[["Consulting Services", "AED 84,500"], ["VAT @ 5%", "AED 4,225"], ["TOTAL", "AED 88,725"]].map(([l, v], i) => (
                    <div key={l} className={`flex justify-between text-xs py-0.5 px-1 rounded ${i === 2 ? "font-extrabold text-slate-800 bg-blue-50" : "text-slate-500"}`}>
                      <span>{l}</span><span>{v}</span>
                    </div>
                  ))}
                </div>
                {/* OCR highlight overlay */}
                <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
                  <div className="absolute top-3 left-3 right-3 h-0.5 border border-emerald-400 rounded opacity-50" />
                  <div className="absolute bottom-3 left-3 right-3 h-0.5 border border-emerald-400 rounded opacity-50" />
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl text-xs" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.2)" }}>
                <ScanText size={13} className="text-emerald-500" />
                <span className="text-emerald-700 font-semibold">AI scan in progress · 1.2s</span>
                <RefreshCw size={12} className="text-emerald-400 animate-spin ml-auto" />
              </div>
              <div className="mt-3 text-center">
                <div className="text-2xl font-extrabold" style={{ color: "#10b981" }}>94.7%</div>
                <div className="text-xs text-slate-400">Overall Confidence Score</div>
                <div className="mt-2 w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg,#10b981,#06b6d4)" }}
                    initial={{ width: 0 }} whileInView={{ width: "94.7%" }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.3 }} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2 - Extraction Table */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Database size={15} className="text-purple-500" />
                <span className="font-bold text-sm text-slate-800">Extracted Data</span>
              </div>
              <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full">8 Fields</span>
            </div>
            <div className="p-4 space-y-2">
              {extractedFields.map((f, i) => (
                <motion.div key={f.label} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="p-3 rounded-xl border hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-default"
                  style={{ borderColor: "#f1f5f9" }}>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="text-xs text-slate-400 leading-tight">{f.label}</span>
                    <span className="text-xs font-extrabold flex-shrink-0" style={{ color: f.color }}>{f.conf}%</span>
                  </div>
                  <div className="font-semibold text-sm text-slate-800 mb-1.5">{f.value}</div>
                  <div className="w-full h-1 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div className="h-full rounded-full" style={{ background: f.color }}
                      initial={{ width: 0 }} whileInView={{ width: `${f.conf}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 + i * 0.06 }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 3 - Auto Actions */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap size={15} className="text-amber-500" />
                <span className="font-bold text-sm text-slate-800">Auto-Triggered Actions</span>
              </div>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">4 done · 2 queued</span>
            </div>
            <div className="p-4 space-y-2">
              {autoActions.map((a, i) => (
                <motion.div key={a.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl border transition-all"
                  style={{ borderColor: a.done ? `${a.color}25` : "#f1f5f9", background: a.done ? `${a.color}06` : "white" }}>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: a.done ? `${a.color}15` : "#f8fafc" }}>
                    {a.done ? <CheckCircle2 size={14} style={{ color: a.color }} /> : <div className="w-3 h-3 rounded-full bg-slate-200 animate-pulse" />}
                  </div>
                  <span className={`text-sm leading-tight ${a.done ? "text-slate-700 font-medium" : "text-slate-400"}`}>{a.label}</span>
                  {a.done && <ArrowRight size={12} style={{ color: a.color }} className="ml-auto flex-shrink-0" />}
                </motion.div>
              ))}
            </div>
            <div className="p-4 pt-2">
              <div className="rounded-2xl p-4" style={{ background: "linear-gradient(135deg,#0a1628,#1e1b4b)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Bell size={13} style={{ color: "#a78bfa" }} />
                  <span className="text-xs font-bold text-white">Notification Sent</span>
                </div>
                <div className="text-xs text-white/60 mb-2">To: finance.manager@acme.com</div>
                <div className="text-xs text-white/80 rounded-lg p-2.5" style={{ background: "rgba(255,255,255,0.06)" }}>
                  "Invoice INV-2024-00847 from Acme Suppliers for AED 88,725 is pending your approval. Click to review."
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
