import { Hono } from 'hono'
import eventRoutes from './modules/events/events.routes'
import usersRoute from './modules/users/users.routes'
import { auth } from './lib/auth'

const app = new Hono()

app.route('/events', eventRoutes)
app.route('/', usersRoute)

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw))
.get('/', (c) => {

  return c.text('Ubuntu Hosts API is running')
})

export default app