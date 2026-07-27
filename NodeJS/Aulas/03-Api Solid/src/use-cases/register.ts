import { UsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists'
import type { User } from '@prisma/client'

interface RegisterUserCaseRequest {
  name: string
  email: string
  password: string
}

interface RegisterUserCaseResponse {
  user: User
}

export class RegisterUserCase {
  constructor(private userRepository: UsersRepository) {}
  async execute({
    name,
    email,
    password,
  }: RegisterUserCaseRequest): Promise<RegisterUserCaseResponse> {
    const passwordHashed = await hash(password, 6)

    const userWithSameEmail = await this.userRepository.findByEmail(email)
    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const user = await this.userRepository.create({
      name,
      email,
      passwordHash: passwordHashed,
    })
    return { user }
  }
}
