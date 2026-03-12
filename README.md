# Scheduling Platform — Cal.com Clone

## 🚀 Live Demo
[Add Vercel URL after deployment]

## ⚡ Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database (we use Supabase)
- pnpm

### Setup
```bash
pnpm install
cp .env.example .env
# Fill in DATABASE_URL in .env
pnpm db:push
pnpm db:seed
pnpm dev
```

Open http://localhost:3000

### Docker
```bash
docker-compose up --build
```

## 🛠 Tech Stack
| Layer | Technology |
|---|---|
| Framework | Next.js 15 + TypeScript |
| Database | PostgreSQL (Supabase) |
| ORM | Prisma 7 |
| Styling | Tailwind CSS |
| Deployment | Vercel + Supabase |

## ✨ Features
### Core
- Event type management (create, edit, delete)
- Availability settings (days + time ranges + timezone)
- Public booking page with calendar
- Time slot generation with double-booking prevention
- Booking confirmation page
- Bookings dashboard (upcoming, past, cancelled)
- Cancel bookings

### Bonus
- Email notifications (Resend API)
- Buffer time between meetings
- Responsive design (mobile, tablet, desktop)
- Timezone support

## 📡 API Reference
| Method | Endpoint | Description |
|---|---|---|
| GET | /api/v1/event-types | List all event types |
| POST | /api/v1/event-types | Create event type |
| GET | /api/v1/event-types/[id] | Get event type |
| PUT | /api/v1/event-types/[id] | Update event type |
| DELETE | /api/v1/event-types/[id] | Delete event type |
| GET | /api/v1/availability | Get availability |
| PUT | /api/v1/availability | Update availability |
| GET | /api/v1/bookings | List bookings |
| POST | /api/v1/bookings | Create booking |
| PATCH | /api/v1/bookings/[id] | Cancel booking |
| GET | /api/v1/slots | Get available slots |

## 🗄 Database Schema
4 tables: User, EventType, Availability, Booking
See prisma/schema.prisma for full schema.

## 📝 Assumptions
- Single default user (no auth required per assignment)
- Default timezone: Asia/Kolkata
- Availability applies to all event types equally
- Slot generation respects buffer time and existing bookings
