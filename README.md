# Cal Clone — Scheduling Platform

A full-featured scheduling/booking web application that replicates Cal.com's design and functionality.

**Live Demo:** https://cal.lakshit.dev  
**GitHub:** https://github.com/Lakshit-Gupta/scheduling-platform

## Features

### Core Features
- ✅ **Event Types Management** — Create, edit, and delete event types with title, description, duration, and unique booking URL.
- ✅ **Availability Settings** — Configure available days, time ranges, and timezone per schedule.
- ✅ **Public Booking Page** — Calendar UI with available slots, booking form, and double-booking prevention.
- ✅ **Bookings Dashboard** — View upcoming and past bookings and cancel bookings when needed.

### Bonus Features
- ✅ **Responsive Design** — Mobile, tablet, and desktop layouts with a hamburger sidebar experience.
- ✅ **Multiple Availability Schedules** — Create and manage multiple named schedules.
- ✅ **Date Overrides** — Block specific dates or define custom hours for individual dates.
- ✅ **Rescheduling Flow** — Reschedule bookings with conflict detection and slot validation.
- ✅ **Email Notifications** — Send booking confirmation and cancellation emails via Resend.
- ✅ **Buffer Time** — Add buffer windows between meetings to avoid back-to-back scheduling.
- ✅ **Custom Booking Questions** — Define event-type-specific form questions and capture answers.
- ✅ **Workflows** — Create automation workflows for booking-related actions.
- ✅ **Call History** — Track workflow-triggered call attempts and outcomes.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Database | PostgreSQL (Supabase) |
| ORM | Prisma 7 |
| Styling | Tailwind CSS v4 |
| UI | Radix UI + Framer Motion |
| Email | Resend API |
| Deployment | Vercel |

## Database Schema

The Prisma schema contains 12 entities total (11 models + 1 enum):
- **User**
- **EventType**
- **Availability**
- **AvailabilitySchedule**
- **Booking**
- **BookingQuestion**
- **BookingAnswer**
- **DateOverride**
- **Workflow**
- **WorkflowStep**
- **CallHistory**
- **BookingStatus** (enum)

## Setup Instructions

### Prerequisites
- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Installation

```bash
# Clone repository
git clone https://github.com/Lakshit-Gupta/scheduling-platform.git
cd scheduling-platform

# Install dependencies
pnpm install

# Configure environment variables
cp .env.example .env
# Update .env with your database credentials and optional Resend key

# Generate Prisma client
pnpm prisma generate

# Push schema to database
pnpm db:push

# Seed sample data
pnpm db:seed

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | ✅ | Supabase pooled PostgreSQL connection (port 6543) for app runtime |
| `DIRECT_URL` | ✅ | Direct PostgreSQL connection (port 5432) for migrations |
| `NEXT_PUBLIC_APP_URL` | ✅ | Public app URL used by frontend and links |
| `RESEND_API_KEY` | Optional | API key for email notifications through Resend |
| `RESEND_FROM_EMAIL` | Optional | Sender email for Resend. Defaults to `no-reply@send.lakshit.dev` |

## Assumptions

1. **Single default user** — No auth layer is implemented; app runs with one seeded default user.
2. **Timezone default** — Primary timezone is `Asia/Kolkata`, configurable per schedule.
3. **Email optional** — If `RESEND_API_KEY` is missing, email notifications are skipped.
4. **Email sender default** — If `RESEND_FROM_EMAIL` is missing, sender defaults to `no-reply@send.lakshit.dev`.
5. **Seeded data available** — Seed script provides baseline event types, availability, and bookings for testing.
6. **Public booking route** — Public booking pages are accessible at `/{slug}` without login.
