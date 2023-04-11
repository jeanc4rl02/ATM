// Description: This file contains the sign token helper
// Author: Sebastián Gámez Ariza

// Importing the jsonwebtoken library
import jwt from 'jsonwebtoken';

// Importing the jsonwebtoken password
import { JWT_PASSWORD } from '../config/env.config.js';

// Sign token method
const signToken = (account) => {
    try {
        // Create the token
        const token = jwt.sign(account, JWT_PASSWORD, { expiresIn: '300000' });
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
