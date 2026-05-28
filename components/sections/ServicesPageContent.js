"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Layers,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export default function ServicesPageContent() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div
        className="section-pad text-center"
        style={{ background: "linear-gradient(135deg, #070e2d, #0f1f5c)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span
            className="font-heading text-xs tracking-widest uppercase mb-4 block"
            style={{ color: "#5de8d8" }}
          >
            — Advanced Dermatology
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-semibold text-white mb-4">
            Our <span style={{ color: "#5de8d8" }}>Treatments</span>
          </h1>
          <p className="font-body text-white/60 text-lg max-w-xl mx-auto mb-8">
            Science-backed, personalised dermatology and aesthetic services at
            Skin Solution, Lanji & Chennai.
          </p>
          <Link href="/appointments" className="btn-gold">
            <Calendar className="w-4 h-4" /> Book a Consultation
          </Link>
        </motion.div>
      </div>

      {/* All services */}
      <section className="section-pad bg-ivory">
        <div className="wrap">
          <div className="space-y-8">
            {siteConfig.services.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="white-card p-8 grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {/* Left */}
                <div className="lg:col-span-1 flex flex-col justify-between">
                  <div>
                    {s.tag && (
                      <span
                        className={`inline-block text-xs font-heading font-semibold px-3 py-1 rounded-full mb-4 ${s.tagColor}`}
                      >
                        {s.tag}
                      </span>
                    )}
                    {s.image && (
                      <Image
                        src={s.image}
                        alt={s.title}
                        width={400}
                        height={300}
                        className="rounded-lg mb-4 object-cover h-72 w-96"
                      />
                    )}
                    {/* <div className="text-5xl mb-4">{s.emoji}</div> */}
                    <div
                      className="font-heading text-xs tracking-widest uppercase mb-2"
                      style={{ color: "#0ea5a0" }}
                    >
                      {s.category}
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-navy mb-3">
                      {s.title}
                    </h2>
                    <p className="font-body text-sm text-ink/55 leading-relaxed">
                      {s.shortDesc}
                    </p>
                  </div>
                  <div className="flex gap-4 mt-4">
                    <span className="flex items-center gap-1.5 font-heading text-xs text-ink/40">
                      <Clock className="w-3.5 h-3.5" />
                      {s.duration}
                    </span>
                    <span className="flex items-center gap-1.5 font-heading text-xs text-ink/40">
                      <Layers className="w-3.5 h-3.5" />
                      {s.sessions}
                    </span>
                  </div>
                </div>

                {/* Middle - full desc */}
                <div className="lg:col-span-1">
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-navy/50 mb-3">
                    About This Treatment
                  </h3>
                  <p className="font-body text-sm text-ink/60 leading-relaxed">
                    {s.fullDesc}
                  </p>
                </div>

                {/* Right - benefits + CTA */}
                <div className="lg:col-span-1">
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-navy/50 mb-4">
                    Benefits
                  </h3>
                  <div className="space-y-2 mb-6">
                    {s.benefits.map((b) => (
                      <div
                        key={b}
                        className="flex items-center gap-2 font-body text-sm text-ink/65"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0"
                          style={{ color: "#0ea5a0" }}
                        />
                        {b}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/appointments"
                    className="btn-primary w-full justify-center text-sm"
                  >
                    <Calendar className="w-4 h-4" /> Book This Treatment
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
