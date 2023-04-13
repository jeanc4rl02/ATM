// Description: This file contains a function to check if a value already exists in the database
// Author: Sebastián Gámez Ariza

// Import sequelize types
import { Op } from 'sequelize';

// Create function to check if a value already exists in the database
const checkIfExistsInDatabase = async (model, property, value) => {
	// Delete spaces and convert to lowercase
	const valueWithoutSpaces = value.toString().trim().toLowerCase();
	// Boolean variable to store the result
    let result;
	// Try to find the value in the database
	try {
		// Find the value in the database ignoring case and spaces at the beginning and end
		result = await model.findOne({
			where: {
				[property]: {
					[Op.eq]: valueWithoutSpaces,
				},
			},
		});
	} catch (error) {
		// Throw error
		throw error;
	}
	// Return true if the value already exists
	return Boolean(result);
};

// Export function
export default checkIfExistsInDatabase;
