import * as service from '#service/auth.service'

export async function register(req, res, next) {
  try {
    const data = await service.register(req.body)
    res.status(200).json({ data })
  } catch (e) {
    next(e)
  }
}