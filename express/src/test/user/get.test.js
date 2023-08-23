import { createTestUser, deleteTestUser, superTest } from '../util'

const endpoint = '/api/users/current'

describe(`GET ${endpoint}`, () => {
  beforeEach(createTestUser)
  afterEach(deleteTestUser)

  it('should give the current user data', async () => {
    const res = await superTest.get(endpoint).set('Authorization', 'test')

    expect(res.status).toBe(200)
    expect(res.body.data.username).toBe('test')
    expect(res.body.data.name).toBe('test')
  })

  it('should reject if token is invalid', async () => {
    const res = await superTest.get(endpoint).set('Authorization', 'wrong')

    expect(res.status).toBe(401)
    expect(res.body.errors).toBeDefined()
  })
})