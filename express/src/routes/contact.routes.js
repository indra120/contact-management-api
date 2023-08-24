import * as contactController from '#controller/contact'
import { Router } from 'express'

const router = Router()

router.post('/', contactController.create)

export { router as contactRoutes }