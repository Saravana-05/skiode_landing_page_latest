import { motion, useAnimationControls } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

/* ─── PPT Slide 22 logos ─── */
import oracleLogo from '../assets/integrations/oracle.jpeg'
import netsuiteLogo from '../assets/integrations/netsuite.png'
import dynamics365Logo from '../assets/integrations/dynamics365.png'
import sapLogo from '../assets/integrations/sap.png'
import googleLogo from '../assets/integrations/google.jpeg'
import microsoftLogo from '../assets/integrations/microsoft.jpeg'
import sageLogo from '../assets/integrations/sage.png'
import pic12Logo from '../assets/integrations/pic12.png'
import pic16Logo from '../assets/integrations/pic16.png'
import pic28Logo from '../assets/integrations/pic28.png'

const logos = [
  { src: oracleLogo, name: 'Oracle' },
  { src: netsuiteLogo, name: 'NetSuite' },
  { src: dynamics365Logo, name: 'Dynamics 365' },
  { src: sapLogo, name: 'SAP' },
  { src: googleLogo, name: 'Google' },
  { src: microsoftLogo, name: 'Microsoft' },
  { src: sageLogo, name: 'Sage' },
  { src: pic12Logo, name: 'Integration' },
  { src: pic16Logo, name: 'Platform' },
  { src: pic28Logo, name: 'Connector' },
]

/* Diamond grid positions — 4 rows, offset pattern */
const gridPositions = [
  { col: 0, row: 0 },
  { col: 1, row: 0 },
  { col: 2, row: 0 },
  { col: 0.5, row: 1 },
  { col: 1.5, row: 1 },
  { col: 2.5, row: 1 },
  { col: 0, row: 2 },
  { col: 1, row: 2 },
  { col: 2, row: 2 },
  { col: 1.5, row: 3 },
]

const CELL = 140
const GAP = 16

/* Floating animation — each card gently bobs at its own rhythm */
const floatVariants = (i) => ({
  animate: {
    y: [0, -8, 0, 6, 0],
    rotate: [0, 0.5, 0, -0.5, 0],
    transition: {
      duration: 4 + (i % 3) * 1.2,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: i * 0.3,
    },
  },
})

/* Pulse glow keyframes for the active/highlighted card */
const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 0 0 rgba(59,130,246,0)',
      '0 0 20px 4px rgba(59,130,246,0.12)',
      '0 0 0 0 rgba(59,130,246,0)',
    ],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
}

function LogoCard({ logo, i, x, y, isHighlighted }) {
  return (
    <motion.div
      key={logo.name + i}
      initial={{ opacity: 0, scale: 0.4, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.07 * i,
        type: 'spring',
        stiffness: 180,
        damping: 14,
      }}
      className="absolute"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <motion.div
        variants={floatVariants(i)}
        animate="animate"
        whileHover={{
          y: -10,
          scale: 1.12,
          zIndex: 20,
          boxShadow: '0 20px 40px rgba(59,130,246,0.15)',
          transition: { duration: 0.3 },
        }}
        {...(isHighlighted ? glowPulse : {})}
        className="rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl flex items-center justify-center cursor-default transition-colors duration-300 hover:border-blue-200"
        style={{
          width: `${CELL}px`,
          height: `${CELL}px`,
          padding: '22px',
        }}
      >
        <motion.img
          src={logo.src}
          alt={logo.name}
          className="w-full h-full object-contain"
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        />
      </motion.div>
      {/* Name tooltip on hover */}
      <motion.div
        className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[11px] font-bold text-slate-500 whitespace-nowrap opacity-0 pointer-events-none"
        initial={false}
        whileHover={{ opacity: 1 }}
      >
        {logo.name}
      </motion.div>
    </motion.div>
  )
}

export default function IntegrationsShowcase() {
  return (
    <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8faff 50%, #f0f4ff 100%)' }}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] opacity-20" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.1), transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* ─── Left: Text content ─── */}
          <div className="lg:w-[44%] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold mb-6"
              style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', color: '#3b82f6' }}
            >
              <Zap size={14} /> Integrations
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-5"
            >
              Built-in integrations with{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                50+ industry products
              </span>{' '}
              and leading tools
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Connect skiode with your enterprise systems — ERP, CRM, cloud platforms, and business tools. No custom code needed.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}>
                Request a Demo
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 transition-all hover:scale-105 shadow-sm">
                View All Integrations <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>

          {/* ─── Right: Diamond logo grid ─── */}
          <div className="lg:w-[56%] flex justify-center lg:justify-end">
            <div
              className="relative"
              style={{
                width: `${3.5 * CELL + 3 * GAP}px`,
                height: `${4 * CELL + 3 * GAP}px`,
              }}
            >
              {logos.map((logo, i) => {
                const pos = gridPositions[i]
                const x = pos.col * (CELL + GAP)
                const y = pos.row * (CELL + GAP)
                const isHighlighted = i === 4 // center card gets pulse glow

                return (
                  <LogoCard key={logo.name + i} logo={logo} i={i} x={x} y={y} isHighlighted={isHighlighted} />
                )
              })}

              {/* Decorative ghost cards */}
              <div className="absolute rounded-2xl bg-blue-50/50 border border-blue-100/50"
                style={{ width: `${CELL}px`, height: `${CELL}px`, left: `${2.5 * (CELL + GAP)}px`, top: `${3 * (CELL + GAP)}px`, opacity: 0.4 }} />
              <div className="absolute rounded-2xl bg-blue-50/40 border border-blue-100/40"
                style={{ width: `${CELL}px`, height: `${CELL}px`, left: `${0.5 * (CELL + GAP)}px`, top: `${3 * (CELL + GAP)}px`, opacity: 0.3 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
