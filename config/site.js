// config/site.js
export const siteConfig = {
  // ── Doctor Details ─────────────────────────────────────────────────────
  name: 'Dr. Roy',
  shortName: 'Dr. Roy',
  title: 'Dermatologist & Aesthetic Specialist',
  studio: 'Skin Solution',
  tagline: 'Advanced Aesthetic Dermatology',
  description: 'Dr. Roy is a leading dermatologist and aesthetic specialist at Skin Solution, offering advanced skin and hair treatments in Lanji & Chennai.',
  url: 'https://drroy.in',

  // ── Contact ────────────────────────────────────────────────────────────
  phone: '+91 90039 14390',
  email: 'contact@drroy96studio.com',
  instagram: 'https://instagram.com/drroy96studio',
  instagramHandle: '@drroy96studio',

  // ── Locations ──────────────────────────────────────────────────────────
  locations: [
    {
      city: 'Lanji',
      label: 'Lanji Clinic',
      address: 'Skin Solution, Main Road, Lanji, Madhya Pradesh',
      mapUrl: 'https://maps.google.com/?q=Lanji+Madhya+Pradesh',
      phone: '+91 90039 14390',
      hours: 'Mon–Sat: 10:00 AM – 7:00 PM',
      isPrimary: true,
    },
    {
      city: 'Chennai',
      label: 'Chennai Clinic',
      address: 'Skin Solution, Chennai, Tamil Nadu',
      mapUrl: 'https://maps.google.com/?q=96+Studio+Chennai',
      phone: '+91 90039 14390',
      hours: 'Tue & Thu: 11:00 AM – 5:00 PM',
      isPrimary: false,
    },
  ],

  // ── Credentials ────────────────────────────────────────────────────────
  credentials: [
    'MBBS, Dermatology Specialist',
    'Advanced Aesthetic Procedures Certified',
    'PRP Therapy Expert',
    'Member – Indian Association of Dermatologists',
  ],
  experience: '8+ Years',
  patientsServed: '5000+',
  treatmentsDone: '10000+',
  rating: '4.9',

  // ── Services ───────────────────────────────────────────────────────────
  services: [
    {
      id: 'prp-hair',
      title: 'PRP Hair Therapy',
      category: 'Hair Care',
      icon: '🧬',
      emoji: '💉',
      shortDesc: 'Non-surgical Platelet-Rich Plasma treatment to restore hair density and stop hair loss.',
      fullDesc: 'Platelet-Rich Plasma (PRP) therapy is a cutting-edge, non-surgical hair loss treatment. Your own blood is drawn, processed to concentrate the growth factors, and injected into the scalp to stimulate dormant follicles and promote natural hair regrowth.',
      benefits: ['Stimulates natural hair growth', 'No surgery required', 'Minimal downtime', 'Safe, using your own blood', 'Long-lasting results'],
      duration: '45–60 min',
      sessions: '3–6 sessions',
      tag: 'Most Popular',
      tagColor: 'bg-gold text-navy-900',
    },
    {
      id: 'acne-treatment',
      title: 'Advanced Acne Treatment',
      category: 'Skin Care',
      icon: '✨',
      emoji: '🔬',
      shortDesc: 'Comprehensive acne management combining medical-grade therapies for clear, healthy skin.',
      fullDesc: 'Our multi-modal acne treatment program addresses root causes — hormonal, bacterial, and inflammatory. Combining topical treatments, chemical peels, and advanced lasers for lasting clarity.',
      benefits: ['Clears active breakouts', 'Reduces post-acne marks', 'Prevents future flare-ups', 'Personalized protocol', 'Boosts confidence'],
      duration: '30–45 min',
      sessions: '4–8 sessions',
      tag: 'Highly Effective',
      tagColor: 'bg-teal text-white',
    },
    {
      id: 'skin-brightening',
      title: 'Skin Brightening',
      category: 'Skin Care',
      icon: '🌟',
      emoji: '💫',
      shortDesc: 'Target hyperpigmentation, uneven tone and dullness with our science-backed brightening protocols.',
      fullDesc: 'Our skin brightening treatments address melasma, sun spots, and uneven skin tone using advanced chemical peels, laser therapy, and evidence-based topical agents for a luminous, even complexion.',
      benefits: ['Reduces dark spots', 'Evens skin tone', 'Boosts radiance', 'Safe for all skin types', 'Lasting results'],
      duration: '30–45 min',
      sessions: '3–6 sessions',
      tag: null,
      tagColor: '',
    },
    {
      id: 'anti-aging',
      title: 'Anti-Aging Treatments',
      category: 'Aesthetics',
      icon: '⏳',
      emoji: '🌿',
      shortDesc: 'Turn back the clock with dermal fillers, Botox, and skin rejuvenation protocols.',
      fullDesc: 'Our comprehensive anti-aging program combines neuromodulators, dermal fillers, and skin-boosting treatments to restore youthful volume, smooth fine lines, and rejuvenate skin texture.',
      benefits: ['Smooths fine lines', 'Restores volume', 'Tightens skin', 'Natural-looking results', 'Minimal downtime'],
      duration: '30–60 min',
      sessions: '1–3 sessions',
      tag: 'Premium',
      tagColor: 'bg-gold/20 text-gold border border-gold/40',
    },
    {
      id: 'hair-care',
      title: 'Hair Loss Management',
      category: 'Hair Care',
      icon: '🪮',
      emoji: '💊',
      shortDesc: 'Comprehensive hair loss solutions including diagnosis, medical management, and advanced therapies.',
      fullDesc: 'A thorough trichological evaluation followed by a customized treatment plan combining topical treatments, oral supplements, mesotherapy, and advanced PRP to address all causes of hair loss.',
      benefits: ['Root-cause diagnosis', 'Medical management', 'Mesotherapy available', 'Scalp health focus', 'Progress tracking'],
      duration: '45 min',
      sessions: 'Ongoing',
      tag: null,
      tagColor: '',
    },
    {
      id: 'skincare-consult',
      title: 'Personalized Skincare Consultation',
      category: 'Consultation',
      icon: '📋',
      emoji: '🩺',
      shortDesc: 'One-on-one session to build your perfect daily skincare routine with medical-grade guidance.',
      fullDesc: 'A dedicated consultation to understand your skin type, concerns, lifestyle, and goals. Dr. Roy crafts a personalized daily routine including the right cleanser, moisturizer, and SPF 30+ sunscreen for your unique skin.',
      benefits: ['Personalized routine', 'Product guidance', 'SPF recommendations', 'Follow-up support', 'Skin analysis included'],
      duration: '45–60 min',
      sessions: '1 session',
      tag: 'Start Here',
      tagColor: 'bg-navy/80 text-ivory border border-teal/30',
    },
  ],

  // ── Appointment Slots ───────────────────────────────────────────────────
  timeSlots: [
    '10:00 AM','10:30 AM','11:00 AM','11:30 AM',
    '12:00 PM','12:30 PM','02:00 PM','02:30 PM',
    '03:00 PM','03:30 PM','04:00 PM','04:30 PM',
    '05:00 PM','05:30 PM','06:00 PM','06:30 PM',
  ],

  // ── Stats ──────────────────────────────────────────────────────────────
  stats: [
    { value: '8+', label: 'Years Experience', icon: '🏆' },
    { value: '5K+', label: 'Happy Patients', icon: '❤️' },
    { value: '10K+', label: 'Treatments Done', icon: '✨' },
    { value: '4.9★', label: 'Patient Rating', icon: '⭐' },
  ],

  // ── Testimonials ───────────────────────────────────────────────────────
  testimonials: [
    { name: 'Priya M.', location: 'Chennai', rating: 5, text: 'My hair loss was making me lose confidence. After 4 PRP sessions with Dr. Roy, I can see significant regrowth. His expertise and caring approach made all the difference.', treatment: 'PRP Hair Therapy' },
    { name: 'Rajan K.', location: 'Lanji', rating: 5, text: 'Struggled with acne for years. Dr. Roy\'s treatment plan cleared my skin in 8 weeks. He explains everything clearly and actually listens to your concerns.', treatment: 'Acne Treatment' },
    { name: 'Ananya S.', location: 'Chennai', rating: 5, text: 'The skin brightening treatment gave me results I never thought possible. My melasma has significantly faded. Dr. Roy is a true expert in his field.', treatment: 'Skin Brightening' },
    { name: 'Vikram P.', location: 'Lanji', rating: 5, text: 'Came for anti-aging consultation, left with a completely personalized plan. The results after 2 sessions were remarkable. Highly professional clinic.', treatment: 'Anti-Aging' },
    { name: 'Deepa R.', location: 'Chennai', rating: 5, text: 'Dr. Roy\'s skincare consultation was eye-opening. He identified products I was using that were actually harming my skin. My complexion has transformed.', treatment: 'Skincare Consultation' },
  ],

  // ── Gallery / Instagram posts (placeholder — replace with real data) ───
  galleryPosts: [
    { id: 1, type: 'treatment', emoji: '💉', caption: 'PRP Hair Therapy in Progress', likes: '248', category: 'Hair' },
    { id: 2, type: 'result', emoji: '✨', caption: 'Skin Brightening — Before & After', likes: '412', category: 'Skin' },
    { id: 3, type: 'tip', emoji: '☀️', caption: 'Why SPF 30+ is Non-Negotiable', likes: '389', category: 'Tips' },
    { id: 4, type: 'clinic', emoji: '🏥', caption: 'Skin Solution — Our State-of-the-Art Facility', likes: '156', category: 'Clinic' },
    { id: 5, type: 'treatment', emoji: '🔬', caption: 'Advanced Acne Management Protocol', likes: '524', category: 'Skin' },
    { id: 6, type: 'tip', emoji: '💧', caption: 'Morning Skincare Routine Guide', likes: '678', category: 'Tips' },
    { id: 7, type: 'result', emoji: '🌟', caption: 'Hair Regrowth — 6 Month Journey', likes: '891', category: 'Hair' },
    { id: 8, type: 'clinic', emoji: '👨‍⚕️', caption: 'Consultation at Skin Solution Lanji', likes: '203', category: 'Clinic' },
    { id: 9, type: 'tip', emoji: '🧴', caption: 'Choosing the Right Moisturizer', likes: '445', category: 'Tips' },
  ],

  skincareTips: [
    { tip: 'Always apply SPF 30+ sunscreen every morning, even indoors', icon: '☀️' },
    { tip: 'Double cleanse at night to remove sunscreen and pollution', icon: '💧' },
    { tip: 'Never skip moisturizer — even oily skin needs hydration', icon: '🧴' },
    { tip: 'Introduce new actives slowly — one at a time, every 2 weeks', icon: '🔬' },
    { tip: 'Drink 8–10 glasses of water daily for skin health from within', icon: '💦' },
  ],
}
