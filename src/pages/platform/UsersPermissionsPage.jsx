import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Users, ArrowRight, Shield, UserCheck, Lock, Eye,
  Settings, CheckCircle2, Sparkles, UserPlus,
  Key, ShieldCheck, Fingerprint, Building2
} from 'lucide-react'
import userGroupsScreenshot from '../../assets/platform_screenshots/user_groups.png'

const ease = [0.25, 0.46, 0.45, 0.94]

const stats = [
  { value: 'RBAC', label: 'Role Based', icon: Shield },
  { value: '100+', label: 'Permissions', icon: Key },
  { value: 'SSO', label: 'Supported', icon: Fingerprint },
  { value: 'Audit', label: 'Full Trail', icon: Eye },
]

const roles = [
  { label: 'Super Admin', color: '#ef4444', permissions: ['All Access', 'Settings', 'Billing', 'Users'], icon: ShieldCheck },
  { label: 'Manager', color: '#8b5cf6', permissions: ['Dashboards', 'Reports', 'Team', 'Approve'], icon: UserCheck },
  { label: 'Operator', color: '#3b82f6', permissions: ['Forms', 'Process', 'OCR', 'Bots'], icon: Settings },
  { label: 'Viewer', color: '#10b981', permissions: ['View Only', 'Export', 'Comment'], icon: Eye },
]

const teamMembers = [
  { name: 'Priya M.', role: 'Super Admin', avatar: 'PM', color: '#ef4444' },
  { name: 'Arjun S.', role: 'Manager', avatar: 'AS', color: '#8b5cf6' },
  { name: 'Deepak R.', role: 'Operator', avatar: 'DR', color: '#3b82f6' },
  { name: 'Sneha K.', role: 'Operator', avatar: 'SK', color: '#3b82f6' },
  { name: 'Rahul T.', role: 'Viewer', avatar: 'RT', color: '#10b981' },
]

const features = [
  { icon: Shield, label: 'Role-Based Access', desc: 'Define granular permissions per role — control who sees and does what', gradient: 'from-red-500 to-rose-400' },
  { icon: Fingerprint, label: 'SSO & MFA', desc: 'SAML, OAuth, Google, Microsoft — enforce multi-factor authentication', gradient: 'from-violet-500 to-purple-400' },
  { icon: Eye, label: 'Audit Trail', desc: 'Every login, change, and access attempt logged with timestamps', gradient: 'from-blue-500 to-cyan-400' },
  { icon: Building2, label: 'Multi-Tenant', desc: 'Isolate data per department or organization with tenant boundaries', gradient: 'from-emerald-500 to-teal-400' },
]

