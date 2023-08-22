import { db } from '#lib/db'
import { validate } from '#lib/validation'
import { ErrorResponse } from '#lib/error-response'
import { loginValidation, registerValidation } from '#validation/auth'
import { compare, hash } from 'bcrypt'

export async function register(request) {
  const user = validate(registerValidation, request)

  const countUser = await db.user.count({
    where: {
      username: user.username,
    },
  })

  if (countUser === 1) {
    throw new ErrorResponse(400, 'Username already exists!')
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

export async function login(request) {
  const { username, password } = validate(loginValidation, request)

  const existUser = await db.user.findUnique({
    where: { username },
    select: { username: true, password: true },
  })
  if (!existUser) {
    throw new ErrorResponse(401, "User doesn't exist!")
  }

  const isPasswordCorrect = await compare(password, existUser.password)
  if (!isPasswordCorrect) {
    throw new ErrorResponse(401, 'Wrong password!')
  }

  return db.user.update({
    where: { username },
    data: { token: uuid().toString() },
    select: { token: true },
  })
}