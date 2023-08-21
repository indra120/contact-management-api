import { app } from '#app'
import { logger } from '#lib/logging'

app.listen(3000, () => {
  logger.info('App running on port 3000')
})