import { errorMiddleware } from '#middleware/error'
import { protectedRoutes } from '#routes/protected'
import { publicRoutes } from '#routes/public'
import express from 'express'

const app = express()

app.use(express.json())
app.use('/api/auth', publicRoutes)
app.use(protectedRoutes)
app.use(errorMiddleware)

export { app }