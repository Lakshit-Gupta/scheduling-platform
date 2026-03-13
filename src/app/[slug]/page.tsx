import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"
import BookingPageClient from "./BookingPageClient"

export const dynamic = 'force-dynamic'

export default async function PublicBookingPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const eventType = await prisma.eventType.findFirst({
    where: { slug, isActive: true },
    include: {
      user: true,
      questions: { orderBy: { order: "asc" } },
    },
  })

  if (!eventType) {
    notFound()
  }

  const availability = await prisma.availability.findMany({
    where: { userId: eventType.userId },
    orderBy: { dayOfWeek: "asc" },
  })

  const availableDays = availability.map((a: typeof availability[number]) => a.dayOfWeek)

  return (
    <BookingPageClient
      eventType={{
        id: eventType.id,
        title: eventType.title,
        description: eventType.description,
        duration: eventType.duration,
        slug: eventType.slug,
        color: eventType.color,
        questions: eventType.questions,
      }}
      host={{
        name: eventType.user.name,
        username: eventType.user.username,
      }}
      availableDays={availableDays}
    />
  )
}
