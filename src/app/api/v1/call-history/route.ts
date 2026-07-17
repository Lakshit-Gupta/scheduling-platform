import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"
import { type Prisma, CallStatus, CallType } from "@/generated/prisma/client"

export const dynamic = "force-dynamic"

function parseCallStatus(value: unknown): CallStatus | null {
  if (typeof value !== "string") return null
  const normalized = value.trim().toUpperCase()
  if (normalized === "IN_PROGRESS") return CallStatus.PENDING
  if (normalized === "MISSED") return CallStatus.FAILED
  if (normalized in CallStatus) return normalized as CallStatus
  return null
}

function parseCallType(value: unknown): CallType | null {
  if (typeof value !== "string") return null
  const normalized = value.trim().toUpperCase()
  if (normalized === "OUTGOING" || normalized === "INCOMING") {
    return CallType.EMAIL
  }
  if (normalized in CallType) return normalized as CallType
  return null
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const workflowId = searchParams.get("workflowId")
    const status = searchParams.get("status")

    const where: Prisma.CallHistoryWhereInput = {
      workflow: { userId: DEFAULT_USER_ID },
    }
    if (workflowId) where.workflowId = workflowId
    if (status) {
      const parsedStatus = parseCallStatus(status)
      if (!parsedStatus) {
        return NextResponse.json(
          { error: "Invalid call status value" },
          { status: 400 }
        )
      }
      where.status = parsedStatus
    }

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
    const parsedCallType = parseCallType(body.callType)
    const parsedStatus = parseCallStatus(body.status)

    if (body.callType !== undefined && !parsedCallType) {
      return NextResponse.json(
        { error: "Invalid call type value" },
        { status: 400 }
      )
    }

    if (body.status !== undefined && !parsedStatus) {
      return NextResponse.json(
        { error: "Invalid call status value" },
        { status: 400 }
      )
    }

    const entry = await prisma.callHistory.create({
      data: {
        workflowId: body.workflowId,
        bookingId: body.bookingId || null,
        callerName: body.callerName,
        callerPhone: body.callerPhone || null,
        callerEmail: body.callerEmail || null,
        callType: parsedCallType ?? CallType.EMAIL,
        status: parsedStatus ?? CallStatus.COMPLETED,
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
