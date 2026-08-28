import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import skyaicodeLogo from '../assets/brand/skyaicode-logo.png'
import skiodeLogo from '../../logo/skiode_logo_white_fordarkbg.png'

const SESSION_KEY = 'skiode_launch_seen'

export default function LaunchExperience() {
  const [visible, setVisible] = useState(() => {
    try { return sessionStorage.getItem(SESSION_KEY) !== 'true' } catch { return true }
  })
  const [stage, setStage] = useState('countdown')
  const [count, setCount] = useState(3)

  const finish = () => {
    try { sessionStorage.setItem(SESSION_KEY, 'true') } catch { /* storage may be unavailable */ }
    setVisible(false)
  }

  useEffect(() => {
    if (!visible) return undefined

    const timers = [
      window.setTimeout(() => setCount(2), 600),
      window.setTimeout(() => setCount(1), 1200),
      window.setTimeout(() => setStage('rebrand'), 1800),
      window.setTimeout(finish, 7000),
    ]

    const onKeyDown = (event) => {
      if (event.key === 'Escape') finish()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      timers.forEach(window.clearTimeout)
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [visible])

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden"
      style={{ background: '#071827' }}
      role="dialog"
      aria-label="Skiode launch introduction"
    >
      <div className="absolute left-0 top-0 h-1 bg-[#39ff14] transition-all duration-700"
        style={{ width: stage === 'countdown' ? `${(4 - count) * 25}%` : '100%' }} />

      <AnimatePresence mode="wait">
        {stage === 'countdown' ? (
          <motion.div
            key="countdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.08 }}
            className="text-center"
          >
            <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.35em] text-[#39ff14]">Launching a new identity</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={count}
                initial={{ opacity: 0, scale: 0.65, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.3, y: -12 }}
                transition={{ duration: 0.25 }}
                className="text-[92px] font-black leading-none text-white sm:text-[120px]"
              >
                {count}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            key="rebrand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-4xl px-6 text-center"
          >
            <p className="mb-8 text-[12px] font-bold uppercase tracking-[0.3em] text-[#39ff14]">Our name has evolved</p>
            <div className="relative mx-auto h-32 sm:h-40">
              <motion.img
                src={skyaicodeLogo}
                alt="SKYAICODE"
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 0.9, y: -12 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute inset-0 m-auto max-h-28 w-full max-w-xl object-contain sm:max-h-36"
              />
              <motion.img
                src={skiodeLogo}
                alt="SKIODE"
                initial={{ opacity: 0, scale: 0.88, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 2.45, duration: 1 }}
                className="absolute inset-0 m-auto max-h-28 w-full max-w-md object-contain sm:max-h-36"
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.55, duration: 0.6 }}
              className="mt-6 text-sm font-semibold tracking-wide text-slate-300"
            >
              SKYAICODE is now <span className="text-[#39ff14]">SKIODE</span>
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={finish}
        className="absolute bottom-7 right-7 rounded-full border border-white/15 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 transition-colors hover:border-[#39ff14] hover:text-[#39ff14]"
      >
        Skip intro
      </button>
    </motion.div>
  )
}
