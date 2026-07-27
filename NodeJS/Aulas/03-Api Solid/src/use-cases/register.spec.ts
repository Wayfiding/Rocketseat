import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { expect, describe, test, it } from 'vitest'
import { RegisterUserCase } from './register'
import { compare } from 'bcryptjs'

describe('Register Use Case', () => {
  it('should hash user password upon registration', async () => {
    const registerUserCase = new RegisterUserCase({
      async create(data) {
        return {
          id: 'user-1',
          name: data.name,
          email: data.email,
          passwordHash: data.passwordHash,
        }
      },
      async findByEmail(email) {
        return null
      },
    })

    const { user } = await registerUserCase.execute({
      name: 'John Doe2',
      email: 'john.doe2',
      password: '123456',
    })

    const isPasswordCorrectlyHashed = await compare('123456', user.passwordHash)
    console.log(isPasswordCorrectlyHashed)
  })
})
