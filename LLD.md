# Low Level Design

## Architecture
Next.js 15 fullstack monolith. API routes handle all backend logic. PostgreSQL via Supabase + Prisma 7 ORM. Stateless — no session state, default user assumed logged in.

## Database Schema

### User
- id (uuid, PK)
- name, email (unique), username (unique)
- timezone (default: Asia/Kolkata)

### EventType
- id (uuid, PK)
- userId (FK → User)
- title, description, duration (minutes), slug (unique)
- color, bufferMinutes, isActive
- Indexes: userId, slug

### Availability
- id (uuid, PK)
- userId (FK → User)
- dayOfWeek (0-6), startTime ("09:00"), endTime ("17:00")
- timezone
- Index: userId

### Booking
- id (uuid, PK)
- eventTypeId (FK → EventType)
- bookerName, bookerEmail
- startTime, endTime (DateTime)
- status (CONFIRMED | CANCELLED)
- cancelledAt, notes
- Indexes: eventTypeId, startTime, status

## API Design
All routes versioned under /api/v1/
Request/response in JSON
Proper HTTP status codes (200, 201, 400, 404, 500)

## Slot Generation Algorithm
```
function getAvailableSlots(slug, date):
  eventType = findEventTypeBySlug(slug)
  dayOfWeek = date.getDay()
  availability = findAvailabilityForDay(userId, dayOfWeek)
  if no availability: return []

  slots = []
  current = parseTime(availability.startTime, date)
  end = parseTime(availability.endTime, date)

  while current + duration <= end:
    slotEnd = current + duration minutes
    isBooked = confirmedBookings.some(b =>
      b.startTime < slotEnd + bufferMinutes AND
      b.endTime > current
    )

    if not isBooked AND current > now:
      slots.push(current)

    current += duration minutes

  return slots
```

## Edge Cases
- Double booking: check overlapping confirmed bookings before creating
- Past dates: disabled on calendar, rejected by API
- Weekends: disabled if no availability set for that day
- Buffer time: blocks time after each booking endTime
- Timezone: all times stored as UTC, displayed in Asia/Kolkata
- No availability: return empty slots array
