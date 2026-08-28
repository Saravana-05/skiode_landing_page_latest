import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import skyaicodeLogo from '../assets/brand/skyaicode-logo.png'
import skiodeLogo from '../../logo/skiode_logo_white_fordarkbg.png'

const SESSION_KEY = 'skiode_launch_seen'
const confetti = Array.from({ length: 64 }, (_, i) => ({
  id: i,
  left: (i * 37) % 100,
  delay: (i % 11) * 0.055,
  duration: 1.3 + (i % 7) * 0.12,
  color: ['#39ff14', '#ffffff', '#f8cf46', '#3b82f6'][i % 4],
}))

function playApplause(context) {
  if (!context) return
  context.resume().catch(() => {})
  const start = context.currentTime

  for (let i = 0; i < 34; i += 1) {
    const buffer = context.createBuffer(1, Math.floor(context.sampleRate * 0.08), context.sampleRate)
    const data = buffer.getChannelData(0)
    for (let j = 0; j < data.length; j += 1) data[j] = (Math.random() * 2 - 1) * (1 - j / data.length)

    const source = context.createBufferSource()
    const gain = context.createGain()
    const filter = context.createBiquadFilter()
    filter.type = 'bandpass'
    filter.frequency.value = 900 + (i % 8) * 170
    gain.gain.value = 0.045 + (i % 4) * 0.012
    source.buffer = buffer
    source.connect(filter).connect(gain).connect(context.destination)
    source.start(start + (i * 0.065) + ((i % 3) * 0.018))
  }
}

export default function LaunchExperience() {
  const [visible, setVisible] = useState(() => {
    try { return sessionStorage.getItem(SESSION_KEY) !== 'true' } catch { return true }
  })
  const [stage, setStage] = useState('countdown')
  const [count, setCount] = useState(3)
  const [soundOn, setSoundOn] = useState(false)
  const audioContextRef = useRef(null)

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
      window.setTimeout(() => setStage('reveal'), 6200),
      window.setTimeout(finish, 8400),
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

  useEffect(() => {
    if (stage !== 'reveal') return
    if (!audioContextRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      if (AudioContext) audioContextRef.current = new AudioContext()
    }
    playApplause(audioContextRef.current)
  }, [stage])

  const enableSound = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!audioContextRef.current && AudioContext) audioContextRef.current = new AudioContext()
    audioContextRef.current?.resume().catch(() => {})
    setSoundOn(true)
  }

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden"
      style={{ background: stage === 'reveal' ? 'transparent' : '#071827' }}
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
        ) : stage === 'rebrand' ? (
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
        ) : null}
      </AnimatePresence>

      {stage === 'reveal' && (
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.div
            initial={{ x: 0 }} animate={{ x: '-102%' }} transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-y-0 left-0 w-1/2 border-r-4 border-[#39ff14]"
            style={{ background: '#071827', boxShadow: '12px 0 30px rgba(0,0,0,0.35)' }}
          />
          <motion.div
            initial={{ x: 0 }} animate={{ x: '102%' }} transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-y-0 right-0 w-1/2 border-l-4 border-[#39ff14]"
            style={{ background: '#071827', boxShadow: '-12px 0 30px rgba(0,0,0,0.35)' }}
          />

          {confetti.map((piece) => (
            <motion.span
              key={piece.id}
              initial={{ y: '-12vh', rotate: 0, opacity: 1 }}
              animate={{ y: '112vh', rotate: 620 + piece.id * 7, opacity: [1, 1, 0.85] }}
              transition={{ delay: piece.delay, duration: piece.duration, ease: 'linear' }}
              className="absolute top-0 h-3 w-1.5 rounded-sm"
              style={{ left: `${piece.left}%`, background: piece.color }}
            />
          ))}
        </div>
      )}

      {stage !== 'reveal' && (
        <button
          type="button"
          onClick={enableSound}
          className="absolute bottom-7 left-7 rounded-full border border-white/15 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 transition-colors hover:border-[#39ff14] hover:text-[#39ff14]"
        >
          {soundOn ? 'Sound enabled' : 'Enable applause'}
        </button>
      )}

      {stage !== 'reveal' && <button
        type="button"
        onClick={finish}
        className="absolute bottom-7 right-7 rounded-full border border-white/15 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 transition-colors hover:border-[#39ff14] hover:text-[#39ff14]"
      >
        Skip intro
      </button>}
    </motion.div>
  )
}
