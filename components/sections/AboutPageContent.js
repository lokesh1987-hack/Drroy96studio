"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  MapPin,
  Clock,
  Phone,
  Instagram,
  Calendar,
  Award,
  Star,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function AboutPageContent() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div
        className="section-pad"
        style={{ background: "linear-gradient(135deg, #070e2d, #0f1f5c)" }}
      >
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="font-heading text-xs tracking-widest uppercase mb-4 block"
                style={{ color: "#5de8d8" }}
              >
                — About the Doctor
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-semibold text-white leading-tight mb-4">
                {siteConfig.name}
              </h1>
              <div
                className="font-heading text-xl mb-2"
                style={{ color: "#5de8d8" }}
              >
                {siteConfig.title}
              </div>
              <div
                className="font-heading text-base mb-6"
                style={{ color: "#d4a843" }}
              >
                ✦ {siteConfig.studio}
              </div>
              <p className="font-body font-light text-white/65 text-lg leading-relaxed mb-8">
                Dr. Roy is a dedicated dermatologist and Medical Aesthetic
                Practitioner with over 8 years of experience in advanced skin
                and hair treatments. At Skin Solution, he combines clinical
                expertise with a compassionate, patient-first approach.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/appointments" className="btn-gold">
                  <Calendar className="w-4 h-4" /> Book Appointment
                </Link>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline border-white/30 text-white hover:border-teal"
                >
                  <Instagram className="w-4 h-4" style={{ color: "#5de8d8" }} />{" "}
                  Follow on Instagram
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="glass-card p-8 text-center"
            >
              <div
                className="w-32 h-32 rounded-2xl mx-auto mb-6 flex items-center justify-center text-7xl animate-float"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(14,165,160,0.2), rgba(212,168,67,0.1))",
                  border: "2px solid rgba(14,165,160,0.3)",
                }}
              >
                👨‍⚕️
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { Icon: Award, val: "8+", label: "Years" },
                  { Icon: Users, val: "5K+", label: "Patients" },
                  { Icon: Star, val: "4.9★", label: "Rating" },
                ].map(({ Icon, val, label }) => (
                  <div
                    key={label}
                    className="text-center p-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <Icon
                      className="w-4 h-4 mx-auto mb-1"
                      style={{ color: "#5de8d8" }}
                    />
                    <div className="font-display text-lg text-white font-semibold">
                      {val}
                    </div>
                    <div className="font-heading text-xs text-white/40">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {siteConfig.credentials.map((c, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 font-body text-sm text-white/65"
                  >
                    <CheckCircle2
                      className="w-4 h-4 shrink-0"
                      style={{ color: "#0ea5a0" }}
                    />
                    {c}
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
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="section-tag mb-4">✦ Our Philosophy</span>
            <h2 className="font-display text-4xl font-semibold text-navy mb-3">
              Medicine Meets{" "}
              <span className="text-teal-gradient">Artistry</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🔬",
                title: "Evidence-Based",
                desc: "Every treatment protocol at Skin Solution is grounded in current clinical research and medical evidence.",
              },
              {
                emoji: "🎯",
                title: "Personalised Care",
                desc: "No two patients are the same. Dr. Roy designs individualised plans for your unique skin type, concerns and goals.",
              },
              {
                emoji: "❤️",
                title: "Patient-First",
                desc: "From consultation to follow-up, your comfort, safety and satisfaction guide every decision we make.",
              },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="white-card p-7 text-center"
              >
                <div className="text-5xl mb-4">{p.emoji}</div>
                <h3 className="font-display text-xl font-semibold text-navy mb-3">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-ink/55 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
          >
            <div>
              <span className="section-tag mb-3">✦ Achievements</span>
              <h2 className="font-display text-4xl font-semibold text-navy">
                Follow My <span className="text-teal-gradient">Journey</span>
              </h2>
              {/* <p className="font-body text-ink/55 mt-3 max-w-md">
                Skincare tips, treatment insights, and patient transformations —
                follow {siteConfig.instagramHandle}
              </p> */}
            </div>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline shrink-0 self-start md:self-auto"
            >
              <Instagram className="w-4 h-4" /> Follow on Instagram
            </a>
          </motion.div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {siteConfig.aboutusPosts?.map((post, i) => (
              <motion.a
                key={post.id}
                // href={post.redirect_url}
                // target="_blank"
                // rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ scale: 1.03 }}
                className={`relative group rounded-2xl overflow-hidden aspect-square bg-gradient-to-br border border-teal/10 flex items-center justify-center`}
                style={{
                  background: `linear-gradient(135deg, rgba(7,14,45,0.85), rgba(14,165,160,0.15))`,
                }}
              >
                {/* Emoji thumb */}
                <img
                  src={post.url}
                  alt={post.caption}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/60 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                  <ExternalLink
                    href={post.redirect_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div> */}

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy-900/90 to-transparent bg-black">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xs text-white/80 font-medium truncate pr-2">
                      {post.caption}
                    </span>
                  </div>
                </div>

                {/* Category badge */}
                {/* <div
                  className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-heading font-semibold"
                  style={{
                    background: "rgba(14,165,160,0.25)",
                    color: "#5de8d8",
                    border: "1px solid rgba(14,165,160,0.3)",
                  }}
                >
                  {post.category}
                </div> */}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-pad bg-white">
        <div className="wrap">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-tag mb-4">✦ Find Us</span>
            <h2 className="font-display text-4xl font-semibold text-navy">
              Our <span className="text-teal-gradient">Clinics</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {siteConfig.locations.map((l, i) => (
              <motion.div
                key={l.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="white-card p-6 relative overflow-hidden"
              >
                {l.isPrimary && (
                  <span
                    className="absolute top-4 right-4 text-xs font-heading font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(14,165,160,0.1)",
                      color: "#0ea5a0",
                      border: "1px solid rgba(14,165,160,0.2)",
                    }}
                  >
                    Primary
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-navy mb-4">
                  {l.label}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2 font-body text-sm text-ink/60">
                    <MapPin
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: "#0ea5a0" }}
                    />
                    {l.address}
                  </div>
                  <div className="flex items-center gap-2 font-body text-sm text-ink/60">
                    <Clock
                      className="w-4 h-4 shrink-0"
                      style={{ color: "#0ea5a0" }}
                    />
                    {l.hours}
                  </div>
                  <div className="flex items-center gap-2 font-body text-sm text-ink/60">
                    <Phone
                      className="w-4 h-4 shrink-0"
                      style={{ color: "#0ea5a0" }}
                    />
                    {l.phone}
                  </div>
                </div>
                <a
                  href={l.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 btn-outline w-full justify-center text-xs py-2.5 block"
                >
                  Get Directions
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
