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
export type WorkflowTrigger =
  | "NEW_BOOKING"
  | "CANCEL_BOOKING"
  | "RESCHEDULE_BOOKING";
export type WorkflowAction = "SEND_EMAIL" | "SEND_SMS" | "WEBHOOK";
export type CallStatus = "PENDING" | "COMPLETED" | "FAILED";
export type CallType = "EMAIL" | "SMS" | "WEBHOOK";

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

export interface Workflow {
  id: string;
  userId: string;
  title: string;
  description: string | null;
  isActive: boolean;
  trigger: WorkflowTrigger;
  action: WorkflowAction;
  timeValue: number;
  timeUnit: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface WorkflowStep {
  id: string;
  workflowId: string;
  stepOrder: number;
  action: string;
  template: string | null;
  createdAt: Date;
}

export interface CallHistory {
  id: string;
  workflowId: string;
  bookingId: string | null;
  callerName: string;
  callerPhone: string | null;
  callerEmail: string | null;
  callType: CallType;
  status: CallStatus;
  duration: number;
  startedAt: Date;
  endedAt: Date | null;
  notes: string | null;
}
