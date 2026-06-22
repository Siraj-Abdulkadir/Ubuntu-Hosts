import { Hono } from 'hono'
import { cors } from 'hono/cors'
import eventRoutes from './modules/events/events.routes'
import usersRoute from './modules/users/users.routes'
import { auth } from './lib/auth'

const app = new Hono()

app.use('*', cors({
  origin: 'http://localhost:5173',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}))

app.route('/events', eventRoutes)
app.route('/', usersRoute)

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw))

app.post('/logout', async (c) => {
  await auth.api.signOut({
    headers: c.req.raw.headers,
  })
  return c.json({ message: 'Logged out successfully. Redirecting to landing page.' })
})

app.get('/', (c) => {
  return c.text('Ubuntu Hosts API is running')
})

export default app