// Importing the dotenv module
import {config} from 'dotenv';

// Configuring the environment variables
config();

// Exporting the environment variables
export const PORT = process.env.PORT;