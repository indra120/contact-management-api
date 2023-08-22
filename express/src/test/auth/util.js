import { db } from '#lib/db'

export const PATH = '/api/auth'

export async function deleteTestUser() {
  await db.user.deleteMany({ where: { username: 'test' } })
}