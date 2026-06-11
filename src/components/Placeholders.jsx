/**
 * Placeholders.jsx
 *
 * Reusable placeholder visuals for every section that needs a product screenshot or SVG asset.
 * Each component is self-contained and accepts an optional `className` prop.
 *
 * HOW TO SWAP:
 *   Replace the component body with:
 *     <img src="/assets/your-screenshot.png" alt="..." className={className} />
 *   or drop in an <svg> asset directly.
 *   The wrapping div (and its className) stays — only the inner content changes.
 */

/* ─────────────────────────────────────────────
   1. FormBuilderPlaceholder
   Shows: 3-panel form builder — field palette / drag canvas / properties
   Used in: FormBuilder.jsx (center canvas area)
───────────────────────────────────────────── */
export function FormBuilderPlaceholder({ className = "" }) {
  return (
    <div className={`relative w-full rounded-2xl overflow-hidden select-none ${className}`}
      style={{ background: "linear-gradient(135deg,#0f172a,#1e3a5f)", minHeight: 340 }}>
      {/* dot grid */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="ph-fb-dots" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#60a5fa" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ph-fb-dots)" />
      </svg>

      {/* window chrome */}
      <div className="relative flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-80" />
        <span className="ml-3 text-xs font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>Form Builder — Employee Onboarding</span>
      </div>

      <div className="relative flex h-full">
        {/* Left: field palette */}
        <div className="w-28 flex-shrink-0 border-r p-3 space-y-1.5" style={{ background: "rgba(0,0,0,0.25)", borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="text-xs font-bold mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>FIELDS</div>
          {[
            ["Text",      "#3b82f6"],
            ["Number",    "#8b5cf6"],
            ["Date",      "#06b6d4"],
            ["Dropdown",  "#10b981"],
            ["File",      "#a78bfa"],
            ["Signature", "#ec4899"],
            ["Checkbox",  "#f59e0b"],
            ["Table",     "#f97316"],
          ].map(([name, color]) => (
            <div key={name} className="flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-grab"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: color }} />
              <span className="text-xs truncate" style={{ color: "rgba(255,255,255,0.55)", fontSize: 10 }}>{name}</span>
            </div>
          ))}
        </div>

        {/* Center: canvas */}
        <div className="flex-1 p-4 space-y-2.5">
          {[
            { label: "Full Name",    val: "Arjun Sharma",   active: true,  color: "#3b82f6" },
            { label: "Department",   val: "Engineering",    active: false, color: "#6366f1" },
            { label: "Start Date",   val: "2026-01-15",     active: false, color: "#06b6d4" },
            { label: "Manager",      val: "Priya Nair",     active: false, color: "#10b981" },
          ].map(f => (
            <div key={f.label} className="rounded-xl px-3 py-2.5 transition-all"
              style={{
                background: f.active ? "rgba(59,130,246,0.12)" : "rgba(255,255,255,0.04)",
                border: f.active ? `1.5px solid ${f.color}` : "1px solid rgba(255,255,255,0.07)",
                boxShadow: f.active ? `0 0 12px ${f.color}30` : "none",
              }}>
              <div className="text-xs mb-1" style={{ color: f.active ? f.color : "rgba(255,255,255,0.4)", fontSize: 10 }}>
                {f.label}{f.active && " *"}
              </div>
              <div className="text-sm font-medium" style={{ color: f.active ? "white" : "rgba(255,255,255,0.6)" }}>{f.val}</div>
            </div>
          ))}
          {/* Upload + Submit */}
          <div className="rounded-xl px-3 py-2.5 flex items-center gap-2"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px dashed rgba(255,255,255,0.12)" }}>
            <div className="w-4 h-4 rounded flex items-center justify-center" style={{ background: "rgba(167,139,250,0.2)" }}>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M4 1v6M1 4h6" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Attach supporting document</span>
          </div>
          <div className="rounded-xl py-2.5 text-center text-xs font-bold text-white"
            style={{ background: "linear-gradient(90deg,#3b82f6,#6366f1)" }}>
            Submit Form
          </div>
        </div>

        {/* Right: properties */}
        <div className="w-32 flex-shrink-0 border-l p-3 space-y-3" style={{ background: "rgba(0,0,0,0.2)", borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="text-xs font-bold" style={{ color: "rgba(255,255,255,0.3)" }}>PROPERTIES</div>
          {[["Label","Full Name"],["Type","Text"],["Required","Yes"],["Validation","Alpha only"],["Placeholder","Enter name"]].map(([k,v]) => (
            <div key={k}>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 9 }}>{k}</div>
              <div className="mt-0.5 rounded px-1.5 py-1 text-xs" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)", fontSize: 10 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* swap hint */}
      <div className="absolute bottom-2 right-3 text-xs px-2 py-0.5 rounded-full"
        style={{ background: "rgba(59,130,246,0.15)", color: "rgba(59,130,246,0.7)", fontSize: 9 }}>
        placeholder · replace with screenshot
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   2. WorkflowPlaceholder
   Shows: Visual process flow canvas with nodes & connectors
   Used in: ProcessFlowSection.jsx (main diagram area)
───────────────────────────────────────────── */
export function WorkflowPlaceholder({ className = "" }) {
  return (
    <div className={`relative w-full rounded-2xl overflow-hidden select-none ${className}`}
      style={{ background: "#080f1e", minHeight: 360 }}>
      {/* grid */}
      <svg className="absolute inset-0 w-full h-full opacity-100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="ph-wf-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
          </pattern>
          <filter id="ph-wf-glow">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#ph-wf-grid)" />
      </svg>

      {/* toolbar */}
      <div className="relative flex items-center gap-3 px-4 py-2.5 border-b" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}>
        {["Configure","Align","Adjust","Undo","Redo"].map(t => (
          <span key={t} className="text-xs px-2 py-1 rounded" style={{ color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.04)" }}>{t}</span>
        ))}
        <div className="ml-auto flex gap-2">
          <span className="text-xs px-2 py-1 rounded" style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8" }}>Save</span>
          <span className="text-xs px-2 py-1 rounded font-semibold" style={{ background: "rgba(139,92,246,0.2)", color: "#a78bfa" }}>✦ AI Build</span>
        </div>
      </div>

      {/* Flow SVG */}
      <svg className="relative w-full" viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ph-arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0 0L6 3L0 6Z" fill="rgba(255,255,255,0.25)" />
          </marker>
        </defs>

        {/* START */}
        <circle cx="230" cy="30" r="18" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="230" y="34" textAnchor="middle" fill="#60a5fa" fontSize="8" fontWeight="bold">START</text>

        {/* arrow down */}
        <line x1="230" y1="48" x2="230" y2="72" stroke="rgba(255,255,255,0.2)" strokeWidth="1" markerEnd="url(#ph-arr)"/>

        {/* TRIGGER node */}
        <rect x="165" y="72" width="130" height="36" rx="8" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="230" y="94" textAnchor="middle" fill="#93c5fd" fontSize="9" fontWeight="600">Form Submitted</text>

        {/* arrow */}
        <line x1="230" y1="108" x2="230" y2="132" stroke="rgba(255,255,255,0.2)" strokeWidth="1" markerEnd="url(#ph-arr)"/>

        {/* VALIDATE */}
        <rect x="165" y="132" width="130" height="36" rx="8" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="1.5"/>
        <text x="230" y="154" textAnchor="middle" fill="#6ee7b7" fontSize="9" fontWeight="600">Validate Data</text>

        {/* arrow */}
        <line x1="230" y1="168" x2="230" y2="192" stroke="rgba(255,255,255,0.2)" strokeWidth="1" markerEnd="url(#ph-arr)"/>

        {/* CONDITION diamond */}
        <polygon points="230,192 270,214 230,236 190,214" fill="rgba(139,92,246,0.12)" stroke="#8b5cf6" strokeWidth="1.5" filter="url(#ph-wf-glow)"/>
        <text x="230" y="218" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontWeight="600">Approved?</text>

        {/* YES branch */}
        <line x1="270" y1="214" x2="360" y2="214" stroke="rgba(255,255,255,0.2)" strokeWidth="1" markerEnd="url(#ph-arr)"/>
        <text x="315" y="209" textAnchor="middle" fill="#6ee7b7" fontSize="8">YES</text>
        <rect x="340" y="198" width="80" height="32" rx="7" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="1.2"/>
        <text x="380" y="218" textAnchor="middle" fill="#6ee7b7" fontSize="8.5" fontWeight="600">Notify &amp; Close</text>

        {/* NO branch */}
        <line x1="190" y1="214" x2="95" y2="214" stroke="rgba(255,255,255,0.2)" strokeWidth="1" markerEnd="url(#ph-arr)"/>
        <text x="143" y="209" textAnchor="middle" fill="#fca5a5" fontSize="8">NO</text>
        <rect x="40" y="198" width="80" height="32" rx="7" fill="rgba(239,68,68,0.08)" stroke="#ef4444" strokeWidth="1.2"/>
        <text x="80" y="218" textAnchor="middle" fill="#fca5a5" fontSize="8.5" fontWeight="600">Send Back</text>

        {/* END */}
        <line x1="380" y1="230" x2="380" y2="270" stroke="rgba(255,255,255,0.15)" strokeWidth="1" markerEnd="url(#ph-arr)"/>
        <circle cx="380" cy="278" r="12" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="1.5"/>
        <text x="380" y="282" textAnchor="middle" fill="#6ee7b7" fontSize="7" fontWeight="bold">END</text>

        {/* swap label */}
        <rect x="6" y="280" width="170" height="14" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5"/>
        <text x="91" y="290" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="7">placeholder · replace with real workflow screenshot</text>
      </svg>
    </div>
  )
}

/* ─────────────────────────────────────────────
   3. OCRPlaceholder
   Shows: Document scan → extracted fields side-by-side
   Used in: OCRSection.jsx (main demo panel)
───────────────────────────────────────────── */
export function OCRPlaceholder({ className = "" }) {
  const fields = [
    ["Invoice No",   "INV-2024-00847",    99, "#10b981"],
    ["Vendor",       "Acme Suppliers LLC",97, "#3b82f6"],
    ["Date",         "05 Jun 2025",       99, "#10b981"],
    ["Due Date",     "05 Jul 2025",       98, "#10b981"],
    ["Amount",       "AED 84,500.00",     96, "#3b82f6"],
    ["VAT (5%)",     "AED 4,225.00",      95, "#f59e0b"],
    ["Total",        "AED 88,725.00",     98, "#10b981"],
  ]
  return (
    <div className={`relative flex gap-3 w-full rounded-2xl overflow-hidden select-none p-4 ${className}`}
      style={{ background: "linear-gradient(135deg,#0c1220,#111827)" }}>

      {/* Document mock */}
      <div className="flex-1 rounded-xl overflow-hidden border" style={{ background: "#fff", borderColor: "rgba(0,0,0,0.1)", minWidth: 0 }}>
        {/* doc header */}
        <div className="px-3 py-2 border-b flex items-center justify-between" style={{ borderColor: "#f1f5f9" }}>
          <span className="text-xs font-bold text-slate-700">INVOICE</span>
          <span className="text-xs text-slate-400">INV-2024-00847</span>
        </div>
        {/* scan overlay */}
        <div className="relative p-3 space-y-2">
          {/* scanning line animation */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-b-xl">
            <div className="absolute left-0 right-0 h-0.5 opacity-60 animate-bounce"
              style={{ top: "40%", background: "linear-gradient(90deg,transparent,#3b82f6,transparent)" }} />
          </div>
          {/* doc rows */}
          {[
            ["From:", "Acme Suppliers LLC, Dubai",  "#fef3c7"],
            ["To:",   "Sky Corp, Abu Dhabi",         ""],
            ["Items:","OCR Module Subscription ×12", ""],
            ["",      "Support & Implementation",    ""],
          ].map(([k,v,bg],i) => (
            <div key={i} className="flex gap-2 text-xs rounded px-1.5 py-1" style={{ background: bg || "transparent" }}>
              <span className="text-slate-400 w-10 flex-shrink-0">{k}</span>
              <span className="text-slate-700 font-medium">{v}</span>
            </div>
          ))}
          {/* highlighted boxes */}
          <div className="mt-2 space-y-1.5">
            <div className="flex justify-between items-center px-2 py-1.5 rounded-lg border-2 text-xs font-bold"
              style={{ borderColor: "#3b82f6", background: "rgba(59,130,246,0.05)" }}>
              <span className="text-slate-600">Subtotal</span>
              <span className="text-slate-900">AED 84,500.00</span>
            </div>
            <div className="flex justify-between items-center px-2 py-1.5 rounded-lg border text-xs"
              style={{ borderColor: "#f59e0b20", background: "rgba(245,158,11,0.04)" }}>
              <span className="text-slate-500">VAT 5%</span>
              <span className="text-slate-700">AED 4,225.00</span>
            </div>
            <div className="flex justify-between items-center px-2 py-1.5 rounded-lg border-2 text-xs font-extrabold"
              style={{ borderColor: "#10b981", background: "rgba(16,185,129,0.06)" }}>
              <span className="text-slate-700">TOTAL</span>
              <span style={{ color: "#10b981" }}>AED 88,725.00</span>
            </div>
          </div>
          {/* confidence */}
          <div className="mt-2 flex items-center gap-2">
            <span className="text-xs text-slate-400">OCR Confidence</span>
            <div className="flex-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full rounded-full bg-green-400" style={{ width: "97%" }} />
            </div>
            <span className="text-xs font-bold text-green-600">97%</span>
          </div>
        </div>
      </div>

      {/* Extracted fields */}
      <div className="w-44 flex-shrink-0 space-y-1.5">
        <div className="text-xs font-bold mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>EXTRACTED DATA</div>
        {fields.map(([label, value, conf, color]) => (
          <div key={label} className="rounded-lg px-2.5 py-1.5"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-center justify-between mb-0.5">
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 9 }}>{label}</span>
              <span className="text-xs font-bold" style={{ color, fontSize: 9 }}>{conf}%</span>
            </div>
            <div className="text-xs font-medium truncate" style={{ color: "rgba(255,255,255,0.85)", fontSize: 10 }}>{value}</div>
          </div>
        ))}
      </div>

      {/* swap hint */}
      <div className="absolute bottom-2 right-3 text-xs px-2 py-0.5 rounded-full"
        style={{ background: "rgba(16,185,129,0.15)", color: "rgba(16,185,129,0.7)", fontSize: 9 }}>
        placeholder · replace with screenshot
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   4. BotAutomationPlaceholder
   Shows: Chat interface with bot conversation + intent pipeline
   Used in: BotSection.jsx (right detail panel / chat preview)
───────────────────────────────────────────── */
export function BotAutomationPlaceholder({ className = "" }) {
  const messages = [
    { from: "user", text: "What's my leave balance for 2025?" },
    { from: "bot",  text: "You have 18 days annual leave remaining. Would you like to apply for leave or view the calendar?" },
    { from: "user", text: "Apply for leave from June 20 to June 25." },
    { from: "bot",  text: "Leave request submitted for approval. Your manager Priya Nair will be notified. ✓" },
  ]
  return (
    <div className={`relative w-full rounded-2xl overflow-hidden select-none ${className}`}
      style={{ background: "#0d1424", border: "1px solid rgba(255,255,255,0.08)" }}>
      {/* header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
        <div className="w-7 h-7 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)" }}>
          <span style={{ fontSize: 13 }}>🤖</span>
        </div>
        <div>
          <div className="text-xs font-bold text-white">Sky AI Bot</div>
          <div className="flex items-center gap-1" style={{ fontSize: 9, color: "rgba(255,255,255,0.4)" }}>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online · HR Module
          </div>
        </div>
        <div className="ml-auto flex gap-1.5">
          {["WhatsApp","Teams","Web"].map(ch => (
            <span key={ch} className="text-xs px-1.5 py-0.5 rounded-full"
              style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)", fontSize: 9 }}>{ch}</span>
          ))}
        </div>
      </div>

      {/* messages */}
      <div className="px-4 py-4 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div className="max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed"
              style={m.from === "user"
                ? { background: "linear-gradient(135deg,#3b82f6,#6366f1)", color: "white" }
                : { background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.08)" }
              }>
              {m.text}
            </div>
          </div>
        ))}
        {/* typing indicator */}
        <div className="flex justify-start">
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
            {[0,1,2].map(j => (
              <div key={j} className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce"
                style={{ animationDelay: `${j * 0.15}s` }} />
            ))}
          </div>
        </div>
      </div>

      {/* input */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 rounded-xl px-3 py-2"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
          <span className="text-xs flex-1" style={{ color: "rgba(255,255,255,0.3)" }}>Type a message…</span>
          <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#3b82f6,#6366f1)" }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 5h8M6 2l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>

      {/* swap hint */}
      <div className="absolute top-2 right-3 text-xs px-2 py-0.5 rounded-full"
        style={{ background: "rgba(59,130,246,0.15)", color: "rgba(59,130,246,0.7)", fontSize: 9 }}>
        placeholder · replace with screenshot
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   5. UseCasePreviewPlaceholder
   Shows: Task list / process steps preview panel for any use case
   Used in: UseCasesSection.jsx (right preview panel)
   Props: title, steps[], metrics[]
───────────────────────────────────────────── */
export function UseCasePreviewPlaceholder({
  className = "",
  title = "Use Case Preview",
  color = "#3b82f6",
  steps = ["Trigger event", "Form submitted", "AI validation", "Manager approval", "Record closed"],
  metrics = [{ label: "Time Saved", value: "70%" }, { label: "Accuracy", value: "99%" }, { label: "Auto-rate", value: "85%" }, { label: "SLA Met", value: "98%" }],
}) {
  const statusColors = { done: "#10b981", active: "#3b82f6", pending: "rgba(255,255,255,0.2)" }
  const statusOf = (i) => i < 2 ? "done" : i === 2 ? "active" : "pending"

  return (
    <div className={`relative w-full rounded-2xl overflow-hidden select-none ${className}`}
      style={{ background: "linear-gradient(135deg,#0c1220,#111827)", border: "1px solid rgba(255,255,255,0.08)" }}>
      {/* header */}
      <div className="px-5 py-4 border-b flex items-center justify-between" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div>
          <div className="text-xs font-bold text-white">{title}</div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 10 }}>Live process view</div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 9 }}>In progress</span>
        </div>
      </div>

      {/* steps */}
      <div className="px-5 py-4 space-y-2.5">
        {steps.map((step, i) => {
          const s = statusOf(i)
          return (
            <div key={i} className="flex items-center gap-3">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: s === "done" ? "#10b98120" : s === "active" ? `${color}20` : "rgba(255,255,255,0.04)", border: `1.5px solid ${statusColors[s]}` }}>
                  {s === "done"
                    ? <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    : s === "active"
                    ? <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: color }} />
                    : <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
                  }
                </div>
                {i < steps.length - 1 && <div className="w-px h-4 mt-0.5" style={{ background: i < 2 ? "#10b98130" : "rgba(255,255,255,0.07)" }} />}
              </div>
              <span className="text-xs" style={{
                color: s === "done" ? "rgba(255,255,255,0.8)" : s === "active" ? "white" : "rgba(255,255,255,0.3)",
                fontWeight: s === "active" ? 600 : 400,
              }}>{step}</span>
              {s === "active" && (
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full font-semibold"
                  style={{ background: `${color}20`, color, fontSize: 9 }}>Active</span>
              )}
            </div>
          )
        })}
      </div>

      {/* metrics */}
      <div className="mx-4 mb-4 grid grid-cols-4 gap-2 rounded-xl p-3"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
        {metrics.map(m => (
          <div key={m.label} className="text-center">
            <div className="text-sm font-extrabold" style={{ color }}>{m.value}</div>
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 9 }}>{m.label}</div>
          </div>
        ))}
      </div>

      {/* swap hint */}
      <div className="absolute top-2 right-3 text-xs px-2 py-0.5 rounded-full"
        style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.3)", fontSize: 9 }}>
        placeholder · replace with screenshot
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   6. AIRecruiterPlaceholder
   Shows: Candidate pipeline dashboard — scoring rings, table, pipeline
   Used in: AIRecruiter.jsx (main dashboard mock)
