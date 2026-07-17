import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import { DEFAULT_USER_ID } from "@/lib/constants"

export const dynamic = "force-dynamic"

function hasErrorCode(error: unknown): error is { code: string } {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    typeof (error as { code?: unknown }).code === "string"
  )
}

export async function GET() {
  try {
    const user = await prisma.user.findUnique({
      where: { id: DEFAULT_USER_ID },
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    return NextResponse.json(user)
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const { name, email, username, bio, timezone } = body

    const user = await prisma.user.update({
      where: { id: DEFAULT_USER_ID },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(username && { username }),
        bio: bio ?? undefined,
        ...(timezone && { timezone }),
      },
    })

    return NextResponse.json(user)
  } catch (error: unknown) {
    if (hasErrorCode(error) && error.code === "P2002") {
      return NextResponse.json({ error: "Username or email already taken" }, { status: 409 })
    }

    console.error(error)
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 })
  }
}
