interface BookingData {
  bookerName: string
  bookerEmail: string
  startTime: Date
  endTime: Date
  notes: string | null
}

interface EventTypeData {
  title: string
  duration: number
}

function formatDateTime(date: Date): string {
  return date.toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  })
}

async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return
  }

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Cal Clone <onboarding@resend.dev>",
        to,
        subject,
        html,
      }),
    })
  } catch {
    // Silently ignore email failures
  }
}

export async function sendBookingConfirmation(
  booking: BookingData,
  eventType: EventTypeData,
  hostName: string
): Promise<void> {
  const subject = `Booking Confirmed: ${eventType.title}`
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto;">
      <h2 style="color: #111827;">Booking Confirmed!</h2>
      <p>Hi ${booking.bookerName},</p>
      <p>Your booking has been confirmed. Here are the details:</p>
      <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin: 16px 0;">
        <p style="margin: 4px 0;"><strong>Event:</strong> ${eventType.title}</p>
        <p style="margin: 4px 0;"><strong>Host:</strong> ${hostName}</p>
        <p style="margin: 4px 0;"><strong>Duration:</strong> ${eventType.duration} minutes</p>
        <p style="margin: 4px 0;"><strong>When:</strong> ${formatDateTime(new Date(booking.startTime))}</p>
        ${booking.notes ? `<p style="margin: 4px 0;"><strong>Notes:</strong> ${booking.notes}</p>` : ""}
      </div>
      <p style="color: #6b7280; font-size: 14px;">If you need to cancel, please contact the host.</p>
    </div>
  `
  await sendEmail(booking.bookerEmail, subject, html)
}

export async function sendCancellationEmail(
  booking: BookingData,
  eventType: EventTypeData
): Promise<void> {
  const subject = `Booking Cancelled: ${eventType.title}`
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto;">
      <h2 style="color: #111827;">Booking Cancelled</h2>
      <p>Hi ${booking.bookerName},</p>
      <p>Your booking has been cancelled. Here are the details:</p>
      <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin: 16px 0;">
        <p style="margin: 4px 0;"><strong>Event:</strong> ${eventType.title}</p>
        <p style="margin: 4px 0;"><strong>Duration:</strong> ${eventType.duration} minutes</p>
        <p style="margin: 4px 0;"><strong>Was scheduled for:</strong> ${formatDateTime(new Date(booking.startTime))}</p>
      </div>
      <p style="color: #6b7280; font-size: 14px;">If this was a mistake, please rebook at your convenience.</p>
    </div>
  `
  await sendEmail(booking.bookerEmail, subject, html)
}
