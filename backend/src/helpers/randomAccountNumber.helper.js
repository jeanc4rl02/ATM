// Description: This file contains the function that generates a random account number
// Author: Sebastián Gámez Ariza

// Import account model
import accountModel from '../models/account.model.js';

// Import function to check if a value already exists in the database
import checkIfExistsInDatabase from './checkIfExistsInDatabase.helper.js';

// Create a random account number
const randomAccountNumberHelper = async() => {
    // Create a random number between 100000000000000 and 999999999999999
    let randomNumber = Math.floor(Math.random() * (999999999999999 - 100000000000000 + 1) + 100000000000000);
    // Try to check if the account number already exists in the database
    try {
        // Check if the account number already exists in the database
        const existsInDatabase = await checkIfExistsInDatabase(accountModel, 'accountNumber', randomNumber);
        // If the account number already exists, create a new random number
        if(existsInDatabase){
            randomNumber = await randomAccountNumberHelper();
        }
    } catch (error) {
        // Log error
        console.log(error);
    }
    // Return the random number
    return randomNumber;
}

// Export function
export default randomAccountNumberHelper;