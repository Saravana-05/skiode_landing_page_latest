import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  CheckCircle2, ArrowRight, FileText, GitBranch, ScanText,
  Bot, UserCheck, HardHat, BarChart2, Plug, Clock, Star,
  Shield, Zap, Building2, ChevronDown, AlertCircle
} from 'lucide-react'

/* ── EmailJS send (graceful fallback) ── */
async function sendEmail(data) {
  const svcId  = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const tplId  = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const pubKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  if (!svcId || !tplId || !pubKey || svcId === 'your_service_id') {
    console.warn('EmailJS is not configured. Demo request captured locally.')
    return { ok: true, simulated: true }
  }
  try {
    const { default: emailjs } = await import('@emailjs/browser')
    await emailjs.send(svcId, tplId, {
      full_name:          data.fullName,
      work_email:         data.email,
      phone:              data.phone,
      company:            data.company,
      job_title:          data.jobTitle,
      team_size:          data.teamSize,
      industry:           data.industry,
      automation_interest:data.interests.join(', '),
      preferred_date:     data.prefDate,
      preferred_time:     data.prefTime,
      message:            data.message,
    }, pubKey)
    return { ok: true }
  } catch (err) {
    console.error('EmailJS error:', err)
    return { ok: false, err }
  }
}

const demoPoints = [
  { icon: FileText,   text: 'Build forms and core data visually — no code needed' },
  { icon: GitBranch,  text: 'Create process flows and multi-level approval workflows' },
  { icon: ScanText,   text: 'See OCR extract invoice and document data automatically' },
  { icon: Bot,        text: 'Watch bots reduce manual follow-ups across departments' },
  { icon: UserCheck,  text: 'Learn how AI Recruiter accelerates candidate screening' },
  { icon: HardHat,    text: 'Explore construction project and site approval workflows' },
  { icon: BarChart2,  text: 'View dashboards with real-time operational visibility' },
  { icon: Plug,       text: 'Connect your existing ERP, HR, and finance systems' },
]

const timeline = [
  { n: '01', label: 'Submit request',             desc: 'Fill in your details and interests' },
  { n: '02', label: 'Team reviews requirements',  desc: 'We understand your use case' },
  { n: '03', label: 'Personalised demo scheduled', desc: 'Video call at your preferred time' },
  { n: '04', label: 'Workflow built for your business', desc: 'See your process come alive' },
]

const industries = [
  'Healthcare','Construction','Finance','Retail','Manufacturing',
  'Logistics','Education','Professional Services','Other',
]
const teamSizes = ['1–10','11–50','51–200','201–500','501–1000','1000+']
const timeSlots = ['09:00–11:00','11:00–13:00','13:00–15:00','15:00–17:00','17:00–19:00']
const interestOptions = [
  'Forms & Core Data','Process Flow','OCR Automation','AI Recruiter',
  'Construction Management','RPA','Bot Automation','Dashboards & Reports','Integrations',
]

const init = {
  fullName:'', email:'', phone:'', company:'', jobTitle:'',
  teamSize:'', industry:'', interests:[], prefDate:'', prefTime:'', message:'',
}

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1.5" style={{ fontFamily: 'var(--font-heading)', color: '#1e293b' }}>
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 mt-1 text-xs text-red-500">
          <AlertCircle size={11} />{error}
        </p>
      )}
    </div>
  )
}

const inputCls = "w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all"
const inputStyle = (err) => ({
  fontFamily: 'var(--font-body)',
  borderColor: err ? '#ef4444' : '#e2e8f0',
  background: '#f8fafc',
  boxShadow: err ? '0 0 0 2px rgba(239,68,68,0.12)' : 'none',
})
const focusStyle = { borderColor: '#3b82f6', boxShadow: '0 0 0 3px rgba(59,130,246,0.12)', background: 'white' }

