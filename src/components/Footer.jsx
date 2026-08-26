import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, Users2, Code2, PlayCircle, Mail, Phone, MapPin } from 'lucide-react'
import skiodeLogo from '../../logo/Trimmed_skiode_logo_drkBlue_forlightbg.png'

const cols = [
  {
    title: 'Platform',
    links: [
      'Forms & Core Data','Process Flow','Users & Groups','DMS',
      'OCR & AI/ML','Dashboards & Reports','RPA','Integration','BOT Automation',
    ],
  },
  {
    title: 'Solutions',
    links: [
      'ERP','Healthcare','AI Recruiter','Construction Management',
      'HR Automation','Finance Workflows','CRM','Operations',
    ],
  },
  {
    title: 'Use Cases',
    links: [
      'Employee Onboarding','Purchase Approval','Invoice Processing',
      'Resume Screening','Site Progress Tracking','Loan Origination',
    ],
  },
  {
    title: 'Resources',
    links: ['Blog','Documentation','API Reference','Case Studies','ROI Calculator','Help Center'],
  },
  {
    title: 'Company',
    links: ['About','Contact','Careers','Partners','Request Demo'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy','Terms of Service','Security','Compliance'],
  },
]

const socials = [
  { Icon: Globe,       label: 'Website'  },
  { Icon: Users2,      label: 'LinkedIn' },
  { Icon: Code2,       label: 'GitHub'   },
  { Icon: PlayCircle,  label: 'YouTube'  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#f8fafc', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 mb-14">

          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img src={skiodeLogo} alt="skiode" style={{ height: 48 }} />
            </Link>
            <p className="text-xs leading-relaxed mb-5" style={{ color: '#94a3b8', fontFamily: 'var(--font-body)' }}>
              AI-powered low-code platform for building apps, automating workflows, and running intelligent business operations.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2 mb-5">
              {socials.map(({ Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.06)', color: '#94a3b8' }}>
                  <Icon size={14} />
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-1.5 text-xs" style={{ color: '#94a3b8', fontFamily: 'var(--font-body)' }}>
              <div className="flex items-center gap-2"><Mail size={11} /> hello@skiode.com</div>
              <div className="flex items-center gap-2"><Phone size={11} /> +1 (555) 000-0000</div>
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: '#64748b', fontFamily: 'var(--font-heading)' }}>
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map(link => (
                  <li key={link}>
                    {link === 'Request Demo' ? (
                      <Link to="/request-demo"
                        className="text-xs transition-colors hover:text-blue-600 font-semibold"
                        style={{ color: '#3b82f6', fontFamily: 'var(--font-body)' }}>
                        {link}
                      </Link>
                    ) : (
                      <a href="#"
                        className="text-xs transition-colors hover:text-slate-900"
                        style={{ color: '#94a3b8', fontFamily: 'var(--font-body)' }}>
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
          <p className="text-xs" style={{ color: '#94a3b8', fontFamily: 'var(--font-body)' }}>
            © 2026 skiode. All rights reserved.
          </p>
          <Link to="/request-demo"
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl transition-all hover:scale-105"
            style={{ fontFamily: 'var(--font-heading)', background: 'linear-gradient(135deg,#3b82f6,#84cc16)', color: 'white' }}>
            Request Demo <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
