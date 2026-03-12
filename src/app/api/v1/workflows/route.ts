import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const workflows = await prisma.workflow.findMany({
      where: { userId: DEFAULT_USER_ID },
      include: {
        steps: { orderBy: { stepOrder: "asc" } },
        _count: { select: { callHistory: true } },
      },
      orderBy: { createdAt: "desc" },
    })
    return NextResponse.json(workflows)
  } catch (error) {
    console.error("Failed to fetch workflows:", error)
    return NextResponse.json([], { status: 200 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const workflow = await prisma.workflow.create({
      data: {
        userId: DEFAULT_USER_ID,
        title: body.title || "Untitled Workflow",
        description: body.description || null,
        trigger: body.trigger || "BEFORE_EVENT",
        action: body.action || "EMAIL_REMINDER",
        timeValue: body.timeValue || 24,
        timeUnit: body.timeUnit || "HOURS",
      },
    })
    return NextResponse.json(workflow, { status: 201 })
  } catch (error) {
    console.error("Failed to create workflow:", error)
    return NextResponse.json(
      { error: "Failed to create workflow" },
      { status: 500 }
    )
  }
}
