'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Calendar } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

const navLinks = [
  { href:'/', label:'Home' },
  { href:'/about', label:'About Dr. Roy' },
  { href:'/services', label:'Treatments' },
  { href:'/gallery', label:'Gallery' },
  { href:'/appointments', label:'Appointments' },
  { href:'/contact', label:'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const path = usePathname()
  const isHomePage = path === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const isTransparent = isHomePage && !scrolled

  return (
    <>
      {/* Top info bar */}
      <div className="hidden md:flex items-center justify-between bg-navy-900 px-8 py-2 text-xs font-heading" style={{ background: '#070e2d' }}>
        <div className="flex items-center gap-6 text-white/50">
          <span>📍 Lanji, MP &amp; Chennai, TN</span>
          <span>⏰ Mon–Sat: 10AM – 7PM</span>
        </div>
        <div className="flex items-center gap-6">
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 text-teal-300 hover:text-white transition-colors" style={{ color: '#5de8d8' }}>
            <Phone className="w-3 h-3" />{siteConfig.phone}
          </a>
          <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors">{siteConfig.instagramHandle}</a>
        </div>
      </div>

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 160, damping: 28 }}
        className={cn(
          'sticky top-0 z-50 transition-all duration-400',
          isTransparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-teal-100/50'
        )}
      >
        <div className="wrap px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display text-white font-bold text-sm shadow-glow-teal"
              style={{ background: 'linear-gradient(135deg, #0ea5a0, #0c6b68)' }}>
              96
            </div>
            <div>
              <div className={cn('font-display text-sm font-semibold leading-tight transition-colors', isTransparent ? 'text-white' : 'text-navy')}>
                {siteConfig.name}
              </div>
              <div className={cn('font-heading text-xs leading-tight transition-colors', isTransparent ? 'text-teal-300' : 'text-teal')}
                style={{ color: isTransparent ? '#5de8d8' : '#0ea5a0' }}>
                {siteConfig.studio} · {siteConfig.tagline}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href}
                className={cn(
                  'px-4 py-2 rounded-lg font-heading text-sm font-medium transition-all duration-200',
                  path === l.href
                    ? 'text-teal bg-teal/10'
                    : isTransparent
                      ? 'text-white/80 hover:text-white hover:bg-white/10'
                      : 'text-ink/70 hover:text-teal hover:bg-teal/5',
                )}
                style={{ '--tw-text-opacity': 1 }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/appointments"
              className="hidden sm:flex btn-primary text-xs py-2.5 px-5">
              <Calendar className="w-3.5 h-3.5" />
              Book Now
            </Link>
            <button onClick={() => setOpen(true)}
              className={cn('lg:hidden w-9 h-9 flex items-center justify-center rounded-full border transition-colors',
                isTransparent ? 'border-white/30 text-white' : 'border-teal/30 text-ink'
              )}>
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)} className="fixed inset-0 bg-navy-900/60 backdrop-blur-sm z-50"
              style={{ background: 'rgba(7,14,45,0.6)' }} />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-72 z-50 flex flex-col"
              style={{ background: '#0f1f5c' }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <span className="font-display text-white text-sm">{siteConfig.shortName}</span>
                <button onClick={() => setOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <nav className="flex flex-col px-4 py-5 gap-1">
                {navLinks.map((l, i) => (
                  <motion.div key={l.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Link href={l.href} onClick={() => setOpen(false)}
                      className={cn('block px-4 py-3 font-heading text-sm font-medium rounded-xl transition-colors',
                        path === l.href ? 'text-teal bg-teal/10' : 'text-white/70 hover:text-white hover:bg-white/5'
                      )} style={{ color: path === l.href ? '#0ea5a0' : undefined }}>
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto p-6 border-t border-white/10 space-y-3">
                <Link href="/appointments" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
                  <Calendar className="w-4 h-4" /> Book Appointment
                </Link>
                <a href={`tel:${siteConfig.phone}`} className="btn-outline w-full justify-center text-white border-white/30">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
