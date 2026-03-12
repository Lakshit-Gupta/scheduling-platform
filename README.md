# Cal Clone — Scheduling Platform

A full-featured scheduling/booking web application that replicates Cal.com's design and functionality.

**Live Demo:** https://cal.lakshit.dev
**GitHub:** https://github.com/Lakshit-Gupta/scheduling-platform

## Features

### Core Features
- **Event Types Management** — Create, edit, delete event types with title, description, duration, and unique booking URL
- **Availability Settings** — Set available days, time ranges, and timezone per schedule
- **Public Booking Page** — Calendar view, available time slots, booking form, double-booking prevention
- **Bookings Dashboard** — View upcoming/past bookings, cancel bookings

### Bonus Features
- **Responsive Design** — Mobile, tablet, and desktop layouts with hamburger sidebar
- **Multiple Availability Schedules** — Create and manage named availability schedules
- **Date Overrides** — Block specific dates or set custom hours for individual days
- **Rescheduling Flow** — Reschedule existing bookings with conflict detection
- **Email Notifications** — Confirmation and cancellation emails via Resend API
- **Buffer Time** — Add buffer time between meetings to avoid back-to-back bookings
- **Custom Booking Questions** — Add custom questions to booking forms per event type
- **Workflows** — Create automated notification workflows with call history tracking
- **PWA Support** — Installable as a Progressive Web App

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Database | PostgreSQL (Supabase) |
| ORM | Prisma 7 (adapter-pg) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| UI Components | Radix UI primitives |
| Email | Resend API |
| Deployment | Vercel |
| DNS/CDN | Cloudflare |

## Database Schema

The schema includes 12 models:
- **User** — Default authenticated user
- **EventType** — Schedulable event configurations with buffer time support
- **Availability** — Weekly availability by day with time ranges
- **AvailabilitySchedule** — Named availability schedule groups
- **Booking** — Individual booking records with status tracking
- **BookingQuestion** — Custom questions per event type
- **BookingAnswer** — Answers submitted at booking time
- **DateOverride** — Per-date availability exceptions
- **Workflow** — Automated notification workflows
- **WorkflowStep** — Individual steps within a workflow
- **CallHistory** — Log of calls made by workflows

## Setup Instructions

### Prerequisites
- Node.js 18+
- pnpm (`npm install -g pnpm`)
- PostgreSQL database (Supabase recommended)

### Installation
```bash
# Clone the repository
git clone https://github.com/Lakshit-Gupta/scheduling-platform.git
cd scheduling-platform

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database credentials and API keys

# Generate Prisma client
pnpm prisma generate

# Push schema to database
pnpm db:push

# Seed sample data
pnpm db:seed

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | ✅ | PostgreSQL connection string (pooled, port 6543) |
| `DIRECT_URL` | ✅ | PostgreSQL direct connection (port 5432, migrations only) |
| `NEXT_PUBLIC_APP_URL` | ✅ | Your app's public URL |
| `RESEND_API_KEY` | Optional | Resend API key for email notifications (get free at resend.com) |

### Available Scripts

| Script | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm db:push` | Push schema changes to database |
| `pnpm db:seed` | Seed sample data |
| `pnpm prisma:generate` | Regenerate Prisma client |

## Assumptions

1. **Single user** — No authentication system; assumes one default logged-in user (id: "default-user-id")
2. **Timezone** — Default timezone is Asia/Kolkata (IST); configurable per availability schedule
3. **Email** — Email notifications are optional; gracefully skipped if RESEND_API_KEY is not set
4. **Seed data** — Database is pre-seeded with 4 event types, 10 sample bookings, and Mon-Fri availability
5. **Public booking** — The public booking page is accessible without login at `/{event-slug}`
6. **User profile** — Public user profile page accessible at `/{username}` listing all active event types

## Architecture Decisions

- **Next.js App Router** — Used for server components, API routes, and streaming
- **Prisma adapter-pg** — Required for Prisma 7's new adapter pattern with connection pooling
- **Tailwind CSS v4** — Uses new `@theme` directive instead of tailwind.config.js
- **force-dynamic** — All dashboard pages use `export const dynamic = 'force-dynamic'` to prevent stale static rendering
