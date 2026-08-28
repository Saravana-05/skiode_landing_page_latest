import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Globe2, Handshake, House, Quote, Star, Users } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  { name: 'Project Manager', title: 'Project Manager', company: 'Friedman Associates, US', quote: 'Overall, my experience with the SkyLimit team was good! Team was very responsive in Slack. I am extremely grateful for the pricing practice of keeping within our budget and not having a lot of add-ons. This was the most valuable part of the project for us.', metric: 'Budget-friendly delivery', tint: '#287fea' },
  { name: 'Sidharth', title: 'CEO', company: 'Trotlabs, US', quote: 'When I first explored this platform, I was impressed by its cutting-edge approach to low-code development, RPA, and workflow automation. The vision and execution of the team truly stands out — a future-ready solution with scalability and seamless integration.', metric: 'Investor-backed vision', tint: '#7c4dff' },
  { name: 'Vijaysabari', title: 'Managing Director', company: 'Kodivian Technologies', quote: "Partnering with Skiode has been one of the best business decisions we've made. The demand for low-code, RPA, and workflow automation solutions is growing rapidly, and this product delivers exactly what enterprises need.", metric: 'Revenue growth partner', tint: '#00a982' },
  { name: 'IT Head', title: 'IT Head', company: 'Global Fuel Systems Mfg, India', quote: 'Implementing Skiode for our Sales Order Automation was a game-changer. We automated order entry, validation, and approvals — reducing processing time by 70% and eliminating manual errors.', metric: '70% faster processing', tint: '#e89000' },
  { name: 'Saravanakumar', title: 'Full Stack Developer', company: 'SkyUnlimited', quote: "Skiode's low-code approach does not limit what you can build — it accelerates it. The visual process builder, API integrations, and extensibility options make it powerful for business users and full-stack engineers.", metric: 'Developer experience', tint: '#0891b2' },
]

const impactStats = [
  { icon: Globe2, value: '100+', label: 'Global Customers' },
  { icon: Users, value: '20+', label: 'Countries' },
  { icon: Handshake, value: 'Long-term', label: 'Partnerships' },
]

function DottedWorldMap() {
  return (
    <svg aria-hidden="true" viewBox="0 0 1200 470" className="pointer-events-none absolute left-1/2 top-0 h-[430px] w-[1100px] -translate-x-1/2 opacity-60">
      <defs>
        <pattern id="story-map-dots" width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.7" fill="#b9cae2" />
        </pattern>
      </defs>
      <g fill="url(#story-map-dots)">
        <path d="M112 125l42-50 87-35 94 18 47 45-24 30-53 1-17 31-49 19-26 51-42-7-10-43-39-20z" />
        <path d="M294 224l48 18 24 54-15 52-29 74-27-18 8-67-29-49z" />
        <path d="M500 99l39-29 52 8 24 28-30 23-44-7z" />
        <path d="M530 145l64-8 49 39 2 62-35 105-39 39-22-62 12-69-43-57z" />
        <path d="M610 92l101-42 165 12 119 58 59 72-42 38-86-19-60 30-59-25-27 52-74-13-27-59-69-26z" />
        <path d="M888 291l57-24 66 30 8 54-51 31-76-23z" />
        <path d="M1041 188l34 12 19 31-30 15-24-22z" />
      </g>
    </svg>
  )
}

