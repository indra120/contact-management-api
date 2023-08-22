import { logger } from '#lib/logging'
import { deleteTestUser, request } from './util'

describe(`POST /api/auth/register`, () => {
  afterEach(deleteTestUser)

  it('should register new user', async () => {
    const res = await request('/register', {
      username: 'test',
      name: 'test',
      password: 'secret',
    })

    expect(res.status).toBe(200)
    expect(res.body.data.username).toBe('test')
    expect(res.body.data.name).toBe('test')
    expect(res.body.data.password).toBeUndefined()
  })

  it('should reject when request is invalid', async () => {
    const res = await request('/register', {
      username: '',
      password: '',
      name: '',
    })
    logger.info(res.body)

    expect(res.status).toBe(400)
    expect(res.body.errors).toBeDefined()
  })

  it('should reject when usern already exist', async () => {
    let res = await request('/register', {
      username: 'test',
      name: 'test',
      password: 'secret',
    })
    logger.info(res.body)

    expect(res.status).toBe(200)
    expect(res.body.data.username).toBe('test')
    expect(res.body.data.name).toBe('test')
    expect(res.body.data.password).toBeUndefined()

    res = await request('/register', {
      username: 'test',
      name: 'test',
      password: 'secret',
    })
    logger.info(res.body)

    expect(res.status).toBe(400)
    expect(res.body.errors).toBeDefined()
  })
})