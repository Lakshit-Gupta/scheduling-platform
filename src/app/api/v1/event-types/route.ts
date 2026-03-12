import { NextRequest, NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"
import { QuestionType } from "@/generated/prisma/client"

function parseQuestionType(value: unknown): QuestionType {
  if (typeof value !== "string") return QuestionType.TEXT
  const normalized = value.trim().toUpperCase()
  if (normalized === "TEXTAREA") return QuestionType.TEXT
  if (normalized in QuestionType) return normalized as QuestionType
  return QuestionType.TEXT
}

export async function GET() {
  const eventTypes = await prisma.eventType.findMany({
    where: { userId: DEFAULT_USER_ID },
    orderBy: { createdAt: "desc" },
  })
  return NextResponse.json(eventTypes)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { title, description, duration, slug, color, bufferMinutes, questions } = body

  if (!title || !slug || !duration) {
    return NextResponse.json(
      { error: "title, slug, and duration are required" },
      { status: 400 }
    )
  }

  const existing = await prisma.eventType.findFirst({
    where: { slug, userId: DEFAULT_USER_ID },
  })
  if (existing) {
    return NextResponse.json(
      { error: "Slug already exists" },
      { status: 409 }
    )
  }

  const eventType = await prisma.eventType.create({
    data: {
      userId: DEFAULT_USER_ID,
      title,
      description: description || null,
      duration: Number(duration),
      slug,
      color: color || "#3B82F6",
      bufferMinutes: Number(bufferMinutes) || 0,
    },
  })

  if (questions?.length) {
    await prisma.bookingQuestion.createMany({
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
          eventTypeId: eventType.id,
          label: question.label,
          placeholder: question.placeholder || null,
          type: parseQuestionType(question.type),
          required: question.required || false,
          order: index,
        })
      ),
    })
  }

  return NextResponse.json(eventType, { status: 201 })
}
