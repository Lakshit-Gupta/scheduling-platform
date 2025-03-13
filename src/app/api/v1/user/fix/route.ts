import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET() {
  const user = await prisma.user.update({
    where: { id: "default-user-id" },
    data: {
      name: "Lakshit Gupta",
      email: "contact@lakshit.dev",
      username: "lakshit-gupta",
    },
  })

  return NextResponse.json(user)
}