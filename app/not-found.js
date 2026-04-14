// app/not-found.js
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-4"
      style={{ background: 'linear-gradient(135deg, #070e2d, #0f1f5c)' }}>
      <div>
        <div className="font-display text-8xl font-semibold text-white/10 mb-4">404</div>
        <h1 className="font-display text-3xl font-semibold text-white mb-3">Page Not Found</h1>
        <p className="font-body text-white/55 mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary">← Back to Home</Link>
          <Link href="/appointments" className="btn-outline border-white/30 text-white">Book Appointment</Link>
        </div>
      </div>
    </div>
  )
}
