import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { ChevronsRight, PartyPopper } from 'lucide-react'
import skyaicodeLogo from '../assets/brand/skyaicode-logo.png'
import skiodeLogo from '../../logo/skiode_logo_white_fordarkbg.png'

const SESSION_KEY = 'skiode_launch_seen'
const COUNTDOWN_SECONDS = 8
const REBRAND_START_MS = COUNTDOWN_SECONDS * 1000
const REVEAL_START_MS = REBRAND_START_MS + 16000
const FINISH_MS = REVEAL_START_MS + 7000
const stars = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  left: (i * 47 + 9) % 100,
  top: (i * 71 + 13) % 86,
  size: 1 + (i % 3),
  delay: (i % 12) * 0.2,
}))
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

  for (let i = 0; i < 118; i += 1) {
    const buffer = context.createBuffer(1, Math.floor(context.sampleRate * .11), context.sampleRate)
    const data = buffer.getChannelData(0)
    for (let j = 0; j < data.length; j += 1) data[j] = (Math.random() * 2 - 1) * Math.pow(1 - j / data.length, 1.8)
    const clap = context.createBufferSource()
    const filter = context.createBiquadFilter()
    const gain = context.createGain()
    filter.type = 'bandpass'
    filter.frequency.value = 650 + (i % 13) * 135
    filter.Q.value = .7
    gain.gain.value = .026 + (i % 6) * .008
    clap.buffer = buffer
    clap.connect(filter).connect(gain).connect(context.destination)
    clap.start(start + i * .047 + (i % 5) * .019)
  }

  for (let i = 0; i < 26; i += 1) {
    const cheer = context.createOscillator()
    const cheerGain = context.createGain()
    const cheerStart = start + .04 + (i % 9) * .14
    cheer.type = i % 3 === 0 ? 'sawtooth' : 'triangle'
    cheer.frequency.setValueAtTime(260 + (i % 8) * 38, cheerStart)
    cheer.frequency.exponentialRampToValueAtTime(500 + (i % 7) * 52, cheerStart + .38)
    cheerGain.gain.setValueAtTime(.0001, cheerStart)
    cheerGain.gain.exponentialRampToValueAtTime(.014, cheerStart + .09)
    cheerGain.gain.exponentialRampToValueAtTime(.0001, cheerStart + .9)
    cheer.connect(cheerGain).connect(context.destination)
    cheer.start(cheerStart)
    cheer.stop(cheerStart + .95)
  }
}

function playCountdownTick(context, isFinal = false) {
  if (!context || context.state !== 'running') return
  const start = context.currentTime
  const oscillator = context.createOscillator()
  const gain = context.createGain()

  oscillator.type = isFinal ? 'sine' : 'triangle'
  oscillator.frequency.setValueAtTime(isFinal ? 880 : 520, start)
  oscillator.frequency.exponentialRampToValueAtTime(isFinal ? 1320 : 390, start + (isFinal ? .32 : .12))
  gain.gain.setValueAtTime(0.0001, start)
  gain.gain.exponentialRampToValueAtTime(isFinal ? .16 : .075, start + .015)
  gain.gain.exponentialRampToValueAtTime(0.0001, start + (isFinal ? .42 : .18))

  oscillator.connect(gain).connect(context.destination)
  oscillator.start(start)
  oscillator.stop(start + (isFinal ? .45 : .2))
}

