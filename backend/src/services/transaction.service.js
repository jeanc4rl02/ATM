// Description: This file contains the transaction services
// Author: Sebastián Gámez Ariza


// Importing the transaction model
import transactionModel from '../models/transaction.model.js';

// Importing the account model
import accountModel from '../models/account.model.js';

// Importing the atm model
import atmModel from '../models/atm.model.js';

// Create a transaction query options
const transactionServiceQueryOptions = {
    include: [
        {
            model: accountModel,
            as: 'account',
            attributes: {
                exclude: ['pin']
            }
        },
        {
            model: atmModel,
            as: 'atm',
        }
    ],
    attributes: { 
        exclude: ['accountId', 'atmId']
    }
}


// Get all transactions method
export const getAllTransactionsService = async () => {
    // Create a response object
    let response;
    // Try to get all transactions
    try {
        // Get all transactions
        const transactions = await transactionModel.findAll(transactionServiceQueryOptions);
        // Create the response object
        response = {
            status: 200,
            message: 'Transactions found successfully',
            data: transactions
        };
    }
    // Catch the error
    catch (error) {
        // Create the response object
        response = {
            status: 500,
            message: 'Error getting the transactions',
        };
        // Throw the error
        throw error;
    }
    // Return the response
    return response;
}

// Get all transactions by account method
export const getAllTransactionsByAccountService = async (accountId) => {
    // Create a response object
    let response;
    // Try to get all transactions by account
    try {
        // Get all transactions by account
        const transactions = await transactionModel.findAll({
            ...transactionServiceQueryOptions,
            where: {
                accountId: accountId
            }
        });
        // Create the response object
        response = {
            status: 200,
            message: 'Transactions found successfully',
            data: transactions
        };
    }
    // Catch the error
    catch (error) {
        // Create the response object
        response = {
            status: 500,
            message: 'Error getting the transactions',
        };
        // Throw the error
        throw error;
    }
    // Return the response
    return response;
}

// Get all transactions by atm method
export const getAllTransactionsByAtmService = async (atmId) => {
    // Create a response object
    let response;
    // Try to get all transactions by atm
    try {
        // Get all transactions by atm
        const transactions = await transactionModel.findAll({
            ...transactionServiceQueryOptions,
            where: {
                atmId: atmId
            }
        });
        // Create the response object
        response = {
            status: 200,
            message: 'Transactions found successfully',
            data: transactions
        };
    }
    // Catch the error
    catch (error) {
        // Create the response object
        response = {
            status: 500,
            message: 'Error getting the transactions',
        };
        // Throw the error
        throw error;
    }
    // Return the response
    return response;
}

// Get a transaction by id method
export const getTransactionByIdService = async (id) => {
    // Create a response object
    let response;
    // Try to get a transaction by id
    try {
        // Get a transaction by id
        const transactionDB = await transactionModel.findOne({
            ...transactionServiceQueryOptions,
            where: {
                id: id
            }
        });
        // Create the response object
        response = {
            status: 200,
            message: 'Transaction found successfully',
            data: transactionDB
        };
    }
    // Catch the error
    catch (error) {
        // Create the response object
        response = {
            status: 500,
            message: 'Error getting the transaction',
        };
        // Throw the error
        throw error;
    }
    // Return the response
    return response;
}

// Create a transaction method
export const createTransactionService = async (transaction) => {
    // Create a response object
    let response;
    // Try to create a transaction
    try {
        // Create a transaction
        await transactionModel.create(transaction);
        // Create the response object
        response = {
            status: 201,
            message: 'Transaction created successfully',
        };
    }
    // Catch the error
    catch (error) {
        // Create the response object
        response = {
            status: 500,
            message: 'Error creating the transaction',
        };
        // Throw the error
        throw error;
    }
    // Return the response
    return response;
}
