import {
  expect,
  test,
  beforeAll,
  afterAll,
  describe,
  it,
  beforeEach,
} from 'vitest'
import { execSync } from 'node:child_process'
import request from 'supertest'
import { app } from '../src/app'

describe('Transactions routes', () => {
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })
  beforeEach(async () => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
  })
  it('O usuario consegue criar uma transação', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'Transação de Teste 1',
        amount: 5000,
        type: 'credit',
      })
    expect(createTransactionResponse.statusCode).toEqual(201)
  })
  it('O usuario consegue listar todas as transações', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'Transação de Teste',
        amount: 5000,
        type: 'credit',
      })
    const cookies = createTransactionResponse.get('Set-Cookie')
    const listTransactionResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)
    expect(listTransactionResponse.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          title: 'Transação de Teste',
          amount: 5000,
          created_at: expect.any(String),
          session_id: expect.any(String),
        }),
      ]),
    )
  })
  it('O usuario consegue listar uma transação específica', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'Transação de Teste',
        amount: 5000,
        type: 'credit',
      })
    const cookies = createTransactionResponse.get('Set-Cookie')
    const listTransactionResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)
    const transactionId = listTransactionResponse.body[0].id
    expect(listTransactionResponse.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          title: 'Transação de Teste',
          amount: 5000,
          created_at: expect.any(String),
          session_id: expect.any(String),
        }),
      ]),
    )

    const getTransactionResponse = await request(app.server)
      .get(`/transactions/${transactionId}`)
      .set('Cookie', cookies)
      .expect(200)
    expect(getTransactionResponse.body).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        title: 'Transação de Teste',
        amount: 5000,
        created_at: expect.any(String),
        session_id: expect.any(String),
      }),
    )
  })
  it('O usuario consegue pegar o sumário', async () => {
    const createCreditTransaction = await request(app.server)
      .post('/transactions')
      .send({
        title: 'Trasação de Crédito',
        amount: 5000,
        type: 'credit',
      })
    const cookies = createCreditTransaction.get('Set-Cookie')
    const createDebitTransaction = await request(app.server)
      .post('/transactions')
      .set('Cookie', cookies)
      .send({
        title: 'Trasação de Crédito',
        amount: 3000,
        type: 'debit',
      })
    const summaryTransactionResponse = await request(app.server)
      .get('/transactions/summary')
      .set('Cookie', cookies)
    expect(summaryTransactionResponse.body).toEqual({ amount: 2000 })
  })
})
