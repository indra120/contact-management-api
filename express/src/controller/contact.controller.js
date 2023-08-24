import * as contactService from '#service/contact'

export async function create(req, res, next) {
  try {
    const data = await contactService.create(req.user, req.body)
    res.status(200).json({ data })
  } catch (e) {
    next(e)
  }
}