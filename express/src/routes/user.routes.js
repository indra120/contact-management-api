import * as userController from '#controller/user'
import { Router } from 'express'

const router = Router()

router.get('/current', userController.get)

export { router as userRoutes }