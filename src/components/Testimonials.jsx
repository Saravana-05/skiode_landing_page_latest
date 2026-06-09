import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  { name: "Karim Al Mansouri", title: "Head of Operations", company: "Al Noor Construction Group", quote: "Sky LowCode transformed our site approval process. What took 3 days of back-and-forth emails now completes in under 4 hours with full audit trails.", avatar: "#3b82f6", rating: 5, metric: "72% faster approvals" },
  { name: "Divya Krishnan", title: "VP of HR", company: "TalentEdge Global (UAE)", quote: "The AI Recruiter module is outstanding. We screen 5x more candidates in the same time. The match scoring is incredibly accurate for technical roles.", avatar: "#8b5cf6", rating: 5, metric: "5x recruiter productivity" },
  { name: "Ahmed Al Zaabi", title: "CFO", company: "Falcon Finance Consultants", quote: "Invoice processing went from a 3-person manual team to a single click. The OCR accuracy is above 95% and our month-end close is now 8 days faster.", avatar: "#10b981", rating: 5, metric: "8 days saved monthly" },
  { name: "Sarah Mitchell", title: "CTO", company: "NovaTech Systems", quote: "The developer extension SDK was a surprise. Our team built custom integrations in days, not months. The API-first architecture is exactly what we needed.", avatar: "#f59e0b", rating: 5, metric: "10x developer speed" },
  { name: "Omar Al Rashidi", title: "Director of Digital", company: "Emirate Procurement Co.", quote: "We replaced 4 legacy tools with one Sky LowCode deployment. The process builder is genuinely no-code — our finance team built their own workflows.", avatar: "#06b6d4", rating: 5, metric: "4 tools consolidated" },
  { name: "Pooja Verma", title: "IT Manager", company: "BrightPath Education", quote: "Implementation took 2 weeks, not 6 months like we feared. The support team was excellent and the ROI was positive in the first quarter.", avatar: "#ec4899", rating: 5, metric: "2-week implementation" },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", color: "#3b82f6" }}>
            <Star size={11} fill="#3b82f6" /> Customer Stories
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Trusted by operations leaders<br className="hidden sm:block" /> across the GCC
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500">Rated 4.9/5 by 500+ enterprise teams</motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="rounded-3xl p-7 border border-slate-200 bg-white hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden">
              {/* Quote icon background */}
              <div className="absolute top-4 right-5 opacity-5">
                <Quote size={80} />
              </div>
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, si) => <Star key={si} size={13} fill="#f59e0b" stroke="none" />)}
              </div>
              {/* Metric badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-4" style={{ background: `${t.avatar}12`, color: t.avatar }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: t.avatar }} />
                {t.metric}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-5 relative z-10">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg,${t.avatar},${t.avatar}88)` }}>
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.title} · {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
