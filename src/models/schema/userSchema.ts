import Joi from "joi";


export const userSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(30)
        .required(),
    
    age: Joi.number()
        .min(1)
        .integer()
        .required()
})