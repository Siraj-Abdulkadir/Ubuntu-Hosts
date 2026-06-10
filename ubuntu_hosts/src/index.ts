import { Hono } from 'hono'
import eventRoutes from './modules/events/events.routes'
import usersRoute from './modules/users/users.routes'

const app = new Hono()

app.route('/events', eventRoutes)
app.route('/', usersRoute)

app.get('/', (c) => {
  return c.text('Ubuntu Hosts API is running')
})

export default app