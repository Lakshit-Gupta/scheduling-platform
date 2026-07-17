const RESEND_API_URL = "https://api.resend.com/emails"

export async function sendBookingConfirmationEmail(
  to: string,
  data: { bookerName: string; eventTitle: string; startTime: Date; hostName: string }
) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set")
    return
  }

  try {
    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "no-reply@send.lakshit.dev",
        to: [to],
        subject: `Booking Confirmed: ${data.eventTitle}`,
        html: `
          <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:24px">
            <h2 style="color:#111">Booking Confirmed ✅</h2>
            <p>Hi ${data.bookerName},</p>
            <p>Your booking for <strong>${data.eventTitle}</strong> with ${data.hostName} is confirmed.</p>
            <p><strong>Time:</strong> ${data.startTime.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
            <p style="color:#666;font-size:12px">Powered by Cal Clone</p>
          </div>
        `,
      }),
    })

    const result = await res.json()
    console.log("Resend response:", res.status, JSON.stringify(result))

    if (!res.ok) {
      console.error("Resend error:", result)
    }
  } catch (e) {
    console.error("Email send failed:", e)
  }
}

export async function sendCancellationEmail(
  to: string,
  data: { bookerName: string; eventTitle: string; startTime: Date }
) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("RESEND_API_KEY not set")
    return
  }

  try {
    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "no-reply@send.lakshit.dev",
        to: [to],
        subject: `Booking Cancelled: ${data.eventTitle}`,
        html: `
          <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:24px">
            <h2 style="color:#111">Booking Cancelled</h2>
            <p>Hi ${data.bookerName},</p>
            <p>Your booking for <strong>${data.eventTitle}</strong> has been cancelled.</p>
            <p><strong>Was scheduled for:</strong> ${data.startTime.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
            <p style="color:#666;font-size:12px">Powered by Cal Clone</p>
          </div>
        `,
      }),
    })

    const result = await res.json()
    console.log("Resend cancel response:", res.status, JSON.stringify(result))

    if (!res.ok) {
      console.error("Resend cancel error:", result)
    }
  } catch (e) {
    console.error("Cancel email failed:", e)
  }
}

export async function sendRescheduleEmail(
  to: string,
  data: { bookerName: string; eventTitle: string; newStartTime: Date }
) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("RESEND_API_KEY not set")
    return
  }

  try {
    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "no-reply@send.lakshit.dev",
        to: [to],
        subject: `Booking Rescheduled: ${data.eventTitle}`,
        html: `
          <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:24px">
            <h2 style="color:#111">Booking Rescheduled</h2>
            <p>Hi ${data.bookerName},</p>
            <p>Your booking for <strong>${data.eventTitle}</strong> has been rescheduled.</p>
            <p><strong>New time:</strong> ${data.newStartTime.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
            <p style="color:#666;font-size:12px">Powered by Cal Clone</p>
          </div>
        `,
      }),
    })

    const result = await res.json()
    console.log("Resend reschedule response:", res.status, JSON.stringify(result))

    if (!res.ok) {
      console.error("Resend reschedule error:", result)
    }
  } catch (e) {
    console.error("Reschedule email failed:", e)
  }
}
