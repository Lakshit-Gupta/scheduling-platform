import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { QuestionType } from "@/generated/prisma/client"

function parseQuestionType(value: unknown): QuestionType {
  if (typeof value !== "string") return QuestionType.TEXT
  const normalized = value.trim().toUpperCase()
  if (normalized === "TEXTAREA") return QuestionType.TEXT
  if (normalized in QuestionType) return normalized as QuestionType
  return QuestionType.TEXT
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const eventType = await prisma.eventType.findUnique({
    where: { id },
    include: { questions: { orderBy: { order: "asc" } } },
  })
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
  const { title, description, duration, slug, color, bufferMinutes, questions } = body

  const eventType = await prisma.$transaction(async (tx) => {
    const updated = await tx.eventType.update({
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

    await tx.bookingQuestion.deleteMany({ where: { eventTypeId: id } })

    if (questions?.length) {
      await tx.bookingQuestion.createMany({
        data: questions.map(
          (
            question: {
              label: string
              placeholder?: string
              type?: unknown
              required?: boolean
            },
            index: number
          ) => ({
            eventTypeId: id,
            label: question.label,
            placeholder: question.placeholder || null,
            type: parseQuestionType(question.type),
            required: question.required || false,
            order: index,
          })
        ),
      })
    }

    return updated
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
