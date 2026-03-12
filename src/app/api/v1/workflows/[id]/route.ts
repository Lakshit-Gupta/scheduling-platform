import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"

export const dynamic = "force-dynamic"

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
    const workflow = await prisma.workflow.update({
      where: { id },
      data: {
        ...(body.title !== undefined && { title: body.title }),
        ...(body.description !== undefined && { description: body.description }),
        ...(body.isActive !== undefined && { isActive: body.isActive }),
        ...(body.trigger !== undefined && { trigger: body.trigger }),
        ...(body.action !== undefined && { action: body.action }),
        ...(body.timeValue !== undefined && { timeValue: body.timeValue }),
        ...(body.timeUnit !== undefined && { timeUnit: body.timeUnit }),
      },
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
