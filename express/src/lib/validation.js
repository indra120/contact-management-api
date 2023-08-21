import { ErrorResponse } from '#lib/error-response'
import Joi from 'joi'

/**
 * @param {Joi.Schema} schema
 * @param {any} request
 */
export function validate(schema, request) {
  const result = schema.validate(request, {
    abortEarly: false,
    allowUnknown: false,
  })

  if (result.error) {
    throw new ErrorResponse(400, result.error.message)
  }

  return result.value
}