function playZing(context) {
  if (!context || context.state !== 'running') return
  const start = context.currentTime
  const buffer = context.createBuffer(1, Math.floor(context.sampleRate * 3), context.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i += 1) {
    const time = i / context.sampleRate
    const envelope = Math.sin(Math.min(1, time / 1.45) * Math.PI / 2) * Math.exp(-Math.max(0, time - 1.45) * 1.6)
    data[i] = (Math.random() * 2 - 1) * envelope
  }
  const whoosh = context.createBufferSource()
  const bandpass = context.createBiquadFilter()
  const whooshGain = context.createGain()
  bandpass.type = 'bandpass'
  bandpass.Q.value = .85
  bandpass.frequency.setValueAtTime(180, start)
  bandpass.frequency.exponentialRampToValueAtTime(3200, start + 1.35)
  bandpass.frequency.exponentialRampToValueAtTime(720, start + 2.8)
  whooshGain.gain.setValueAtTime(.0001, start)
  whooshGain.gain.exponentialRampToValueAtTime(.24, start + 1.1)
  whooshGain.gain.exponentialRampToValueAtTime(.0001, start + 2.9)
  whoosh.buffer = buffer
  whoosh.connect(bandpass).connect(whooshGain).connect(context.destination)
  whoosh.start(start)

  const impact = context.createOscillator()
  const impactGain = context.createGain()
  impact.type = 'sine'
  impact.frequency.setValueAtTime(105, start + 1.15)
  impact.frequency.exponentialRampToValueAtTime(42, start + 2)
  impactGain.gain.setValueAtTime(.0001, start)
  impactGain.gain.exponentialRampToValueAtTime(.18, start + 1.18)
  impactGain.gain.exponentialRampToValueAtTime(.0001, start + 2.15)
  impact.connect(impactGain).connect(context.destination)
  impact.start(start)
  impact.stop(start + 2.2)
}

function playHipHopBackground(context) {
  if (!context || context.state !== 'running') return
  const start = context.currentTime
  const beat = .42

  for (let step = 0; step < 16; step += 1) {
    const at = start + step * beat

    if (step % 2 === 0) {
      const bass = context.createOscillator()
      const bassGain = context.createGain()
      const bassNotes = [55, 65.41, 73.42, 49]
      bass.type = 'triangle'
      bass.frequency.setValueAtTime(bassNotes[Math.floor(step / 4) % bassNotes.length], at)
      bassGain.gain.setValueAtTime(.065, at)
      bassGain.gain.exponentialRampToValueAtTime(.0001, at + .38)
      bass.connect(bassGain).connect(context.destination)
      bass.start(at)
      bass.stop(at + .4)
    }

    if (step % 4 === 0 || step % 4 === 2) {
      const kick = context.createOscillator()
      const kickGain = context.createGain()
      kick.type = 'sine'
      kick.frequency.setValueAtTime(145, at)
      kick.frequency.exponentialRampToValueAtTime(48, at + .16)
      kickGain.gain.setValueAtTime(.2, at)
      kickGain.gain.exponentialRampToValueAtTime(.0001, at + .3)
      kick.connect(kickGain).connect(context.destination)
      kick.start(at)
      kick.stop(at + .32)
    }

    if (step % 4 === 1 || step % 4 === 3) {
      const buffer = context.createBuffer(1, Math.floor(context.sampleRate * .16), context.sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < data.length; i += 1) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length)
      const snare = context.createBufferSource()
      const snareFilter = context.createBiquadFilter()
      const snareGain = context.createGain()
      snareFilter.type = 'highpass'
      snareFilter.frequency.value = 850
      snareGain.gain.setValueAtTime(.07, at)
      snareGain.gain.exponentialRampToValueAtTime(.0001, at + .17)
      snare.buffer = buffer
      snare.connect(snareFilter).connect(snareGain).connect(context.destination)
      snare.start(at)
    }

    const hatBuffer = context.createBuffer(1, Math.floor(context.sampleRate * .045), context.sampleRate)
    const hatData = hatBuffer.getChannelData(0)
    for (let i = 0; i < hatData.length; i += 1) hatData[i] = Math.random() * 2 - 1
    const hat = context.createBufferSource()
    const hatFilter = context.createBiquadFilter()
    const hatGain = context.createGain()
    hatFilter.type = 'highpass'
    hatFilter.frequency.value = 5200
    hatGain.gain.value = step % 2 ? .022 : .035
    hat.buffer = hatBuffer
    hat.connect(hatFilter).connect(hatGain).connect(context.destination)
    hat.start(at + beat / 2 + (step % 2 ? .035 : 0))
  }
}

