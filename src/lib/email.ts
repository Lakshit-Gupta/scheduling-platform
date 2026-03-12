import { format } from "date-fns"

const RESEND_API_KEY = process.env.RESEND_API_KEY

async function sendEmail(to: string, subject: string, html: string) {
  if (!RESEND_API_KEY) {
    console.log("[Email] RESEND_API_KEY not set, skipping email")
    return
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Cal Clone <onboarding@resend.dev>",
        to,
        subject,
        html,
      }),
    })
    if (!res.ok) {
      const err = await res.text()
      console.error("[Email] Failed:", err)
    }
  } catch (e) {
    console.error("[Email] Error:", e)
  }
}

export async function sendBookingConfirmationEmail({
  bookerName,
  bookerEmail,
  eventTitle,
  hostName,
  startTime,
  endTime,
}: {
  bookerName: string
  bookerEmail: string
  eventTitle: string
  hostName: string
  startTime: Date
  endTime: Date
}) {
  const dateStr = format(startTime, "EEEE, MMMM d, yyyy")
  const timeStr = format(startTime, "h:mm a")
  const endTimeStr = format(endTime, "h:mm a")

  await sendEmail(
    bookerEmail,
    `Booking Confirmed: ${eventTitle} with ${hostName}`,
    `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:40px 20px;background:#fff;">
      <div style="background:#111827;border-radius:12px;padding:24px;margin-bottom:24px;text-align:center;">
        <h1 style="color:#fff;font-size:28px;margin:0;">✓ Booking Confirmed</h1>
      </div>
      <p style="color:#374151;font-size:16px;">Hi ${bookerName},</p>
      <p style="color:#374151;font-size:16px;">Your booking has been confirmed. Here are the details:</p>
      <div style="background:#f9fafb;border-radius:12px;padding:24px;margin:24px 0;border:1px solid #e5e7eb;">
        <h2 style="color:#111827;font-size:20px;margin:0 0 16px;">${eventTitle}</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="color:#6b7280;padding:8px 0;width:80px;">Host</td><td style="color:#111827;font-weight:600;">${hostName}</td></tr>
          <tr><td style="color:#6b7280;padding:8px 0;">Date</td><td style="color:#111827;font-weight:600;">${dateStr}</td></tr>
          <tr><td style="color:#6b7280;padding:8px 0;">Time</td><td style="color:#111827;font-weight:600;">${timeStr} – ${endTimeStr} IST</td></tr>
        </table>
      </div>
      <p style="color:#9ca3af;font-size:14px;text-align:center;">Powered by Cal Clone</p>
    </div>
    `
  )
}

export async function sendCancellationEmail({
  bookerName,
  bookerEmail,
  eventTitle,
  startTime,
}: {
  bookerName: string
  bookerEmail: string
  eventTitle: string
  startTime: Date
}) {
  const dateStr = format(startTime, "EEEE, MMMM d, yyyy")
  const timeStr = format(startTime, "h:mm a")

  await sendEmail(
    bookerEmail,
    `Booking Cancelled: ${eventTitle}`,
    `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:40px 20px;background:#fff;">
      <div style="background:#dc2626;border-radius:12px;padding:24px;margin-bottom:24px;text-align:center;">
        <h1 style="color:#fff;font-size:28px;margin:0;">Booking Cancelled</h1>
      </div>
      <p style="color:#374151;font-size:16px;">Hi ${bookerName},</p>
      <p style="color:#374151;font-size:16px;">Your booking for <strong>${eventTitle}</strong> on ${dateStr} at ${timeStr} IST has been cancelled.</p>
      <p style="color:#9ca3af;font-size:14px;text-align:center;">Powered by Cal Clone</p>
    </div>
    `
  )
}

export async function sendRescheduleEmail({
  bookerName,
  bookerEmail,
  eventTitle,
  hostName,
  oldStartTime,
  newStartTime,
  newEndTime,
}: {
  bookerName: string
  bookerEmail: string
  eventTitle: string
  hostName: string
  oldStartTime: Date
  newStartTime: Date
  newEndTime: Date
}) {
  const oldDateStr = format(oldStartTime, "EEEE, MMMM d, yyyy 'at' h:mm a")
  const newDateStr = format(newStartTime, "EEEE, MMMM d, yyyy")
  const newTimeStr = format(newStartTime, "h:mm a")
  const newEndTimeStr = format(newEndTime, "h:mm a")

  await sendEmail(
    bookerEmail,
    `Booking Rescheduled: ${eventTitle}`,
    `
    <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:40px 20px;background:#fff;">
      <div style="background:#f59e0b;border-radius:12px;padding:24px;margin-bottom:24px;text-align:center;">
        <h1 style="color:#fff;font-size:28px;margin:0;">Booking Rescheduled</h1>
      </div>
      <p style="color:#374151;font-size:16px;">Hi ${bookerName},</p>
      <p style="color:#374151;font-size:16px;">Your booking for <strong>${eventTitle}</strong> has been rescheduled.</p>
      <div style="background:#f9fafb;border-radius:12px;padding:24px;margin:24px 0;border:1px solid #e5e7eb;">
        <p style="color:#6b7280;margin:0 0 8px;">Previous time: <span style="text-decoration:line-through;">${oldDateStr} IST</span></p>
        <h3 style="color:#111827;margin:0 0 16px;">New details:</h3>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="color:#6b7280;padding:8px 0;width:80px;">Host</td><td style="color:#111827;font-weight:600;">${hostName}</td></tr>
          <tr><td style="color:#6b7280;padding:8px 0;">Date</td><td style="color:#111827;font-weight:600;">${newDateStr}</td></tr>
          <tr><td style="color:#6b7280;padding:8px 0;">Time</td><td style="color:#111827;font-weight:600;">${newTimeStr} – ${newEndTimeStr} IST</td></tr>
        </table>
      </div>
      <p style="color:#9ca3af;font-size:14px;text-align:center;">Powered by Cal Clone</p>
    </div>
    `
  )
}
