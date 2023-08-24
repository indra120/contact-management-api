import { logout } from '#controller/auth'
import { authMiddleware } from '#middleware/auth'
import { contactRoutes } from './contact.routes'
import { userRoutes } from './user.routes'
import { Router } from 'express'

const router = Router()

router.use(authMiddleware)

router.delete('/api/auth/logout', logout)
router.use('/api/users', userRoutes)
router.use('/api/contacts', contactRoutes)

export { router as protectedRoutes }