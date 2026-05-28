"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Layers } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ServicesPreview() {
  return (
    <section className="section-pad bg-ivory">
      <div className="wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-tag mb-4">✦ Our Treatments</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy">
            Advanced{" "}
            <span className="text-teal-gradient">
              Dermatology And Medical Aesthetic
            </span>{" "}
            Services
          </h2>
          {/* <p className="text-xs font-medium py-2 px-3 md:text-sm md:font-semibold md:px-2 md:py-1 rounded-full mb-4 bg-teal mx-auto text-white md:w-96">
            SKIN -- HAIR -- COSMETICS -- LASER -- WELLNESS
          </p> */}
          <p className="font-body text-ink/60 text-lg max-w-xl mx-auto">
            Science-backed, personalised treatments for skin and hair —
            delivered with precision and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {siteConfig.services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{
                y: -6,
                boxShadow: "0 16px 48px rgba(7,14,45,0.15)",
              }}
              className="white-card p-6 flex flex-col group cursor-pointer"
            >
              {/* Badge */}
              {s.tag && (
                <span
                  className={`self-start text-xs font-heading font-semibold px-3 py-1 rounded-full mb-4 ${s.tagColor}`}
                >
                  {s.tag}
                </span>
              )}
              {!s.tag && <div className="mb-8" />}

              <div className="text-4xl mb-4">{s.emoji}</div>
              <div
                className="font-heading text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: "#0ea5a0" }}
              >
                {s.category}
              </div>
              <h3 className="font-display text-xl font-semibold text-navy mb-3 group-hover:text-teal transition-colors">
                {s.title}
              </h3>
              <p className="font-body text-sm text-ink/55 leading-relaxed mb-5 flex-1">
                {s.shortDesc}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-teal/10">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1 font-heading text-xs text-ink/40">
                    <Clock className="w-3 h-3" />
                    {s.duration}
                  </span>
                  <span className="flex items-center gap-1 font-heading text-xs text-ink/40">
                    <Layers className="w-3 h-3" />
                    {s.sessions}
                  </span>
                </div>
                <Link
                  href="/appointments"
                  className="flex items-center gap-1 text-xs font-heading font-semibold transition-colors hover:text-teal"
                  style={{ color: "#0ea5a0" }}
                >
                  Book <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="btn-outline">
            View All Treatments <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