export default function UsersPermissionsPage() {
  const [visibleRoles, setVisibleRoles] = useState(0)
  const [showTeam, setShowTeam] = useState(false)
  const [visibleMembers, setVisibleMembers] = useState(0)

  useEffect(() => {
    const timers = []
    roles.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleRoles(i + 1), 600 + i * 500))
    })
    timers.push(setTimeout(() => setShowTeam(true), 600 + roles.length * 500 + 300))
    teamMembers.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleMembers(i + 1), 600 + roles.length * 500 + 600 + i * 300))
    })
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{ backgroundImage: 'linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' }} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold mb-6"
              style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', color: '#f87171' }}>
              <Shield size={16} /> Users & Permissions
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Control access.{' '}
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #f87171, #a78bfa, #60a5fa)' }}>
                Completely.
              </span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ease }}
              className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Define roles, assign permissions, enable SSO — all from one panel.
              Enterprise-grade RBAC with full audit trail and multi-tenant isolation.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, ease }}
              className="flex flex-wrap gap-4 justify-center">
              <Link to="/request-demo" className="inline-flex items-center gap-2 text-base font-bold text-white px-8 py-3.5 rounded-2xl transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #ef4444, #8b5cf6)', boxShadow: '0 4px 24px rgba(239,68,68,0.4)' }}>
                Try Access Control <ArrowRight size={18} />
              </Link>
              <Link to="/platform" className="inline-flex items-center gap-2 text-base font-bold text-slate-300 hover:text-white px-7 py-3.5 rounded-2xl border border-slate-600 hover:border-slate-400 transition-all"
                style={{ background: 'rgba(255,255,255,0.04)' }}>
                Back to Platform
              </Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, ease }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, ease }}
                className="text-center p-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
                <s.icon size={20} className="text-red-400 mx-auto mb-2" />
                <div className="text-2xl font-extrabold text-white">{s.value}</div>
                <div className="text-xs text-slate-400 font-semibold">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Watch it configure — live</h2>
            <p className="text-base text-slate-500">Roles are created and team members assigned automatically</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden mx-auto"
            style={{ border: '1px solid #e2e8f0', boxShadow: '0 25px 80px rgba(0,0,0,0.08)' }}>
            <div className="flex items-center gap-2 px-5 py-3" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-slate-400 font-medium">skiode — Users & Permissions</span>
            </div>

            <div className="p-6 bg-white" style={{ minHeight: 420 }}>
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Roles Panel */}
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Shield size={14} /> Roles
                  </div>
                  <div className="space-y-3">
                    <AnimatePresence>
                      {roles.slice(0, visibleRoles).map((role) => (
                        <motion.div key={role.label}
                          initial={{ opacity: 0, x: -20, scale: 0.95 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ duration: 0.4, ease }}
                          className="p-4 rounded-2xl border"
                          style={{ borderColor: `${role.color}20`, background: `${role.color}04` }}>
                          <div className="flex items-center gap-3 mb-2.5">
                            <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                              style={{ background: `${role.color}12` }}>
                              <role.icon size={15} style={{ color: role.color }} />
                            </div>
                            <span className="text-sm font-extrabold text-slate-800">{role.label}</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {role.permissions.map(p => (
                              <span key={p} className="px-2 py-0.5 rounded-md text-[9px] font-bold"
                                style={{ background: `${role.color}10`, color: role.color }}>
                                {p}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Team Panel */}
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Users size={14} /> Team Members
                  </div>
                  {showTeam ? (
                    <div className="space-y-2.5">
                      <AnimatePresence>
                        {teamMembers.slice(0, visibleMembers).map((m) => (
                          <motion.div key={m.name}
                            initial={{ opacity: 0, x: 20, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.3, ease }}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-100"
                            style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
                              style={{ background: m.color }}>
                              {m.avatar}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-bold text-slate-800">{m.name}</div>
                              <div className="text-[10px] font-semibold" style={{ color: m.color }}>{m.role}</div>
                            </div>
                            <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ repeat: Infinity, duration: 1.5 }}
                      className="flex items-center justify-center py-16 rounded-xl border-2 border-dashed border-slate-200">
                      <span className="text-xs text-slate-400 font-semibold">Configuring roles first...</span>
                    </motion.div>
                  )}

                  {visibleMembers >= teamMembers.length && (
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2.5 px-4 py-3 rounded-xl mt-4"
                      style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(239,68,68,0.08))', border: '1px solid rgba(16,185,129,0.2)' }}>
                      <Sparkles size={14} className="text-emerald-500" />
                      <span className="text-xs font-bold text-emerald-600">4 roles + 5 members configured</span>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Enterprise-grade security</h2>
            <p className="text-base text-slate-500">Built for compliance and scale</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div key={f.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, ease }}
                className="group p-6 rounded-3xl border border-slate-100 bg-white hover:shadow-xl transition-all duration-300">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <f.icon size={22} className="text-white" />
                </div>
                <h3 className="text-base font-extrabold text-slate-900 mb-2">{f.label}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">See it in action</h2>
            <p className="text-base text-slate-500">The actual skiode user management panel</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden" style={{ border: '1px solid #e2e8f0', boxShadow: '0 30px 80px rgba(0,0,0,0.1)' }}>
            <div className="flex items-center gap-2 px-5 py-3" style={{ background: '#f1f5f9', borderBottom: '1px solid #e2e8f0' }}>
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-slate-400 font-medium">skiode — User Groups</span>
            </div>
            <img src={userGroupsScreenshot} alt="skiode Users & Permissions" className="w-full" />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{ backgroundImage: 'linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to secure your platform?</h2>
          <p className="text-base text-slate-400 mb-8">Enterprise access control made simple</p>
          <Link to="/request-demo" className="inline-flex items-center gap-2 text-base font-bold text-white px-8 py-4 rounded-2xl transition-all hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #ef4444, #8b5cf6)', boxShadow: '0 4px 24px rgba(239,68,68,0.4)' }}>
            Request Demo <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
