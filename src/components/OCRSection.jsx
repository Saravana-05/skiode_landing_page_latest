import { motion } from "framer-motion"
import { ScanText, CheckCircle2, Zap, FileText, ArrowRight, Eye, Database, Bell, RefreshCw, Upload, GitBranch, Shield } from "lucide-react"
import { OCRPlaceholder } from "./Placeholders"

/* ── Pipeline step infographic ── */
const pipeline = [
  { num: "01", icon: Upload,      label: "Document Upload",    desc: "PDF, scan, photo, email",   color: "#3b82f6" },
  { num: "02", icon: ScanText,    label: "OCR Extraction",     desc: "AI reads every field",       color: "#8b5cf6" },
  { num: "03", icon: CheckCircle2,label: "Validation",         desc: "Cross-checks PO & rules",    color: "#06b6d4" },
  { num: "04", icon: Database,    label: "Record Created",     desc: "Data stored in core table",  color: "#10b981" },
  { num: "05", icon: GitBranch,   label: "Workflow Triggered", desc: "Approval routing begins",    color: "#f59e0b" },
]

const extractedFields = [
  { label: "Invoice Number",     value: "INV-2024-00847",    conf: 99, color: "#10b981" },
  { label: "Vendor Name",        value: "Acme Suppliers LLC",conf: 97, color: "#3b82f6" },
  { label: "Invoice Date",       value: "05 June 2025",      conf: 99, color: "#10b981" },
  { label: "Due Date",           value: "05 July 2025",      conf: 98, color: "#10b981" },
  { label: "Amount (Excl. Tax)", value: "AED 84,500.00",     conf: 96, color: "#3b82f6" },
  { label: "Tax (VAT 5%)",       value: "AED 4,225.00",      conf: 95, color: "#f59e0b" },
  { label: "Total Amount",       value: "AED 88,725.00",     conf: 98, color: "#10b981" },
  { label: "PO Reference",       value: "PO-2025-0312",      conf: 97, color: "#3b82f6" },
]

const autoActions = [
  { label: "Journal entry posted to Tally ERP", done: true,  color: "#10b981" },
  { label: "PO matched and validated",          done: true,  color: "#10b981" },
  { label: "Approval sent to Finance Manager",  done: true,  color: "#3b82f6" },
  { label: "Invoice stored in DMS folder",      done: true,  color: "#8b5cf6" },
  { label: "Vendor notified via email",         done: false, color: "#f59e0b" },
  { label: "Payment scheduled (NET 30)",        done: false, color: "#f97316" },
]

const docTypes = ["Tax Invoices","Purchase Orders","National IDs","Contracts","Medical Forms","Site Reports","Bank Statements","HR Documents"]

export default function OCRSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="ocr" style={{ background: "linear-gradient(180deg,#f8fafc 0%,#f0f7ff 100%)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(16,185,129,0.04) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(59,130,246,0.04) 0%, transparent 50%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)", color: "#10b981" }}>
            <ScanText size={11} /> Intelligent OCR &amp; Document Processing
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            From scanned document to completed action —{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">automatically</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto">
            AI reads invoices, IDs, forms and contracts, extracts structured data with confidence scores, then triggers downstream workflows — with no manual re-entry.
          </motion.p>
        </div>

        {/* ── Pipeline infographic strip ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-12 p-6 rounded-3xl relative"
          style={{ background: "white", border: "1px solid #e2e8f0", boxShadow: "0 8px 40px rgba(0,0,0,0.04)" }}>
          <div className="relative">
            {/* Connecting gradient line */}
            <div className="hidden sm:block absolute top-6 left-12 right-12 h-px" style={{ background: "linear-gradient(90deg,#3b82f6,#8b5cf6,#06b6d4,#10b981,#f59e0b)", opacity: 0.25 }} />
            <div className="flex flex-col sm:flex-row items-start sm:items-start gap-6 sm:gap-0">
              {pipeline.map((step, i) => (
                <div key={step.num} className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 flex-1 relative">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-md flex-shrink-0 relative z-10"
                    style={{ border: `2px solid ${step.color}30`, boxShadow: `0 4px 20px ${step.color}18` }}>
                    <step.icon size={20} style={{ color: step.color }} />
                  </motion.div>
                  <div className="sm:text-center">
                    <div className="text-xs font-extrabold mb-0.5" style={{ color: step.color }}>Step {step.num}</div>
                    <div className="text-sm font-bold text-slate-800 leading-tight">{step.label}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{step.desc}</div>
                  </div>
                  {i < pipeline.length - 1 && (
                    <ArrowRight size={14} className="hidden sm:block absolute -right-2 top-4 z-20 text-slate-300" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Supported document types */}
          <div className="mt-6 pt-5 border-t border-slate-100">
            <div className="text-xs font-semibold text-slate-400 mb-3 text-center">Supported document types</div>
            <div className="flex flex-wrap gap-2 justify-center">
              {docTypes.map(d => (
                <span key={d} className="text-xs px-3 py-1 rounded-full font-medium text-slate-600 bg-slate-50 border border-slate-200">{d}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* OCR demo visual — swap OCRPlaceholder body with a real screenshot */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <OCRPlaceholder />
        </motion.div>

        {/* Bottom stat strip */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { val: "94.7%", label: "Avg extraction accuracy", color: "#10b981" },
            { val: "1.2s",  label: "Avg document scan time",  color: "#3b82f6" },
            { val: "80%",   label: "Less manual entry",       color: "#8b5cf6" },
            { val: "12+",   label: "Document types supported",color: "#f59e0b" },
          ].map(m => (
            <div key={m.label} className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all text-center">
              <div className="text-2xl font-extrabold mb-1" style={{ color: m.color }}>{m.val}</div>
              <div className="text-xs text-slate-500">{m.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
