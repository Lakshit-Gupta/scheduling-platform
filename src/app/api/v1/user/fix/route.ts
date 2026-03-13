import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const users = await prisma.user.findMany()

    const user = await prisma.user.update({
      where: { id: users[0].id },
      data: {
        name: "Lakshit Gupta",
        email: "contact@lakshit.dev",
        username: "lakshit-gupta",
      },
    })

    return NextResponse.json({ success: true, user })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to update user"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
