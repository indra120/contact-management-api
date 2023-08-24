import { db } from '#lib/db'
import { validate } from '#lib/validation'
import { createContactValidation } from '#validation/contact'

export async function create(user, request) {
  const data = validate(createContactValidation, request)

  data.username = user.username

  return db.contact.create({
    data,
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
    },
  })
}