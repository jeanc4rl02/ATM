// Importing the dotenv module
import {config} from 'dotenv';

// Configuring the environment variables
config();

// Exporting the environment variables
export const PORT = process.env.PORT;
export const DB_URL = process.env.DB_URL;
export const JWT_PASSWORD = process.env.JWT_PASSWORD;
export const JWT_EXPIRATION = process.env.JWT_EXPIRATION;