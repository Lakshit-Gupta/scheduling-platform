import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { sendCancellationEmail } from "@/lib/email"

export async function PATCH(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const booking = await prisma.booking.update({
    where: { id },
    data: {
      status: "CANCELLED",
      cancelledAt: new Date(),
    },
    include: { eventType: true },
  })

  // Send cancellation email (never break cancellation)
  try {
    await sendCancellationEmail(booking, booking.eventType)
  } catch {
    // Silently ignore email errors
  }

  return NextResponse.json(booking)
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  await prisma.booking.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
