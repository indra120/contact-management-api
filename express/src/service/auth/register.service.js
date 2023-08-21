import { db } from '#lib/db'
import { ErrorResponse } from '#lib/error-response'
import { registerValidation } from '#validation/auth.validation'
import { hash } from 'bcrypt'

export async function register(request) {
  const user = validate(registerValidation, request)

  const countUser = await db.user.count({
    where: {
      username: user.username,
    },
  })

  if (countUser === 1) {
    throw new ErrorResponse(400, 'Username already exists')
  }

  user.password = await hash(user.password, 10)

  return db.user.create({
    data: user,
    select: {
      username: true,
      name: true,
    },
  })
}