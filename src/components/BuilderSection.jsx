import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Database, Layout, Monitor, GitBranch } from 'lucide-react'

const tabs = [
  {
    id: 'data', icon: Database, label: 'Data Model Builder',
    preview: (
      <div className="space-y-2">
        <div className="text-[10px] text-white/30 uppercase tracking-widest mb-3">Entities</div>
        {[
          { name: 'Invoice', fields: 8, color: '#3b82f6' },
          { name: 'Customer', fields: 12, color: '#8b5cf6' },
          { name: 'Product', fields: 6, color: '#22d3ee' },
        ].map(e => (
          <div key={e.name} className="flex items-center justify-between px-4 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: e.color }} />
              <span className="text-sm font-semibold text-white">{e.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-white/40">{e.fields} fields</span>
              <span className="text-[10px] px-2 py-0.5 rounded-md" style={{ background: `${e.color}20`, color: e.color }}>Active</span>
            </div>
          </div>
        ))}
        <div className="mt-3 grid grid-cols-2 gap-2">
          {['String', 'Number', 'Date', 'Boolean', 'Lookup', 'Formula'].map(t => (
            <div key={t} className="text-center py-1.5 rounded-lg text-[10px] font-medium text-white/40" style={{ border: '1px dashed rgba(255,255,255,0.1)' }}>{t}</div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'form', icon: Layout, label: 'Form Builder',
    preview: (
      <div className="space-y-2">
        <div className="text-[10px] text-white/30 uppercase tracking-widest mb-3">Invoice Form</div>
        {[
          { label: 'Vendor Name', type: 'Text', required: true },
          { label: 'Invoice Date', type: 'Date', required: true },
          { label: 'Amount', type: 'Currency', required: true },
          { label: 'Department', type: 'Dropdown', required: false },
          { label: 'Attachments', type: 'File Upload', required: false },
        ].map(f => (
          <div key={f.label} className="flex items-center gap-3 px-3 py-2.5 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="w-4 h-4 rounded" style={{ background: 'rgba(163,230,53,0.15)', border: '1px solid rgba(163,230,53,0.3)' }} />
            <div className="flex-1">
              <span className="text-xs font-medium text-white">{f.label}</span>
              {f.required && <span className="ml-1 text-red-400">*</span>}
            </div>
            <span className="text-[10px] text-white/30">{f.type}</span>
          </div>
        ))}
        <div className="mt-2 flex items-center gap-2 px-3 py-2 rounded-xl" style={{ border: '1px dashed rgba(163,230,53,0.25)' }}>
          <span className="text-[11px] text-lime-400">+ Add field</span>
        </div>
      </div>
    ),
  },
  {
    id: 'page', icon: Monitor, label: 'Page Builder',
    preview: (
      <div className="space-y-2">
        <div className="text-[10px] text-white/30 uppercase tracking-widest mb-3">Dashboard Page</div>
        <div className="grid grid-cols-3 gap-2">
          {[['Total', '2,847', '#a3e635'], ['Pending', '142', '#f59e0b'], ['Done', '2,705', '#22d3ee']].map(([label, val, color]) => (
            <div key={label} className="rounded-xl p-3 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="text-sm font-bold" style={{ color }}>{val}</div>
              <div className="text-[9px] text-white/30 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
        <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
          <div className="text-[10px] text-white/30 mb-2">Recent Transactions</div>
          {['Invoice #2841', 'Invoice #2842', 'Invoice #2843'].map((r, i) => (
            <div key={r} className="flex items-center justify-between py-1">
              <span className="text-[10px] text-white/60">{r}</span>
              <span className="text-[9px] px-2 py-0.5 rounded" style={{ background: 'rgba(163,230,53,0.1)', color: '#a3e635' }}>{['Paid', 'Pending', 'Approved'][i]}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'workflow', icon: GitBranch, label: 'Workflow Builder',
    preview: (
      <div className="space-y-3">
        <div className="text-[10px] text-white/30 uppercase tracking-widest mb-3">Approval Workflow</div>
        {[
          { label: 'Form Submitted', type: 'Trigger', color: '#a3e635' },
          { label: 'Data Validation', type: 'Action', color: '#3b82f6' },
          { label: 'Manager Approval', type: 'Approval', color: '#8b5cf6' },
          { label: 'AI Document Check', type: 'AI Action', color: '#22d3ee' },
          { label: 'Send Notification', type: 'Notify', color: '#f59e0b' },
          { label: 'Complete', type: 'End', color: '#34d399' },
        ].map((node, i) => (
          <div key={node.label} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold" style={{ background: `${node.color}20`, border: `1px solid ${node.color}50`, color: node.color }}>
                {i + 1}
              </div>
              {i < 5 && <div className="w-px h-3" style={{ background: `${node.color}30` }} />}
            </div>
            <div className="flex-1 flex items-center justify-between rounded-xl px-3 py-2" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${node.color}25` }}>
              <span className="text-[11px] font-medium text-white">{node.label}</span>
              <span className="text-[9px] px-2 py-0.5 rounded" style={{ background: `${node.color}15`, color: node.color }}>{node.type}</span>
            </div>
          </div>
        ))}
      </div>
    ),
  },
]

export default function BuilderSection() {
  const [active, setActive] = useState('data')
  const current = tabs.find(t => t.id === active)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)', color: '#8b5cf6' }}
          >
            Visual Builder Tools
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight"
          >
            Build business applications visually
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Empower business teams and developers to create applications using configurable building blocks instead of starting from scratch.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === tab.id ? 'text-white shadow-md' : 'text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200'
                }`}
                style={active === tab.id ? { background: 'linear-gradient(135deg, #0a1628, #0d1b3e)', boxShadow: '0 4px 20px rgba(10,22,40,0.3)' } : {}}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Preview panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
          style={{ background: '#0a1628', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          {/* Mock window bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <span className="text-[11px] text-white/30 mx-auto">{current?.label}</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="p-5"
            >
              {current?.preview}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
