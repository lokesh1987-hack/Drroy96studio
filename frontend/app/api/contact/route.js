// app/api/contact/route.js
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json()
    if (!name || !email || !message) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
      })
      await transporter.sendMail({
        from: `"${name}" <${process.env.SMTP_USER}>`,
        to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
        replyTo: email,
        subject: `📩 Contact Form — ${name} | Skin Solution`,
        html: `<div style="font-family:sans-serif;max-width:500px;padding:24px;background:#0f1f5c;color:#fdfbf7;border-radius:12px">
          <h3 style="color:#5de8d8">New Contact Message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color:#d4a843">${email}</a></p>
          <p><strong>Phone:</strong> ${phone || '—'}</p>
          <p><strong>Message:</strong></p>
          <div style="background:rgba(255,255,255,0.08);padding:12px;border-radius:8px;font-style:italic">${message}</div>
        </div>`,
      })
    }
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
