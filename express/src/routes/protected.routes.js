import { authMiddleware } from '#middleware/auth'
import { userRoutes } from './user.routes'
import { Router } from 'express'

const router = Router()

router.use(authMiddleware)

// User API
router.use('/api/users', userRoutes)