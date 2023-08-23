import Joi from 'joi'

export const getUserValidation = Joi.string().max(100).required()

export const updateUserValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).optional(),
  name: Joi.string().max(100).optional(),
})