import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import ServicesPreview from '@/components/sections/ServicesPreview'
import DoctorProfile from '@/components/sections/DoctorProfile'
import GalleryPreview from '@/components/sections/GalleryPreview'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import BookingCTA from '@/components/sections/BookingCTA'
import SkincareTimeline from '@/components/sections/SkincareTimeline'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <DoctorProfile />
      <GalleryPreview />
      <SkincareTimeline />
      <TestimonialsSection />
      <BookingCTA />
    </>
  )
}
