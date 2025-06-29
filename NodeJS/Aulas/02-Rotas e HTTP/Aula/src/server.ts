import { app } from './app'
import { env } from './env'

app
  .listen({
    host: env.HOST,
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server running port:', env.PORT + ' on', env.HOST)
  })
  .catch((err) => {
    console.error('Error starting server:', err)
    // Exit the process with a failure code
  })
