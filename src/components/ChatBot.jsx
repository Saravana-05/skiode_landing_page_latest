import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react'

const QA = [
  { q: 'what is skiode', a: 'skiode is an AI-powered low-code platform that lets you build apps, automate processes, deploy bots, and integrate with 50+ systems — all from one visual workspace. No coding required.' },
  { q: 'how does it work', a: 'You design forms with drag-and-drop, build process flows visually, add AI/OCR capabilities, connect to your existing systems via APIs, and deploy — all without writing code. From idea to live app in weeks.' },
  { q: 'what is process flow', a: 'Process Flow is the heart of skiode. It\'s a visual workflow builder where you drag nodes, set conditions, add approvals, SLA tracking, and triggers. Think of it as designing your entire business process on a canvas.' },
  { q: 'pricing', a: 'skiode offers a free 6-month rollout with three suites: Development Suite (5 users), Automation Suite (10 users), and Bots Suite (10 users). After Phase 1, flexible per-user licensing is available. Visit our Pricing page for details!' },
  { q: 'integration', a: 'skiode connects with 50+ systems including Oracle, SAP, NetSuite, Dynamics 365, Salesforce, Google, and Microsoft. Use our visual API builder to map data, set auth, and connect in minutes.' },
  { q: 'demo', a: 'We\'d love to show you skiode in action! Click the "Request Demo" button in the navigation bar or visit our demo page. Our team will walk you through the platform tailored to your use case.' },
  { q: 'features', a: 'skiode includes: Form Builder (20+ field types), Process Flow (visual workflows), OCR & AI/ML (document extraction), BOT Automation, RPA (web & desktop), Dashboards & Reports, DMS (document management), and 50+ Integrations.' },
  { q: 'rpa', a: 'skiode\'s RPA module automates repetitive tasks — web scraping, desktop automation, Excel-to-ERP data entry, screen scraping, and keystroke simulation. Configure bots visually, no scripting needed.' },
  { q: 'ocr', a: 'Our OCR & AI module extracts data from documents intelligently — invoices, ID cards, PDFs, QR codes, barcodes. AI/ML models auto-match and validate extracted data with high accuracy.' },
  { q: 'bot', a: 'skiode BOTs are configurable process bots — document generators, Excel-to-JSON converters, invoice generators, QR generators, and custom logic bots. Deploy across channels without coding.' },
  { q: 'mobile', a: 'Yes! skiode apps work on both web and mobile. We have native mobile apps available on the App Store and Google Play, so your teams can access workflows, approve requests, and track tasks on the go.' },
  { q: 'security', a: 'skiode is enterprise-grade secure — ISO 27001 compliant, role-based access control, field-level permissions, audit logs, SSO support, and 99.9% uptime SLA. Your data is always protected.' },
  { q: 'industries', a: 'skiode serves Manufacturing, Healthcare, Pharma, Banking & Finance, Insurance, Logistics, FMCG & Retail, and Construction. Our platform adapts to any industry\'s workflow needs.' },
  { q: 'no code', a: 'Absolutely! skiode is designed for citizen developers — business users who aren\'t programmers. Everything is visual: drag-and-drop forms, point-and-click workflows, and configurable bots. Zero coding expertise needed.' },
  { q: 'dashboard', a: 'skiode provides real-time dashboards with pie charts, bar graphs, case tracking, and custom reports. Monitor KPIs, track SLAs, and make data-driven decisions — all live and customizable.' },
  { q: 'contact', a: 'You can reach us through the Contact section on our website, or click "Request Demo" to schedule a personalized walkthrough. We\'re happy to help!' },
  { q: 'hello', a: 'Hello! 👋 Welcome to skiode. I\'m here to help you learn about our AI-powered low-code platform. Ask me anything about features, pricing, integrations, or how skiode can help your business!' },
  { q: 'hi', a: 'Hi there! 👋 Great to see you. I can help you with questions about skiode — our platform features, pricing, integrations, use cases, and more. What would you like to know?' },
  { q: 'thank', a: 'You\'re welcome! If you have more questions, feel free to ask anytime. You can also request a live demo to see skiode in action. Happy to help! 😊' },
]

const suggestions = [
  'What is skiode?',
  'How does it work?',
  'What is Process Flow?',
  'Show me pricing',
  'What integrations?',
  'Request a demo',
]

