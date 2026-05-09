/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./app/**/*.{js,jsx}','./components/**/*.{js,jsx}','./config/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cinzel"', 'Georgia', 'serif'],
        heading: ['"Raleway"', 'system-ui', 'sans-serif'],
        body: ['"Nunito"', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy:  { 50:'#eef2ff', 100:'#dbe4fc', 200:'#b8c9f9', 300:'#89a3f4', 400:'#5a78ec', 500:'#3453e2', DEFAULT:'#0f1f5c', 700:'#0d1a4f', 800:'#0a1440', 900:'#070e2d' },
        teal:  { 50:'#ecfdfb', 100:'#cdfaf4', 200:'#9df4e9', 300:'#5de8d8', 400:'#28d0be', DEFAULT:'#0ea5a0', 600:'#0a8480', 700:'#0c6b68', 800:'#0e5452', 900:'#103f3e' },
        gold:  { 50:'#fffbeb', 100:'#fef3c7', 200:'#fde68a', 300:'#fcd34d', DEFAULT:'#d4a843', 500:'#c09030', 600:'#a07020', 700:'#7d5418', 800:'#5a3c10' },
        ivory: { DEFAULT:'#fdfbf7', 100:'#f8f5ee', 200:'#f0ebe0' },
        slate: { skin:'#e8ddd4', mid:'#c4b8ac', dark:'#7a6e65' },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #070e2d 0%, #0f1f5c 40%, #0a1440 70%, #0e5452 100%)',
        'card-glow': 'radial-gradient(ellipse at top left, rgba(14,165,160,0.12) 0%, transparent 60%)',
        'gold-gradient': 'linear-gradient(135deg, #d4a843, #fcd34d, #d4a843)',
        'teal-gradient': 'linear-gradient(135deg, #0ea5a0, #5de8d8)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.5s ease-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'slide-up': 'slideUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'count-up': 'countUp 2s ease forwards',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0) rotate(-1deg)' }, '50%': { transform: 'translateY(-14px) rotate(1deg)' } },
        pulseRing: { '0%': { transform:'scale(0.9)', opacity:'0.8' }, '70%': { transform:'scale(1.2)', opacity:'0' }, '100%': { transform:'scale(1.2)', opacity:'0' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        slideUp: { from: { opacity:'0', transform:'translateY(30px)' }, to: { opacity:'1', transform:'translateY(0)' } },
        fadeIn: { from: { opacity:'0' }, to: { opacity:'1' } },
        countUp: { from: { opacity:'0' }, to: { opacity:'1' } },
      },
      boxShadow: {
        'glow-teal': '0 0 40px rgba(14,165,160,0.25)',
        'glow-gold': '0 0 30px rgba(212,168,67,0.2)',
        'card': '0 4px 32px rgba(7,14,45,0.12)',
        'card-hover': '0 16px 48px rgba(7,14,45,0.2)',
        'inner-teal': 'inset 0 1px 0 rgba(93,232,216,0.15)',
      },
    },
  },
  plugins: [],
}
