// components/layout/Footer.js
import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Calendar } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer style={{ background: '#070e2d' }}>
      <div className="wrap px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display text-white font-bold text-sm" style={{ background: 'linear-gradient(135deg, #0ea5a0, #0c6b68)' }}>96</div>
              <div>
                <div className="font-display text-white text-sm font-semibold">{siteConfig.name}</div>
                <div className="font-heading text-xs" style={{ color: '#5de8d8' }}>{siteConfig.studio}</div>
              </div>
            </div>
            <p className="font-body text-sm font-light leading-relaxed text-white/50 mb-5">{siteConfig.tagline}. Advanced dermatology care across Lanji and Chennai.</p>
            <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-heading text-xs font-semibold px-4 py-2 rounded-full border border-white/20 text-white/70 hover:border-teal hover:text-teal transition-all"
              style={{ '--hover-color': '#0ea5a0' }}>
              <Instagram className="w-3.5 h-3.5" />{siteConfig.instagramHandle}
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['/', '/about', '/services', '/gallery', '/appointments', '/contact'].map((href, i) => {
                const labels = ['Home', 'About Dr. Roy', 'Treatments', 'Gallery', 'Book Appointment', 'Contact']
                return (
                  <Link key={href} href={href} className="block font-body text-sm text-white/50 hover:text-teal transition-colors" style={{ '--hover-color': '#0ea5a0' }}>
                    {labels[i]}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Treatments</h4>
            <div className="space-y-2">
              {siteConfig.services.map(s => (
                <Link key={s.id} href="/services" className="block font-body text-sm text-white/50 hover:text-teal transition-colors">{s.title}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Contact</h4>
            <div className="space-y-3">
              <a href={`tel:${siteConfig.phone}`} className="flex items-start gap-2.5 font-body text-sm text-white/60 hover:text-teal transition-colors">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#0ea5a0' }} />{siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-2.5 font-body text-sm text-white/60 hover:text-teal transition-colors">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#0ea5a0' }} />{siteConfig.email}
              </a>
              {siteConfig.locations.map(l => (
                <a key={l.city} href={l.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 font-body text-sm text-white/60 hover:text-teal transition-colors">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#0ea5a0' }} />{l.address}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/30">© {new Date().getFullYear()} {siteConfig.name} · {siteConfig.studio}. All rights reserved.</p>
          <p className="font-body text-xs text-white/20">Advanced Aesthetic Dermatology · Lanji &amp; Chennai</p>
        </div>
      </div>
    </footer>
  )
}
