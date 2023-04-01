// Description: This file contains the validation schema to account
// Author: Sebastián Gámez Ariza

// Importing the joi library
import joi from 'joi';

// Creating the schema
const accountSchema = joi.object({
    id: joi
        .number()
        .integer()
        .min(1),
    accountNumber: joi
        .number()
        .integer()
        .min(100000000000000)
        .max(999999999999999),
    balance: joi
        .number(),
    status: joi
        .boolean(),
    clientName: joi
        .string()
        .min(3)
        .max(50),
    pin: joi
        .number()
        .integer()
        .min(1000)
        .max(9999),
    phone: joi
        .string()
        .min(3)
        .max(50),
    email: joi
        .string()
        .email(),
});
    
// Exporting the schema
export default accountSchema;
