'use client'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function WhatsAppFloat() {
  const href = `https://wa.me/${siteConfig.phone.replace(/\D/g,'')}?text=Hello Dr. Roy, I'd like to book an appointment at 96 Studio.`
  return (
    <motion.a
      href={href} target="_blank" rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="whatsapp-float"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white fill-white" />
    </motion.a>
  )
}
