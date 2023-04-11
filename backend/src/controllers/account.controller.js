// Description: This file contains the controller for the account
// Author: Sebastián Gámez Ariza{

// Import account services
import * as accountService from '../services/account.service.js';

// Import account schema
import accountSchema from '../schemas/account.schema.js';

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
        // Login by phone and pin
        const { data: accountDB } = await accountService.getAccountByIdentificationService(account.identification);
        // Check if the user exists
        if (accountDB) {
            // Check if the pin is correct
            if (accountDB.pin === account.pin) {
                // Create the response object
                response = {
                    status: 200,
                    message: 'Login successful',
                    data: {...accountDB, pin: ''}
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
    // Send the response
    res.status(response.status).send(response);
}

// Get all accounts method
export const getAllAccounts = async (req, res) => {
    const response = await accountService.getAllAccountsService();
    res.status(response.status).send(response);
};

// Get an account by id method
export const getAccountById = async (req, res) => {
    // Create a response object
    let response;
    // Try to get an account by id
    try {
        // Get the id from the request
        const { id } = req.params;
        // Get an account by id
        const { data: account } = await accountService.getAccountByIdService(id);
        // Create the response object
        response = {
            status: 200,
            message: 'Account found successfully',
            data: account
        };
    }
    // Catch the error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 500,
            message: 'Error getting the account'
        };
    }
    // Send the response
    res.status(response.status).send(response);
}

// Create an account method
export const createAccount = async (req, res) => {
    // Create a response object
    let response;
    // Try to create an account
    try {
        // Get the account data from the request
        let account = req.body;
        // Async account validation data with joi
        account = await accountSchema.validateAsync(account);
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
        // Update an account
        await accountService.updateAccountByIdService(id, account);
        // Create the response object
        response = {
            status: 200,
            message: 'Account updated successfully'
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