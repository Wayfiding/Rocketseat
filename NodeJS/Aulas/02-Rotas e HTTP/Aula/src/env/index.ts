import { config } from 'dotenv'
import { z } from 'zod'
if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' })
} else {
  config({ path: '.env' })
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_CLIENT: z.enum(['sqlite3', 'pg']),
  DATABASE_URL: z.string(),
  PORT: z.coerce.number().default(3333),
  HOST: z.string().optional(), // Torna opcional para setar depois
})
const _env = envSchema.safeParse(process.env)
if (_env.success === false) {
  console.error('Invalid environment variables:', _env.error.format())
  throw new Error('Invalid environment variables')
}

const envData = _env.data

// Define o HOST conforme o ambiente
envData.HOST = envData.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost'

export const env = envData
