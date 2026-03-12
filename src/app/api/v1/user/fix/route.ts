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
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}