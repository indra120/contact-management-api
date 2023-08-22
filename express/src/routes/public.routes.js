import { Router } from 'express'
import * as authController from '#controller/auth'

const router = Router()

router.post('/register', authController.register)

export { router as publicRoutes }