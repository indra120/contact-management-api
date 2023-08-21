import { PrismaClient } from '@prisma/client'
import { logger } from './logging.js'

const db = new PrismaClient({
  log: [
    { emit: 'event', level: 'query' },
    { emit: 'event', level: 'error' },
    { emit: 'event', level: 'info' },
    { emit: 'event', level: 'warn' },
  ],
})

db.$on('error', logger.error)
db.$on('warn', logger.warn)
db.$on('info', logger.info)
db.$on('query', logger.query)

export { db }