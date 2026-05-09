'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, Loader, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import toast from 'react-hot-toast'
import { siteConfig } from '@/config/site'

const schema = z.object({
  name: z.string().min(2, 'Full name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email required'),
  service: z.string().min(1, 'Please select a treatment'),
  location: z.string().min(1, 'Please select a location'),
  notes: z.string().optional(),
})

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']

function MiniCalendar({ selected, onSelect }) {
  const today = new Date()
  const [view, setView] = useState(new Date(today.getFullYear(), today.getMonth(), 1))

  const year = view.getFullYear()
  const month = view.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const prev = () => setView(new Date(year, month - 1, 1))
  const next = () => setView(new Date(year, month + 1, 1))

  const cells = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const isDisabled = (d) => {
    if (!d) return true
    const dt = new Date(year, month, d)
    const diff = Math.floor((dt - today) / 86400000)
    return dt < new Date(today.getFullYear(), today.getMonth(), today.getDate()) || dt.getDay() === 0
  }

  const isSelected = (d) => selected && selected.getDate() === d && selected.getMonth() === month && selected.getFullYear() === year
  const isToday = (d) => today.getDate() === d && today.getMonth() === month && today.getFullYear() === year

  return (
    <div className="white-card p-5">
      <div className="flex items-center justify-between mb-4">
        <button onClick={prev} className="w-8 h-8 rounded-full hover:bg-teal/10 flex items-center justify-center transition-colors">
          <ChevronLeft className="w-4 h-4 text-ink/50" />
        </button>
        <span className="font-heading text-sm font-semibold text-navy">{MONTHS[month]} {year}</span>
        <button onClick={next} className="w-8 h-8 rounded-full hover:bg-teal/10 flex items-center justify-center transition-colors">
          <ChevronRight className="w-4 h-4 text-ink/50" />
        </button>
      </div>
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map(d => (
          <div key={d} className="text-center font-heading text-xs font-semibold text-ink/30 py-1">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {cells.map((d, i) => (
          <button key={i} disabled={isDisabled(d)}
            onClick={() => d && !isDisabled(d) && onSelect(new Date(year, month, d))}
            className={`day-btn ${!d ? '' : isDisabled(d) ? 'disabled' : ''} ${isSelected(d) ? 'selected' : ''} ${isToday(d) && !isSelected(d) ? 'today' : ''}`}
          >
            {d || ''}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function AppointmentContent() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [done, setDone] = useState(false)
  const [bookingRef, setBookingRef] = useState('')

  const { register, handleSubmit, formState:{ errors, isSubmitting }, getValues } = useForm({ resolver: zodResolver(schema) })

  const canProceed = step === 1 ? (selectedDate && selectedTime) : true

  const onSubmit = async (data) => {
    try {
      const payload = { ...data, date: selectedDate?.toDateString(), time: selectedTime }
      const res = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        const json = await res.json()
        setBookingRef(json.ref || 'DR96-' + Math.random().toString(36).substr(2,8).toUpperCase())
        setDone(true)
        toast.success('Appointment booked successfully! 🎉')
      } else {
        toast.error('Booking failed. Please call us directly.')
      }
    } catch {
      toast.error('Network error. Please call +91 90039 14390')
    }
  }

  if (done) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center section-pad"
        style={{ background:'linear-gradient(135deg, #070e2d, #0f1f5c)' }}>
        <motion.div initial={{ scale:0.9, opacity:0 }} animate={{ scale:1, opacity:1 }}
          className="glass-card p-10 md:p-14 text-center max-w-lg w-full">
          <motion.div initial={{ scale:0 }} animate={{ scale:1 }} transition={{ type:'spring', delay:0.2 }}
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl"
            style={{ background:'linear-gradient(135deg, #0ea5a0, #0c6b68)' }}>
            ✓
          </motion.div>
          <h2 className="font-display text-3xl font-semibold text-white mb-3">Appointment Confirmed!</h2>
          <div className="font-mono text-sm mb-6 px-4 py-2 rounded-xl inline-block" style={{ background:'rgba(14,165,160,0.15)', color:'#5de8d8' }}>
            Ref: {bookingRef}
          </div>
          <div className="glass-card p-5 text-left mb-6 space-y-2">
            <div className="flex items-center gap-2 font-body text-sm text-white/70">
              <Calendar className="w-4 h-4" style={{ color:'#5de8d8' }} />
              {selectedDate?.toDateString()} at {selectedTime}
            </div>
            <div className="flex items-center gap-2 font-body text-sm text-white/70">
              <User className="w-4 h-4" style={{ color:'#5de8d8' }} />
              {getValues('name')}
            </div>
            <div className="flex items-center gap-2 font-body text-sm text-white/70">
              <Phone className="w-4 h-4" style={{ color:'#5de8d8' }} />
              {getValues('phone')}
            </div>
          </div>
          <p className="font-body text-sm text-white/50 mb-6">
            We'll send a confirmation to {getValues('email')}. Dr. Roy's team will call you 24 hours before to confirm.
          </p>
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer"
            className="font-heading text-xs text-teal underline underline-offset-2" style={{ color:'#5de8d8' }}>
            Follow {siteConfig.instagramHandle} for skincare tips
          </a>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="py-16 text-center px-4" style={{ background:'linear-gradient(135deg, #070e2d, #0f1f5c)' }}>
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}>
          <span className="font-heading text-xs tracking-widest uppercase mb-3 block" style={{ color:'#5de8d8' }}>— Schedule a Visit</span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-white mb-3">
            Book an <span style={{ color:'#5de8d8' }}>Appointment</span>
          </h1>
          <p className="font-body text-white/60 max-w-md mx-auto">
            Select your preferred date, time, and treatment — Dr. Roy's team will confirm within 24 hours.
          </p>
        </motion.div>
      </div>

      {/* Steps indicator */}
      <div className="bg-white border-b border-teal/10 py-4">
        <div className="wrap px-4 flex items-center justify-center gap-4">
          {['Choose Date & Time', 'Your Details', 'Confirm'].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-heading font-bold transition-all ${step > i+1 ? 'bg-teal text-white' : step === i+1 ? 'bg-navy text-white' : 'bg-gray-100 text-gray-400'}`}
                style={{ background: step > i+1 ? '#0ea5a0' : step === i+1 ? '#0f1f5c' : undefined }}>
                {step > i+1 ? '✓' : i+1}
              </div>
              <span className={`font-heading text-xs font-semibold hidden sm:block ${step === i+1 ? 'text-navy' : 'text-ink/30'}`}>{s}</span>
              {i < 2 && <div className="w-8 h-px bg-gray-200 hidden sm:block" />}
            </div>
          ))}
        </div>
      </div>

      <section className="section-pad bg-ivory">
        <div className="wrap">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity:0, x:-20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:20 }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-navy mb-5 flex items-center gap-2">
                      <Calendar className="w-5 h-5" style={{ color:'#0ea5a0' }} /> Select Date
                    </h3>
                    <MiniCalendar selected={selectedDate} onSelect={setSelectedDate} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-navy mb-5 flex items-center gap-2">
                      <Clock className="w-5 h-5" style={{ color:'#0ea5a0' }} />
                      {selectedDate ? `Available Slots — ${selectedDate.toDateString()}` : 'Select a date first'}
                    </h3>
                    {selectedDate ? (
                      <div className="white-card p-5 grid grid-cols-3 gap-2">
                        {siteConfig.timeSlots.map(t => (
                          <button key={t} onClick={() => setSelectedTime(t)}
                            className={`time-slot ${selectedTime===t ? 'selected' : ''}`}>
                            {t}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="white-card p-8 text-center">
                        <Calendar className="w-10 h-10 mx-auto mb-3 opacity-20" />
                        <p className="font-body text-sm text-ink/40">Choose a date to see available time slots</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-center mt-8">
                  <button onClick={() => canProceed && setStep(2)}
                    className={`btn-primary text-base py-4 px-10 ${!canProceed ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={!canProceed}>
                    Continue to Details →
                  </button>
                  {!canProceed && <p className="font-body text-sm text-ink/40 mt-2">Please select a date and time to continue</p>}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity:0, x:20 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-20 }}>
                <div className="max-w-2xl mx-auto">
                  {/* Selected summary */}
                  <div className="white-card p-4 mb-6 flex flex-wrap gap-4 items-center">
                    <div className="flex items-center gap-2 font-body text-sm text-ink/70">
                      <Calendar className="w-4 h-4" style={{ color:'#0ea5a0' }} />
                      {selectedDate?.toDateString()}
                    </div>
                    <div className="flex items-center gap-2 font-body text-sm text-ink/70">
                      <Clock className="w-4 h-4" style={{ color:'#0ea5a0' }} />
                      {selectedTime}
                    </div>
                    <button onClick={() => setStep(1)} className="ml-auto font-heading text-xs text-teal underline" style={{ color:'#0ea5a0' }}>
                      Change
                    </button>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="white-card p-7 space-y-5">
                    <h3 className="font-display text-xl font-semibold text-navy mb-2">Your Details</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="form-label">Full Name *</label>
                        <input {...register('name')} placeholder="Your full name" className="form-input" />
                        {errors.name && <p className="form-error">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="form-label">Phone Number *</label>
                        <input {...register('phone')} placeholder="+91 XXXXX XXXXX" className="form-input" />
                        {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="form-label">Email Address *</label>
                      <input {...register('email')} type="email" placeholder="you@email.com" className="form-input" />
                      {errors.email && <p className="form-error">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="form-label">Treatment / Concern *</label>
                      <select {...register('service')} className="form-input">
                        <option value="">Select a treatment</option>
                        {siteConfig.services.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="General Consultation">General Skin Consultation</option>
                        <option value="Other">Other / Not Sure</option>
                      </select>
                      {errors.service && <p className="form-error">{errors.service.message}</p>}
                    </div>

                    <div>
                      <label className="form-label">Preferred Location *</label>
                      <select {...register('location')} className="form-input">
                        <option value="">Select clinic location</option>
                        {siteConfig.locations.map(l => (
                          <option key={l.city} value={l.city}>{l.label} — {l.city}</option>
                        ))}
                      </select>
                      {errors.location && <p className="form-error">{errors.location.message}</p>}
                    </div>

                    <div>
                      <label className="form-label">Additional Notes</label>
                      <textarea {...register('notes')} rows={3}
                        placeholder="Any specific concerns, allergies, or previous treatments..."
                        className="form-input resize-none" />
                    </div>

                    <div className="flex gap-4">
                      <button type="button" onClick={() => setStep(1)}
                        className="btn-outline flex-1 justify-center">
                        ← Back
                      </button>
                      <motion.button type="submit" disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        className="btn-primary flex-1 justify-center"
                        style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                        {isSubmitting
                          ? <><Loader className="w-4 h-4 animate-spin" /> Booking...</>
                          : <><CheckCircle className="w-4 h-4" /> Confirm Appointment</>
                        }
                      </motion.button>
                    </div>

                    <p className="font-body text-xs text-ink/35 text-center">
                      By booking, you agree to our cancellation policy. Dr. Roy's team will confirm your appointment within 24 hours.
                    </p>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
