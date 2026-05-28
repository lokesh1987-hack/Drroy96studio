"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Heart, X, ExternalLink, Upload } from "lucide-react";
import { siteConfig } from "@/config/site";

const CATS = ["All", "Hair", "Skin", "Tips"];

export default function GalleryPageContent() {
  const [cat, setCat] = useState("All");
  const [sel, setSel] = useState(null);
  const filtered =
    cat === "All"
      ? siteConfig.galleryPosts
      : siteConfig.galleryPosts.filter((p) => p.category === cat);

  const postBgs = [
    "linear-gradient(135deg, #0ea5a0 0%, #0f1f5c 100%)",
    "linear-gradient(135deg, #0f1f5c 0%, #0ea5a0 100%)",
    "linear-gradient(135deg, #0c6b68 0%, #d4a843 100%)",
    "linear-gradient(135deg, #070e2d 0%, #0ea5a0 80%)",
    "linear-gradient(135deg, #d4a843 0%, #0f1f5c 100%)",
    "linear-gradient(135deg, #0ea5a0 0%, #070e2d 100%)",
    "linear-gradient(135deg, #0c6b68 0%, #0f1f5c 100%)",
    "linear-gradient(135deg, #0f1f5c 0%, #d4a843 100%)",
    "linear-gradient(135deg, #070e2d 0%, #0c6b68 100%)",
  ];

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
            — Visual Diary
          </span>
          <h1 className="font-display text-5xl font-semibold text-white mb-4">
            Gallery & <span style={{ color: "#5de8d8" }}>Results</span>
          </h1>
          <p className="font-body text-white/60 text-lg max-w-lg mx-auto mb-6">
            Treatment results, skincare education, and life at Skin Solution —
            shared by Dr. Roy on {siteConfig.instagramHandle}
          </p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <Instagram className="w-4 h-4" /> Follow on Instagram
          </a>
        </motion.div>
      </div>

      {/* Gallery */}
      <section className="section-pad bg-ivory">
        <div className="wrap">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {CATS.map((c) => (
              <motion.button
                key={c}
                whileTap={{ scale: 0.96 }}
                onClick={() => setCat(c)}
                className="px-5 py-2 rounded-full font-heading text-sm font-medium transition-all"
                style={{
                  background:
                    cat === c
                      ? "linear-gradient(135deg, #0ea5a0, #0c6b68)"
                      : "white",
                  color: cat === c ? "white" : "#374151",
                  border: cat === c ? "none" : "1px solid rgba(14,165,160,0.2)",
                  boxShadow:
                    cat === c
                      ? "0 4px 16px rgba(14,165,160,0.3)"
                      : "0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                {c}
              </motion.button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-2 md:columns-3 gap-4">
            <AnimatePresence>
              {filtered.map((post, i) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSel(post)}
                  className="break-inside-avoid mb-4 rounded-2xl overflow-hidden group cursor-pointer relative"
                  style={{ background: postBgs[post.id - 1] || postBgs[0] }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className={`flex items-center justify-center relative`} //${i % 3 === 0 ? "h-64" : "h-48"}
                  >
                    {/* <span className="text-6xl transition-transform duration-500 group-hover:scale-110">{post.emoji}</span> */}
                    <img
                      src={post.url}
                      alt={post.caption}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/50 transition-all duration-300 flex items-center justify-center">
                      <ExternalLink
                        href={post.redirect_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy-900/85 to-transparent">
                    <div className="flex items-center justify-between">
                      <p className="font-heading text-xs text-white/80 font-medium truncate pr-2">
                        {post.caption}
                      </p>
                      <span className="flex items-center gap-1 font-heading text-xs text-white/60 shrink-0">
                        <Heart className="w-3 h-3 fill-red-400 text-red-400" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                  <div
                    className="absolute top-2 left-2 px-2 py-0.5 rounded-full font-heading text-xs font-semibold"
                    style={{
                      background: "rgba(14,165,160,0.25)",
                      color: "#5de8d8",
                      border: "1px solid rgba(14,165,160,0.3)",
                    }}
                  >
                    {post.category}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Instagram CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 white-card p-8 flex flex-col md:flex-row items-center gap-6 justify-between"
          >
            <div>
              <div className="font-display text-xl font-semibold text-navy mb-1">
                Share Your Transformation
              </div>
              <p className="font-body text-sm text-ink/55">
                Treated at Skin Solution? Tag us on Instagram{" "}
                {siteConfig.instagramHandle} and share your journey!
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-3"
              >
                <Instagram className="w-4 h-4" /> Visit Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Post Modal */}
      <AnimatePresence>
        {sel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSel(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: "rgba(7,14,45,0.85)",
              backdropFilter: "blur(10px)",
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-sm w-full shadow-2xl"
            >
              <div
                className="h-auto flex items-center justify-center text-8xl relative"
                style={{ background: postBgs[sel.id - 1] || postBgs[0] }}
              >
                {sel.url && (
                  <img
                    src={sel.url}
                    alt={sel.caption}
                    className="w-full h-full object-contain"
                  />
                )}  
                <button
                  onClick={() => setSel(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs font-heading font-semibold px-2.5 py-0.5 rounded-full"
                    style={{
                      background: "rgba(14,165,160,0.1)",
                      color: "#0ea5a0",
                    }}
                  >
                    {sel.category}
                  </span>
                  <span className="flex items-center gap-1 font-heading text-xs text-ink/40">
                    <Heart className="w-3 h-3 fill-red-400 text-red-400" />
                    {sel.likes} likes
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-navy mb-3">
                  {sel.caption}
                </h3>
                <a
                  href={sel.redirect_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-sm"
                >
                  <Instagram className="w-4 h-4" /> View on Instagram
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
