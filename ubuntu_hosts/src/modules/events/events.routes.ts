import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { createEventSchema, updateEventSchema } from './events.schemas'
import { createEvent, getAllEvents, getEventById, updateEvent, deleteEvent } from './events.services'

const eventRoutes = new Hono()

eventRoutes.post('/', zValidator('json', createEventSchema), async (c) => {
  const data = c.req.valid('json')
  const event = await createEvent(data)
  return c.json({ message: 'Event created', event }, 201)
})

// GET /api/events?page=1&limit=10&sortBy=date&order=asc
eventRoutes.get('/', async (c) => {
  const rawPage = Number(c.req.query('page'))
  const rawLimit = Number(c.req.query('limit'))

  const page = Number.isInteger(rawPage) && rawPage > 0 ? rawPage : 1
  const limit = Number.isInteger(rawLimit) && rawLimit >= 10 && rawLimit <= 100 ? rawLimit : 10
  const sortBy = (c.req.query('sortBy') ?? 'date') as 'date' | 'location'
  const order = (c.req.query('order') ?? 'asc') as 'asc' | 'desc'

  const { events, total } = await getAllEvents({ page, limit, sortBy, order })
  const totalPages = Math.ceil(total / limit)

  return c.json({
    events,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
  })
})

eventRoutes.get('/:id', async (c) => {
  const id = Number(c.req.param('id'))
  const event = await getEventById(id)
  if (!event) return c.json({ message: 'Event not found' }, 404)
  return c.json({ event })
})