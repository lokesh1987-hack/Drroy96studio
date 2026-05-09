'use client'
import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'

export default function SkincareTimeline() {
  return (
    <section className="section-pad bg-ivory">
      <div className="wrap">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center mb-14">
          <span className="section-tag mb-4">✦ Dr. Roy's Tips</span>
          <h2 className="font-display text-4xl font-semibold text-navy mb-3">
            Daily Skincare <span className="text-teal-gradient">Wisdom</span>
          </h2>
          <p className="font-body text-ink/55 max-w-md mx-auto">
            Science-backed advice for healthy, glowing skin — straight from Dr. Roy's consultation room.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal/30 via-teal/50 to-transparent hidden md:block -translate-x-1/2" />

          <div className="space-y-8">
            {siteConfig.skincareTips.map((tip, i) => (
              <motion.div key={i}
                initial={{ opacity:0, x: i%2===0 ? -30 : 30 }} whileInView={{ opacity:1, x:0 }}
                viewport={{ once:true }} transition={{ delay: i*0.1 }}
                className={`flex items-center gap-6 ${i%2===0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 white-card p-5 ${i%2===0 ? 'md:text-right' : 'md:text-left'}`}>
                  <p className="font-body text-ink/70 leading-relaxed">{tip.tip}</p>
                </div>
                {/* Center dot */}
                <div className="hidden md:flex w-12 h-12 rounded-full items-center justify-center text-2xl shrink-0 z-10"
                  style={{ background:'white', border:'2px solid rgba(14,165,160,0.3)', boxShadow:'0 0 20px rgba(14,165,160,0.15)' }}>
                  {tip.icon}
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
