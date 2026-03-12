import { PrismaClient } from "@/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"

const globalForPrisma = global as unknown as { prisma: PrismaClient }

// Parse the URL into individual params so that `?sslmode=require` in the
// connection string cannot override the explicit `ssl` object.  When both
// `connectionString` and `ssl` are passed together, pg parses sslmode first
// and sets ssl:true (verify cert), silently winning over rejectUnauthorized:false.
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

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ adapter })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export default prisma
