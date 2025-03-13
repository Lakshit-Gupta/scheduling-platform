import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const overrides = await prisma.dateOverride.findMany({
    where: { eventTypeId: id },
    orderBy: { date: "asc" },
  })
  return NextResponse.json(overrides)
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const body = await req.json()
  const { date, isBlocked, startTime, endTime } = body

  if (!date) {
    return NextResponse.json({ error: "date required" }, { status: 400 })
  }

  const existing = await prisma.dateOverride.findFirst({
    where: { eventTypeId: id, date: new Date(date) },
  })

  let override
  if (existing) {
    override = await prisma.dateOverride.update({
      where: { id: existing.id },
      data: {
        isBlocked: isBlocked ?? false,
        startTime: startTime || null,
        endTime: endTime || null,
      },
    })
  } else {
    override = await prisma.dateOverride.create({
      data: {
        eventTypeId: id,
        date: new Date(date),
        isBlocked: isBlocked ?? false,
        startTime: startTime || null,
        endTime: endTime || null,
      },
    })
  }
  return NextResponse.json(override)
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await params
  const { overrideId } = await req.json()
  await prisma.dateOverride.delete({ where: { id: overrideId } })
  return NextResponse.json({ success: true })
}
