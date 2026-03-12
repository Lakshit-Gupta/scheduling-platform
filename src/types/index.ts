export interface EventType {
  id: string;
  userId: string;
  title: string;
  description: string | null;
  duration: number;
  slug: string;
  isActive: boolean;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Availability {
  id: string;
  userId: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  timezone: string;
}

export type BookingStatus = "CONFIRMED" | "CANCELLED";

export interface Booking {
  id: string;
  eventTypeId: string;
  bookerName: string;
  bookerEmail: string;
  startTime: Date;
  endTime: Date;
  status: BookingStatus;
  cancelledAt: Date | null;
  notes: string | null;
  createdAt: Date;
}

export interface TimeSlot {
  startTime: Date;
  endTime: Date;
  available: boolean;
}

export interface BookingFormData {
  bookerName: string;
  bookerEmail: string;
  startTime: Date;
  notes?: string;
}
