import Joi from 'joi'

export const loginValidation = Joi.object({
  username: Joi.string().max(100).required(),
  password: Joi.string().max(100).required(),
})

export const registerValidation = loginValidation.append({
  name: Joi.string().max(100).required(),
})