───────────────────────────────────────────── */
export function AIRecruiterPlaceholder({ className = "" }) {
  const candidates = [
    { name: "Arjun S.",  role: "Sr. Dev",    score: 92, skills: ["React","Node"], match: "94%", status: "Shortlisted", statusColor: "#10b981" },
    { name: "Priya N.",  role: "UX Lead",     score: 87, skills: ["Figma","UX"],  match: "89%", status: "Interview",   statusColor: "#3b82f6" },
    { name: "Omar K.",   role: "DevOps",      score: 81, skills: ["K8s","AWS"],   match: "83%", status: "Screening",   statusColor: "#f59e0b" },
    { name: "Sara M.",   role: "PM",          score: 78, skills: ["Agile","JIRA"],match: "80%", status: "Applied",     statusColor: "#8b5cf6" },
  ]

  function ScoreRing({ score, color }) {
    const r = 16, circ = 2 * Math.PI * r
    const dash = (score / 100) * circ
    return (
      <svg width="40" height="40" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="3"/>
        <circle cx="20" cy="20" r={r} fill="none" stroke={color} strokeWidth="3"
          strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" transform="rotate(-90 20 20)"/>
        <text x="20" y="24" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">{score}</text>
      </svg>
    )
  }

  const scoreColor = (s) => s >= 90 ? "#10b981" : s >= 80 ? "#3b82f6" : "#f59e0b"

  return (
    <div className={`relative w-full rounded-2xl overflow-hidden select-none ${className}`}
      style={{ background: "linear-gradient(135deg,#0c0f1f,#12103a)" }}>
      {/* dashboard header */}
      <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
        <div>
          <div className="text-sm font-extrabold text-white">AI Recruiter Dashboard</div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 10 }}>Senior Full-Stack Developer · 142 applicants</div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 10 }}>Live</span>
        </div>
      </div>

      {/* metric tiles */}
      <div className="grid grid-cols-4 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        {[
          { l: "Applications", v: "142", c: "#3b82f6" },
          { l: "AI Screened",  v: "138", c: "#8b5cf6" },
          { l: "Shortlisted",  v: "24",  c: "#10b981" },
          { l: "Avg Score",    v: "81",  c: "#f59e0b" },
        ].map((m, i) => (
          <div key={m.l} className={`px-3 py-3 text-center ${i < 3 ? "border-r" : ""}`} style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <div className="text-xl font-extrabold" style={{ color: m.c }}>{m.v}</div>
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 9 }}>{m.l}</div>
          </div>
        ))}
      </div>

      {/* candidate table */}
      <div className="px-4 py-3 space-y-2">
        <div className="text-xs font-bold mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>TOP CANDIDATES</div>
        {candidates.map((c) => (
          <div key={c.name} className="flex items-center gap-3 px-3 py-2 rounded-xl"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
            {/* avatar */}
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold"
              style={{ background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", fontSize: 10 }}>
              {c.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-white">{c.name}</div>
              <div className="flex gap-1 mt-0.5 flex-wrap">
                {c.skills.map(s => (
                  <span key={s} className="text-xs px-1.5 py-0.5 rounded-full"
                    style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8", fontSize: 9 }}>{s}</span>
                ))}
              </div>
            </div>
            <ScoreRing score={c.score} color={scoreColor(c.score)} />
            <div className="text-right flex-shrink-0">
              <div className="text-xs font-bold text-white">{c.match}</div>
              <span className="text-xs px-1.5 py-0.5 rounded-full font-semibold"
                style={{ background: `${c.statusColor}20`, color: c.statusColor, fontSize: 9 }}>
                {c.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* swap hint */}
      <div className="absolute bottom-3 right-4 text-xs px-2 py-0.5 rounded-full"
        style={{ background: "rgba(139,92,246,0.15)", color: "rgba(139,92,246,0.7)", fontSize: 9 }}>
        placeholder · replace with screenshot
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   7. ConstructionDashboardPlaceholder
   Shows: Multi-project progress dashboard with alerts
   Used in: ConstructionSection.jsx (main dashboard panel)
───────────────────────────────────────────── */
export function ConstructionDashboardPlaceholder({ className = "" }) {
  const projects = [
    { name: "Tower Block A — Al Reem Island", pct: 68, color: "#3b82f6", site: "Abu Dhabi", days: 18 },
    { name: "Mall Foundation — Dubai Hills",  pct: 42, color: "#f59e0b", site: "Dubai",     days: 45 },
    { name: "Highway Section 3 — SZR",        pct: 89, color: "#10b981", site: "Dubai",     days: 6  },
  ]
  const alerts = [
    { type: "warning", msg: "Rebar delivery delayed 2 days",       time: "2m ago",  color: "#f59e0b" },
    { type: "ok",      msg: "Floor 18 inspection passed ✓",        time: "14m ago", color: "#10b981" },
    { type: "info",    msg: "Final QC scheduled Jun 15",           time: "1h ago",  color: "#3b82f6" },
  ]
  return (
    <div className={`relative w-full rounded-2xl overflow-hidden select-none bg-white ${className}`}
      style={{ border: "1px solid #e2e8f0" }}>
      {/* header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b" style={{ borderColor: "#f1f5f9" }}>
        <span className="text-sm font-extrabold text-slate-900">Live Project Dashboard</span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-slate-400">Updated just now</span>
        </div>
      </div>

      {/* summary tiles */}
      <div className="grid grid-cols-4 border-b" style={{ borderColor: "#f1f5f9" }}>
        {[
          { l: "Active Sites",    v: "3",     c: "#3b82f6" },
          { l: "Open Tasks",     v: "45",    c: "#f59e0b" },
          { l: "Team Members",   v: "128",   c: "#10b981" },
          { l: "Docs Processed", v: "2,841", c: "#8b5cf6" },
        ].map((m, i) => (
          <div key={m.l} className={`px-3 py-3 text-center ${i < 3 ? "border-r" : ""}`} style={{ borderColor: "#f1f5f9" }}>
            <div className="text-lg font-extrabold" style={{ color: m.c }}>{m.v}</div>
            <div className="text-xs text-slate-400">{m.l}</div>
          </div>
        ))}
      </div>

      {/* projects */}
      <div className="px-5 py-3 space-y-3">
        {projects.map((p) => (
          <div key={p.name} className="p-3 rounded-xl border" style={{ borderColor: "#f1f5f9" }}>
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="text-xs font-bold text-slate-800 truncate" style={{ maxWidth: 200 }}>{p.name}</div>
                <div className="text-xs text-slate-400">{p.site} · {p.days}d left</div>
              </div>
              <span className="text-xl font-extrabold" style={{ color: p.color }}>{p.pct}%</span>
            </div>
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: `linear-gradient(90deg,${p.color},${p.color}88)` }} />
            </div>
          </div>
        ))}
      </div>

      {/* alerts */}
      <div className="border-t px-5 py-3 space-y-2" style={{ borderColor: "#f1f5f9" }}>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Live Alerts</div>
        {alerts.map((a, i) => (
          <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
            style={{ background: `${a.color}06`, border: `1px solid ${a.color}15` }}>
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: a.color }} />
            <span className="flex-1 text-slate-700">{a.msg}</span>
            <span className="text-slate-400 flex-shrink-0">{a.time}</span>
          </div>
        ))}
      </div>

      {/* swap hint */}
      <div className="absolute bottom-3 right-4 text-xs px-2 py-0.5 rounded-full"
        style={{ background: "rgba(245,158,11,0.12)", color: "rgba(217,119,6,0.8)", fontSize: 9 }}>
        placeholder · replace with screenshot
      </div>
    </div>
  )
}
