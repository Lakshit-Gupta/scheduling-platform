import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const eventType = await prisma.eventType.findUnique({ where: { id } })
  if (!eventType) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }
  return NextResponse.json(eventType)
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const body = await request.json()
  const { title, description, duration, slug, color, bufferMinutes } = body

  const eventType = await prisma.eventType.update({
    where: { id },
    data: {
      title,
      description: description || null,
      duration: Number(duration),
      slug,
      color,
      bufferMinutes: Number(bufferMinutes) || 0,
    },
  })

  return NextResponse.json(eventType)
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  await prisma.eventType.delete({ where: { id } })
  return NextResponse.json({ success: true })
}
