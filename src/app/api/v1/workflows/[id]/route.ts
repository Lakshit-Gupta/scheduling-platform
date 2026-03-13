import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"
import {
  type Prisma,
  WorkflowAction,
  WorkflowTrigger,
} from "@/generated/prisma/client"

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

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const workflow = await prisma.workflow.findFirst({
      where: { id, userId: DEFAULT_USER_ID },
      include: {
        steps: { orderBy: { stepOrder: "asc" } },
        callHistory: {
          orderBy: { startedAt: "desc" },
          take: 50,
        },
      },
    })
    if (!workflow) {
      return NextResponse.json({ error: "Not found" }, { status: 404 })
    }
    return NextResponse.json(workflow)
  } catch (error) {
    console.error("Failed to fetch workflow:", error)
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await req.json()
    const data: Prisma.WorkflowUpdateInput = {}

    if (body.title !== undefined) data.title = body.title
    if (body.description !== undefined) data.description = body.description
    if (body.isActive !== undefined) data.isActive = body.isActive
    if (body.timeValue !== undefined) data.timeValue = body.timeValue
    if (body.timeUnit !== undefined) data.timeUnit = body.timeUnit

    if (body.trigger !== undefined) {
      const parsedTrigger = parseWorkflowTrigger(body.trigger)
      if (!parsedTrigger) {
        return NextResponse.json(
          { error: "Invalid workflow trigger value" },
          { status: 400 }
        )
      }
      data.trigger = parsedTrigger
    }

    if (body.action !== undefined) {
      const parsedAction = parseWorkflowAction(body.action)
      if (!parsedAction) {
        return NextResponse.json(
          { error: "Invalid workflow action value" },
          { status: 400 }
        )
      }
      data.action = parsedAction
    }

    const workflow = await prisma.workflow.update({
      where: { id },
      data,
    })
    return NextResponse.json(workflow)
  } catch (error) {
    console.error("Failed to update workflow:", error)
    return NextResponse.json({ error: "Failed to update" }, { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    await prisma.workflow.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to delete workflow:", error)
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 })
  }
}
