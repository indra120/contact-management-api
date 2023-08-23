import * as userService from '#service/user'

export async function get(req, res, next) {
  try {
    const data = await userService.get(req.user.username)
    res.status(200).json({ data })
  } catch (e) {
    next(e)
  }
}

export async function update(req, res, next) {
  try {
    const request = Object.assign({ username: req.user.username }, req.body)
    const data = await userService.update(request)

    res.status(200).json({ data })
  } catch (e) {
    next(e)
  }
}