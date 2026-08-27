import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown, Menu, X, ArrowRight, GitBranch, Brain,
  Shield, FileText, Database, Bot, BarChart2, ScanText, Users,
  Plug, LayoutGrid, Building2, HeartPulse,
  Cpu, Factory, Truck,
  FlaskConical, ShoppingCart, CreditCard,
  Compass, Award, Zap, Eye, Workflow, MonitorDot, Link2
} from 'lucide-react'
import skiodeLogo from '../../logo/Trimmed_skiode_logo_drkBlue_forlightbg.png'

/* ── Mega menu data ── */
const menus = {
  Platform: {
    groups: [
      {
        label: 'Build',
        items: [
          { icon: FileText,   title: 'Form Builder',          desc: 'Drag-and-drop form canvas with 20+ field types', link: '/platform/form-builder' },
        ],
      },
      {
        label: 'Automate',
        items: [
          { icon: GitBranch,  title: 'Process Flow',          desc: 'Visual approval and workflow diagrams', link: '/platform/process-flow' },
          { icon: Bot,        title: 'BOT & RPA',             desc: 'Deploy bots and automate repetitive tasks', link: '/platform/bots' },
        ],
      },
      {
        label: 'Intelligence',
        items: [
          { icon: ScanText,  title: 'OCR & Document AI',     desc: 'Extract data from documents intelligently', link: '/platform/ocr' },
          { icon: BarChart2, title: 'Dashboards & Reports',  desc: 'Real-time analytics and custom reports', link: '/platform/dashboards' },
        ],
      },
      {
        label: 'Manage',
        items: [
          { icon: Users,     title: 'Users & Permissions',   desc: 'Manage teams, roles and access policies', link: '/platform/users-permissions' },
          { icon: Plug,      title: 'Integrations',          desc: '50+ pre-built API and ERP connectors', link: '/platform/integrations' },
        ],
      },
    ],
    featured: {
      title: 'Explore the Workspace',
      desc: 'Build forms, automate processes, manage data, and run AI-powered operations from one platform.',
      cta: 'View Platform',
      link: '/platform',
    },
  },

  'Use Cases': {
    items: [
      { icon: FlaskConical, title: 'Pharma Sale Order Automation',    desc: 'Automated 6-team sale order workflow', link: '/use-cases#pharma-sale-order' },
      { icon: Truck,        title: 'Vendor Ops — Airport Mfg',        desc: 'Centralized ASN and vendor portal', link: '/use-cases#vendor-operations' },
      { icon: Factory,      title: 'Ticketing — Manufacturing',       desc: 'Incident management with live chat', link: '/use-cases#ticketing-tool' },
      { icon: ShoppingCart,  title: 'Procurement — Aquaculture',       desc: 'End-to-end indent-to-PO automation', link: '/use-cases#procurement-automation' },
      { icon: CreditCard,   title: 'Claims — FMCG Africa/ME',        desc: 'Reimbursement with auto PO generation', link: '/use-cases#reimbursement-claims' },
      { icon: FlaskConical, title: 'Lab Automation — Tubes Mfg',      desc: 'Quality lab test request to report', link: '/use-cases#lab-automation' },
      { icon: Factory,      title: 'RPA — Fuel Injection Mfg',        desc: 'Excel-to-Oracle bot with validation', link: '/use-cases#sale-order-rpa' },
      { icon: HeartPulse,   title: 'Payment Recovery — Stem Cell',    desc: 'Demand notice to legal escalation', link: '/use-cases#payment-tracking' },
    ],
    cta: { label: 'View All Use Cases', link: '/use-cases' },
  },

  Industries: {
    items: [
      { icon: Factory,      title: 'Manufacturing',         desc: 'Production, quality and site management', link: '/industries#manufacturing' },
      { icon: HeartPulse,   title: 'Healthcare',            desc: 'Patient, compliance and care workflows', link: '/industries#healthcare' },
      { icon: FlaskConical, title: 'Pharma & Life Sciences', desc: 'Sale order and compliance automation', link: '/industries#pharma' },
      { icon: CreditCard,   title: 'Banking & Finance',     desc: 'Approvals, lending and compliance', link: '/industries#banking' },
      { icon: Shield,       title: 'Insurance',             desc: 'Claims processing and SLA compliance', link: '/industries#insurance' },
      { icon: Truck,        title: 'Logistics & Supply Chain',desc: 'Shipment, tracking and fulfilment', link: '/industries#logistics' },
      { icon: ShoppingCart,  title: 'FMCG & Retail',         desc: 'Supply chain and ops automation', link: '/industries#fmcg' },
      { icon: Building2,    title: 'Construction',           desc: 'Site, material and project management', link: '/industries#construction' },
    ],
    cta: { label: 'Explore All Industries', link: '/industries' },
  },

  Explore: {
    items: [
      { icon: Award,      title: 'Trusted Brands',       desc: 'Companies that trust skiode', link: '/#trusted-brands' },
      { icon: Zap,        title: 'Stats & Impact',        desc: 'Our numbers speak for themselves', link: '/#stats' },
      { icon: Eye,        title: 'Before vs After',        desc: 'See the transformation', link: '/#before-after' },
      { icon: MonitorDot, title: 'Interactive Showcase',   desc: 'Explore features hands-on', link: '/#showcase' },
      { icon: LayoutGrid, title: 'Platform Overview',      desc: 'All modules at a glance', link: '/#platform-overview' },
      { icon: Workflow,   title: 'Process Flow',           desc: 'Visual workflow automation', link: '/#process-flow-showcase' },
      { icon: Link2,      title: 'Integrations',           desc: '50+ connectors and APIs', link: '/#integrations-showcase' },
    ],
    cta: { label: 'View Full Homepage', link: '/' },
  },
}

