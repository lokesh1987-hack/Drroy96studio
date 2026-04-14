# Dr. Shishir Roy — 96 Studio Website

A premium, production-ready dermatologist portfolio and appointment booking website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🎨 Design Direction
Clinical luxury aesthetic — deep navy + teal + gold on ivory. Typography: **Cinzel** (display) + **Raleway** (headings) + **Nunito** (body). Conveys professional trust while feeling warm and approachable.

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Hero with doctor card, stats, services preview, gallery preview, testimonials, booking CTA |
| `/about` | Doctor biography, philosophy, credentials, clinic locations with maps |
| `/services` | Full treatment cards — PRP, Acne, Brightening, Anti-Aging, Hair Loss, Consultation |
| `/gallery` | Instagram-style grid with category filters and post modal |
| `/appointments` | **Full booking flow** — calendar picker → time slots → patient form → confirmation email |
| `/contact` | Contact form + clinic locations + direct phone/WhatsApp links |

---

## ✨ Key Features

### 🗓️ Appointment Booking
- Interactive mini calendar (blocks past dates & Sundays)
- Time slot grid for selected date
- 2-step form (Date & Time → Patient Details)
- Zod validation on all fields
- Auto-generates booking reference (e.g. `DR96-A7B2C9D1`)
- **Sends 2 emails via Nodemailer:**
  - Notification to Dr. Roy with full booking details
  - Confirmation to patient with booking reference
- Optional MongoDB storage for appointments

### 📸 Gallery / Instagram
- Filterable masonry grid (All, Hair, Skin, Tips, Clinic)
- Click-to-expand post modal
- Direct link to `@drroy96studio` Instagram
- Easy to extend with real Instagram embed API

### 🌟 Other Features
- Floating WhatsApp button — pre-filled message
- Top info bar with phone & Instagram
- Scroll progress indicator (teal→gold gradient)
- Animated counters (8+ years, 5K+ patients, 4.9★)
- Skincare tips timeline (animated alternating layout)
- Patient testimonials carousel
- SEO metadata + JSON-LD Physician schema
- Fully responsive + mobile-optimized

---

## 🚀 Quick Start

```bash
# 1. Install
npm install

# 2. Set environment variables
cp .env.local.example .env.local
# Edit .env.local with your SMTP details

# 3. Run
npm run dev
```

Open http://localhost:3000

---

## ⚙️ Configuration

All clinic data lives in **`config/site.js`**:

```js
siteConfig.name = 'Dr. Shishir Roy'
siteConfig.phone = '+91 90039 14390'
siteConfig.instagram = 'https://instagram.com/drroy96studio'
siteConfig.locations = [ /* Lanji + Chennai */ ]
siteConfig.services = [ /* PRP, Acne, etc. */ ]
siteConfig.timeSlots = [ /* Available booking times */ ]
```

### Adding Real Gallery Images
Replace emoji thumbnails in `config/site.js → galleryPosts` with actual image URLs from Instagram or uploaded to `/public/gallery/`.

---

## 📧 Email Setup (Gmail)

1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Create App Password for "Mail"
3. Add to `.env.local`:
   ```
   SMTP_USER=drroy96studio@gmail.com
   SMTP_PASS=xxxx_xxxx_xxxx_xxxx
   NOTIFY_EMAIL=contact@drroy96studio.com
   ```

---

## 🚢 Deploy on Vercel

```bash
npx vercel
```

Add environment variables in **Vercel Dashboard → Project → Settings → Environment Variables**.

The `vercel.json` is pre-configured with `"regions": ["bom1"]` (Mumbai) for best performance in India.

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| React Hook Form + Zod | Form validation |
| Nodemailer | Email notifications |
| next-themes | Dark/light mode |
| date-fns | Date utilities |
| Lucide React | Icons |
| react-hot-toast | Notifications |

---

## 📱 Mobile
- Sticky mobile Navbar with drawer
- Floating WhatsApp button
- Touch-optimized calendar and time slot picker
- Responsive grid throughout

---

© 2026 Dr. Shishir Roy · 96 Studio. All rights reserved.
