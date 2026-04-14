'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function BookingCTA() {
  return (
    <section className="section-pad bg-ivory">
      <div className="wrap">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center"
          style={{ background:'linear-gradient(135deg, #0ea5a0, #0f1f5c, #0c6b68)' }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage:'radial-gradient(circle at 30% 50%, #d4a843, transparent 60%)' }} />
          <div className="relative z-10">
            <motion.div initial={{ scale:0 }} whileInView={{ scale:1 }} viewport={{ once:true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-heading font-semibold"
              style={{ background:'rgba(255,255,255,0.15)', color:'white' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {siteConfig.availableFor || 'Accepting Appointments Now'}
            </motion.div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-4">
              Start Your Skin Journey Today
            </h2>
            <p className="font-body text-white/70 text-lg max-w-xl mx-auto mb-10">
              Book a consultation with Dr. Roy and receive a personalised treatment plan designed for your unique skin and hair needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/appointments" className="btn-gold">
                <Calendar className="w-5 h-5" /> Book Appointment
              </Link>
              <a href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-heading font-semibold text-sm hover:bg-white/10 transition-all">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href={`https://wa.me/${siteConfig.phone.replace(/\D/g,'')}?text=Hello Dr. Roy, I'd like to book a consultation.`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-heading font-semibold text-sm hover:bg-white/10 transition-all">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
