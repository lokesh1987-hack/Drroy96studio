'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Phone, Star, ChevronDown, Shield, Award } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #070e2d 0%, #0f1f5c 45%, #0a1440 70%, #0e5452 100%)' }}>
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #0ea5a0, transparent 70%)' }} />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-8" style={{ background: 'radial-gradient(circle, #d4a843, transparent 70%)' }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(14,165,160,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,160,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="relative z-10 wrap px-4 md:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border text-xs font-heading font-semibold tracking-widest uppercase"
            style={{ borderColor: 'rgba(93,232,216,0.3)', color: '#5de8d8', background: 'rgba(14,165,160,0.1)' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#5de8d8' }} />
            Now Accepting New Patients
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-white leading-tight mb-2"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)' }}>
            {siteConfig.name}
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="font-heading text-xl font-light mb-2" style={{ color: '#5de8d8' }}>
            {siteConfig.title}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="font-heading text-base font-medium mb-6" style={{ color: '#d4a843' }}>
            ✦ {siteConfig.studio}
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="font-body font-light text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
            Dr Roy is India's leading medical cosmetologist and medical esthetician, and CEO of DR. Roy Skin Solution — serving patients across <strong className="text-white/90 font-medium">Lanji</strong>, <strong className="text-white/90 font-medium">Chennai</strong>, <strong className="text-white/90 font-medium">Gondia</strong> and <strong className="text-white/90 font-medium">Mumbai</strong>
          </motion.p>

          {/* Trust badges */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-8">
            {[
              { icon: Shield, text: '8+ Years Experience' },
              { icon: Award, text: '5000+ Happy Patients' },
              { icon: Star, text: '4.9★ Rating' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/15 text-white/70 text-xs font-heading">
                <Icon className="w-3 h-3" style={{ color: '#5de8d8' }} />{text}
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-4">
            <Link href="/appointments" className="btn-gold">
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-outline text-white border-white/30 hover:border-white/70 hover:text-white">
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
          </motion.div>
        </div>

        {/* Right — doctor card */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center">
          <div className="relative">
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-3xl animate-pulse-ring" style={{ background: 'rgba(14,165,160,0.15)' }} />

            {/* Main card */}
            <div className="glass-card p-8 w-80 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #0ea5a0, transparent)' }} />

              {/* Avatar */}
              <div className="w-28 h-28 rounded-2xl mx-auto mb-5 flex items-center justify-center text-6xl animate-float relative"
                style={{ background: 'linear-gradient(135deg, rgba(14,165,160,0.2), rgba(212,168,67,0.1))', border: '2px solid rgba(14,165,160,0.3)' }}>
                👨‍⚕️
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: '#0ea5a0', border: '2px solid #0f1f5c' }}>✓</div>
              </div>

              <div className="text-center mb-5">
                <div className="font-display text-white text-lg font-semibold mb-1">{siteConfig.shortName}</div>
                <div className="font-heading text-xs font-medium mb-1" style={{ color: '#5de8d8' }}>Dermatologist & Medical Aesthetic Practitioner</div>
                <div className="font-heading text-xs" style={{ color: '#d4a843' }}>Skin Solution · Lanji & Chennai</div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-5">
                {[['8+', 'Years'], ['5K+', 'Patients'], ['4.9★', 'Rating']].map(([v, l]) => (
                  <div key={l} className="text-center p-2 rounded-xl" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <div className="font-display text-base font-semibold" style={{ color: '#5de8d8' }}>{v}</div>
                    <div className="font-heading text-xs text-white/50">{l}</div>
                  </div>
                ))}
              </div>

              <Link href="/appointments" className="btn-primary w-full justify-center text-sm">
                <Calendar className="w-4 h-4" /> Schedule Visit
              </Link>
            </div>

            {/* Floating specialty pills */}
            {['PRP Hair Therapy', 'Skin Brightening', 'Acne Specialist'].map((s, i) => (
              <motion.div key={s}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.2 }}
                className="absolute text-xs font-heading font-semibold px-3 py-1.5 rounded-full text-white shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #0ea5a0, #0c6b68)',
                  top: `${25 + i * 28}%`,
                  right: i % 2 === 0 ? '-60px' : undefined,
                  left: i % 2 !== 0 ? '-60px' : undefined,
                  boxShadow: '0 4px 20px rgba(14,165,160,0.4)',
                  display: 'none',
                }}
              >
                {s}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="font-heading text-xs tracking-widest uppercase">Discover</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
