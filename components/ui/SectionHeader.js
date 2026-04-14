'use client'
// components/ui/SectionHeader.js
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function SectionHeader({ tag, title, highlight, subtitle, center = true, light = false, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('mb-12 md:mb-16', center && 'text-center', className)}
    >
      {tag && (
        <span className={cn(
          'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-heading font-semibold tracking-widest uppercase mb-4',
          light
            ? 'bg-white/10 border border-white/20 text-white/70'
            : 'bg-teal/10 border border-teal/25 text-teal'
        )} style={{ color: light ? undefined : '#0ea5a0', background: light ? undefined : 'rgba(14,165,160,0.1)', borderColor: light ? undefined : 'rgba(14,165,160,0.25)' }}>
          ✦ {tag}
        </span>
      )}
      <h2 className={cn(
        'font-display font-semibold leading-tight',
        light ? 'text-white' : 'text-navy',
        'text-3xl md:text-4xl lg:text-5xl'
      )} style={{ color: light ? 'white' : '#0f1f5c' }}>
        {title}{' '}
        {highlight && (
          <span className="text-teal-gradient">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className={cn(
          'mt-4 font-body font-light text-lg leading-relaxed max-w-2xl',
          center && 'mx-auto',
          light ? 'text-white/60' : 'text-ink/55'
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
