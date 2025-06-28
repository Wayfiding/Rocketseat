import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { knex } from '../database'
import { checkSessionIdExists } from '../middlewares/check-session-id-exists'

// Cookies <-> Formas de manter contexto entre requisições


// unitários: unidade da aplicação, como uma função ou um método
// integração: integração entre partes da aplicação, como uma rota ou um serviço
// end-to-end: teste do fluxo completo da aplicação, como um usuário faria


// Pirâmide de testes:
// 1. Testes unitários
// 2. Testes de integração
// 3. Testes end-to-end (Não dependem de nenhuma tencnologia, não dependem de arquitetura)


export async function transactionsRoutes(app: FastifyInstance) {
  app.get(
    '/',
    {
      preHandler: [checkSessionIdExists], // Assuming you have an authentication middleware
    },
    async (request, reply) => {
      const { sessionId } = request.cookies
      const transactions = await knex('transactions')
        .where('session_id', sessionId)
        .select('*')

      return reply.status(200).send(transactions)
    },
  )
  app.get(
    '/:id',
    {
      preHandler: [checkSessionIdExists], // Assuming you have an authentication middleware
    },
    async (request, reply) => {
      const getTransactionsParamsSchema = z.object({
        id: z.string().uuid(),
      })
      const { id } = getTransactionsParamsSchema.parse(request.params)
      const { sessionId } = request.cookies
      const transaction = await knex('transactions')
        .where({
          session_id: sessionId,
          id,
        })
        .first()
      if (!transaction) {
        return reply.status(404).send({
          message: 'Transaction not found',
        })
      }
      return reply.status(200).send(transaction)
    },
  )
  app.get(
    '/summary',
    {
      preHandler: [checkSessionIdExists], // Assuming you have an authentication middleware
    },
    async (request, reply) => {
      const { sessionId } = request.cookies
      const summary = await knex('transactions')
        .where('session_id', sessionId)
        .sum('amount', { as: 'amount' })
        .first()
      return reply.status(200).send(summary)
    },
  )
  app.post('/', async (request, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })
    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body,
    )

    let sessionId = request.cookies.sessionId
    if (!sessionId) {
      sessionId = crypto.randomUUID()
      reply.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })
    }

    await knex('transactions').insert({
      id: crypto.randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
      session_id: sessionId,
    })

    return reply.status(201).send()
  })
}
