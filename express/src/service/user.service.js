import { db } from '#lib/db'
import { ErrorResponse } from '#lib/error-response'
import { validate } from '#lib/validation'
import { getUserValidation } from '#validation/user'

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