export default function Testimonials() {
  const [start, setStart] = useState(0)
  const visible = [0, 1, 2].map(offset => testimonials[(start + offset) % testimonials.length])
  const previous = () => setStart(current => (current - 1 + testimonials.length) % testimonials.length)
  const next = () => setStart(current => (current + 1) % testimonials.length)

  return (
    <section className="relative overflow-hidden border-y border-[#164065]/10 py-8 sm:py-10" id="testimonials" style={{ background: '#f9fbff' }}>
      <DottedWorldMap />
      <div aria-hidden="true" className="absolute -left-44 top-64 h-72 w-[430px] -rotate-[28deg] rounded-[50%] bg-[#7eb5ff]/25" />
      <div aria-hidden="true" className="absolute -left-36 top-80 h-72 w-[390px] -rotate-[28deg] rounded-[50%] bg-[#b9d6ff]/30" />
      <div aria-hidden="true" className="absolute -right-52 top-72 h-80 w-[480px] rotate-[25deg] rounded-[50%] bg-[#8178ff]/20" />
      <div aria-hidden="true" className="absolute -right-40 bottom-4 h-72 w-[420px] rotate-[25deg] rounded-[50%] bg-[#b7afff]/22" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="absolute left-0 top-2 hidden text-[12px] font-semibold uppercase leading-6 tracking-[0.34em] text-slate-500 xl:block">
          Real people<br />Greater<br />Possibilities
        </div>
        <div className="absolute right-2 top-0 hidden -rotate-6 text-right text-2xl italic leading-tight text-[#716dff]/55 xl:block" style={{ fontFamily: 'cursive' }}>
          Building<br />Impact<br />Together
        </div>

        <div className="mb-5 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-semibold"
            style={{ background: 'rgba(22,64,101,0.07)', border: '1px solid rgba(22,64,101,0.16)', color: '#164065' }}>
            <House size={12} /> Customer Stories
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}
            className="mb-3 text-[36px] font-black leading-[1.05] tracking-tight" style={{ color: '#071827' }}>
            Trusted by leaders across the <span style={{ color: '#287fea' }}>globe</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.14 }}
            className="mx-auto max-w-4xl text-sm leading-relaxed text-slate-500 lg:whitespace-nowrap">
            Real stories from our partners and customers who are building a safer, smarter, and stronger tomorrow.
          </motion.p>
        </div>

        <div className="relative">
          <button type="button" onClick={previous} aria-label="Previous customer stories"
            className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-5 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#071827] shadow-lg transition-transform hover:scale-110 lg:flex">
            <ChevronLeft size={22} />
          </button>
          <button type="button" onClick={next} aria-label="Next customer stories"
            className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-5 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#071827] shadow-lg transition-transform hover:scale-110 lg:flex">
            <ChevronRight size={22} />
          </button>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((testimonial, index) => (
                <motion.article key={`${testimonial.name}-${start}-${index}`}
                  initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className={`${index === 2 ? 'hidden lg:flex' : 'flex'} min-h-[390px] flex-col rounded-[24px] border border-white bg-white p-6 shadow-[0_14px_45px_rgba(20,55,95,0.09)] sm:p-7`}>
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex gap-0.5 text-[#f59e0b]">
                      {Array.from({ length: 5 }).map((_, star) => <Star key={star} size={16} fill="currentColor" strokeWidth={0} />)}
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold whitespace-nowrap"
                      style={{ background: `${testimonial.tint}12`, color: testimonial.tint }}>
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: testimonial.tint }} />
                      {testimonial.metric}
                    </div>
                  </div>

                  <Quote size={36} fill={testimonial.tint} className="mb-1 opacity-45" style={{ color: testimonial.tint }} />
                  <p className="flex-1 text-[15px] leading-6 text-[#33406b]">“{testimonial.quote}”</p>

                  <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-sm font-black"
                      style={{ background: '#071827', color: '#39ff14' }}>
                      {testimonial.name.split(' ').map(part => part[0]).join('')}
                    </div>
                    <div className="min-w-0">
                      <div className="font-extrabold text-[#071827]">{testimonial.name}</div>
                      <div className="text-xs leading-5 text-slate-500">{testimonial.title} · {testimonial.company}</div>
                    </div>
                    <Quote size={42} fill={testimonial.tint} className="ml-auto flex-shrink-0 opacity-25" style={{ color: testimonial.tint }} />
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-5 flex justify-center gap-3 lg:hidden">
            <button type="button" onClick={previous} aria-label="Previous customer stories" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#071827] shadow-md"><ChevronLeft size={19} /></button>
            <button type="button" onClick={next} aria-label="Next customer stories" className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#071827] shadow-md"><ChevronRight size={19} /></button>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-3">
          {impactStats.map((stat, index) => (
            <div key={stat.label} className={`flex items-center justify-center gap-4 ${index ? 'sm:border-l sm:border-slate-200' : ''}`}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#164065]"><stat.icon size={27} /></div>
              <div><div className="text-2xl font-black text-[#071827]">{stat.value}</div><div className="text-xs font-medium text-slate-500">{stat.label}</div></div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-[11px] font-semibold uppercase tracking-[0.42em] text-slate-500">
          Together we create lasting impact
          <div className="mx-auto mt-3 h-0.5 w-20 bg-[#287fea]" />
        </div>
      </div>
    </section>
  )
}
