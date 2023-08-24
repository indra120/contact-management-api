import { logout } from '#controller/auth'
import { authMiddleware } from '#middleware/auth'
import { userRoutes } from './user.routes'
import { Router } from 'express'

const router = Router()

router.use(authMiddleware)

router.delete('/api/auth/logout', logout)
router.use('/api/users', userRoutes)
router.use('/api/contacts')

export { router as protectedRoutes }