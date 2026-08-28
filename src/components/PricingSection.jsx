import { motion } from 'framer-motion'
import { Zap, Check, ArrowRight, Sparkles, Crown, Rocket, Calculator } from 'lucide-react'

const ease = [0.25, 0.46, 0.45, 0.94]

const plans = [
  {
    name: 'Development Suite',
    icon: Sparkles,
    color: '#3b82f6',
    features: [
      'Drag & drop form builder',
      'Domain model configuration',
      'Field validations & rules',
      'Multi-step form wizard',
      'Unlimited users & processes',
    ],
  },
  {
    name: 'Automation Suite',
    icon: Rocket,
    color: '#8b5cf6',
    popular: true,
    features: [
      'Visual process flow builder',
      'Approval workflows & SLA',
      'Conditional branching',
      'API triggers & webhooks',
      'Unlimited users & processes',
    ],
  },
  {
    name: 'Bots Suite',
    icon: Crown,
    color: '#10b981',
    features: [
      'RPA bot deployment',
      'Task automation',
      'Intelligent scheduling',
      'Bot monitoring dashboard',
      'Unlimited users & processes',
    ],
  },
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
    <section id="pricing" className="pt-4 pb-8 relative overflow-hidden" style={{ background: '#f7faf9' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Offerings pills */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-5">
          {offerings.map(o => (
            <span key={o.label} className="px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: `${o.color}10`, color: o.color, border: `1px solid ${o.color}20` }}>
              {o.label}
            </span>
          ))}
        </motion.div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.12 * i, ease }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: 'easeOut' } }}
              className={`relative rounded-3xl p-7 bg-white border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${plan.popular ? 'border-blue-200 ring-1 ring-blue-100' : 'border-slate-100'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: '#0a2342', color: '#39ff14' }}>
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: `${plan.color}12`, border: `1px solid ${plan.color}20` }}>
                  <plan.icon size={22} style={{ color: plan.color }} />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-slate-900">{plan.name}</h4>
                  <span className="text-xs font-semibold text-slate-400">Unlimited users</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-extrabold" style={{ color: plan.color }}>Free</span>
                <span className="text-sm text-slate-400 ml-2">for 3 months</span>
              </div>

              <ul className="space-y-2 mb-5 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check size={16} className="mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#contact"
                className={`w-full text-center block py-3 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] ${plan.popular ? 'text-white shadow-md' : 'text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200'}`}
                style={plan.popular ? { background: '#0a2342', color: '#39ff14' } : {}}>
                Get Started Free
              </a>
            </motion.div>
          ))}
        </div>

        {/* Calculator CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, ease }}
          className="text-center mb-5"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-3xl bg-white border border-slate-100"
            style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.06)' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(22,64,101,0.08)', border: '1px solid rgba(22,64,101,0.2)' }}>
                <Calculator size={22} className="text-blue-500" />
              </div>
              <div className="text-left">
                <div className="text-base font-extrabold text-slate-900">Want to know your exact cost?</div>
                <div className="text-sm text-slate-500">Use our pricing calculator to estimate your plan</div>
              </div>
            </div>
            <a href="https://calculator.skyaicode.com" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all hover:scale-105 flex-shrink-0"
              style={{ background: '#0a2342', color: '#39ff14', boxShadow: '0 4px 16px rgba(10,35,66,0.22)' }}>
              <Calculator size={16} />
              Open Calculator
              <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* Delivery Approach */}
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
