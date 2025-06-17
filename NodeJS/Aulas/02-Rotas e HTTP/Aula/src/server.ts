import fastify from 'fastify'
import { knex } from './database'
const app = fastify()

app.get('/hello', async () => {
    console.log('Received a request on /hello')
  const tables = await knex('sqlite_schema').select('*')
    return {
        message: 'Hello World',
        tables,
    }
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server running on http://localhost:3333')
  })
  .catch((err) => {
    console.error('Error starting server:', err)
    // Exit the process with a failure code
  })
