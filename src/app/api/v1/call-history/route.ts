import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"

export const dynamic = "force-dynamic"

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const workflowId = searchParams.get("workflowId")
    const status = searchParams.get("status")

    const where: Record<string, unknown> = {
      workflow: { userId: DEFAULT_USER_ID },
    }
    if (workflowId) where.workflowId = workflowId
    if (status) where.status = status

    const callHistory = await prisma.callHistory.findMany({
      where,
      orderBy: { startedAt: "desc" },
      take: 100,
    })
    return NextResponse.json(callHistory)
  } catch (error) {
    console.error("Failed to fetch call history:", error)
    return NextResponse.json([], { status: 200 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const entry = await prisma.callHistory.create({
      data: {
        workflowId: body.workflowId,
        bookingId: body.bookingId || null,
        callerName: body.callerName,
        callerPhone: body.callerPhone || null,
        callerEmail: body.callerEmail || null,
        callType: body.callType || "OUTGOING",
        status: body.status || "COMPLETED",
        duration: body.duration || 0,
        endedAt: body.endedAt ? new Date(body.endedAt) : null,
        notes: body.notes || null,
      },
    })
    return NextResponse.json(entry, { status: 201 })
  } catch (error) {
    console.error("Failed to create call history entry:", error)
    return NextResponse.json(
      { error: "Failed to create entry" },
      { status: 500 }
    )
  }
}
