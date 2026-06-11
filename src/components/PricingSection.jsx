import { motion } from 'framer-motion'
import { Zap, Check, ArrowRight, Sparkles, Crown, Rocket } from 'lucide-react'

const phase1 = {
  tag: 'Phase 1 — Free Rollout',
  headline: 'Start free for 6 months',
  desc: 'skiode platform provided as a value-add at no additional cost for 6 months with full access to core suites.',
  plans: [
    {
      name: 'Development Suite',
      price: 'Free',
      period: 'for 6 months',
      icon: Sparkles,
      color: '#3b82f6',
      users: 'Up to 5 users',
      features: [
        'Drag & drop form builder',
        'Domain model configuration',
        'Field validations & rules',
        'Multi-step form wizard',
        'Unlimited access',
      ],
    },
    {
      name: 'Automation Suite',
      price: 'Free',
      period: 'for 6 months',
      icon: Rocket,
      color: '#8b5cf6',
      users: 'Up to 10 users',
      popular: true,
      features: [
        'Visual process flow builder',
        'Approval workflows & SLA',
        'Conditional branching',
        'API triggers & webhooks',
        'Unlimited access',
      ],
    },
    {
      name: 'Bots Suite',
      price: 'Free',
      period: 'for 6 months',
      icon: Crown,
      color: '#10b981',
      users: 'Up to 10 users',
      features: [
        'RPA bot deployment',
        'Task automation',
        'Intelligent scheduling',
        'Bot monitoring dashboard',
        'Unlimited access',
      ],
    },
  ],
}

const phase2 = [
  { module: 'Development Suite', access: 'Per User', pricing: 'Monthly / Yearly' },
  { module: 'Automation Suite', access: 'Per User', pricing: 'Monthly / Yearly' },
  { module: 'Bots Suite', access: 'Per User', pricing: 'Monthly / Yearly' },
  { module: 'All Inclusive Bundle', access: 'Per User', pricing: 'Monthly / Yearly' },
]

const offerings = [
  { label: 'Platform as a Service', color: '#3b82f6' },
  { label: 'Process Orchestration', color: '#8b5cf6' },
  { label: 'Robotic Process Automation', color: '#10b981' },
  { label: 'Workflow Automation', color: '#f59e0b' },
]

const deliveryPoints = [
  'Fixed cost per unit delivered',
  'Volume discounts for large deliveries',
  'Up to 2 weeks assessment as investment',
  'Output-based approach delivered in units',
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8faff 50%, #f0f4ff 100%)' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(132,204,22,0.08), transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold mb-5"
            style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', color: '#3b82f6' }}>
            <Zap size={14} /> Commercial Model
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
            Platform-led services.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Simple pricing.
            </span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Get started free for 6 months — no credit card, no commitment. Scale with flexible per-user licensing when you're ready.
          </motion.p>
        </div>

        {/* Offerings pills */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-14">
          {offerings.map(o => (
            <span key={o.label} className="px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: `${o.color}10`, color: o.color, border: `1px solid ${o.color}20` }}>
              {o.label}
            </span>
          ))}
        </motion.div>

        {/* ─── Phase 1: Free Cards ─── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 border border-emerald-100 mb-6">
            <Sparkles size={12} /> {phase1.tag}
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">{phase1.headline}</h3>
          <p className="text-base text-slate-500 max-w-xl mb-10">{phase1.desc}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {phase1.plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.12 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
              className={`relative rounded-3xl p-7 bg-white border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${plan.popular ? 'border-blue-200 ring-1 ring-blue-100' : 'border-slate-100'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}>
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: `${plan.color}12`, border: `1px solid ${plan.color}20` }}>
                  <plan.icon size={22} style={{ color: plan.color }} />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-slate-900">{plan.name}</h4>
                  <span className="text-xs font-semibold text-slate-400">{plan.users}</span>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold" style={{ color: plan.color }}>
                  {plan.price}
                </span>
                <span className="text-sm text-slate-400 ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check size={16} className="mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact"
                className={`w-full text-center block py-3 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] ${plan.popular ? 'text-white shadow-md' : 'text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200'}`}
                style={plan.popular ? { background: 'linear-gradient(135deg, #3b82f6, #6366f1)' } : {}}>
                Get Started Free
              </a>
            </motion.div>
          ))}
        </div>

        {/* ─── Phase 2: Licensing Table ─── */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-3xl bg-white border border-slate-100 shadow-sm overflow-hidden mb-14">
          <div className="px-8 py-6 border-b border-slate-100">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 mb-3">
              <Rocket size={12} /> Phase 2 — Official Licensing
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">Projected licensing model</h3>
            <p className="text-sm text-slate-500 mt-1">Flexible per-user pricing released after Phase 1</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Module</th>
                  <th className="text-left px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Access</th>
                  <th className="text-left px-8 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Pricing Options</th>
                  <th className="text-right px-8 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {phase2.map((row, i) => (
                  <tr key={row.module} className={`border-t border-slate-50 ${i % 2 === 0 ? '' : 'bg-slate-50/40'} hover:bg-blue-50/30 transition-colors`}>
                    <td className="px-8 py-4 text-sm font-bold text-slate-800">{row.module}</td>
                    <td className="px-8 py-4 text-sm text-slate-500">{row.access}</td>
                    <td className="px-8 py-4 text-sm text-slate-500">{row.pricing}</td>
                    <td className="px-8 py-4 text-right">
                      <a href="#contact" className="text-xs font-bold text-blue-500 hover:text-blue-700 transition-colors inline-flex items-center gap-1">
                        Contact Us <ArrowRight size={11} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ─── Delivery Approach ─── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deliveryPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: 'rgba(59,130,246,0.08)' }}>
                <Check size={15} className="text-blue-500" />
              </div>
              <span className="text-sm font-semibold text-slate-700 leading-snug">{point}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
