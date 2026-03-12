import { PrismaClient } from "../src/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"
import * as dotenv from "dotenv"
dotenv.config()

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const adapter = new PrismaPg(pool as any)
const prisma = new PrismaClient({ adapter })

async function main() {
  const users = await prisma.user.findMany()
  console.log("Current users:", users.map(u => ({ id: u.id, username: u.username, name: u.name })))
  
  if (users.length === 0) {
    console.log("No users found!")
    return
  }

  const updated = await prisma.user.update({
    where: { id: users[0].id },
    data: {
      name: "Lakshit Gupta",
      email: "contact@lakshit.dev",
      username: "lakshit-gupta",
    }
  })
  console.log("Updated user:", updated)
}

main().catch(console.error).finally(() => pool.end())
