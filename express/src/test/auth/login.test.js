import { logger } from '#lib/logging'
import { createTestUser, deleteTestUser, request } from './util'

describe('POST /api/auth/login', () => {
  beforeEach(createTestUser)
  afterEach(deleteTestUser)

  it('should be login', async () => {
    const res = await request('/login', {
      username: 'test',
      password: 'secret',
    })
    logger.info(res.body)

    expect(res.status).toBe(200)
    expect(res.body.data.token).toBeDefined()
    expect(res.body.data.token).not.toBe('test')
  })

  it("shouldn't login when request is invalid", async () => {
    const res = await request('/login', {
      username: '',
      password: '',
    })
    logger.info(res.body)

    expect(res.status).toBe(400)
    expect(res.body.errors).toBeDefined()
  })

  it("shouldn't login when password is wrong", async () => {
    const res = await request('/login', {
      username: 'test',
      password: 'wrong',
    })
    logger.info(res.body)

    expect(res.status).toBe(401)
    expect(res.body.errors).toBeDefined()
  })

  it("shouldn't login when user doesn\t exist", async () => {
    const res = await request('/login', {
      username: 'wrong',
      password: 'wrong',
    })
    logger.info(res.body)

    expect(res.status).toBe(401)
    expect(res.body.errors).toBeDefined()
  })
})