function speakCountdownNumber(number) {
  if (!('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(String(number))
  utterance.rate = number === 1 ? 0.72 : 0.9
  utterance.pitch = number === 1 ? 1.18 : 1
  utterance.volume = 1
  window.speechSynthesis.speak(utterance)
}

export default function LaunchExperience() {
  const [visible, setVisible] = useState(() => {
    try { return sessionStorage.getItem(SESSION_KEY) !== 'true' } catch { return true }
  })
  const [stage, setStage] = useState('countdown')
  const [rebrandStep, setRebrandStep] = useState(0)
  const [count, setCount] = useState(COUNTDOWN_SECONDS)
  const [soundOn, setSoundOn] = useState(true)
  const audioContextRef = useRef(null)

  const finish = () => {
    try { sessionStorage.setItem(SESSION_KEY, 'true') } catch { /* storage may be unavailable */ }
    setVisible(false)
  }

  useEffect(() => {
    if (!visible) return undefined

    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!audioContextRef.current && AudioContext) audioContextRef.current = new AudioContext()

    const unlockAudio = () => {
      audioContextRef.current?.resume().catch(() => {})
    }

    const countdownTimer = window.setInterval(() => {
      setCount(current => Math.max(1, current - 1))
    }, 1000)
    const timers = [
      window.setTimeout(() => {
        window.clearInterval(countdownTimer)
        setStage('rebrand')
      }, REBRAND_START_MS),
      window.setTimeout(() => setStage('reveal'), REVEAL_START_MS),
      window.setTimeout(finish, FINISH_MS),
    ]

    const onKeyDown = (event) => {
      if (event.key === 'Escape') finish()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('pointerdown', unlockAudio, { once: true })

    return () => {
      window.clearInterval(countdownTimer)
      timers.forEach(window.clearTimeout)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('pointerdown', unlockAudio)
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

  useEffect(() => {
    if (stage !== 'rebrand') return undefined
    const timers = [
      window.setTimeout(() => setRebrandStep(1), 2000),
      window.setTimeout(() => setRebrandStep(2), 4000),
      window.setTimeout(() => setRebrandStep(3), 7000),
      window.setTimeout(() => setRebrandStep(4), 9000),
      window.setTimeout(() => setRebrandStep(5), 11000),
      window.setTimeout(() => setRebrandStep(6), 14000),
    ]
    return () => timers.forEach(window.clearTimeout)
  }, [stage])

  useEffect(() => {
    if (!soundOn || stage !== 'countdown') return
    playCountdownTick(audioContextRef.current, count === 1)
    speakCountdownNumber(count)
  }, [count, soundOn, stage])

  useEffect(() => {
    if (stage === 'rebrand' && rebrandStep === 5 && soundOn) playZing(audioContextRef.current)
  }, [rebrandStep, soundOn, stage])

  useEffect(() => {
    if (stage === 'rebrand' && rebrandStep === 2 && soundOn) playHipHopBackground(audioContextRef.current)
  }, [rebrandStep, soundOn, stage])

  const enableSound = () => {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!audioContextRef.current && AudioContext) audioContextRef.current = new AudioContext()
    audioContextRef.current?.resume().then(() => setSoundOn(true)).catch(() => {})
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
      {stage === 'countdown' && (
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-[#020d1b]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(3,61,63,.68),transparent_37%),radial-gradient(circle_at_17%_48%,rgba(26,170,72,.16),transparent_25%),radial-gradient(circle_at_83%_48%,rgba(26,170,72,.16),transparent_25%)]" />
          {stars.map(star => (
            <motion.span key={star.id} className="absolute rounded-full bg-[#51ff70]"
              style={{ left: `${star.left}%`, top: `${star.top}%`, width: star.size, height: star.size }}
              animate={{ opacity: [.08, .9, .08], scale: [.6, 1.5, .6], y: [0, -8, 0] }}
              transition={{ duration: 2.5 + (star.id % 5), delay: star.delay, repeat: Infinity }} />
          ))}
          <motion.div className="absolute left-[7%] top-[24%] h-72 w-72 rounded-full bg-[#1bd45b]/10 blur-3xl"
            animate={{ opacity: [.35, .8, .35], scale: [.9, 1.08, .9] }} transition={{ duration: 5, repeat: Infinity }} />
          <motion.div className="absolute right-[7%] top-[24%] h-72 w-72 rounded-full bg-[#1bd45b]/10 blur-3xl"
            animate={{ opacity: [.4, .85, .4], scale: [1.05, .9, 1.05] }} transition={{ duration: 5.5, repeat: Infinity }} />
          <svg className="absolute bottom-[5%] left-0 h-[54%] w-full" viewBox="0 0 1600 440" preserveAspectRatio="none">
            {Array.from({ length: 24 }, (_, i) => (
              <g key={i}>
                <motion.path d={`M -90 ${175 + i * 5} C 150 ${100 + i * 3}, 275 ${345 - i * 5}, 445 ${200 + i * 2} S 620 ${75 + i * 4}, 775 ${250 + i}`}
                  fill="none" stroke={i === 11 ? '#39ff14' : '#168549'} strokeWidth={i === 11 ? 1.6 : .62}
                  animate={{ d: [`M -90 ${175 + i * 5} C 150 ${100 + i * 3}, 275 ${345 - i * 5}, 445 ${200 + i * 2} S 620 ${75 + i * 4}, 775 ${250 + i}`, `M -90 ${190 + i * 5} C 175 ${80 + i * 3}, 300 ${325 - i * 5}, 460 ${220 + i * 2} S 640 ${95 + i * 4}, 775 ${240 + i}`] }}
                  transition={{ duration: 6 + i * .05, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} opacity={i === 11 ? .85 : .35} />
                <motion.path d={`M 1690 ${175 + i * 5} C 1450 ${100 + i * 3}, 1325 ${345 - i * 5}, 1155 ${200 + i * 2} S 980 ${75 + i * 4}, 825 ${250 + i}`}
                  fill="none" stroke={i === 11 ? '#39ff14' : '#168549'} strokeWidth={i === 11 ? 1.6 : .62}
                  animate={{ d: [`M 1690 ${175 + i * 5} C 1450 ${100 + i * 3}, 1325 ${345 - i * 5}, 1155 ${200 + i * 2} S 980 ${75 + i * 4}, 825 ${250 + i}`, `M 1690 ${190 + i * 5} C 1425 ${80 + i * 3}, 1300 ${325 - i * 5}, 1140 ${220 + i * 2} S 960 ${95 + i * 4}, 825 ${240 + i}`] }}
                  transition={{ duration: 6.4 + i * .05, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} opacity={i === 11 ? .85 : .35} />
              </g>
            ))}
          </svg>
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#010916] to-transparent" />
          <span className="absolute left-7 top-8 h-20 w-28 rounded-tl-2xl border-l-2 border-t border-[#39ff14]/70 sm:left-12 sm:top-12" />
          <span className="absolute right-7 top-8 h-20 w-28 rounded-tr-2xl border-r-2 border-t border-[#39ff14]/70 sm:right-12 sm:top-12" />
        </div>
      )}

      {stage === 'rebrand' && (
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute inset-0 bg-[#020d1b]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_56%,rgba(8,48,72,.72),transparent_44%),radial-gradient(circle_at_18%_75%,rgba(9,85,186,.14),transparent_28%),radial-gradient(circle_at_82%_75%,rgba(27,210,75,.13),transparent_28%)]" />
          {stars.slice(0, 54).map(star => (
            <motion.span key={star.id} className={`absolute rounded-full ${star.left < 50 ? 'bg-[#1887ff]' : 'bg-[#39ff14]'}`}
              style={{ left: `${star.left}%`, top: `${Math.max(42, star.top)}%`, width: star.size, height: star.size }}
              animate={{ opacity: [.08, .7, .08], scale: [.8, 1.4, .8] }}
              transition={{ duration: 2.8 + (star.id % 5), delay: star.delay, repeat: Infinity }} />
          ))}
          <svg className="absolute inset-x-0 bottom-0 h-[52%] w-full" viewBox="0 0 1600 450" preserveAspectRatio="none">
            {Array.from({ length: 22 }, (_, i) => (
              <g key={i}>
                <motion.path d={`M -80 ${155 + i * 5} C 260 ${190 + i * 7}, 520 ${370 - i * 2}, 800 390`}
                  fill="none" stroke={i === 10 ? '#168cff' : '#0b61b8'} strokeWidth={i === 10 ? 1.6 : .65}
                  initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: i === 10 ? .8 : .35 }}
                  transition={{ duration: 3.6, delay: i * .04 }} />
                <motion.path d={`M 1680 ${145 + i * 5} C 1340 ${180 + i * 7}, 1080 ${370 - i * 2}, 800 390`}
                  fill="none" stroke={i === 10 ? '#39ff14' : '#168b45'} strokeWidth={i === 10 ? 1.6 : .65}
                  initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: i === 10 ? .8 : .35 }}
                  transition={{ duration: 3.6, delay: i * .04 }} />
              </g>
            ))}
          </svg>
          <div className="absolute bottom-[6%] left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-[#67C090] blur-sm shadow-[0_0_25px_8px_rgba(103,192,144,.55)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#010813] to-transparent" />
        </div>
      )}

      <div className="absolute left-0 top-0 z-10 h-1 bg-[#67C090] transition-all duration-1000 ease-linear"
        style={{ width: stage === 'countdown' ? `${((COUNTDOWN_SECONDS - count) / COUNTDOWN_SECONDS) * 100}%` : '100%' }} />

      <AnimatePresence mode="wait">
        {stage === 'countdown' ? (
          <motion.div
            key="countdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.08 }}
            className="relative z-10 flex h-[min(76vw,620px)] w-[min(76vw,620px)] items-center justify-center text-center"
          >
            <motion.div className="absolute inset-[5%] rounded-full border border-[#67C090]/20"
              animate={{ rotate: 360 }} transition={{ duration: 36, repeat: Infinity, ease: 'linear' }} />
            <motion.div className="absolute inset-[10%] rounded-full border border-dashed border-[#39ff14]/35"
              animate={{ rotate: -360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }} />
            <div className="absolute inset-[13%] rounded-full border border-[#39ff14]/45 shadow-[inset_0_0_70px_rgba(57,255,20,.06),0_0_25px_rgba(57,255,20,.08)]" />
            <motion.div className="absolute inset-[11%] rounded-full"
              style={{ background: `conic-gradient(from -90deg, #39ff14 ${((COUNTDOWN_SECONDS - count + 1) / COUNTDOWN_SECONDS) * 360}deg, rgba(57,255,20,.06) 0)`, padding: 3 }}
              animate={{ rotate: 360 }} transition={{ duration: COUNTDOWN_SECONDS, ease: 'linear' }}>
              <div className="h-full w-full rounded-full bg-[#031323]/95" />
            </motion.div>
            <motion.span className="absolute right-[19%] top-[21%] h-3 w-3 rounded-full bg-white shadow-[0_0_8px_3px_#fff,0_0_25px_11px_#39ff14]"
              animate={{ scale: [1, 1.8, 1], opacity: [.75, 1, .75] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <div className="relative z-10">
              <p className="mb-2 text-[9px] font-extrabold uppercase tracking-[0.42em] text-[#9aff37] sm:text-[12px]">Preparing for</p>
              <p className="mb-5 text-[16px] font-black uppercase tracking-[0.18em] text-[#9aff37] sm:text-[26px]">A new identity</p>
              <AnimatePresence mode="wait">
                <motion.div key={count} initial={{ opacity: 0, scale: 0.72, y: 14 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.18, y: -10 }} transition={{ duration: 0.55, ease: 'easeOut' }}
                  className="bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-[82px] font-black leading-none text-transparent drop-shadow-[0_8px_20px_rgba(255,255,255,.12)] sm:text-[128px]">
                  {count}
                </motion.div>
              </AnimatePresence>
              <div className="mx-auto mt-5 h-px w-36 bg-gradient-to-r from-transparent via-[#39ff14] to-transparent shadow-[0_0_12px_#39ff14]" />
            </div>
          </motion.div>
        ) : stage === 'rebrand' ? (
          <motion.div
            key="rebrand"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 h-full w-full px-6 text-center"
          >
            <AnimatePresence>
              {rebrandStep < 6 && (
                <motion.p key="evolved-title" initial={{ opacity: 0, y: 20, scale: .92 }} animate={{
                  opacity: 1,
                  y: rebrandStep === 0 ? '38vh' : '13vh',
                  scale: rebrandStep === 0 ? 1.45 : 1,
                }} exit={{ opacity: 0, y: -24, filter: 'blur(6px)' }} transition={{ duration: rebrandStep === 0 ? 1.2 : 2.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-0 top-0 text-[15px] font-black uppercase tracking-[0.42em] text-[#39ff14] sm:text-[24px]">
                  Our name has evolved
                </motion.p>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {rebrandStep >= 2 && rebrandStep < 6 && (
              <motion.img
                key="old-brand"
                src={skyaicodeLogo}
                alt="SKYAICODE"
                initial={{ opacity: 0, left: '50%', x: '-50%', scale: .9 }}
                animate={{ opacity: 1, left: rebrandStep === 2 ? '50%' : '22%', x: '-50%', scale: 1 }}
                exit={{ opacity: 0, scale: .88, filter: 'blur(7px)' }}
                transition={{ duration: rebrandStep === 2 ? 1.2 : 3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-[43%] w-[min(38vw,430px)] -translate-y-1/2 object-contain drop-shadow-[0_0_28px_rgba(24,135,255,.18)]"
              />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {rebrandStep >= 3 && rebrandStep < 6 && (
                <motion.p key="is-now" initial={{ opacity: 0, scale: .78, y: 12, filter: 'blur(5px)' }} animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, scale: 1.08, filter: 'blur(6px)' }}
                  transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }} className="absolute left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2 text-lg font-black text-[#67C090] drop-shadow-[0_1px_8px_rgba(103,192,144,.35)] sm:text-3xl">
                  is Now
                </motion.p>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {rebrandStep >= 4 && (
                <motion.div key="new-brand" initial={{ opacity: 0, left: '82%', scale: .82, filter: 'blur(7px)' }}
                  animate={{ opacity: 1, left: rebrandStep >= 6 ? '50%' : '78%', scale: rebrandStep >= 6 ? 1.35 : 1, filter: 'blur(0px)' }}
                  transition={{ duration: rebrandStep >= 6 ? 2 : 1.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-[43%] w-[min(34vw,390px)] -translate-x-1/2 -translate-y-1/2">
              <motion.img
                src={skiodeLogo}
                alt="SKIODE"
                    animate={{ filter: rebrandStep >= 6 ? 'drop-shadow(0 0 34px rgba(57,255,20,.3))' : 'drop-shadow(0 0 20px rgba(57,255,20,.16))' }}
                    className="w-full object-contain"
              />
                  {rebrandStep >= 5 && rebrandStep < 6 && (
                    <motion.span initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
                      className="mx-auto mt-2 block h-[3px] w-full origin-left bg-[#67C090] shadow-[0_0_10px_rgba(103,192,144,.75)]" />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {stage === 'reveal' && (
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <motion.div
            initial={{ x: 0 }} animate={{ x: '-102%' }} transition={{ duration: 6, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-y-0 left-0 w-1/2 border-r-4 border-[#39ff14]"
            style={{ background: '#071827', boxShadow: '12px 0 30px rgba(0,0,0,0.35)' }}
          />
          <motion.div
            initial={{ x: 0 }} animate={{ x: '102%' }} transition={{ duration: 6, ease: [0.76, 0, 0.24, 1] }}
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
          className="absolute bottom-7 left-5 z-20 inline-flex items-center gap-3 rounded-full border border-[#39ff14]/55 bg-[#031323]/75 px-5 py-3 text-[10px] font-extrabold uppercase tracking-[.12em] text-white backdrop-blur transition-all hover:border-[#39ff14] hover:shadow-[0_0_22px_rgba(57,255,20,.16)] sm:bottom-12 sm:left-12 sm:px-7 sm:text-[11px]"
        >
          <PartyPopper size={17} className="text-[#39ff14]" />
          Enable applause
        </button>
      )}

      {stage === 'countdown' && (
        <div className="absolute bottom-16 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-2 sm:flex">
          {Array.from({ length: 5 }, (_, i) => <span key={i} className={`h-2 rounded-full transition-all ${i === Math.min(4, Math.floor((COUNTDOWN_SECONDS - count) / 3)) ? 'w-2 bg-[#39ff14] shadow-[0_0_10px_#39ff14]' : 'w-2 bg-slate-700'}`} />)}
        </div>
      )}

      {stage !== 'reveal' && <button
        type="button"
        onClick={finish}
        className="absolute bottom-7 right-5 z-20 inline-flex items-center gap-3 rounded-full border border-[#39ff14]/55 bg-[#031323]/75 px-5 py-3 text-[10px] font-extrabold uppercase tracking-[.12em] text-white backdrop-blur transition-all hover:border-[#39ff14] hover:shadow-[0_0_22px_rgba(57,255,20,.16)] sm:bottom-12 sm:right-12 sm:px-7 sm:text-[11px]"
      >
        <ChevronsRight size={20} className="text-[#39ff14]" /> Skip intro
      </button>}
    </motion.div>
  )
}
