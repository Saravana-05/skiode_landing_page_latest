import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ScanText, ArrowRight, FileText, CheckCircle2, Sparkles, Eye,
  Zap, Shield, Brain, Upload, Loader2, ScanLine, FileSearch, Target
} from 'lucide-react'
import ocrScreenshot from '../../assets/platform_screenshots/Ocr_extraction.png'

const ease = [0.25, 0.46, 0.45, 0.94]

const docTypes = {
  aadhaar: {
    label: 'Aadhaar Card',
    fields: [
      { label: 'Full Name', value: 'Rajesh Kumar Sharma', confidence: 99 },
      { label: 'DOB', value: '15/08/1990', confidence: 98 },
      { label: 'Gender', value: 'Male', confidence: 100 },
      { label: 'Aadhaar No', value: '•••• •••• 4523', confidence: 97 },
      { label: 'Address', value: '42, MG Road, Bengaluru 560001', confidence: 95 },
    ],
  },
  pan: {
    label: 'PAN Card',
    fields: [
      { label: 'Full Name', value: 'RAJESH KUMAR SHARMA', confidence: 99 },
      { label: 'Father Name', value: 'SURESH SHARMA', confidence: 97 },
      { label: 'DOB', value: '15/08/1990', confidence: 98 },
      { label: 'PAN', value: 'ABCDE1234F', confidence: 100 },
      { label: 'Category', value: 'Individual', confidence: 100 },
    ],
  },
}

const stats = [
  { value: '99%', label: 'Accuracy', icon: Target },
  { value: '<3s', label: 'Per Page', icon: Zap },
  { value: '50+', label: 'Doc Types', icon: FileSearch },
  { value: 'AI', label: 'Powered', icon: Brain },
]

const features = [
  { icon: Brain, label: 'AI-Powered', desc: 'Deep learning models trained on millions of documents for 99%+ accuracy' },
  { icon: Eye, label: 'Auto-Classify', desc: 'Upload any doc — AI detects the type and extracts the right fields' },
  { icon: Shield, label: 'PII Masking', desc: 'Auto-redact sensitive data like Aadhaar, SSN, bank numbers' },
  { icon: Zap, label: 'Batch Processing', desc: 'Process hundreds of documents in parallel, results in seconds' },
]

