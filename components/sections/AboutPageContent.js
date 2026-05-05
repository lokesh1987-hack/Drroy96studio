'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, MapPin, Clock, Phone, Instagram, Calendar, Award, Star, Users } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function AboutPageContent() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="section-pad" style={{ background:'linear-gradient(135deg, #070e2d, #0f1f5c)' }}>
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
              <span className="font-heading text-xs tracking-widest uppercase mb-4 block" style={{ color:'#5de8d8' }}>— About the Doctor</span>
              <h1 className="font-display text-5xl md:text-6xl font-semibold text-white leading-tight mb-4">
                {siteConfig.name}
              </h1>
              <div className="font-heading text-xl mb-2" style={{ color:'#5de8d8' }}>{siteConfig.title}</div>
              <div className="font-heading text-base mb-6" style={{ color:'#d4a843' }}>✦ {siteConfig.studio}</div>
              <p className="font-body font-light text-white/65 text-lg leading-relaxed mb-8">
                Dr. Roy is a dedicated dermatologist and aesthetic specialist with over 8 years of experience in advanced skin and hair treatments. At Skin Solution, he combines clinical expertise with a compassionate, patient-first approach.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/appointments" className="btn-gold"><Calendar className="w-4 h-4" /> Book Appointment</Link>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="btn-outline border-white/30 text-white hover:border-teal">
                  <Instagram className="w-4 h-4" style={{ color:'#5de8d8' }} /> Follow on Instagram
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ delay:0.3, duration:0.8 }}
              className="glass-card p-8 text-center">
              <div className="w-32 h-32 rounded-2xl mx-auto mb-6 flex items-center justify-center text-7xl animate-float"
                style={{ background:'linear-gradient(135deg, rgba(14,165,160,0.2), rgba(212,168,67,0.1))', border:'2px solid rgba(14,165,160,0.3)' }}>
                👨‍⚕️
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { Icon:Award, val:'8+', label:'Years' },
                  { Icon:Users, val:'5K+', label:'Patients' },
                  { Icon:Star, val:'4.9★', label:'Rating' },
                ].map(({Icon,val,label}) => (
                  <div key={label} className="text-center p-3 rounded-xl" style={{ background:'rgba(255,255,255,0.06)' }}>
                    <Icon className="w-4 h-4 mx-auto mb-1" style={{ color:'#5de8d8' }} />
                    <div className="font-display text-lg text-white font-semibold">{val}</div>
                    <div className="font-heading text-xs text-white/40">{label}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {siteConfig.credentials.map(c => (
                  <div key={c} className="flex items-center gap-2 font-body text-sm text-white/65">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color:'#0ea5a0' }} />{c}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <section className="section-pad bg-ivory">
        <div className="wrap">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            className="text-center mb-14">
            <span className="section-tag mb-4">✦ Our Philosophy</span>
            <h2 className="font-display text-4xl font-semibold text-navy mb-3">
              Medicine Meets <span className="text-teal-gradient">Artistry</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji:'🔬', title:'Evidence-Based', desc:'Every treatment protocol at Skin Solution is grounded in current clinical research and medical evidence.' },
              { emoji:'🎯', title:'Personalised Care', desc:"No two patients are the same. Dr. Roy designs individualised plans for your unique skin type, concerns and goals." },
              { emoji:'❤️', title:'Patient-First', desc:'From consultation to follow-up, your comfort, safety and satisfaction guide every decision we make.' },
            ].map((p,i) => (
              <motion.div key={p.title} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="white-card p-7 text-center">
                <div className="text-5xl mb-4">{p.emoji}</div>
                <h3 className="font-display text-xl font-semibold text-navy mb-3">{p.title}</h3>
                <p className="font-body text-sm text-ink/55 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-pad bg-white">
        <div className="wrap">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            className="text-center mb-12">
            <span className="section-tag mb-4">✦ Find Us</span>
            <h2 className="font-display text-4xl font-semibold text-navy">Our <span className="text-teal-gradient">Clinics</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {siteConfig.locations.map((l,i) => (
              <motion.div key={l.city} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="white-card p-6 relative overflow-hidden">
                {l.isPrimary && (
                  <span className="absolute top-4 right-4 text-xs font-heading font-semibold px-2.5 py-1 rounded-full"
                    style={{ background:'rgba(14,165,160,0.1)', color:'#0ea5a0', border:'1px solid rgba(14,165,160,0.2)' }}>Primary</span>
                )}
                <h3 className="font-display text-xl font-semibold text-navy mb-4">{l.label}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 font-body text-sm text-ink/60">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color:'#0ea5a0' }} />{l.address}
                  </div>
                  <div className="flex items-center gap-2 font-body text-sm text-ink/60">
                    <Clock className="w-4 h-4 shrink-0" style={{ color:'#0ea5a0' }} />{l.hours}
                  </div>
                  <div className="flex items-center gap-2 font-body text-sm text-ink/60">
                    <Phone className="w-4 h-4 shrink-0" style={{ color:'#0ea5a0' }} />{l.phone}
                  </div>
                </div>
                <a href={l.mapUrl} target="_blank" rel="noopener noreferrer"
                  className="mt-5 btn-outline w-full justify-center text-xs py-2.5 block">
                  Get Directions
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
