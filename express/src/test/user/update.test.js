import { compare } from 'bcrypt'
import { createTestUser, deleteTestUser, getTestUser, superTest } from '../util'

const endpoint = '/api/users/current'

describe(`PATCH ${endpoint}`, () => {
  beforeEach(createTestUser)
  afterEach(deleteTestUser)

  it('should update user data', async () => {
    const res = await superTest
      .patch(endpoint)
      .set('Authorization', 'test')
      .send({ name: 'John Doe', password: 'secret69' })

    expect(res.status).toBe(200)
    expect(res.body.data.username).toBe('test')
    expect(res.body.data.name).toBe('John Doe')

    const user = await getTestUser()
    expect(await compare('secret69', user.password)).toBe(true)
  })

  it('should update user name', async () => {
    const res = await superTest
      .patch(endpoint)
      .set('Authorization', 'test')
      .send({ name: 'John Doe' })

    expect(res.status).toBe(200)
    expect(res.body.data.username).toBe('test')
    expect(res.body.data.name).toBe('John Doe')
  })

  it('should update user password', async () => {
    const res = await superTest
      .patch(endpoint)
      .set('Authorization', 'test')
      .send({ password: 'secret69' })

    expect(res.status).toBe(200)
    expect(res.body.data.username).toBe('test')
    expect(res.body.data.name).toBe('test')

    const user = await getTestUser()
    expect(await compare('secret69', user.password)).toBe(true)
  })

  it('should reject when request is not valid', async () => {
    const res = await superTest
      .patch(endpoint)
      .set('Authorization', 'wrong')
      .send({})

    expect(res.status).toBe(401)
  })
})