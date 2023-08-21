import { Router } from 'express'
import * as authController from '#controller/auth.controller'

const router = Router()

router.post('/api/auth/register', authController.register)

export { router as publicRoutes }