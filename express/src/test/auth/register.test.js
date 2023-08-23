import { logger } from '#lib/logging'
import { deleteTestUser, superTest } from '../util'

const endpoint = '/api/auth/register'

describe(`POST ${endpoint}`, () => {
  afterEach(deleteTestUser)

  const data = {
    username: 'test',
    name: 'test',
    password: 'secret',
  }

  it('should register new user', async () => {
    const res = await superTest.post(endpoint).send(data)

    expect(res.status).toBe(200)
    expect(res.body.data.username).toBe('test')
    expect(res.body.data.name).toBe('test')
    expect(res.body.data.password).toBeUndefined()
  })

  it('should reject when request is invalid', async () => {
    const res = await superTest.post(endpoint).send({})
    logger.info(res.body)

    expect(res.status).toBe(400)
    expect(res.body.errors).toBeDefined()
  })

  it('should reject when usern already exist', async () => {
    let res = await superTest.post(endpoint).send(data)
    logger.info(res.body)

    expect(res.status).toBe(200)
    expect(res.body.data.username).toBe('test')
    expect(res.body.data.name).toBe('test')
    expect(res.body.data.password).toBeUndefined()

    res = await superTest.post(endpoint).send(data)
    logger.info(res.body)

    expect(res.status).toBe(400)
    expect(res.body.errors).toBeDefined()
  })
})