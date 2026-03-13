import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"
import { WorkflowAction, WorkflowTrigger } from "@/generated/prisma/client"

export const dynamic = "force-dynamic"

function parseWorkflowTrigger(value: unknown): WorkflowTrigger | null {
  if (typeof value !== "string") return null
  const normalized = value.trim().toUpperCase()
  if (normalized in WorkflowTrigger) return normalized as WorkflowTrigger
  return null
}

function parseWorkflowAction(value: unknown): WorkflowAction | null {
  if (typeof value !== "string") return null
  const normalized = value.trim().toUpperCase()
  if (normalized in WorkflowAction) return normalized as WorkflowAction
  return null
}

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
    const parsedTrigger = parseWorkflowTrigger(body.trigger)
    const parsedAction = parseWorkflowAction(body.action)

    if (body.trigger !== undefined && !parsedTrigger) {
      return NextResponse.json(
        { error: "Invalid workflow trigger value" },
        { status: 400 }
      )
    }

    if (body.action !== undefined && !parsedAction) {
      return NextResponse.json(
        { error: "Invalid workflow action value" },
        { status: 400 }
      )
    }

    const workflow = await prisma.workflow.create({
      data: {
        userId: DEFAULT_USER_ID,
        title: body.title || "Untitled Workflow",
        description: body.description || null,
        trigger: parsedTrigger ?? WorkflowTrigger.NEW_BOOKING,
        action: parsedAction ?? WorkflowAction.SEND_EMAIL,
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
