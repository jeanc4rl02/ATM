// Description: This file contains the sign token helper
// Author: Sebastián Gámez Ariza

// Importing the jsonwebtoken library
import jwt from 'jsonwebtoken';

// Importing the jsonwebtoken password
import { JWT_PASSWORD, JWT_EXPIRATION } from '../config/env.config.js';

// Sign token method
const signToken = (data) => {
    try {
        // Create the token
        const token = jwt.sign(data, JWT_PASSWORD, { expiresIn: JWT_EXPIRATION });
        // Return the token
        return token;
    // Catch the error
    } catch (error) {
        // Throw the error
        throw error;
    }
}

// Export the sign token method
export default signToken;
