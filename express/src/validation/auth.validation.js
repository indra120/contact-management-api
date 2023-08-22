import Joi from 'joi'

export const registerValidation = Joi.object({
  username: Joi.string().max(100).required(),
  name: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
})

export const loginValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
})