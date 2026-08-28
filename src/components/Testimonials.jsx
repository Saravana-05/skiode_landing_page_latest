import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  { name: "Project Manager", title: "Project Manager", company: "Friedman Associates, US", quote: "Overall, my experience with the Skylimit team was good! Team was very responsive in slack. I am extremely grateful for the pricing practice of keeping within our budget and not having a lot of add-ons. This was the most valuable part of the project for us, was the assurance that the cost was not going to inflate or change. I am VERY grateful to the Skylimit team and how hard they worked for us on this project.", avatar: "#3b82f6", rating: 5, metric: "Budget-friendly delivery" },
  { name: "Sidharth", title: "CEO", company: "Trotlabs, US", quote: "When I first explored this platform, I was impressed by its cutting-edge approach to low-code development, RPA, and workflow automation. What convinced me to invest was not just the technology, but the vision and execution of the team behind it. Their focus on scalability, enterprise-grade security, and seamless integration makes this a standout solution in the automation space. Excited to be part of this journey!", avatar: "#8b5cf6", rating: 5, metric: "Investor-backed vision" },
  { name: "Vijaysabari", title: "Managing Director", company: "Kodivian Technologies", quote: "Partnering with Skiode has been one of the best business decisions we've made. The demand for low-code, RPA, and workflow automation solutions is growing rapidly, and this product delivers exactly what enterprises need. Its ease of deployment, scalability, and powerful analytics make it an easy sell to clients across industries. The team behind this platform provides excellent support, ensuring smooth implementation and customer success.", avatar: "#10b981", rating: 5, metric: "Revenue growth partner" },
  { name: "IT Head", title: "IT Head", company: "Global Fuel Systems Mfg, India", quote: "Implementing Skiode for our Sales Order Automation was a game-changer. We struggled with manual order processing in Oracle Fusion, which was time-consuming and prone to errors. With the RPA and Process Automation capabilities, we fully automated order entry, validation, and approvals — reducing processing time by 70% and eliminating manual errors. The integration with Oracle Fusion was seamless.", avatar: "#f59e0b", rating: 5, metric: "70% faster processing" },
  { name: "Saravanakumar", title: "Full Stack Developer", company: "SkyUnlimited", quote: "As a developer, working with Skiode's platform has been a fantastic experience. The low-code approach doesn't limit what you can build — it accelerates it. The visual process builder, API integrations, and extensibility options make it a powerful tool for both citizen developers and full-stack engineers. It's the future of enterprise app development.", avatar: "#06b6d4", rating: 5, metric: "Developer experience" },
]

export default function Testimonials() {
  return (
    <section className="py-12 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-4"
            style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)", color: "#3b82f6" }}>
            <Star size={11} fill="#3b82f6" /> Customer Stories
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Trusted by leaders<br className="hidden sm:block" /> across the globe
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="text-lg text-slate-500">Real stories from our partners and customers</motion.p>
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
                  style={{ background: '#0a2342', color: '#39ff14' }}>
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
