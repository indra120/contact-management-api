import { createTestUser, deleteTestUser, getTestUser, superTest } from '../util'

const endpoint = '/api/auth/logout'

describe(`DELETE ${endpoint} `, () => {
  beforeEach(createTestUser)
  afterEach(deleteTestUser)

  it('should logout', async () => {
    const res = await superTest.delete(endpoint).set('Authorization', 'test')

    expect(res.status).toBe(200)
    expect(res.body.data).toBe('OK')

    const user = await getTestUser()
    expect(user.token).toBeNull()
  })

  it('should reject logout when token is invalid', async () => {
    const res = await superTest.delete(endpoint).set('Authorization', 'wrong')
    expect(res.status).toBe(401)
  })
})