/* ── Dropdown panel ── */
function MegaPanel({ name, data, close, navigate }) {
  const handleClick = (e, link) => {
    e.preventDefault()
    close()
    if (link && link !== '#') {
      if (link.startsWith('/#')) {
        // Hash link on home page
        if (window.location.pathname === '/') {
          const el = document.getElementById(link.slice(2))
          if (el) { el.scrollIntoView({ behavior: 'smooth' }); return }
        }
        navigate('/')
        setTimeout(() => {
          const el = document.getElementById(link.slice(2))
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      } else if (link.includes('#')) {
        const [path, hash] = link.split('#')
        navigate(path)
        setTimeout(() => {
          const el = document.getElementById(hash)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      } else {
        navigate(link)
      }
    }
  }

  if (name === 'Platform') {
    return (
      <div className="flex gap-6">
        <div className="grid grid-cols-4 gap-3 flex-1">
          {data.groups.map(grp => (
            <div key={grp.label} className="mega-group rounded-xl p-2.5">
              <p className="mega-label px-1 text-[11px] font-medium uppercase tracking-[0.14em] mb-2"
                style={{ color: '#94a3b8', fontFamily: 'var(--font-heading)' }}>{grp.label}</p>
              <div className="space-y-0.5">
                {grp.items.map(it => (
                  <a key={it.title} href={it.link || '#'} onClick={(e) => handleClick(e, it.link)}
                    className="mega-item flex items-start gap-3 px-2.5 py-2.5 rounded-xl group cursor-pointer">
                    <div className="mega-icon w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(20,64,101,0.09)', border: '1px solid rgba(20,64,101,0.08)' }}>
                      <it.icon size={14} style={{ color: '#164065' }} />
                    </div>
                    <div>
                      <div className="mega-title text-xs font-medium tracking-[0.06em] text-slate-800 transition-colors"
                        style={{ fontFamily: 'var(--font-heading)' }}>{it.title}</div>
                      <div className="mega-copy text-xs tracking-[0.035em] leading-tight mt-0.5"
                        style={{ color: '#64748b', fontFamily: 'var(--font-body)' }}>{it.desc}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mega-feature w-56 flex-shrink-0 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
              style={{ background: '#164065' }}>
              <LayoutGrid size={16} color="white" />
            </div>
            <div className="mega-title text-sm font-medium tracking-[0.06em] text-slate-900 mb-1.5"
              style={{ fontFamily: 'var(--font-heading)' }}>{data.featured.title}</div>
            <p className="mega-copy text-xs tracking-[0.035em] leading-relaxed"
              style={{ color: '#64748b', fontFamily: 'var(--font-body)' }}>{data.featured.desc}</p>
          </div>
          <a href={data.featured.link || '#'} onClick={(e) => handleClick(e, data.featured.link)}
            className="mt-4 flex items-center gap-1.5 text-xs font-medium tracking-[0.06em] px-3 py-2 rounded-xl transition-all hover:scale-105"
            style={{ background: '#164065', color: 'white', fontFamily: 'var(--font-heading)', boxShadow: '0 8px 20px rgba(20,64,101,0.18)' }}>
            {data.featured.cta} <ArrowRight size={11} />
          </a>
        </div>
      </div>
    )
  }

  const cols = data.items.length > 6 ? 3 : data.items.length > 3 ? 2 : 1
  return (
    <div>
      <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }}>
        {data.items.map(it => (
          <a key={it.title} href={it.link || '#'} onClick={(e) => handleClick(e, it.link)}
            className="mega-item flex items-start gap-3 px-3 py-3 rounded-xl group cursor-pointer">
            <div className="mega-icon w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(20,64,101,0.09)', border: '1px solid rgba(20,64,101,0.08)' }}>
              <it.icon size={14} style={{ color: '#164065' }} />
            </div>
            <div>
              <div className="mega-title text-xs font-medium tracking-[0.06em] text-slate-800 transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}>{it.title}</div>
              <div className="mega-copy text-xs tracking-[0.035em] leading-tight mt-0.5"
                style={{ color: '#64748b', fontFamily: 'var(--font-body)' }}>{it.desc}</div>
            </div>
          </a>
        ))}
      </div>
      {data.cta && (
        <div className="mega-footer mt-3 flex justify-end pt-3">
          <a href={data.cta.link} onClick={(e) => handleClick(e, data.cta.link)}
            className="mega-footer-link inline-flex items-center gap-2 rounded-lg bg-[#164065] px-4 py-2.5 text-xs font-medium tracking-[0.06em] text-white transition-all hover:-translate-y-0.5 hover:bg-[#0f3555]"
            style={{ fontFamily: 'var(--font-heading)' }}>
            {data.cta.label} <ArrowRight size={11} />
          </a>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const [activeMenu, setActiveMenu] = useState('Home')
  const [mobileOpen, setMobile] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const navRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpenMenu(null)
        setMobile(false)
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    setOpenMenu(null)
    setMobile(false)
    if (location.pathname.startsWith('/platform')) setActiveMenu('Platform')
    else if (location.pathname === '/use-cases') setActiveMenu('Use Cases')
    else if (location.pathname === '/industries') setActiveMenu('Industries')
    else if (location.pathname === '/pricing') setActiveMenu('Pricing')
    else if (location.pathname === '/') setActiveMenu(current => ['Explore', 'Contact'].includes(current) ? current : 'Home')
  }, [location.pathname])

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const navStyle = scrolled
    ? { background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(22px)', boxShadow: '0 10px 30px rgba(20,64,101,0.08)' }
    : { background: 'rgba(255,255,255,0.90)', backdropFilter: 'blur(18px)' }

  const navItems = ['Home', 'Explore', 'Platform', 'Use Cases', 'Industries', 'Pricing', 'Contact']

  const isActive = (item) => {
    if (item === 'Home') return location.pathname === '/' && activeMenu === 'Home'
    if (item === 'Explore') return location.pathname === '/' && activeMenu === 'Explore'
    if (item === 'Contact') return location.pathname === '/' && activeMenu === 'Contact'
    if (item === 'Platform') return location.pathname.startsWith('/platform')
    if (item === 'Use Cases') return location.pathname === '/use-cases'
    if (item === 'Industries') return location.pathname === '/industries'
    if (item === 'Pricing') return location.pathname === '/pricing'
    return false
  }

  const goToContact = (event) => {
    event.preventDefault()
    setOpenMenu(null)
    setMobile(false)
    setActiveMenu('Contact')
    if (location.pathname !== '/') navigate('/')
    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), location.pathname === '/' ? 0 : 300)
  }

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={navStyle}>
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#164065] via-[#2f759f] to-[#7ee600]" aria-hidden="true" />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center flex-shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ee600] focus-visible:ring-offset-4" onClick={() => { setOpenMenu(null); setActiveMenu('Home') }} aria-label="Skiode home">
              <img src={skiodeLogo} alt="skiode" className="w-auto object-contain transition-all duration-300" style={{ height: scrolled ? 37 : 46 }} />
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-1 rounded-2xl bg-[#f5f8fb]/90 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
            {navItems.map(item => (
              <div key={item} className="relative">
                {item === 'Home' ? (
                  <Link to="/"
                    className={`relative px-3.5 py-2 text-base font-medium transition-colors rounded-xl hover:bg-white ${isActive(item) ? 'bg-white text-[#164065] shadow-sm' : 'text-[#49647a] hover:text-[#164065]'}`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                    onClick={() => { setOpenMenu(null); setActiveMenu('Home') }}>
                    Home
                    {isActive(item) && <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#7ee600]" />}
                  </Link>
                ) : item === 'Contact' ? (
                  <a href="/#contact"
                    className={`relative px-3.5 py-2 text-base font-medium transition-colors rounded-xl hover:bg-white ${isActive(item) ? 'bg-white text-[#164065] shadow-sm' : 'text-[#49647a] hover:text-[#164065]'}`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                    onClick={goToContact}>
                    Contact
                    {isActive(item) && <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#7ee600]" />}
                  </a>
                ) : item === 'Pricing' ? (
                  <Link to="/pricing"
                    className={`relative px-3.5 py-2 text-base font-medium transition-colors rounded-xl hover:bg-white ${isActive(item) ? 'bg-white text-[#164065] shadow-sm' : 'text-[#49647a] hover:text-[#164065]'}`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                    onClick={() => { setOpenMenu(null); setActiveMenu('Pricing') }}>
                    Pricing
                    {isActive(item) && <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#7ee600]" />}
                  </Link>
                ) : (
                  <button
                    className="relative flex items-center gap-1.5 px-3.5 py-2 text-base font-medium rounded-xl transition-all hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ee600]/70"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: openMenu === item || isActive(item) ? '#164065' : '#49647a',
                      background: openMenu === item || isActive(item) ? '#ffffff' : 'transparent',
                      boxShadow: openMenu === item || isActive(item) ? '0 1px 4px rgba(20,64,101,0.10)' : 'none',
                    }}
                    aria-expanded={openMenu === item}
                    aria-haspopup="true"
                    onClick={() => {
                      setActiveMenu(item)
                      setOpenMenu(openMenu === item ? null : item)
                    }}>
                    {item}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${openMenu === item ? 'rotate-180' : ''}`} />
                    {(openMenu === item || isActive(item)) && <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#7ee600]" />}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <Link to="/request-demo"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#164065] py-2 pl-5 pr-2 text-base font-medium text-white shadow-[0_8px_20px_rgba(20,64,101,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#0f3555] hover:shadow-[0_12px_26px_rgba(20,64,101,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39ff14] focus-visible:ring-offset-2"
              style={{ fontFamily: 'var(--font-heading)' }}
              onClick={() => setOpenMenu(null)}>
              Request Demo
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#39ff14] text-[#164065] transition-transform group-hover:translate-x-0.5">
                <ArrowRight size={14} strokeWidth={2.5} />
              </span>
            </Link>
          </div>

          <button className="lg:hidden p-2.5 rounded-xl text-[#164065] transition-colors hover:bg-[#eef5f8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ee600]"
            style={{ background: 'rgba(20,64,101,0.06)' }}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobile(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {openMenu && menus[openMenu] && (
            <motion.div
              key={openMenu}
              initial={{ opacity: 0, y: 10, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.99 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute left-0 right-0 mx-auto ${scrolled ? 'top-16' : 'top-20'}`}
              style={{ maxWidth: '1280px', padding: '0 32px' }}>
              <div className="mega-panel overflow-hidden rounded-2xl p-4 shadow-[0_22px_55px_rgba(20,64,101,0.24)]">
                <MegaPanel name={openMenu} data={menus[openMenu]} close={() => { setActiveMenu(openMenu); setOpenMenu(null) }} navigate={navigate} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.99)' }}>
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1 max-h-[75vh] overflow-y-auto">
              {navItems.map(item => (
                <div key={item}>
                  {item === 'Home' ? (
                    <Link to="/"
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive(item) ? 'bg-[#164065]/[0.06] text-[#164065]' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                      style={{ fontFamily: 'var(--font-heading)' }}
                      onClick={() => { setMobile(false); setActiveMenu('Home') }}>
                      Home
                    </Link>
                  ) : item === 'Contact' ? (
                    <a href="/#contact"
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${isActive(item) ? 'bg-[#164065]/[0.06] text-[#164065]' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                      style={{ fontFamily: 'var(--font-heading)' }}
                      onClick={goToContact}>
                      Contact
                    </a>
                  ) : item === 'Pricing' ? (
                    <Link to="/pricing"
                      className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
                      style={{ fontFamily: 'var(--font-heading)' }}
                      onClick={() => { setMobile(false); setActiveMenu('Pricing') }}>
                      Pricing
                    </Link>
                  ) : (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-100 transition-all"
                        style={{ fontFamily: 'var(--font-heading)' }}
                        onClick={() => {
                          setActiveMenu(item)
                          setMobileExpanded(mobileExpanded === item ? null : item)
                        }}>
                        {item}
                        <ChevronDown size={14} className={`transition-transform ${mobileExpanded === item ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item && menus[item] && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden pl-2">
                            {(menus[item].groups
                              ? menus[item].groups.flatMap(g => g.items)
                              : menus[item].items
                            ).slice(0, 8).map(it => (
                              <a key={it.title} href={it.link || '#'}
                                className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 transition-all"
                                onClick={(e) => {
                                  e.preventDefault()
                                  setMobile(false)
                                  if (it.link && it.link !== '#') {
                                    if (it.link.includes('#')) {
                                      const [path, hash] = it.link.startsWith('/#')
                                        ? ['/', it.link.slice(2)]
                                        : it.link.split('#')
                                      navigate(path)
                                      setTimeout(() => {
                                        const el = document.getElementById(hash)
                                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                                      }, 300)
                                    } else {
                                      navigate(it.link)
                                    }
                                  }
                                }}>
                                <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                                  style={{ background: 'rgba(59,130,246,0.15)' }}>
                                  <it.icon size={11} style={{ color: '#3b82f6' }} />
                                </div>
                                <span className="text-xs font-medium text-slate-600"
                                  style={{ fontFamily: 'var(--font-heading)' }}>{it.title}</span>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
              <div className="pt-3 pb-1">
                <Link to="/request-demo"
                  className="group flex w-full items-center justify-between rounded-xl bg-[#164065] py-2 pl-5 pr-2 text-base font-medium text-white shadow-[0_10px_24px_rgba(20,64,101,0.20)] transition-all active:scale-[0.99]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                  onClick={() => setMobile(false)}>
                  <span className="flex-1 text-center">Request Demo</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#39ff14] text-[#164065]">
                    <ArrowRight size={14} strokeWidth={2.5} />
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
