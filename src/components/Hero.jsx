import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Bot, Code2, Play, Plug, Workflow } from 'lucide-react'
import processFlowScreenshot from '../assets/procee_flow.png'
import mobileAppScreenshot from '../assets/skiode_mob_screen_enhanced.png'

const ease = [0.22, 1, 0.36, 1]
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
})

const capabilities = [
  { icon: Code2, title: 'Build', subtitle: 'Faster', color: '#2563eb', bg: '#eef5ff' },
  { icon: Workflow, title: 'Automate', subtitle: 'Smarter', color: '#7c3aed', bg: '#f3efff' },
  { icon: Plug, title: 'Integrate', subtitle: 'Easily', color: '#059669', bg: '#eafbf5' },
  { icon: Bot, title: 'Scale', subtitle: 'Confidently', color: '#65a30d', bg: '#f3fbdc' },
]

function StoreBadge({ type }) {
  const apple = type === 'apple'
  return (
    <a href="#" className="flex min-w-[142px] items-center gap-2 rounded-xl bg-black px-4 py-2 text-white shadow-lg transition-transform hover:-translate-y-0.5">
      {apple ? (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="white" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
      ) : (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#4285F4"/><path d="M17.556 8.223L5.124.573l8.668 8.668 3.764-1.018z" fill="#EA4335"/><path d="M17.556 15.777l-3.764-3.764L5.124 23.427l12.432-7.65z" fill="#34A853"/><path d="M21.395 10.678l-3.839-2.455-4.764 3.764 4.764 3.79 3.839-2.455a1.19 1.19 0 000-2.644z" fill="#FBBC04"/></svg>
      )}
      <span><span className="block text-[8px] leading-none text-white/70">{apple ? 'Download on the' : 'GET IT ON'}</span><span className="block text-sm font-medium leading-tight">{apple ? 'App Store' : 'Google Play'}</span></span>
    </a>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fbfdff] pt-14 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 opacity-90" style={{ backgroundImage: 'radial-gradient(circle, rgba(61, 104, 151, 0.28) 1.15px, transparent 1.15px)', backgroundSize: '22px 22px' }} />
      <div className="pointer-events-none absolute -right-[12%] -top-[28%] h-[760px] w-[760px] rounded-full bg-[#e1efff] opacity-90" />
      <div className="pointer-events-none absolute right-[2%] top-[14%] h-[500px] w-[500px] rounded-full bg-[#c9e0ff] opacity-55" />
      <div className="pointer-events-none absolute bottom-[7%] left-[36%] h-[330px] w-[560px] -rotate-12 rounded-[50%] bg-[#e2efff] opacity-75" />

      <div className="relative mx-auto max-w-[1600px] px-5 pb-0 pt-2 sm:px-8 lg:px-12 lg:pt-4 xl:px-14">
        <div className="grid items-center gap-10 lg:min-h-[650px] lg:grid-cols-12 lg:gap-6">
          <div className="relative z-20 pb-8 lg:col-span-5">
            <motion.div {...reveal(0)} className="mb-5 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe0f3] bg-[#eef6ff] px-4 py-2 text-xs font-medium uppercase text-[#1564df] shadow-sm"><span className="h-2 w-2 rounded-full bg-[#75df00]" /> AI-Led Low-Code Platform</span>
              <span className="text-xs uppercase tracking-[0.12em] text-[#60728e]">Build Today, Scale Tomorrow</span>
            </motion.div>

            <motion.h1 {...reveal(0.1)} className="max-w-[650px] text-[37px] font-bold leading-[1.06] tracking-[0.005em] text-[#061b54] sm:text-[49px] xl:text-[55px]">
              Simplify Operations,<span className="block text-[#4385f4]">Automate Processes,</span><span className="block">Amplify ROI</span>
            </motion.h1>

            <motion.p {...reveal(0.2)} className="mt-5 max-w-[590px] text-base leading-[1.65] text-[#34527d] sm:text-lg">skiode helps organizations gain complete visibility, automate operations, and accelerate digital transformation — from idea to working application in weeks, not months.</motion.p>

            <motion.div {...reveal(0.3)} className="mt-6 flex flex-wrap items-center gap-4">
              <Link to="/request-demo" className="group inline-flex items-center gap-3 rounded-full bg-[#063b73] px-7 py-3.5 text-sm font-medium text-white shadow-[0_12px_28px_rgba(6,59,115,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#052f5b]">Get Started Free <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link>
              <a href="#showcase" className="inline-flex items-center gap-3 text-sm font-medium text-[#163b72]"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#80b2ff] bg-white text-[#2873e8] shadow-sm"><Play size={15} fill="currentColor" /></span>See How It Works</a>
            </motion.div>

            <motion.div {...reveal(0.4)} className="mt-9 grid max-w-[580px] grid-cols-2 gap-6 sm:grid-cols-4">
              {capabilities.map(item => (
                <div key={item.title} className="group"><div className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-[0_10px_25px_rgba(20,64,101,0.10)] transition-transform group-hover:-translate-y-1" style={{ background: item.bg }}><item.icon size={29} style={{ color: item.color }} /></div><div className="mt-3 text-sm leading-tight text-[#102b63]"><span className="block font-medium">{item.title}</span>{item.subtitle}</div></div>
              ))}
            </motion.div>
          </div>

          <motion.div {...reveal(0.18)} className="relative z-10 min-h-[410px] lg:col-span-7 lg:min-h-[610px]">
            <div className="absolute left-0 top-[7%] w-[94%] rounded-[26px] border border-[#d9e5f0] bg-white p-2.5 shadow-[0_28px_70px_rgba(24,70,112,0.20)] lg:w-[92%]">
              <div className="mb-2 flex items-center justify-between px-2 py-1">
                <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" /><span className="h-2.5 w-2.5 rounded-full bg-[#f5b942]" /><span className="h-2.5 w-2.5 rounded-full bg-[#23b26d]" /></div>
                <span className="rounded-full bg-[#eef5fb] px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[#47627f]">Process Orchestration</span>
              </div>
              <div className="overflow-hidden rounded-[18px] border border-[#e2eaf2] bg-white"><img src={processFlowScreenshot} alt="Skiode process flow web application" className="block h-auto w-full" /></div>
            </div>

            <div className="absolute right-[1%] top-[14%] z-20 w-[29%] min-w-[132px] max-w-[190px] rounded-[22px] border border-[#5f6b7a] bg-white p-1.5 shadow-[0_24px_55px_rgba(29,48,72,0.20),0_0_0_4px_rgba(255,255,255,0.72)]">
              <div className="aspect-[856/1840] overflow-hidden rounded-[10px] bg-white ring-1 ring-[#e2e8f0]"><img src={mobileAppScreenshot} alt="Skiode mobile application" className="block h-full w-full object-cover object-top" /></div>
            </div>

            <div className="absolute bottom-[5%] left-[8%] hidden rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-[0_16px_35px_rgba(20,64,101,0.14)] backdrop-blur sm:block">
              <span className="block text-[10px] uppercase tracking-[0.13em] text-[#6b7f96]">One connected platform</span>
              <strong className="mt-1 block text-sm text-[#0b2d62]">Build on web. Run anywhere.</strong>
            </div>

            <div className="absolute bottom-[5%] right-0 z-30 flex items-end gap-2.5">
              <StoreBadge type="apple" />
              <StoreBadge type="google" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
