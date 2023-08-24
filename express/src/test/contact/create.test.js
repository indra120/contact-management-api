import {
  createTestUser,
  deleteAllTestContacts,
  deleteTestUser,
  superTest,
} from '../util'

const endpoint = '/api/contacts'
const headers = ['Authorization', 'test']

describe(`POST ${endpoint}`, () => {
  beforeEach(createTestUser)

  afterEach(async () => {
    await deleteAllTestContacts()
    await deleteTestUser()
  })

  it('should create new contact', async () => {
    const res = await superTest
      .post(endpoint)
      .set(...headers)
      .send({
        firstName: 'test',
        lastName: 'test',
        email: 'test@pzn.com',
        phone: '08090000000',
      })

    expect(res.status).toBe(200)
    expect(res.body.data.id).toBeDefined()
    expect(res.body.data.firstName).toBe('test')
    expect(res.body.data.lastName).toBe('test')
    expect(res.body.data.email).toBe('test@pzn.com')
    expect(res.body.data.phone).toBe('08090000000')
  })

  it("should reject when request isn't valid", async () => {
    const res = await superTest
      .post(endpoint)
      .set(...headers)
      .send({
        lastName: 'test',
        email: 'test',
        phone: '0809000000043534534543534534543535345435435',
      })

    expect(res.status).toBe(400)
    expect(res.body.errors).toBeDefined()
  })
})