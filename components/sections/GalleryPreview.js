"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Heart, ExternalLink, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

const bgColors = [
  "from-teal-800/30 to-navy-800/40",
  "from-navy-700/40 to-teal-900/30",
  "from-gold/10 to-navy-800/40",
  "from-teal-900/40 to-navy-700/30",
  "from-navy-800/30 to-gold/10",
  "from-teal-800/20 to-navy-900/40",
];

export default function GalleryPreview() {
  return (
    <section className="section-pad bg-white">
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="section-tag mb-3">✦ Instagram Feed</span>
            <h2 className="font-display text-4xl font-semibold text-navy">
              Follow Our <span className="text-teal-gradient">Journey</span>
            </h2>
            <p className="font-body text-ink/55 mt-3 max-w-md">
              Skincare tips, treatment insights, and patient transformations —
              follow {siteConfig.instagramHandle}
            </p>
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
          {siteConfig.galleryPosts.slice(0, 6).map((post, i) => (
            <motion.a
              key={post.id}
              href={post.redirect_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ scale: 1.03 }}
              className={`relative group rounded-2xl overflow-hidden aspect-square bg-gradient-to-br ${bgColors[i]} border border-teal/10 flex items-center justify-center`}
              style={{
                background: `linear-gradient(135deg, rgba(7,14,45,0.85), rgba(14,165,160,0.15))`,
              }}
            >
              {/* Emoji thumb */}
              {/* <div className="text-6xl transition-transform duration-500 group-hover:scale-110">{post.emoji}</div> */}
              <img
                src={post.url}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/60 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                <ExternalLink
                  href={post.redirect_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy-900/90 to-transparent">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-xs text-white/80 font-medium truncate pr-2">
                    {post.caption}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-heading text-white/60 shrink-0">
                    <Heart className="w-3 h-3 fill-red-400 text-red-400" />
                    {post.likes}
                  </span>
                </div>
              </div>

              {/* Category badge */}
              <div
                className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-heading font-semibold"
                style={{
                  background: "rgba(14,165,160,0.25)",
                  color: "#5de8d8",
                  border: "1px solid rgba(14,165,160,0.3)",
                }}
              >
                {post.category}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery" className="btn-outline">
            View Full Gallery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
