export class UserAlreadyExistsError extends Error {
  constructor() {
    super('User with this email already exists.')
  }
}
