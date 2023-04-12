// Description: This file contains the controller for the account
// Author: Sebastián Gámez Ariza{

// Import account services
import * as accountService from '../services/account.service.js';
// Import account schema
import accountSchema from '../schemas/account.schema.js';
// Import sign token helper
import signTokenHelper from '../helpers/signToken.helper.js';
// Import random account number helper
import randomAccountNumberHelper from '../helpers/randomAccountNumber.helper.js';
// Importing the check if exists in database helper
import checkIfExistsInDatabaseHelper from '../helpers/checkIfExistsInDatabase.helper.js';

// Login by identification and pin method
export const loginByIdentification = async (req, res) => {
    // Create a response object
    let response;
    // Try to login by phone and pin
    try {
        // Get the account data from the request
        let account = req.body;
        // Async account validation data with joi
        account = await accountSchema.validateAsync(account);
        // Try to login
        try {
            // Login by phone and pin
            const {data: accountDB} = await accountService.getAccountByIdentificationService(account.identification);
            // Check if the user exists
            if (accountDB) {
                // Check if the pin is correct
                if (accountDB.pin === account.pin) {
                    // Sign token
                    const token = signTokenHelper({accountNumber: accountDB.accountNumber});
                    // Hide the pin
                    accountDB.pin = null;
                    // Create the response object
                    response = {
                        status: 200,
                        message: 'Login successful',
                        data: {
                            token: token,
                            account: accountDB
                        }
                    };
                }
                // The pin is incorrect
                else {
                    // Create the response object
                    response = {
                        status: 401,
                        message: 'Incorrect pin'
                    };
                }
            }
            // The user does not exist
            else {
                // Create the response object
                response = {
                    status: 404,
                    message: 'User not found'
                };
            }
        }
        // Catch the error
        catch (error) {
            // Log the error
            console.log(error);
            // Create the response object
            response = {
                status: 500,
                message: 'Error logging in'
            };
        }
    }
    // Catch the error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 400,
            message: 'Validation error'
        };
    }
    // Send the response
    res.status(response.status).send(response);
}

// Get all accounts method
export const getAllAccounts = async (req, res) => {
    // Create a response object
    let response;
    // Try to get all accounts
    try {
        // Get all accounts
        response = await accountService.getAllAccountsService();
    }
    // Catch the error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 500,
            message: 'Error getting the accounts'
        };
    }
    // Send the response
    res.status(response.status).send(response);
};

// Create an account method
export const createAccount = async (req, res) => {
    // Create a response object
    let response;
    // Try to create an account
    try {
        // Get the account data from the request
        let account = req.body;
        // Async account validation data with joi
        await accountSchema.validateAsync(account);
        // Try to create an account
        try {
            // Create a random account number
            account.accountNumber = await randomAccountNumberHelper();
            // Create an account
            await accountService.createAccountService(account);
            // Create the response object
            response = {
                status: 201,
                message: 'Account created successfully'
            };
        }
        // Catch the error
        catch (error) {
            // Log the error
            console.log(error);
            // Create the response object
            response = {
                status: 500,
                message: 'Error creating the account'
            };
        }
    }
    // Catch the error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 400,
            message: 'Validation error'
        };
    }
    // Send the response
    res.status(response.status).send(response);
}

// Update an account method
export const updateAccount = async (req, res) => {
    // Create a response object
    let response;
    // Try to update an account
    try {
        // Get the id from the request
        const { id } = req.params;
        // Get the account data from the request
        let account = req.body;
        // Async account validation data with joi
        account = await accountSchema.validateAsync(account);
        // Try to update an account
        try {
            // Update an account
            const { data: accountDB } = await accountService.updateAccountByIdService(id, account);
            // Create the response object
            response = {
                status: 200,
                message: 'Account updated successfully',
                data: accountDB
            };
        }
        // Catch the error
        catch (error) {
            // Log the error
            console.log(error);
            // Create the response object
            response = {
                status: 500,
                message: 'Error updating the account'
            };
        }
    }
    // Catch the error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 400,
            message: 'Validation error'
        };
    }
    // Send the response
    res.status(response.status).send(response);
}

// Delete an account method
export const deleteAccount = async (req, res) => {
    // Create a response object
    let response;
    // Try to delete an account
    try {
        // Get the id from the request
        const { id } = req.params;
        // Delete an account
        await accountService.deleteAccountByIdService(id);
        // Create the response object
        response = {
            status: 200,
            message: 'Account deleted successfully'
        };
    }
    // Catch the error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 500,
            message: 'Error deleting the account'
        };
    }
    // Send the response
    res.status(response.status).send(response);
}
