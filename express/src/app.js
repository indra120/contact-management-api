import { errorMiddleware } from '#middleware/error.middleware'
import { publicRoutes } from '#routes/public.routes'
import express from 'express'

const app = express()

app.use(express.json())
app.use(errorMiddleware)
app.use('/api/auth', publicRoutes)

export { app }