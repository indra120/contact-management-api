import * as userController from '#controller/user'
import { Router } from 'express'

const router = Router()

router.get('/current', userController.get)
router.patch('/current', userController.update)

export { router as userRoutes }