import { errorMiddleware } from '#middleware/error'
import { publicRoutes } from '#routes/public'
import express from 'express'

const app = express()

app.use(express.json())
app.use(errorMiddleware)
app.use('/api/auth', publicRoutes)

export { app }