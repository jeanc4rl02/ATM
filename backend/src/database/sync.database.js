// Description: Syncs the database with the models
// Author: Sebastián Gámez Ariza

// Import database models
import accountModel from '../models/account.model.js';
import cityModel  from "../models/city.model.js";
import atmModel from '../models/atm.model.js';
import atmDetailModel from '../models/atmDetail.model.js';
// Sync the database with the models
const syncDatabase = async () => {
	// Try to sync the database
	try {
		// Sync the database
		await accountModel.sync({force: true});
		await atmModel.sync({force: true});
		await cityModel.sync(); 
		await atmDetailModel.sync({force: true});
		await accountModel.sync(); 
		await atmModel.sync({force: true}); 
		// Log the success message
		console.log('Database synchronized successfully');
	} catch (error) {
		// Log the error message
		console.log(`Error synchronizing the database: ${error}`);
	}
};

// Export the sync database function
export default syncDatabase;