export default function OcrPage() {
  const [activeDoc, setActiveDoc] = useState('aadhaar')
  const [extractedFields, setExtractedFields] = useState([])
  const [scanning, setScanning] = useState(false)
  const [scanDone, setScanDone] = useState(false)

  useEffect(() => {
    setExtractedFields([])
    setScanning(true)
    setScanDone(false)
    const doc = docTypes[activeDoc]
    const timers = []
    timers.push(setTimeout(() => setScanning(false), 1200))
    doc.fields.forEach((field, i) => {
      timers.push(setTimeout(() => {
        setExtractedFields(prev => [...prev, field])
      }, 1500 + i * 400))
    })
    timers.push(setTimeout(() => setScanDone(true), 1500 + doc.fields.length * 400 + 300))
    return () => timers.forEach(clearTimeout)
  }, [activeDoc])

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
              <ScanText size={14} /> OCR & Document AI
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-4xl font-extrabold mb-4 leading-tight" style={{ color: '#39ff14' }}>
              Extract data. Intelligently.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ease }}
              className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Upload any document — Aadhaar, PAN, invoices, contracts — and get structured data back
              in seconds with 99%+ accuracy. AI-powered classification and extraction.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, ease }}
              className="flex flex-wrap gap-4 justify-center">
              <Link to="/request-demo" className="inline-flex items-center gap-2 text-base font-bold px-8 py-3.5 rounded-2xl transition-all hover:scale-105"
                style={{ background: '#ffffff', color: '#164065', boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}>
                Try OCR Engine <ArrowRight size={18} />
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
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: '#164065' }}>Watch it extract — live</h2>
            <p className="text-base text-slate-500">Upload a document and see fields extracted with confidence scores</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden mx-auto max-w-4xl"
            style={{ border: '1px solid #e2e8f0', boxShadow: '0 25px 80px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center justify-between px-5 py-3" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-slate-400 font-medium">skiode — OCR Engine</span>
              </div>
              <div className="flex gap-2">
                {Object.entries(docTypes).map(([key, doc]) => (
                  <button key={key} onClick={() => setActiveDoc(key)}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
                    style={{ background: activeDoc === key ? 'rgba(22,64,101,0.08)' : 'transparent',
                      color: activeDoc === key ? '#164065' : '#94a3b8',
                      border: `1px solid ${activeDoc === key ? 'rgba(22,64,101,0.25)' : 'transparent'}` }}>
                    {doc.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 divide-x divide-slate-100">
              <div className="p-6 flex flex-col items-center justify-center" style={{ background: '#fafbfc', minHeight: 380 }}>
                <div className="relative w-full max-w-[220px] rounded-2xl overflow-hidden"
                  style={{ background: '#fff', border: '2px solid #e2e8f0', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', aspectRatio: '3/4' }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3"
                      style={{ background: 'rgba(22,64,101,0.08)' }}>
                      <FileText size={28} style={{ color: '#164065' }} />
                    </div>
                    <div className="text-sm font-extrabold text-slate-700 text-center">{docTypes[activeDoc].label}</div>
                    <div className="text-[10px] text-slate-400 mt-1">Government of India</div>
                    <div className="mt-4 space-y-1.5 w-full px-2">
                      {[60, 80, 45, 70].map((w, i) => (
                        <div key={i} className="h-2 rounded-full" style={{ width: `${w}%`, background: '#e2e8f0' }} />
                      ))}
                    </div>
                  </div>
                  {scanning && (
                    <motion.div className="absolute left-0 right-0 h-1"
                      style={{ background: '#164065' }}
                      animate={{ top: ['0%', '100%', '0%'], opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }} />
                  )}
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <Upload size={14} style={{ color: '#164065' }} />
                  <span className="text-xs text-slate-400 font-semibold">Document uploaded</span>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <ScanLine size={14} /> Extracted Fields
                </div>
                <div className="space-y-2.5">
                  <AnimatePresence>
                    {extractedFields.map((field) => (
                      <motion.div key={`${activeDoc}-${field.label}`}
                        initial={{ opacity: 0, x: 20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.4, ease }}
                        className="flex items-center justify-between px-4 py-3 rounded-xl"
                        style={{ background: 'rgba(22,64,101,0.04)', border: '1px solid rgba(22,64,101,0.12)' }}>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wide" style={{ color: '#164065' }}>{field.label}</div>
                          <div className="text-sm font-bold text-slate-800 mt-0.5">{field.value}</div>
                        </div>
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <span className="text-xs font-bold text-emerald-500">{field.confidence}%</span>
                          <CheckCircle2 size={16} className="text-emerald-500" />
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {scanning && (
                    <motion.div animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ repeat: Infinity, duration: 1.2 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-dashed" style={{ borderColor: 'rgba(22,64,101,0.25)' }}>
                      <Loader2 size={16} className="animate-spin" style={{ color: '#164065' }} />
                      <span className="text-xs font-bold" style={{ color: '#164065' }}>Scanning document...</span>
                    </motion.div>
                  )}
                </div>

                {scanDone && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl mt-4"
                    style={{ background: 'rgba(22,64,101,0.06)', border: '1px solid rgba(22,64,101,0.2)' }}>
                    <Sparkles size={14} style={{ color: '#164065' }} />
                    <span className="text-xs font-bold" style={{ color: '#164065' }}>5 fields extracted · Avg confidence 98.6%</span>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12" style={{ background: '#f8fafc' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold mb-3" style={{ color: '#164065' }}>Why teams love OCR Engine</h2>
            <p className="text-base text-slate-500">Enterprise-grade document intelligence</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, ease }}
                className="group p-6 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform"
                  style={{ background: '#164065' }}>
                  <f.icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-extrabold mb-2" style={{ color: '#164065' }}>{f.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
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
            <p className="text-base text-slate-500">The actual skiode OCR extraction engine</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden" style={{ border: '1px solid #e2e8f0', boxShadow: '0 30px 80px rgba(0,0,0,0.1)' }}>
            <div className="flex items-center gap-2 px-5 py-3" style={{ background: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}>
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-slate-400 font-medium">skiode — OCR Extraction</span>
            </div>
            <img src={ocrScreenshot} alt="skiode OCR" className="w-full" />
          </motion.div>
        </div>
      </section>
    </>
  )
}
