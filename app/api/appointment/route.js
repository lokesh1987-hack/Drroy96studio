// app/api/appointment/route.js
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function genRef() {
  return 'DR96-' + Math.random().toString(36).substr(2, 8).toUpperCase()
}

export async function POST(req) {
  try {
    const body = await req.json()
    const { name, phone, email, service, location, notes, date, time } = body

    if (!name || !phone || !email || !service || !location) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const ref = genRef()

    // ── Send email notification if SMTP is configured ──────────────────
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      })

      // Notify Dr. Roy
      await transporter.sendMail({
        from: `"96 Studio Booking" <${process.env.SMTP_USER}>`,
        to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
        subject: `🗓️ New Appointment — ${name} | ${service}`,
        html: `
          <div style="font-family:'Georgia',serif;max-width:580px;margin:0 auto;padding:32px;background:#0f1f5c;color:#fdfbf7;border-radius:16px">
            <div style="text-align:center;margin-bottom:24px">
              <div style="background:linear-gradient(135deg,#0ea5a0,#0c6b68);display:inline-block;padding:10px 20px;border-radius:8px;font-size:18px;font-weight:bold;letter-spacing:2px">96 STUDIO</div>
            </div>
            <h2 style="color:#5de8d8;margin:0 0 20px;font-size:22px">New Appointment Request</h2>
            <div style="background:rgba(255,255,255,0.08);border-radius:12px;padding:20px;margin-bottom:20px">
              <table style="width:100%;font-size:14px;border-collapse:collapse">
                <tr><td style="padding:6px 0;color:#5de8d8;width:120px">Ref</td><td style="padding:6px 0;font-weight:bold;font-family:monospace">${ref}</td></tr>
                <tr><td style="padding:6px 0;color:#5de8d8">Patient</td><td style="padding:6px 0;font-weight:600">${name}</td></tr>
                <tr><td style="padding:6px 0;color:#5de8d8">Phone</td><td style="padding:6px 0"><a href="tel:${phone}" style="color:#d4a843">${phone}</a></td></tr>
                <tr><td style="padding:6px 0;color:#5de8d8">Email</td><td style="padding:6px 0"><a href="mailto:${email}" style="color:#d4a843">${email}</a></td></tr>
                <tr><td style="padding:6px 0;color:#5de8d8">Treatment</td><td style="padding:6px 0">${service}</td></tr>
                <tr><td style="padding:6px 0;color:#5de8d8">Location</td><td style="padding:6px 0">${location}</td></tr>
                <tr><td style="padding:6px 0;color:#5de8d8">Date</td><td style="padding:6px 0;font-weight:600">${date}</td></tr>
                <tr><td style="padding:6px 0;color:#5de8d8">Time</td><td style="padding:6px 0;font-weight:600">${time}</td></tr>
              </table>
            </div>
            ${notes ? `<div style="background:rgba(14,165,160,0.15);border-left:3px solid #0ea5a0;padding:12px 16px;border-radius:0 8px 8px 0;margin-bottom:20px"><p style="margin:0;font-size:13px;color:#cce8e7;font-style:italic">${notes}</p></div>` : ''}
            <p style="color:#5de8d8;font-size:11px;font-family:monospace;text-align:center;margin-top:24px;letter-spacing:1px">96 STUDIO — Dr. Shishir Roy</p>
          </div>
        `,
      })

      // Confirm to patient
      await transporter.sendMail({
        from: `"Dr. Shishir Roy — 96 Studio" <${process.env.SMTP_USER}>`,
        to: email,
        subject: `✅ Appointment Confirmed — ${ref}`,
        html: `
          <div style="font-family:'Georgia',serif;max-width:560px;margin:0 auto;padding:32px;background:#fdfbf7;border-radius:16px;border:1px solid #e0e8f0">
            <div style="text-align:center;margin-bottom:24px">
              <div style="background:linear-gradient(135deg,#0ea5a0,#0c6b68);display:inline-block;padding:10px 20px;border-radius:8px;color:white;font-size:16px;font-weight:bold;letter-spacing:2px">96 STUDIO</div>
            </div>
            <h2 style="color:#0f1f5c;font-size:22px;margin-bottom:16px">Appointment Confirmed</h2>
            <p style="color:#374151;font-size:14px;margin-bottom:24px">Dear ${name},<br><br>Thank you for booking with Dr. Shishir Roy at 96 Studio. Your appointment details are below.</p>
            <div style="background:#f0f9f8;border:1px solid rgba(14,165,160,0.2);border-radius:12px;padding:20px;margin-bottom:20px">
              <table style="width:100%;font-size:14px">
                <tr><td style="color:#0ea5a0;padding:5px 0;width:120px">Booking Ref</td><td style="font-weight:bold;font-family:monospace;color:#0f1f5c">${ref}</td></tr>
                <tr><td style="color:#0ea5a0;padding:5px 0">Treatment</td><td style="color:#0f1f5c">${service}</td></tr>
                <tr><td style="color:#0ea5a0;padding:5px 0">Location</td><td style="color:#0f1f5c">${location}</td></tr>
                <tr><td style="color:#0ea5a0;padding:5px 0">Date</td><td style="font-weight:600;color:#0f1f5c">${date}</td></tr>
                <tr><td style="color:#0ea5a0;padding:5px 0">Time</td><td style="font-weight:600;color:#0f1f5c">${time}</td></tr>
              </table>
            </div>
            <p style="color:#6b7280;font-size:13px;">Our team will call you 24 hours before your appointment to confirm. For any queries:<br>📞 ${process.env.CLINIC_PHONE || '+91 90039 14390'}</p>
            <p style="color:#9ca3af;font-size:11px;margin-top:24px;text-align:center">Dr. Shishir Roy · 96 Studio · Lanji & Chennai</p>
          </div>
        `,
      })
    }

    // Optional MongoDB storage — uncomment + add MONGODB_URI
    /*
    if (process.env.MONGODB_URI) {
      const { MongoClient } = await import('mongodb')
      const client = new MongoClient(process.env.MONGODB_URI)
      await client.connect()
      await client.db('drroy').collection('appointments').insertOne({ ...body, ref, status: 'pending', createdAt: new Date() })
      await client.close()
    }
    */

    return NextResponse.json({ success: true, ref })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
