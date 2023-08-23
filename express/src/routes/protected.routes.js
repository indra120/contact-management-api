import { logout } from '#controller/auth'
import { authMiddleware } from '#middleware/auth'
import { userRoutes } from './user.routes'
import { Router } from 'express'

const router = Router()

router.use(authMiddleware)

// Logout
router.delete('/api/auth/logout', logout)
// User API
router.use('/api/users', userRoutes)

export { router as protectedRoutes }