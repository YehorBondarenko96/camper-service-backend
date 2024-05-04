import Joi from "joi";

export const createFilmSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)).required(),
    phone: Joi.string().pattern(/^[+\-\d()]+$/).required(),
    owner: Joi.string(),
})

export const bookingSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().pattern(new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)),
    date: Joi.string(),
    comment: Joi.string(),
})