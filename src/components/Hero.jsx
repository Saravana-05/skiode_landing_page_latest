import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Bot, CheckCircle2, Code2, Play, Plug, TrendingUp, Workflow, Zap } from 'lucide-react'
import platformScreenshot from '../assets/Skiode_Banner.png'
import mobileScreenshot from '../assets/skiode_mob_screen.jpeg'
import { trustedBrands } from './TrustedBrands'

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

const metrics = [
  { icon: CheckCircle2, value: '70%', label: 'Faster Cycle Times', color: '#2563eb' },
  { icon: TrendingUp, value: '10x', label: 'Productivity', color: '#7c3aed' },
  { icon: Zap, value: '5x', label: 'Faster App Builds', color: '#65a30d' },
]

const brandColors = ['#1462ee', '#7140ee', '#087e74', '#d80f55', '#3d8b0d']

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
    <section className="relative overflow-hidden bg-[#fbfdff] pt-20">
      <div className="pointer-events-none absolute -right-[8%] -top-[18%] h-[760px] w-[760px] rounded-full bg-[#dbeafe] opacity-80" />
      <div className="pointer-events-none absolute right-[5%] top-[18%] h-[520px] w-[520px] rounded-full bg-[#bfdbfe] opacity-55 blur-[2px]" />
      <div className="pointer-events-none absolute bottom-[3%] left-[34%] h-[360px] w-[600px] -rotate-12 rounded-[50%] bg-[#dbeafe] opacity-55" />

      <div className="relative mx-auto max-w-[1500px] px-4 pb-5 pt-9 sm:px-6 lg:px-10 lg:pt-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-4">
          <div className="relative z-20 lg:col-span-5 lg:pb-10">
            <motion.div {...reveal(0)} className="mb-6 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#cfe0f3] bg-[#eef6ff] px-4 py-2 text-xs font-medium uppercase text-[#1564df] shadow-sm"><span className="h-2 w-2 rounded-full bg-[#75df00]" /> AI-Led Low-Code Platform</span>
              <span className="text-xs uppercase tracking-[0.12em] text-[#60728e]">Build Today, Scale Tomorrow</span>
            </motion.div>

            <motion.h1 {...reveal(0.1)} className="max-w-[650px] text-[42px] font-bold leading-[1.08] tracking-[0.01em] text-[#061b54] sm:text-[54px] xl:text-[62px]">
              Simplify Operations,<span className="block text-[#4385f4]">Automate Processes,</span><span className="block">Amplify ROI</span>
            </motion.h1>

            <motion.p {...reveal(0.2)} className="mt-6 max-w-[570px] text-base leading-[1.6] text-[#34527d] sm:text-lg">skiode helps organizations gain complete visibility, automate operations, and accelerate digital transformation — from idea to working application in weeks, not months.</motion.p>

            <motion.div {...reveal(0.3)} className="mt-7 flex flex-wrap items-center gap-4">
              <Link to="/request-demo" className="group inline-flex items-center gap-3 rounded-full bg-[#063b73] px-7 py-3.5 text-sm font-medium text-white shadow-[0_12px_28px_rgba(6,59,115,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#052f5b]">Get Started Free <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></Link>
              <a href="#showcase" className="inline-flex items-center gap-3 text-sm font-medium text-[#163b72]"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#80b2ff] bg-white text-[#2873e8] shadow-sm"><Play size={15} fill="currentColor" /></span>See How It Works</a>
            </motion.div>

            <motion.div {...reveal(0.4)} className="mt-9 grid max-w-[560px] grid-cols-2 gap-4 sm:grid-cols-4">
              {capabilities.map(item => (
                <div key={item.title} className="group"><div className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-[0_10px_25px_rgba(20,64,101,0.10)] transition-transform group-hover:-translate-y-1" style={{ background: item.bg }}><item.icon size={29} style={{ color: item.color }} /></div><div className="mt-3 text-sm leading-tight text-[#102b63]"><span className="block font-medium">{item.title}</span>{item.subtitle}</div></div>
              ))}
            </motion.div>
          </div>

          <motion.div {...reveal(0.18)} className="relative z-10 min-h-[520px] lg:col-span-7 lg:min-h-[650px]">
            <div className="absolute left-[2%] top-[8%] w-[94%] rotate-[1.5deg] rounded-[28px] bg-[#111827] p-[10px] shadow-[0_28px_65px_rgba(20,64,101,0.25)] sm:left-0 sm:w-[92%] lg:top-[7%]">
              <div className="overflow-hidden rounded-[19px] bg-white"><img src={platformScreenshot} alt="skiode web application workspace" className="block h-auto w-full" /></div>
              <div className="absolute -bottom-6 left-[8%] right-[8%] h-7 rounded-b-[50%] bg-[#26364b] shadow-[0_10px_18px_rgba(15,23,42,0.22)]" />
            </div>

            <div className="absolute right-[1%] top-[19%] z-20 w-[29%] min-w-[145px] max-w-[245px] -rotate-[0.5deg] rounded-[34px] border-[7px] border-[#152033] bg-[#152033] p-1.5 shadow-[0_26px_55px_rgba(15,23,42,0.30)] sm:right-0 lg:right-[-2%]">
              <div className="absolute left-1/2 top-1 h-4 w-20 -translate-x-1/2 rounded-full bg-[#080d16]" />
              <div className="h-[365px] overflow-hidden rounded-[24px] bg-white sm:h-[430px] lg:h-[500px]"><img src={mobileScreenshot} alt="skiode mobile application" className="block h-auto w-full object-top" /></div>
            </div>

            <div className="absolute bottom-[4%] left-[11%] z-30 hidden w-[72%] grid-cols-3 rounded-2xl border border-[#cfe0f3] bg-white/95 p-2 shadow-[0_18px_38px_rgba(20,64,101,0.18)] backdrop-blur sm:grid">
              {metrics.map((item, index) => (
                <div key={item.value} className="flex items-center gap-2.5 px-3 py-2"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef5ff]"><item.icon size={20} style={{ color: item.color }} /></span><span><strong className="block text-base text-[#102b63]">{item.value}</strong><small className="block text-[10px] text-[#49627f]">{item.label}</small></span>{index < metrics.length - 1 && <span className="ml-auto h-8 w-px bg-[#d8e3ec]" />}</div>
              ))}
            </div>

            <div className="absolute right-[8%] top-0 hidden rounded-2xl border border-[#d7e3ed] bg-white px-5 py-3 shadow-[0_12px_30px_rgba(20,64,101,0.13)] xl:flex xl:items-center xl:gap-3"><span className="h-3 w-3 rounded-full bg-[#65b900]" /><span className="text-sm leading-tight text-[#102b63]"><strong className="block">AI Ready</strong>Business Ready</span></div>
          </motion.div>
        </div>

        <div className="relative z-40 mt-3 flex flex-col gap-5 border-t border-[#dce7f0] bg-white/90 px-1 py-5 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-4"><div className="text-[10px] uppercase text-[#687b96]">Trusted by <strong className="block text-sm text-[#1762dd]">{trustedBrands.length}+ Enterprise Brands</strong></div><div className="flex gap-2">{trustedBrands.slice(0, 5).map((brand, index) => (<div key={brand.name} title={brand.name} className="flex h-11 w-11 items-center justify-center rounded-xl text-xs font-medium text-white shadow-sm" style={{ background: brandColors[index] }}>{brand.name.split(/\s+/).map(word => word[0]).join('').slice(0, 2).toUpperCase()}</div>))}<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8eef6] text-lg text-[#23466f]">•••</div></div></div>
          <div className="hidden text-xs uppercase tracking-[0.08em] text-[#365678] xl:block">Powering the next generation<br />of operations <ArrowRight className="inline" size={13} /></div>
          <div className="flex flex-wrap items-center gap-3"><StoreBadge type="apple" /><StoreBadge type="google" /></div>
        </div>
      </div>
    </section>
  )
}
