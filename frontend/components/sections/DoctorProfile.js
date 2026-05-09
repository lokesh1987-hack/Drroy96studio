'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2, Instagram, Phone, Calendar } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function DoctorProfile() {
  return (
    <section className="section-pad" style={{ background: 'linear-gradient(135deg, #070e2d, #0f1f5c)' }}>
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Doctor card */}
          <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10" style={{ background:'radial-gradient(circle, #d4a843, transparent)' }} />
              {/* Avatar area */}
              <div className="flex items-start gap-5 mb-6">
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-5xl shrink-0 animate-float"
                  style={{ background:'linear-gradient(135deg, rgba(14,165,160,0.25), rgba(212,168,67,0.1))', border:'2px solid rgba(14,165,160,0.3)' }}>
                  👨‍⚕️
                </div>
                <div>
                  <div className="font-display text-white text-xl font-semibold mb-1">{siteConfig.name}</div>
                  <div className="font-heading text-sm mb-1" style={{ color:'#5de8d8' }}>{siteConfig.title}</div>
                  <div className="font-heading text-xs" style={{ color:'#d4a843' }}>✦ {siteConfig.studio}</div>
                </div>
              </div>

              {/* Credentials */}
              <div className="space-y-2 mb-6">
                {siteConfig.credentials.map(c => (
                  <div key={c} className="flex items-center gap-2 font-body text-sm text-white/65">
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color:'#0ea5a0' }} />
                    {c}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 font-heading text-sm font-medium px-4 py-2.5 rounded-xl transition-all hover:opacity-80"
                  style={{ background:'rgba(255,255,255,0.08)', color:'white', border:'1px solid rgba(255,255,255,0.12)' }}>
                  <Instagram className="w-4 h-4" style={{ color:'#5de8d8' }} />
                  Follow {siteConfig.instagramHandle} on Instagram
                </a>
                <a href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 font-heading text-sm font-medium px-4 py-2.5 rounded-xl transition-all hover:opacity-80"
                  style={{ background:'rgba(14,165,160,0.15)', color:'#5de8d8', border:'1px solid rgba(14,165,160,0.25)' }}>
                  <Phone className="w-4 h-4" />{siteConfig.phone}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - About text */}
          <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
            <span className="font-heading text-xs tracking-widest uppercase mb-4 block" style={{ color:'#5de8d8' }}>— Meet the Doctor</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
              Expertise You Can<br /><span className="text-gold-gradient">Trust</span>
            </h2>
            <p className="font-body font-light text-white/65 text-lg leading-relaxed mb-4">
              Dr. Roy brings over 8 years of expertise in advanced aesthetic dermatology. Practicing at Skin Solution, he combines medical precision with a patient-first philosophy.
            </p>
            <p className="font-body font-light text-white/55 leading-relaxed mb-8">
              From non-surgical PRP hair restoration to advanced acne management and skin brightening protocols, Dr. Roy crafts personalized treatment plans guided by evidence-based medicine and ongoing research.
            </p>

            {/* Locations */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {siteConfig.locations.map(l => (
                <div key={l.city} className="glass-card p-4">
                  <div className="font-display text-white text-sm font-semibold mb-1">{l.label}</div>
                  <div className="font-body text-xs text-white/50 mb-2">{l.hours}</div>
                  {l.isPrimary && <span className="text-xs font-heading font-semibold px-2 py-0.5 rounded-full" style={{ background:'rgba(14,165,160,0.2)', color:'#5de8d8' }}>Primary</span>}
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              <Calendar className="w-4 h-4" /> Learn More About Dr. Roy
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
