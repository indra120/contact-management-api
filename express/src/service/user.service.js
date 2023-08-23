import { db } from '#lib/db'
import { ErrorResponse } from '#lib/error-response'
import { validate } from '#lib/validation'
import { getUserValidation, updateUserValidation } from '#validation/user'
import { hash } from 'bcrypt'

export async function get(username) {
  username = validate(getUserValidation, username)

  const user = await db.user.findUnique({
    where: { username },
    select: {
      username: true,
      name: true,
    },
  })

  if (!user) {
    throw new ErrorResponse(404, 'user is not found')
  }

  return user
}

export async function update(request) {
  const { username, ...data } = validate(updateUserValidation, request)

  const userCount = await db.user.count({ where: { username } })

  if (!userCount) {
    throw new ResponseError(404, 'user is not found')
  }

  if (data.password) {
    data.password = await hash(data.password, 10)
  }

  return db.user.update({
    where: { username },
    data,
    select: {
      username: true,
      name: true,
    },
  })
}