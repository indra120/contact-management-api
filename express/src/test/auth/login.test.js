import { logger } from '#lib/logging'
import { createTestUser, deleteTestUser, superTest } from '../util'

const endpoint = '/api/auth/login'

describe(`POST ${endpoint}`, () => {
  beforeEach(createTestUser)
  afterEach(deleteTestUser)

  it('should be login', async () => {
    const res = await superTest.post(endpoint).send({
      username: 'test',
      password: 'secret',
    })
    logger.info(res.body)

    expect(res.status).toBe(200)
    expect(res.body.data.token).toBeDefined()
    expect(res.body.data.token).not.toBe('test')
  })

  it("shouldn't login when request is invalid", async () => {
    const res = await superTest.post(endpoint).send({
      username: '',
      password: '',
    })
    logger.info(res.body)

    expect(res.status).toBe(400)
    expect(res.body.errors).toBeDefined()
  })

  it("shouldn't login when password is wrong", async () => {
    const res = await superTest.post(endpoint).send({
      username: 'test',
      password: 'wrong',
    })
    logger.info(res.body)

    expect(res.status).toBe(401)
    expect(res.body.errors).toBeDefined()
  })

  it("shouldn't login when user doesn\t exist", async () => {
    const res = await superTest.post(endpoint).send({
      username: 'wrong',
      password: 'wrong',
    })
    logger.info(res.body)

    expect(res.status).toBe(401)
    expect(res.body.errors).toBeDefined()
  })
})