export default function RequestDemo() {
  const navigate  = useNavigate()
  const [form, setForm]     = useState(init)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast]   = useState(null)

  function set(k, v) { setForm(f => ({ ...f, [k]: v })); setErrors(e => ({ ...e, [k]: '' })) }

  function toggleInterest(val) {
    setForm(f => ({
      ...f,
      interests: f.interests.includes(val)
        ? f.interests.filter(i => i !== val)
        : [...f.interests, val],
    }))
    setErrors(e => ({ ...e, interests: '' }))
  }

  function validate() {
    const e = {}
    if (!form.fullName.trim())                        e.fullName  = 'Full name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email  = 'Enter a valid work email'
    if (!form.phone.trim())                           e.phone    = 'Phone number is required'
    if (!form.company.trim())                         e.company  = 'Company name is required'
    if (!form.industry)                               e.industry = 'Please select an industry'
    if (form.interests.length === 0)                  e.interests= 'Select at least one area'
    return e
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    try {
      localStorage.setItem('skiode_demo_request', JSON.stringify({ ...form, submittedAt: new Date().toISOString() }))
      const res = await sendEmail(form)
      setToast(res.simulated ? 'warn' : res.ok ? 'ok' : 'err')
      setTimeout(() => navigate('/thank-you'), 1400)
    } catch { setToast('err') } finally { setLoading(false) }
  }

  return (
    <main className="min-h-screen pt-16" style={{ background: 'linear-gradient(135deg,#f8faff 0%,#ffffff 60%,#f0f4ff 100%)' }}>

      {/* Toast */}
      {toast && (
        <div className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold shadow-2xl ${toast === 'ok' ? 'bg-emerald-500' : toast === 'warn' ? 'bg-amber-500' : 'bg-red-500'} text-white`}
          style={{ fontFamily: 'var(--font-heading)' }}>
          <CheckCircle2 size={16} />
          {toast === 'ok'   && 'Demo request submitted! Redirecting…'}
          {toast === 'warn' && 'Request saved! Email not sent (EmailJS not configured)'}
          {toast === 'err'  && 'Saved locally — email could not be sent'}
        </div>
      )}

      {/* Hero band */}
      <div className="text-center py-14 px-4 relative">
        <div className="absolute inset-0 dot-pattern-light opacity-50 pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
          style={{ fontFamily: 'var(--font-heading)', background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.2)', color: '#2563eb' }}>
          <Star size={11} /> Personalised Platform Demo
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}>
          Request a <span className="gradient-text-brand">Personalised Demo</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto" style={{ color: '#64748b', fontFamily: 'var(--font-body)' }}>
          See how our AI-powered low-code platform helps your team build apps, automate workflows, and improve operations faster.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* ── Left: value prop ── */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }}>
              <h2 className="text-xl font-bold text-slate-900 mb-5"
                style={{ fontFamily: 'var(--font-heading)' }}>What you will see in the demo</h2>
              <div className="space-y-2.5">
                {demoPoints.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.06 }}
                    className="flex items-start gap-3 px-4 py-3 rounded-2xl"
                    style={{ background: '#f8fafc', border: '1px solid rgba(0,0,0,0.06)' }}>
                    <div className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(59,130,246,0.15)' }}>
                      <p.icon size={13} style={{ color: '#3b82f6' }} />
                    </div>
                    <span className="text-sm leading-snug" style={{ color: '#475569', fontFamily: 'var(--font-body)' }}>
                      {p.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
              <h3 className="text-base font-bold text-slate-900 mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}>How it works</h3>
              <div className="space-y-0">
                {timeline.map((t, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-xs flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg,#3b82f6,#84cc16)', color: 'white', fontFamily: 'var(--font-heading)' }}>
                        {t.n}
                      </div>
                      {i < timeline.length - 1 && (
                        <div className="w-px flex-1 my-1" style={{ background: 'rgba(59,130,246,0.2)', minHeight: 24 }} />
                      )}
                    </div>
                    <div className="pb-5">
                      <div className="text-sm font-semibold text-slate-800" style={{ fontFamily: 'var(--font-heading)' }}>{t.label}</div>
                      <div className="text-xs mt-0.5" style={{ color: '#94a3b8', fontFamily: 'var(--font-body)' }}>{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Shield,       label: 'Enterprise-grade security' },
                { icon: Clock,        label: 'Demo within 24 hours' },
                { icon: Zap,          label: 'No commitment required' },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium"
                  style={{ background: '#f8fafc', border: '1px solid rgba(0,0,0,0.06)', color: '#64748b', fontFamily: 'var(--font-heading)' }}>
                  <b.icon size={11} style={{ color: '#84cc16' }} /> {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form ── */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden"
            style={{ background: 'white', boxShadow: '0 20px 60px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.06)' }}>

            {/* Form header */}
            <div className="px-7 py-5 border-b border-slate-100"
              style={{ background: 'linear-gradient(135deg,#f8faff,#eef3ff)' }}>
              <h2 className="text-xl font-extrabold text-slate-900" style={{ fontFamily: 'var(--font-heading)' }}>Book Your Demo</h2>
              <p className="text-sm text-slate-500 mt-1" style={{ fontFamily: 'var(--font-body)' }}>
                Fill in the form and our team will reach out within one business day.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="px-7 py-6 space-y-4">
              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" required error={errors.fullName}>
                  <input value={form.fullName} onChange={e => set('fullName', e.target.value)}
                    className={inputCls} style={inputStyle(errors.fullName)}
                    onFocus={e => Object.assign(e.target.style, focusStyle)}
                    onBlur={e => Object.assign(e.target.style, inputStyle(errors.fullName))}
                    placeholder="Your full name" />
                </Field>
                <Field label="Work Email" required error={errors.email}>
                  <input type="email" value={form.email} onChange={e => set('email', e.target.value)}
                    className={inputCls} style={inputStyle(errors.email)}
                    onFocus={e => Object.assign(e.target.style, focusStyle)}
                    onBlur={e => Object.assign(e.target.style, inputStyle(errors.email))}
                    placeholder="you@company.com" />
                </Field>
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Phone Number" required error={errors.phone}>
                  <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)}
                    className={inputCls} style={inputStyle(errors.phone)}
                    onFocus={e => Object.assign(e.target.style, focusStyle)}
                    onBlur={e => Object.assign(e.target.style, inputStyle(errors.phone))}
                    placeholder="+1 555 000 0000" />
                </Field>
                <Field label="Company Name" required error={errors.company}>
                  <input value={form.company} onChange={e => set('company', e.target.value)}
                    className={inputCls} style={inputStyle(errors.company)}
                    onFocus={e => Object.assign(e.target.style, focusStyle)}
                    onBlur={e => Object.assign(e.target.style, inputStyle(errors.company))}
                    placeholder="Your company" />
                </Field>
              </div>

              {/* Row 3 */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Job Title">
                  <input value={form.jobTitle} onChange={e => set('jobTitle', e.target.value)}
                    className={inputCls} style={inputStyle()} placeholder="e.g. Operations Manager"
                    onFocus={e => Object.assign(e.target.style, focusStyle)}
                    onBlur={e => Object.assign(e.target.style, inputStyle())} />
                </Field>
                <Field label="Team Size">
                  <div className="relative">
                    <select value={form.teamSize} onChange={e => set('teamSize', e.target.value)}
                      className={inputCls + ' appearance-none pr-9'} style={inputStyle()}>
                      <option value="">Select team size</option>
                      {teamSizes.map(s => <option key={s} value={s}>{s} employees</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                  </div>
                </Field>
              </div>

              {/* Industry */}
              <Field label="Industry" required error={errors.industry}>
                <div className="relative">
                  <select value={form.industry} onChange={e => set('industry', e.target.value)}
                    className={inputCls + ' appearance-none pr-9'} style={inputStyle(errors.industry)}>
                    <option value="">Select your industry</option>
                    {industries.map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                </div>
              </Field>

              {/* Automation interest */}
              <Field label="What do you want to automate?" required error={errors.interests}>
                <div className="flex flex-wrap gap-2 mt-1">
                  {interestOptions.map(opt => {
                    const sel = form.interests.includes(opt)
                    return (
                      <button type="button" key={opt} onClick={() => toggleInterest(opt)}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          background: sel ? 'linear-gradient(135deg,#3b82f6,#2563eb)' : '#f1f5f9',
                          color: sel ? 'white' : '#475569',
                          border: `1px solid ${sel ? '#3b82f6' : '#e2e8f0'}`,
                          boxShadow: sel ? '0 2px 8px rgba(59,130,246,0.25)' : 'none',
                        }}>
                        {opt}
                      </button>
                    )
                  })}
                </div>
              </Field>

              {/* Date & time */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Preferred Demo Date">
                  <input type="date" value={form.prefDate} onChange={e => set('prefDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className={inputCls} style={inputStyle()}
                    onFocus={e => Object.assign(e.target.style, focusStyle)}
                    onBlur={e => Object.assign(e.target.style, inputStyle())} />
                </Field>
                <Field label="Preferred Time Slot">
                  <div className="relative">
                    <select value={form.prefTime} onChange={e => set('prefTime', e.target.value)}
                      className={inputCls + ' appearance-none pr-9'} style={inputStyle()}>
                      <option value="">Select time</option>
                      {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
                  </div>
                </Field>
              </div>

              {/* Message */}
              <Field label="Message / Requirement">
                <textarea value={form.message} onChange={e => set('message', e.target.value)}
                  rows={3} className={inputCls + ' resize-none'} style={inputStyle()}
                  onFocus={e => Object.assign(e.target.style, focusStyle)}
                  onBlur={e => Object.assign(e.target.style, inputStyle())}
                  placeholder="Tell us about your business process or automation goal…" />
              </Field>

              {/* Submit */}
              <button type="submit" disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-white transition-all hover:scale-[1.01] disabled:opacity-60"
                style={{ fontFamily: 'var(--font-heading)', background: 'linear-gradient(135deg,#3b82f6,#2563eb)', boxShadow: '0 8px 24px rgba(59,130,246,0.3)', fontSize: 15 }}>
                {loading ? (
                  <><div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" /> Processing…</>
                ) : (
                  <>Request My Demo <ArrowRight size={15} /></>
                )}
              </button>

              {/* Privacy */}
              <p className="text-center text-xs text-slate-400" style={{ fontFamily: 'var(--font-body)' }}>
                <Shield size={10} className="inline mr-1 text-slate-300" />
                We respect your privacy. Your details are used only to contact you about the demo.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
