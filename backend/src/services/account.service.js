// Description: This file contains the functions that are used to interact with the account model
// Author: Sebastián Gámez Ariza

// Importing the account model
import accountModel from '../models/account.model.js';


// Get all accounts method
export const getAllAccountsService = async () => {
    // Create a response object
    let response;
    // Try to get all accounts
    try {
        // Get all accounts
        const accounts = await accountModel.findAll({
            attributes: { exclude: ['pin'] }
        });
        // Create the response object
        response = {
            status: 200,
            message: 'Accounts found successfully',
            data: accounts
        };
    }
    // Catch the error
    catch (error) {
        // Create the response object
        response = {
            status: 500,
            message: 'Error getting the accounts',
        };
        // Throw the error
        throw error;
    }
    // Return the response
    return response;
};

// Get account by id method
export const getAccountByIdService = async (id) => {
    // Create a response object
    let response;
    // Try to get an account by id
    try {
        // Get an account by id
        const accountDB = await accountModel.findOne({
            where: {
                id: id
            },
            attributes: { exclude: ['pin'] }
        });
        // Create the response object
        response = {
            status: 200,
            message: 'Account found successfully',
            data: accountDB
        };
    }
    // Catch the error
    catch (error) {
        // Create the response object
        response = {
            status: 500,
            message: 'Error getting the account',
        };
        // Throw the error
        throw error;
    }
    // Return the response
    return response;
};


// Get an account by identification method
export const getAccountByIdentificationService = async (identification) => {
    // Create a response object
    let response;
    // Try to get an account by identification
    try {
        // Get an account by identification
        const accountDB = await accountModel.findOne({
            where: {
                identification: identification
            }
        });
        // Create the response object
        response = {
            status: 200,
            message: 'Account found successfully',
            data: accountDB
        };
    }
    // Catch the error
    catch (error) {
        // Create the response object
        response = {
            status: 500,
            message: 'Error getting the account',
        };
        // Throw the error
        throw error;
    }
    // Return the response
    return response;
};

// Create a new account method
export const createAccountService = async (account) => {
    // Create a response object
    let response;
    // Try to create a new account
    try {
        // Create a new account
        await accountModel.create(account);
        // Create the response object
        response = {
            status: 201,
            message: 'Account created successfully'
        };
    }
    // Catch the error
    catch (error) {
        // Create the response object
        response = {
            status: 500,
            message: 'Error creating the account',
        };
        // Throw the error
        throw error;
    }
    // Return the response
    return response;
};

// Update an account by id method
export const updateAccountByIdService = async (id, account) => {
    // Create a response object
    let response;
    // Try to update an account by id
    try {
        // Update an account by id
        const accountDB = await accountModel.update(account, {
            where: {
                id: id
            },
            returning: true
        });
        // Create the response object
        response = {
            status: 200,
            message: 'Account updated successfully',
            data: accountDB
        };
    }
    // Catch the error
    catch (error) {
        // Create the response object
        response = {
            status: 500,
            message: 'Error updating the account',
        };
        // Throw the error
        throw error;
    }
    // Return the response
    return response;
};

// Delete an account by id method
export const deleteAccountByIdService = async (id) => {
    // Create a response object
    let response;
    // Try to delete an account by id
    try {
        // Delete an account by id
        await accountModel.update( {status: false} ,{
            where: {
                id: id
            }
        });
        // Create the response object
        response = {
            status: 200,
            message: 'Account deleted successfully',
        };
    }
    // Catch the error
    catch (error) {
        // Create the response object
        response = {
            status: 500,
            message: 'Error deleting the account',
        };
        // Throw the error
        throw error;
    }
    // Return the response
    return response;
}
