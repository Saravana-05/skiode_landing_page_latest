import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronDown, HelpCircle, MessageCircle, ShieldCheck, Users, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const faqs = [
  { q: 'What is skiode?', a: 'Skiode is an AI-powered low-code platform that lets businesses build workflows, forms, and apps without writing code or hiring developers. It combines workflow automation, low-code app building, OCR, and AI bots in one platform.' },
  { q: 'Do I need coding skills to use skiode?', a: 'No. Skiode uses a visual, drag-and-drop interface, so non-technical users can build workflows and apps without code. Developers can also extend the platform for advanced use cases.' },
  { q: 'What can skiode automate?', a: 'Skiode automates approvals, onboarding, procurement, invoice processing, and other repetitive, multi-step business processes.' },
  { q: 'Does skiode connect with the tools we already use?', a: 'Yes. Skiode integrates with commonly used business systems — ERP, CRM, and cloud platforms — with no custom code needed.' },
  { q: 'Does skiode support role-based permissions?', a: 'Yes. Skiode includes role-based access controls so you can manage who can view, edit, or approve each step of a workflow.' },
  { q: 'How is ROI measured with skiode?', a: 'Skiode tracks metrics like cycle time reduction, faster app builds, and cost savings, giving you visibility into the impact of automation over time.' },
]

const badgeColors = ['#67C090']

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative overflow-hidden border-y border-white/10 py-7 sm:py-8" style={{ background: '#071827' }}>
      <div aria-hidden="true" className="absolute -left-56 top-48 h-[420px] w-[520px] -rotate-[28deg] rounded-[50%] bg-[#164065]/55" />
      <div aria-hidden="true" className="absolute -right-64 top-72 h-[460px] w-[570px] rotate-[24deg] rounded-[50%] bg-[#67C090]/[0.05]" />
      <div aria-hidden="true" className="absolute right-10 top-0 h-32 w-40 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(57,255,20,0.7) 1.5px, transparent 1.5px)', backgroundSize: '14px 14px' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="absolute left-0 top-5 hidden text-[12px] font-semibold uppercase leading-6 tracking-[0.34em] text-slate-400 xl:block">Clarity<br />Builds<br />Confidence</div>
        <div className="absolute right-2 top-2 hidden -rotate-6 text-right text-xl italic leading-tight text-[#67C090]/35 xl:block" style={{ fontFamily: 'cursive' }}>Good Questions<br />Brighter<br />Possibilities</div>

        <div className="mb-5 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-2 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold" style={{ background: 'rgba(103,192,144,0.08)', border: '1px solid rgba(103,192,144,0.25)', color: '#67C090' }}>
            <HelpCircle size={13} /> FAQ
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="mb-2 text-[36px] font-black leading-tight text-white">
            Frequently asked <span style={{ color: '#67C090' }}>questions</span>
          </motion.h2>
          <p className="text-[12px] text-slate-400">Everything you need to know about Skiode, all in one place.</p>
        </div>

        <div className="grid items-start gap-5 lg:grid-cols-[300px_1fr] lg:gap-8">
          <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
            <div className="mb-2 inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider" style={{ background: 'rgba(103,192,144,0.08)', color: '#67C090' }}>Still have questions?</div>
            <h3 className="mb-2 text-3xl font-black leading-none text-white">We're here<br />to <span style={{ color: '#67C090' }}>help</span></h3>
            <p className="mb-4 text-[12px] leading-5 text-slate-400">Find quick answers to common questions. Can't find what you're looking for? Our team is just a message away.</p>
            <div className="space-y-3">
              {[
                { icon: Zap, title: 'Quick Answers', text: 'Get the information you need in seconds', color: '#67C090' },
                { icon: ShieldCheck, title: 'Trusted & Reliable', text: 'Built for security, compliance and scale', color: '#67C090' },
                { icon: Users, title: 'Always Here for You', text: 'Our team is ready to support you anytime', color: '#67C090' },
              ].map(item => (
                <div key={item.title} className="flex items-center gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full" style={{ background: `${item.color}12`, color: item.color }}><item.icon size={20} /></div>
                  <div><div className="text-sm font-bold text-white">{item.title}</div><div className="text-[11px] leading-4 text-slate-400">{item.text}</div></div>
                </div>
              ))}
            </div>
          </aside>

          <div>
            <div className="space-y-2">
              {faqs.map((faq, index) => {
                const color = badgeColors[index % badgeColors.length]
                return (
                  <motion.div key={faq.q} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.035 }} className={`overflow-hidden rounded-xl border bg-white/[0.045] transition-colors ${open === index ? 'border-[#67C090]/35' : 'border-white/10 hover:border-white/20'}`}>
                    <button className="flex w-full items-center gap-3 px-4 py-2 text-left" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}>
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[12px] font-black" style={{ background: `${color}10`, color }}>{String(index + 1).padStart(2, '0')}</span>
                      <span className="flex-1 text-[13px] font-bold leading-snug text-white">{faq.q}</span>
                      <ChevronDown size={15} className={`flex-shrink-0 text-[#67C090] transition-transform duration-300 ${open === index ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {open === index && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                          <div className="mx-4 mb-2 rounded-lg px-4 py-2.5 text-[12px] leading-relaxed text-slate-300" style={{ background: 'rgba(255,255,255,0.05)' }}>{faq.a}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-3 flex flex-col items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-2.5 sm:flex-row">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#67C090]/10 text-[#67C090]"><MessageCircle size={18} /></div>
                <div><div className="text-sm font-bold text-white">Still have a question?</div><div className="text-[11px] text-slate-400">Our team is happy to help you.</div></div>
              </div>
              <Link to="/request-demo" className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold" style={{ background: '#67C090', color: '#071827' }}>Contact Us <ArrowRight size={13} /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
