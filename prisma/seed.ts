import { PrismaClient } from "../src/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"
import "dotenv/config"

const dbUrl = new URL(process.env.DATABASE_URL!)
const pool = new Pool({
  host: dbUrl.hostname,
  port: Number(dbUrl.port) || 5432,
  user: decodeURIComponent(dbUrl.username),
  password: decodeURIComponent(dbUrl.password),
  database: dbUrl.pathname.slice(1),
  ssl: { rejectUnauthorized: false },
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const adapter = new PrismaPg(pool as any)
const prisma = new PrismaClient({ adapter })

async function main() {
  // Clean existing data
  await prisma.booking.deleteMany()
  await prisma.availability.deleteMany()
  await prisma.eventType.deleteMany()
  await prisma.user.deleteMany()

  // Create user
  const user = await prisma.user.create({
    data: {
      id: "default-user-id",
      name: "Alex Johnson",
      email: "alex@example.com",
      username: "alex",
      bio: "Full-stack developer who loves building things.",
      timezone: "Asia/Kolkata",
    },
  })

  console.log(`Created user: ${user.name}`)

  // Create event types
  const eventTypes = await Promise.all([
    prisma.eventType.create({
      data: {
        userId: user.id,
        title: "Quick Chat",
        description: "A short 15-minute catch-up call.",
        duration: 15,
        slug: "quick-chat",
        color: "#3B82F6",
      },
    }),
    prisma.eventType.create({
      data: {
        userId: user.id,
        title: "30 Min Meeting",
        description: "A standard 30-minute meeting for discussions.",
        duration: 30,
        slug: "meeting",
        color: "#10B981",
      },
    }),
    prisma.eventType.create({
      data: {
        userId: user.id,
        title: "Deep Dive",
        description: "A full hour for in-depth technical discussions.",
        duration: 60,
        slug: "deep-dive",
        color: "#8B5CF6",
      },
    }),
    prisma.eventType.create({
      data: {
        userId: user.id,
        title: "Consultation",
        description: "A 45-minute consultation session.",
        duration: 45,
        slug: "consultation",
        color: "#F59E0B",
      },
    }),
  ])

  console.log(`Created ${eventTypes.length} event types`)

  // Create availability (Mon-Fri, 9am-5pm IST)
  const availabilities = await Promise.all(
    [1, 2, 3, 4, 5].map((day) =>
      prisma.availability.create({
        data: {
          userId: user.id,
          dayOfWeek: day,
          startTime: "09:00",
          endTime: "17:00",
          timezone: "Asia/Kolkata",
        },
      })
    )
  )

  console.log(`Created ${availabilities.length} availability slots`)

  // Create 10 bookings (mix of past and upcoming, some cancelled)
  const [quickChat, meeting, deepDive, consultation] = eventTypes

  const bookings = await Promise.all([
    // Past bookings
    prisma.booking.create({
      data: {
        eventTypeId: quickChat.id,
        bookerName: "Sarah Chen",
        bookerEmail: "sarah.chen@gmail.com",
        startTime: new Date("2026-02-10T10:00:00+05:30"),
        endTime: new Date("2026-02-10T10:15:00+05:30"),
        status: "CONFIRMED",
        notes: "Quick intro call",
      },
    }),
    prisma.booking.create({
      data: {
        eventTypeId: meeting.id,
        bookerName: "James Wilson",
        bookerEmail: "james.wilson@company.com",
        startTime: new Date("2026-02-15T14:00:00+05:30"),
        endTime: new Date("2026-02-15T14:30:00+05:30"),
        status: "CONFIRMED",
        notes: "Project kickoff discussion",
      },
    }),
    prisma.booking.create({
      data: {
        eventTypeId: deepDive.id,
        bookerName: "Priya Sharma",
        bookerEmail: "priya.sharma@techcorp.in",
        startTime: new Date("2026-02-20T11:00:00+05:30"),
        endTime: new Date("2026-02-20T12:00:00+05:30"),
        status: "CANCELLED",
        cancelledAt: new Date("2026-02-18T09:00:00+05:30"),
        notes: "Architecture review - had to reschedule",
      },
    }),
    prisma.booking.create({
      data: {
        eventTypeId: consultation.id,
        bookerName: "Michael Brown",
        bookerEmail: "michael.b@startup.io",
        startTime: new Date("2026-03-01T15:00:00+05:30"),
        endTime: new Date("2026-03-01T15:45:00+05:30"),
        status: "CONFIRMED",
        notes: "Career advice session",
      },
    }),
    prisma.booking.create({
      data: {
        eventTypeId: meeting.id,
        bookerName: "Emily Davis",
        bookerEmail: "emily.davis@design.co",
        startTime: new Date("2026-03-05T10:00:00+05:30"),
        endTime: new Date("2026-03-05T10:30:00+05:30"),
        status: "CANCELLED",
        cancelledAt: new Date("2026-03-03T16:00:00+05:30"),
      },
    }),
    // Upcoming bookings
    prisma.booking.create({
      data: {
        eventTypeId: quickChat.id,
        bookerName: "Rahul Patel",
        bookerEmail: "rahul.patel@mail.com",
        startTime: new Date("2026-03-16T09:00:00+05:30"),
        endTime: new Date("2026-03-16T09:15:00+05:30"),
        status: "CONFIRMED",
        notes: "Intro call about freelance project",
      },
    }),
    prisma.booking.create({
      data: {
        eventTypeId: deepDive.id,
        bookerName: "Laura Martinez",
        bookerEmail: "laura.m@enterprise.com",
        startTime: new Date("2026-03-18T13:00:00+05:30"),
        endTime: new Date("2026-03-18T14:00:00+05:30"),
        status: "CONFIRMED",
        notes: "System design review for new microservice",
      },
    }),
    prisma.booking.create({
      data: {
        eventTypeId: consultation.id,
        bookerName: "David Kim",
        bookerEmail: "david.kim@agency.dev",
        startTime: new Date("2026-03-20T11:00:00+05:30"),
        endTime: new Date("2026-03-20T11:45:00+05:30"),
        status: "CONFIRMED",
        notes: "Tech stack consultation for new project",
      },
    }),
    prisma.booking.create({
      data: {
        eventTypeId: meeting.id,
        bookerName: "Anita Desai",
        bookerEmail: "anita.desai@corp.in",
        startTime: new Date("2026-03-25T16:00:00+05:30"),
        endTime: new Date("2026-03-25T16:30:00+05:30"),
        status: "CONFIRMED",
      },
    }),
    prisma.booking.create({
      data: {
        eventTypeId: quickChat.id,
        bookerName: "Tom Anderson",
        bookerEmail: "tom.anderson@freelance.com",
        startTime: new Date("2026-03-28T10:00:00+05:30"),
        endTime: new Date("2026-03-28T10:15:00+05:30"),
        status: "CONFIRMED",
        notes: "Follow-up on previous consultation",
      },
    }),
  ])

  console.log(`Created ${bookings.length} bookings`)
  console.log("Seed completed successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
    await pool.end()
  })
