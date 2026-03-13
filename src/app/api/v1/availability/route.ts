import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"

export async function GET() {
  const availability = await prisma.availability.findMany({
    where: { userId: DEFAULT_USER_ID },
    orderBy: { dayOfWeek: "asc" },
  })
  return NextResponse.json(availability)
}

export async function PUT(request: NextRequest) {
  const body = await request.json()

  if (!Array.isArray(body)) {
    return NextResponse.json(
      { error: "Body must be an array of availability records" },
      { status: 400 }
    )
  }

  // Delete existing availability for user, then create new
  await prisma.availability.deleteMany({
    where: { userId: DEFAULT_USER_ID },
  })

  if (body.length > 0) {
    await prisma.availability.createMany({
      data: body.map(
        (item: {
          dayOfWeek: number
          startTime: string
          endTime: string
          timezone?: string
        }) => ({
          userId: DEFAULT_USER_ID,
          dayOfWeek: item.dayOfWeek,
          startTime: item.startTime,
          endTime: item.endTime,
          timezone: item.timezone || "Asia/Kolkata",
        })
      ),
    })
  }

  const updated = await prisma.availability.findMany({
    where: { userId: DEFAULT_USER_ID },
    orderBy: { dayOfWeek: "asc" },
  })

  return NextResponse.json(updated)
}
