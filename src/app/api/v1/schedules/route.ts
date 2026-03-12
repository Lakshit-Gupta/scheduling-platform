import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"

export async function GET() {
  const schedules = await prisma.availabilitySchedule.findMany({
    where: { userId: DEFAULT_USER_ID },
    include: { availability: { orderBy: { dayOfWeek: "asc" } } },
    orderBy: { createdAt: "asc" },
  })
  return NextResponse.json(schedules)
}

export async function POST(req: Request) {
  const body = await req.json()
  const { name, timezone, copyFromDefault } = body as {
    name?: string
    timezone?: string
    copyFromDefault?: boolean
  }

  const resolvedTimezone = timezone || "Asia/Kolkata"

  const schedule = await prisma.availabilitySchedule.create({
    data: {
      userId: DEFAULT_USER_ID,
      name: name || "New Schedule",
      timezone: resolvedTimezone,
      isDefault: false,
    },
  })

  if (copyFromDefault) {
    const days = [1, 2, 3, 4, 5]
    await prisma.availability.createMany({
      data: days.map((day) => ({
        userId: DEFAULT_USER_ID,
        scheduleId: schedule.id,
        dayOfWeek: day,
        startTime: "09:00",
        endTime: "17:00",
        timezone: resolvedTimezone,
      })),
    })
  }

  const full = await prisma.availabilitySchedule.findUnique({
    where: { id: schedule.id },
    include: { availability: { orderBy: { dayOfWeek: "asc" } } },
  })

  return NextResponse.json(full)
}
