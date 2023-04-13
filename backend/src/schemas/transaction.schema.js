// Description: This file contains the validation schema to transaction
// Author: Sebastián Gámez Ariza

// Importing the joi library
import joi from 'joi';

// Creating the schema
const transactionSchema = joi.object({
    id: joi
        .number()
        .integer()
        .min(1),
    transactionDate: joi
        .date(),
    transactionType: joi
        .string()
        .min(1)
        .max(20),
    hundred: joi
        .number()
        .integer()
        .min(0),
    fifty: joi
        .number()
        .integer()
        .min(0),
    twenty: joi
        .number()
        .integer()
        .min(0),
    ten: joi
        .number()
        .integer()
        .min(0),
    accountId: joi
        .number()
        .integer()
        .min(1),
    atmId: joi
        .number()
        .integer()
        .min(1)
});
    
// Exporting the schema
export default transactionSchema;
