import { motion } from "framer-motion"

/* ── Clients & Partners (from PPT Slide 23) ── */
import friedman from "../../brand_logo/ppt_logos/s23_image72.png"
import ucal from "../../brand_logo/ppt_logos/s23_image73.jpeg"
import fomas from "../../brand_logo/ppt_logos/s23_image74.jpeg"
import kodivian from "../../brand_logo/ppt_logos/s23_image75.png"
import bayforge from "../../brand_logo/ppt_logos/s23_image76.png"
import vehonitor from "../../brand_logo/ppt_logos/s23_image77.jpeg"
import reliableDrs from "../../brand_logo/ppt_logos/s23_image78.png"
import trotlabs from "../../brand_logo/ppt_logos/s23_image79.jpeg"
import persistent from "../../brand_logo/ppt_logos/s23_image80.png"
import flowerPower from "../../brand_logo/ppt_logos/s23_image81.jpeg"
import sharat from "../../brand_logo/ppt_logos/s23_image83.jpeg"
import sunTWS from "../../brand_logo/ppt_logos/s23_image84.png"
import orchidPharma from "../../brand_logo/ppt_logos/s23_image85.png"
import ionIdea from "../../brand_logo/ppt_logos/s23_image86.png"
import khazana from "../../brand_logo/ppt_logos/s23_image87.png"
import dabico from "../../brand_logo/ppt_logos/s23_image88.jpeg"
import mckesson from "../../brand_logo/ppt_logos/s23_image89.png"
import murugappa from "../../brand_logo/ppt_logos/s23_image90.jpeg"
import grm from "../../brand_logo/ppt_logos/s23_image91.png"
import saggaf from "../../brand_logo/ppt_logos/s23_image92.jpeg"
import oakstack from "../../brand_logo/ppt_logos/s23_image94.png"
import team from "../../brand_logo/ppt_logos/s23_image95.png"

const row1 = [
  { name: "Murugappa", logo: murugappa },
  { name: "McKesson", logo: mckesson },
  { name: "Orchid Pharma", logo: orchidPharma },
  { name: "Persistent", logo: persistent },
  { name: "Dabico", logo: dabico },
  { name: "Sharat Industries", logo: sharat },
  { name: "UCAL", logo: ucal },
  { name: "Friedman Associates", logo: friedman },
  { name: "Sun TWS", logo: sunTWS },
  { name: "Kodivian", logo: kodivian },
  { name: "Trotlabs", logo: trotlabs },
]

const row2 = [
  { name: "IonIdea", logo: ionIdea },
  { name: "Khazana Jewellery", logo: khazana },
  { name: "Bay-Forge", logo: bayforge },
  { name: "Vehonitor", logo: vehonitor },
  { name: "ReliableDrs", logo: reliableDrs },
  { name: "FOMAS Group", logo: fomas },
  { name: "OakStack", logo: oakstack },
  { name: "GRM", logo: grm },
  { name: "Saggaf Eye Center", logo: saggaf },
  { name: "Flower Power", logo: flowerPower },
  { name: "TEAM", logo: team },
]

const doubled1 = [...row1, ...row1]
const doubled2 = [...row2, ...row2]

function LogoCard({ brand, index }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex items-center justify-center flex-shrink-0 rounded-2xl cursor-default overflow-hidden"
      style={{
        minWidth: "170px",
        height: "85px",
        background: "white",
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(59,130,246,0.04), rgba(132,204,22,0.04))",
        }}
      />
      {/* Bottom accent line on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        style={{ background: "linear-gradient(90deg, #3b82f6, #84cc16)" }}
      />
      <img
        src={brand.logo}
        alt={brand.name}
        title={brand.name}
        className="relative z-10 transition-all duration-300 group-hover:scale-105"
        style={{
          maxHeight: "48px",
          maxWidth: "135px",
          objectFit: "contain",
          filter: "grayscale(30%) opacity(0.85)",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.filter = "grayscale(0%) opacity(1)" }}
        onMouseLeave={(e) => { e.currentTarget.style.filter = "grayscale(30%) opacity(0.85)" }}
      />
    </motion.div>
  )
}

export default function TrustedBrands() {
  return (
    <section id="trusted-brands" className="relative py-14 overflow-hidden" style={{ background: "linear-gradient(180deg, #f8faff 0%, #ffffff 50%, #f8faff 100%)" }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 dot-pattern-light opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold mb-5"
            style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(132,204,22,0.08))",
              border: "1px solid rgba(59,130,246,0.15)",
              color: "#3b82f6",
            }}
          >
            <span style={{ fontSize: "14px" }}>✦</span> Trusted Worldwide
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4"
          >
            Brands That{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Trust Us
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-500 max-w-lg mx-auto"
          >
            From healthcare to manufacturing, enterprises across industries rely on skiode to power their operations.
          </motion.p>
        </div>

        {/* ── Row 1 — scrolls left ── */}
        <div className="relative mb-5">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, #f8faff, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(270deg, #f8faff, transparent)" }} />

          <motion.div
            className="flex gap-4 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 35, ease: "linear", repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {doubled1.map((b, i) => (
              <LogoCard key={`r1-${b.name}-${i}`} brand={b} index={i} />
            ))}
          </motion.div>
        </div>

        {/* ── Row 2 — scrolls right (reverse) ── */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, #f8faff, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{ background: "linear-gradient(270deg, #f8faff, transparent)" }} />

          <motion.div
            className="flex gap-4 items-center"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {doubled2.map((b, i) => (
              <LogoCard key={`r2-${b.name}-${i}`} brand={b} index={i} />
            ))}
          </motion.div>
        </div>

        {/* Bottom counter badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          {[
            { num: "22+", label: "Enterprise Clients" },
            { num: "8+", label: "Industries Served" },
            { num: "6+", label: "Countries" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-2.5">
              <span className="text-2xl font-extrabold" style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {stat.num}
              </span>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
