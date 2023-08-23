import { db } from '#lib/db'

export async function authMiddleware(req, res, next) {
  const token = req.get('Authorization')
  const err = { errors: 'Unauthorized' }

  if (!token) {
    return res.status(401).json(err).end()
  }

  const user = await db.user.findFirst({ where: { token } })

  if (!user) {
    return res.status(401).json(err).end()
  }

  req.user = user
  next()
}