// Importing the app
import app from './app.js';

// Import the connection to the database
// import connectDatabase from './database/atm.database.js';

// Importing the environment variables
import {PORT} from './config/env.config.js';

// Connect to the database;
// connectDatabase();

// Setting the port
const port = PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
