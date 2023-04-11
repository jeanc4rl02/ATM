// Description: Middleware to verify the token
// Author: Sebastián Gámez Ariza

// Import the jsonwebtoken library
import jwt from 'jsonwebtoken';

// Import the JWT password
import { JWT_PASSWORD } from '../config/env.config.js';

// Verify token middleware
const verifyTokenMiddleware = (req, res, next) => {
    // Get the token from the headers
    const token = req.headers['x-access-token'];
    // Check if the token exists
    if (!token) {
        // Send the response
        return res.status(403).json({
            status: 403,
            message: 'No token provided',
        });
    }
    // Try to verify the token
    try {
        // Verify the token
        jwt.verify(token, JWT_PASSWORD);
        // Continue with the next middleware
        next();
    }
    // Catch the error
    catch (error) {
        // Send the response
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized, invalid token',
        });
    }
}

// Export the verify token middleware
export default verifyTokenMiddleware;