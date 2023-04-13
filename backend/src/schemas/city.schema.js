import joi from 'joi';

const citySchema = joi.object({
    id: joi
        .number()
        .integer()
        .min(1),
    name: joi
        .string(),
})

export default citySchema