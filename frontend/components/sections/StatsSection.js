'use client'
// components/sections/StatsSection.js
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useCounter } from '@/hooks/useCounter'
import { siteConfig } from '@/config/site'

function StatItem({ s, i, go }) {
  return (
    <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }} transition={{ delay: i*0.1 }}
      className="text-center px-6 py-8 border-r border-teal/10 last:border-r-0">
      <div className="text-3xl mb-2">{s.icon}</div>
      <div className="font-display text-4xl font-semibold text-teal-gradient mb-1">{s.value}</div>
      <div className="font-heading text-sm text-ink/50">{s.label}</div>
    </motion.div>
  )
}

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <section ref={ref} className="bg-white border-b border-teal/10">
      <div className="wrap">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 divide-x-0 lg:divide-x divide-teal/10">
          {siteConfig.stats.map((s, i) => <StatItem key={s.label} s={s} i={i} go={inView} />)}
        </div>
      </div>
    </section>
  )
}
