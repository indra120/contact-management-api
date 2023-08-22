import * as service from '#service/auth'

export async function register(req, res, next) {
  try {
    const data = await service.register(req.body)
    res.status(200).json({ data })
  } catch (e) {
    next(e)
  }
}

export async function login(req, res, next) {
  try {
    const data = await service.login(req.body)
    res.status(200).json({ data })
  } catch (e) {
    next(e)
  }
}