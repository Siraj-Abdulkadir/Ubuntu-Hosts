import { eq, asc, desc, count } from 'drizzle-orm'
import { db } from '../../db/db'
import { events } from '../../db/schema'
import { CreateEventInput, UpdateEventInput } from './events.schemas'

type GetEventsOptions = {
  page: number
  limit: number
  sortBy: 'date' | 'location'
  order: 'asc' | 'desc'
}

export const createEvent = async (data: CreateEventInput) => {
  const [newEvent] = await db.insert(events).values({
    ...data,
    available_capacity: data.capacity,
  }).returning()
  return newEvent
}

export const getAllEvents = async ({ page, limit, sortBy, order }: GetEventsOptions) => {
  const offset = (page - 1) * limit
  const sortColumn = sortBy === 'location' ? events.location : events.date
  const orderFn = order === 'desc' ? desc : asc
  const [rows, [{ value: total }]] = await Promise.all([
    db.select().from(events).orderBy(orderFn(sortColumn)).limit(limit).offset(offset),
    db.select({ value: count() }).from(events),
  ])

  return { events: rows, total }
}

export const getEventById = async (id: number) => {
  const [event] = await db.select().from(events).where(eq(events.id, id))
  return event
}

export const updateEvent = async (id: number, data: UpdateEventInput) => {
  const [updated] = await db.update(events).set(data).where(eq(events.id, id)).returning()
  return updated
}

export const deleteEvent = async (id: number) => {
  const [deleted] = await db.delete(events).where(eq(events.id, id)).returning()
  return deleted
}