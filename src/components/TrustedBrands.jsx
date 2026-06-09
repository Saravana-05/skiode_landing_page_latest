import { motion } from "framer-motion"

const brands = [
  "Citizen Prints","Medics Health","Facinect","SkyCode Systems",
  "Lambda Integration","Nexus Enterprise","BuildTech","MedFlow",
]

export default function TrustedBrands() {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Trusted by teams building smarter operations
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-8">
          {brands.map((b,i) => (
            <motion.div key={b} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}}
              className="flex items-center justify-center px-3 py-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-sm transition-all">
              <span className="text-xs font-bold text-slate-500">{b}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-slate-400 max-w-xl mx-auto">
          From internal tools to enterprise workflows, teams use Sky LowCode AI to automate operations faster.
        </p>
      </div>
    </section>
  )
}
