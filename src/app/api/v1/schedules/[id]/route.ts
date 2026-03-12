import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

interface AvailabilityInput {
  dayOfWeek: number
  startTime: string
  endTime: string
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const body = await req.json()
  const { name, timezone, availability } = body as {
    name?: string
    timezone?: string
    availability?: AvailabilityInput[]
  }

  const schedule = await prisma.availabilitySchedule.update({
    where: { id },
    data: { name, timezone },
  })

  if (availability) {
    await prisma.availability.deleteMany({ where: { scheduleId: id } })
    await prisma.availability.createMany({
      data: availability.map((a) => ({
        userId: schedule.userId,
        scheduleId: id,
        dayOfWeek: a.dayOfWeek,
        startTime: a.startTime,
        endTime: a.endTime,
        timezone: timezone || "Asia/Kolkata",
      })),
    })
  }

  const updated = await prisma.availabilitySchedule.findUnique({
    where: { id },
    include: { availability: { orderBy: { dayOfWeek: "asc" } } },
  })
  return NextResponse.json(updated)
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const schedule = await prisma.availabilitySchedule.findUnique({ where: { id } })
  if (schedule?.isDefault) {
    return NextResponse.json(
      { error: "Cannot delete default schedule" },
      { status: 400 }
    )
  }
  await prisma.availabilitySchedule.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
