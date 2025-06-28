import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server running on http://localhost:3333')
  })
  .catch((err) => {
    console.error('Error starting server:', err)
    // Exit the process with a failure code
  })