function findAnswer(input) {
  const lower = input.toLowerCase().replace(/[?!.,]/g, '').trim()

  let bestMatch = null
  let bestScore = 0

  for (const item of QA) {
    const keywords = item.q.split(' ')
    let score = 0
    for (const kw of keywords) {
      if (lower.includes(kw)) score++
    }
    const ratio = score / keywords.length
    if (ratio > bestScore) {
      bestScore = ratio
      bestMatch = item
    }
  }

  if (bestScore >= 0.5 && bestMatch) return bestMatch.a

  if (lower.includes('price') || lower.includes('cost') || lower.includes('plan')) return QA.find(i => i.q === 'pricing').a
  if (lower.includes('demo') || lower.includes('trial')) return QA.find(i => i.q === 'demo').a
  if (lower.includes('integrat') || lower.includes('connect') || lower.includes('api') || lower.includes('sap') || lower.includes('oracle')) return QA.find(i => i.q === 'integration').a
  if (lower.includes('feature') || lower.includes('what can') || lower.includes('capability')) return QA.find(i => i.q === 'features').a
  if (lower.includes('process') || lower.includes('workflow') || lower.includes('approval')) return QA.find(i => i.q === 'what is process flow').a
  if (lower.includes('rpa') || lower.includes('automat')) return QA.find(i => i.q === 'rpa').a
  if (lower.includes('ocr') || lower.includes('document') || lower.includes('extract')) return QA.find(i => i.q === 'ocr').a
  if (lower.includes('bot')) return QA.find(i => i.q === 'bot').a
  if (lower.includes('mobile') || lower.includes('app')) return QA.find(i => i.q === 'mobile').a
  if (lower.includes('secur') || lower.includes('complian') || lower.includes('iso')) return QA.find(i => i.q === 'security').a
  if (lower.includes('industr') || lower.includes('manufactur') || lower.includes('health') || lower.includes('pharma') || lower.includes('bank')) return QA.find(i => i.q === 'industries').a
  if (lower.includes('no code') || lower.includes('low code') || lower.includes('citizen') || lower.includes('non-tech')) return QA.find(i => i.q === 'no code').a
  if (lower.includes('dashboard') || lower.includes('report') || lower.includes('analytic')) return QA.find(i => i.q === 'dashboard').a
  if (lower.includes('contact') || lower.includes('reach') || lower.includes('talk')) return QA.find(i => i.q === 'contact').a
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('good')) return QA.find(i => i.q === 'hello').a
  if (lower.includes('thank') || lower.includes('thanks') || lower.includes('thx')) return QA.find(i => i.q === 'thank').a

  return "Great question! I don't have a specific answer for that yet, but our team would love to help. Click \"Request Demo\" in the navbar to connect with us, or try asking about our features, pricing, integrations, or process flow!"
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! 👋 I'm skiode AI assistant. Ask me anything about our platform — features, pricing, integrations, or how we can help your business!" }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const send = (text) => {
    const msg = text || input.trim()
    if (!msg) return

    setMessages(prev => [...prev, { from: 'user', text: msg }])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const answer = findAnswer(msg)
      setMessages(prev => [...prev, { from: 'bot', text: answer }])
      setTyping(false)
    }, 600 + Math.random() * 800)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl group"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              boxShadow: '0 8px 32px rgba(59,130,246,0.4)',
            }}
          >
            <MessageCircle size={24} className="text-white" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full animate-ping opacity-20"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-32px)] rounded-2xl overflow-hidden flex flex-col"
            style={{
              height: '560px',
              maxHeight: 'calc(100vh - 100px)',
              background: '#ffffff',
              boxShadow: '0 24px 80px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #7c3aed)' }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">skiode Assistant</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                    <span className="text-[10px] text-white/60 font-medium">Always online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-white/10">
                <X size={16} className="text-white/80" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
              style={{ background: '#f8fafc' }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.from === 'bot' && (
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>
                      <Sparkles size={12} className="text-white" />
                    </div>
                  )}
                  <div className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.from === 'user'
                      ? 'bg-blue-500 text-white rounded-br-md'
                      : 'bg-white text-slate-700 rounded-bl-md shadow-sm'
                  }`}
                    style={msg.from === 'bot' ? { border: '1px solid #e2e8f0' } : {}}>
                    {msg.text}
                  </div>
                  {msg.from === 'user' && (
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 bg-slate-200">
                      <User size={12} className="text-slate-500" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 items-start"
                >
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>
                    <Sparkles size={12} className="text-white" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white shadow-sm"
                    style={{ border: '1px solid #e2e8f0' }}>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Quick suggestions — only show when few messages */}
            {messages.length <= 2 && (
              <div className="px-4 py-2 flex flex-wrap gap-1.5 border-t border-slate-100"
                style={{ background: '#fafbfc' }}>
                {suggestions.map(s => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all hover:scale-105"
                    style={{
                      background: 'rgba(59,130,246,0.06)',
                      border: '1px solid rgba(59,130,246,0.15)',
                      color: '#3b82f6',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="flex items-center gap-2 px-4 py-3 border-t border-slate-100 bg-white flex-shrink-0">
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about skiode..."
                className="flex-1 text-sm bg-slate-50 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                style={{ border: '1px solid #e2e8f0' }}
              />
              <button
                onClick={() => send()}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all disabled:opacity-30 hover:scale-105"
                style={{
                  background: input.trim() ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : '#f1f5f9',
                }}
              >
                <Send size={16} className={input.trim() ? 'text-white' : 'text-slate-400'} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
