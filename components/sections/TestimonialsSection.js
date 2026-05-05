'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0)
  const len = siteConfig.testimonials.length
  const t = siteConfig.testimonials[idx]

  return (
    <section className="section-pad" style={{ background:'linear-gradient(135deg, #070e2d, #0f1f5c)' }}>
      <div className="wrap">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center mb-14">
          <span className="font-heading text-xs tracking-widest uppercase mb-3 block" style={{ color:'#5de8d8' }}>— Patient Stories</span>
          <h2 className="font-display text-4xl font-semibold text-white mb-3">
            Real Results, <span className="text-gold-gradient">Real People</span>
          </h2>
          <p className="font-body text-white/55 max-w-md mx-auto">
            Hear from patients who've experienced the Skin Solution difference.
          </p>
        </motion.div>

        {/* Featured */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <Quote className="w-10 h-10 absolute top-6 left-6 opacity-20" style={{ color:'#5de8d8' }} />
            <AnimatePresence mode="wait">
              <motion.div key={idx}
                initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }}
                exit={{ opacity:0, y:-12 }} transition={{ duration:0.35 }}>
                <div className="flex gap-1 mb-5">
                  {Array.from({length:5}).map((_,j) => (
                    <Star key={j} className={`w-5 h-5 ${j<t.rating ? 'fill-gold text-gold' : 'text-white/20'}`} style={{ color: j<t.rating ? '#d4a843' : undefined }} />
                  ))}
                </div>
                <blockquote className="font-body text-xl text-white/80 leading-relaxed italic mb-8">
                  "{t.text}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-display text-xl font-semibold"
                    style={{ background:'linear-gradient(135deg, #0ea5a0, #0c6b68)', color:'white' }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-white">{t.name}</div>
                    <div className="font-body text-sm text-white/50">{t.location} · {t.treatment}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-center gap-4 mt-5">
            <button onClick={() => setIdx(i=>(i-1+len)%len)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-teal hover:text-teal transition-all"
              style={{ '--hover-color':'#0ea5a0' }}>
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {siteConfig.testimonials.map((_,i) => (
                <button key={i} onClick={() => setIdx(i)}
                  className={`transition-all rounded-full ${i===idx ? 'w-6 h-2 bg-teal' : 'w-2 h-2 bg-white/20'}`}
                  style={{ background: i===idx ? '#0ea5a0' : undefined }} />
              ))}
            </div>
            <button onClick={() => setIdx(i=>(i+1)%len)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-teal hover:text-teal transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {siteConfig.testimonials.slice(0,3).map((t,i) => (
            <motion.div key={t.name}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ delay: i*0.08 }}
              className="glass-card p-5">
              <div className="flex gap-0.5 mb-3">
                {Array.from({length:5}).map((_,j) => (
                  <Star key={j} className="w-3.5 h-3.5" style={{ color: j<t.rating ? '#d4a843' : 'rgba(255,255,255,0.2)', fill: j<t.rating ? '#d4a843' : 'transparent' }} />
                ))}
              </div>
              <p className="font-body text-sm text-white/60 leading-relaxed italic mb-4">
                "{t.text.length>100 ? t.text.slice(0,100)+'…' : t.text}"
              </p>
              <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-display"
                  style={{ background:'linear-gradient(135deg, #0ea5a0, #0c6b68)', color:'white' }}>{t.name[0]}</div>
                <div>
                  <div className="font-heading text-xs font-semibold text-white">{t.name}</div>
                  <div className="font-body text-xs text-white/40">{t.treatment}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
