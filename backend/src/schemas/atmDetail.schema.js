// Description: This file contains the validation schema to account
// Author: Juan David Ospina Ortega

// Importing the joi library
import joi from 'joi';

// Creating the schema
const atmDetailSchema = joi.object({
    id: joi
        .number()
        .integer()
        .min(1),
    hundred: joi
        .number()
        .integer(),
    fifty: joi
        .number()
        .integer(),
    twenty: joi
        .number()
        .integer(),
    ten: joi
        .number()
        .integer(),
    atm_id: joi
        .number()
        .integer(),
});
    
// Exporting the schema
export default atmDetailSchema;
