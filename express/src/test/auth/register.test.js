import { app } from '#app'
import { logger } from '#lib/logging'
import { PATH, deleteTestUser } from './util'
import supertest from 'supertest'

const endpoint = `${PATH}/register`
let requestBody = {
  username: 'test',
  name: 'test',
  password: 'secret',
}

async function request(data) {
  return supertest(app).post(endpoint).send(data)
}

describe(`POST ${endpoint}`, () => {
  afterEach(deleteTestUser)

  it('should register new user', async () => {
    const res = await request(requestBody)

    expect(res.status).toBe(200)
    expect(res.body.data.username).toBe('test')
    expect(res.body.data.name).toBe('test')
    expect(res.body.data.password).toBeUndefined()
  })

  it('should reject if request is invalid', async () => {
    const res = await request({ username: '', password: '', name: '' })
    logger.info(res.body)

    expect(res.status).toBe(400)
    expect(res.body.errors).toBeDefined()
  })

  it('should reject if username already registered', async () => {
    let res = await request(requestBody)
    logger.info(res.body)

    expect(res.status).toBe(200)
    expect(res.body.data.username).toBe('test')
    expect(res.body.data.name).toBe('test')
    expect(res.body.data.password).toBeUndefined()

    res = await request(requestBody)
    logger.info(res.body)

    expect(res.status).toBe(400)
    expect(res.body.errors).toBeDefined()
  })
})
