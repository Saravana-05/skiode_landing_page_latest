import { Link } from 'react-router-dom'
import { ArrowRight, Mail, MapPin, ShieldCheck, Sparkles } from 'lucide-react'
import skiodeLogo from '../../logo/skiode_logo_white_fordarkbg.png'

const columns = [
  {
    title: 'Platform',
    links: [
      { label: 'Platform Overview', to: '/platform' },
      { label: 'Form Builder', to: '/platform/form-builder' },
      { label: 'Process Flow', to: '/platform/process-flow' },
      { label: 'OCR & Document AI', to: '/platform/ocr' },
      { label: 'BOT & RPA', to: '/platform/bots' },
      { label: 'Dashboards & Reports', to: '/platform/dashboards' },
      { label: 'Users & Permissions', to: '/platform/users-permissions' },
      { label: 'Integrations', to: '/platform/integrations' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Manufacturing', to: '/industries#manufacturing' },
      { label: 'Healthcare', to: '/industries#healthcare' },
      { label: 'Pharma & Life Sciences', to: '/industries#pharma' },
      { label: 'Banking & Finance', to: '/industries#banking' },
      { label: 'Insurance', to: '/industries#insurance' },
      { label: 'Logistics & Supply Chain', to: '/industries#logistics' },
      { label: 'FMCG & Retail', to: '/industries#fmcg' },
      { label: 'Construction', to: '/industries#construction' },
    ],
  },
  {
    title: 'Use Cases',
    links: [
      { label: 'Pharma Sale Orders', to: '/use-cases#pharma-sale-order' },
      { label: 'Vendor Operations', to: '/use-cases#vendor-operations' },
      { label: 'Manufacturing Ticketing', to: '/use-cases#ticketing-tool' },
      { label: 'Procurement Automation', to: '/use-cases#procurement-automation' },
      { label: 'Claims & Reimbursements', to: '/use-cases#reimbursement-claims' },
      { label: 'Lab Automation', to: '/use-cases#lab-automation' },
      { label: 'Sale Order RPA', to: '/use-cases#sale-order-rpa' },
      { label: 'Payment Tracking', to: '/use-cases#payment-tracking' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'All Use Cases', to: '/use-cases' },
      { label: 'All Industries', to: '/industries' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'ROI Calculator', to: '/pricing#roi-calculator' },
      { label: 'How It Works', to: '/platform#how-it-works' },
      { label: 'Request Demo', to: '/request-demo' },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      id="footer"
      className="skiode-footer relative overflow-hidden text-white"
      style={{ backgroundColor: '#071827', color: '#ffffff' }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[.035]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.14) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-emerald-400/[.07] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Conversion strip */}
        <div className="flex flex-col gap-5 border-b border-white/10 py-9 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#39FF14]"><Sparkles size={13} /> Build smarter operations</div>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl" style={{ color: '#ffffff' }}>Ready to turn your process into an advantage?</h2>
          </div>
          <Link to="/request-demo" className="group inline-flex self-start items-center gap-3 rounded-xl py-2 pl-5 pr-2 text-sm font-bold shadow-lg transition-all hover:-translate-y-1 md:self-auto" style={{ backgroundColor: '#ffffff', color: '#0b2941' }}>
            <span style={{ color: '#0b2941' }}>Request Demo</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#39ff14] transition-transform group-hover:translate-x-0.5"><ArrowRight size={15} strokeWidth={2.5} /></span>
          </Link>
        </div>

        <div className="grid gap-10 py-11 lg:grid-cols-[1.2fr_3fr]">
          {/* Brand and contact */}
          <div className="max-w-sm">
            <Link to="/" aria-label="Skiode home" className="-mt-3 inline-flex">
              <img src={skiodeLogo} alt="skiode" className="h-auto w-56 object-contain sm:w-64" />
            </Link>
            <p className="mt-5 text-sm leading-6 text-slate-400">AI-powered low-code for teams who'd rather build than wait. Forms, workflows, automation, and AI — unified workspace, start to finish.</p>

            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <a href="mailto:admin@skiode.com" className="group flex items-center gap-3 transition-colors hover:text-white"><span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-emerald-400"><Mail size={15} /></span><span><small className="block text-[10px] uppercase tracking-wider text-slate-500">Email us</small>admin@skiode.com</span></a>
              <div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-blue-400"><MapPin size={15} /></span><span><small className="block text-[10px] uppercase tracking-wider text-slate-500">Serving</small>Global enterprise teams</span></div>
            </div>
          </div>

          {/* Verified route columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4">
            {columns.map(column => (
              <div key={column.title}>
                <h3 className="mb-4 text-xs font-extrabold uppercase tracking-[.16em]" style={{ color: '#ffffff' }}>{column.title}</h3>
                <ul className="space-y-2.5">
                  {column.links.map(link => <li key={link.label}><Link to={link.to} className="group inline-flex items-center gap-1 text-xs leading-5 text-slate-400 transition-colors hover:text-[#39ff14]"><span>{link.label}</span><ArrowRight size={10} className="opacity-0 -translate-x-1 transition-all group-hover:translate-x-0 group-hover:opacity-100" /></Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 skiode. All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-400"><ShieldCheck size={13} className="text-emerald-400" /> Enterprise-grade automation platform</div>
        </div>
      </div>
    </footer>
  )
}
