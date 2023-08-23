import Joi from 'joi'

export const getUserValidation = Joi.string().max(100).required()