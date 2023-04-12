// Description: This file contains the configuration for swagger
// Author: Sebastián Gámez Ariza

// Import the swagger-jsdoc
import swaggerJsDoc from 'swagger-jsdoc';
// Import the port and production url from the environment variables
import { PORT } from './env.config.js';

// Create the swagger options
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'ATM Documentation (API)',
            version: '1.0.0',
            description: 'This is the documentation for the ATM API'
        },
        servers: [ 
            { 
                url: `http://localhost:${PORT || 3000}` ,
                description: 'Development server'
            }
        ],
    },
    apis: [ './src/routes/*.js' ],
};

// Create the swagger documentation
const swaggerConfiguration = swaggerJsDoc(swaggerOptions);

// Export the swagger configuration
export default swaggerConfiguration;