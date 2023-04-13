// Description: Syncs the database with the models
// Author: Sebastián Gámez Ariza

// Import database models
import accountModel from '../models/account.model.js';
import cityModel  from "../models/city.model.js";
import atmModel from '../models/atm.model.js';
 
// Sync the database with the models
const syncDatabase = async () => {
	// Try to sync the database
	try {
		// Sync the database
		await accountModel.sync(); 
		await cityModel.sync(); 
		await atmModel.sync(); 
		// Log the success message
		console.log('Database synchronized successfully');
	} catch (error) {
		// Log the error message
		console.log(`Error synchronizing the database: ${error}`);
	}
};

// Export the sync database function
export default syncDatabase;
