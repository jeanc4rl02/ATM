// Description: This file tests the database connection
// Author: Sebastián Gámez Ariza

// Import the database connection
import deviceDatabase from './atm.database.js';

// Test the database connection
const testDatabase = async () => {
	try {
		await deviceDatabase.authenticate();
		console.log('Database connection successful');
	} catch (error) {
		console.log('Database connection failed');
	}
};

// Export the test database function
export default testDatabase;
