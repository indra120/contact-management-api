import { app } from '#app'
import { db } from '#lib/db'
import { hash } from 'bcrypt'
import supertest from 'supertest'

export async function request(endpoint, data) {
  return supertest(app).post(`/api/auth${endpoint}`).send(data)
}

export async function createTestUser() {
  await db.user.create({
    data: {
      username: 'test',
      password: await hash('secret', 10),
      name: 'test',
      token: 'test',
    },
  })
}

export async function deleteTestUser() {
  await db.user.deleteMany({ where: { username: 'test' } })
}