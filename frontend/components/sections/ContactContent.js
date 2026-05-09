'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin, Instagram, Clock, MessageCircle, Send, CheckCircle, Loader } from 'lucide-react'
import toast from 'react-hot-toast'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone required'),
  message: z.string().min(10, 'Please tell us more'),
})

export default function ContactContent() {
  const [done, setDone] = useState(false)
  const { register, handleSubmit, formState:{ errors, isSubmitting }, reset } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (data) => {
    try {
      await fetch('/api/contact', { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(data) })
      setDone(true); reset(); toast.success('Message sent! We\'ll get back to you soon.')
    } catch { toast.error('Please call or WhatsApp us directly.') }
  }

  return (
    <div className="pt-16">
      <div className="section-pad text-center" style={{ background:'linear-gradient(135deg, #070e2d, #0f1f5c)' }}>
        <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}>
          <span className="font-heading text-xs tracking-widest uppercase mb-3 block" style={{ color:'#5de8d8' }}>— Get in Touch</span>
          <h1 className="font-display text-5xl font-semibold text-white mb-3">Contact <span style={{ color:'#5de8d8' }}>Skin Solution</span></h1>
          <p className="font-body text-white/60 max-w-md mx-auto">We're here to help. Reach us by phone, WhatsApp, or the form below.</p>
        </motion.div>
      </div>

      <section className="section-pad bg-ivory">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Info */}
            <div className="lg:col-span-2 space-y-5">
              <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
                className="white-card p-6">
                <h3 className="font-display text-xl font-semibold text-navy mb-5">Contact Details</h3>
                <div className="space-y-4">
                  {[
                    { Icon:Phone, label:'Phone', val:siteConfig.phone, href:`tel:${siteConfig.phone}` },
                    { Icon:MessageCircle, label:'WhatsApp', val:siteConfig.phone, href:`https://wa.me/${siteConfig.phone.replace(/\D/g,'')}` },
                    { Icon:Mail, label:'Email', val:siteConfig.email, href:`mailto:${siteConfig.email}` },
                    { Icon:Instagram, label:'Instagram', val:siteConfig.instagramHandle, href:siteConfig.instagram },
                  ].map(({Icon,label,val,href}) => (
                    <motion.a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer" whileHover={{ x:4 }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-teal/5 transition-colors group">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background:'rgba(14,165,160,0.1)' }}>
                        <Icon className="w-4 h-4" style={{ color:'#0ea5a0' }} />
                      </div>
                      <div>
                        <div className="font-heading text-xs uppercase tracking-wide text-ink/40">{label}</div>
                        <div className="font-body text-sm font-medium text-ink/80 group-hover:text-teal transition-colors">{val}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {siteConfig.locations.map((l,i) => (
                <motion.div key={l.city} initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }} transition={{ delay:0.1+i*0.1 }}
                  className="white-card p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="w-5 h-5 shrink-0 mt-0.5" style={{ color:'#0ea5a0' }} />
                    <div>
                      <div className="font-display text-base font-semibold text-navy">{l.label}</div>
                      <div className="font-body text-xs text-ink/50 mt-1">{l.address}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 font-body text-xs text-ink/50 mb-3">
                    <Clock className="w-3.5 h-3.5" style={{ color:'#0ea5a0' }} />{l.hours}
                  </div>
                  <Link href="/appointments" className="btn-primary w-full justify-center text-xs py-2.5 block">
                    Book at {l.city}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.div initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
              className="lg:col-span-3">
              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div key="done" initial={{ scale:0.95, opacity:0 }} animate={{ scale:1, opacity:1 }}
                    className="white-card p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                      style={{ background:'rgba(14,165,160,0.1)' }}>
                      <CheckCircle className="w-8 h-8" style={{ color:'#0ea5a0' }} />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-navy mb-3">Message Received!</h3>
                    <p className="font-body text-ink/55 mb-6 max-w-xs">Dr. Roy's team will get back to you within 24 hours.</p>
                    <button onClick={() => setDone(false)} className="btn-outline text-sm">Send Another</button>
                  </motion.div>
                ) : (
                  <motion.div key="form" className="white-card p-7 md:p-9">
                    <h3 className="font-display text-xl font-semibold text-navy mb-6">Send a Message</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label">Full Name *</label>
                          <input {...register('name')} placeholder="Your name" className="form-input" />
                          {errors.name && <p className="form-error">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="form-label">Phone *</label>
                          <input {...register('phone')} placeholder="+91 XXXXX XXXXX" className="form-input" />
                          {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="form-label">Email *</label>
                        <input {...register('email')} type="email" placeholder="you@email.com" className="form-input" />
                        {errors.email && <p className="form-error">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="form-label">Your Message *</label>
                        <textarea {...register('message')} rows={5} placeholder="How can Dr. Roy help you?" className="form-input resize-none" />
                        {errors.message && <p className="form-error">{errors.message.message}</p>}
                      </div>
                      <motion.button type="submit" disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale:0.98 }}
                        className="btn-primary w-full justify-center py-4 text-base"
                        style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                        {isSubmitting ? <><Loader className="w-4 h-4 animate-spin" /> Sending…</> : <><Send className="w-4 h-4" /> Send Message</>}
                      </motion.button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
