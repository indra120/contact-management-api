import { ErrorResponse } from '#lib/error-response'

export async function errorMiddleware(err, req, res, next) {
  if (!err) {
    next()
    return
  }

  if (err instanceof ErrorResponse) {
    return res.status(err.status).json({ errors: err.message }).end()
  }

  res.status(500).json({ errors: err.message }).end()
}