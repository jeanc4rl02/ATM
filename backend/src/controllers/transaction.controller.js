// Description: Transaction controller
// Author: Sebastián Gámez Ariza

// Importing transaction service
import * as transactionService from '../services/transaction.service.js';

// Importing atm detail service
import * as atmDetailService from '../services/atmDetail.service.js';

// Importing transaction schema
import transactionSchema from '../schemas/transaction.schema.js';

//import transaction helper
import getMoney from '../helpers/transaction.helper.js'

//import send email helper
import sendEmailHelper from '../helpers/sendEmail.helper.js'

//import acountService
import {getAccountByIdService, updateAccountByIdService} from '../services/account.service.js'
// Get all transactions
export const getAllTransactions = async (req, res) => {
    // Create a response object
    let response;
    // Try to get all transactions
    try {
        // Get all transactions
        const {data: transactions} = await transactionService.getAllTransactionsService();
        // Create the response object
        response = {
            status: 200,
            message: 'Transactions found',
            data: transactions
        };
    }
    // Catch error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 500,
            message: 'Error getting transactions',
        };
    }
    // Send the response
    res.status(response.status).send(response);
}

// Get a transaction by id
export const getTransactionById = async (req, res) => {
    // Create a response object
    let response;
    // Try to get a transaction by id
    try {
        // Get the transaction id
        const {id} = req.params;
        // Get the transaction
        const {data: transaction} = await transactionService.getTransactionByIdService(id);
        // Create the response object
        response = {
            status: 200,
            message: 'Transaction found',
            data: transaction
        };
    }
    // Catch error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 500,
            message: 'Error getting the transaction',
        };
    }
    // Send the response
    res.status(response.status).send(response);
}

// Get all transactions by account
export const getAllTransactionsByAccount = async (req, res) => {
    // Create a response object
    let response;
    // Try to get all transactions by account
    try {
        // Get the account id
        const {accountId} = req.params;
        // Get all transactions by account
        const {data: transactions} = await transactionService.getAllTransactionsByAccountService(accountId);
        // Create the response object
        response = {
            status: 200,
            message: 'Transactions found',
            data: transactions
        };
    }
    // Catch error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 500,
            message: 'Error getting the transactions',
        };
    }
    // Send the response
    res.status(response.status).send(response);
}

// Get all transactions by atm
export const getAllTransactionsByAtm = async (req, res) => {
    // Create a response object
    let response;
    // Try to get all transactions by atm
    try {
        // Get the atm id
        const {atmId} = req.params;
        // Get all transactions by atm
        const {data: transactions} = await transactionService.getAllTransactionsByAtmService(atmId);
        // Create the response object
        response = {
            status: 200,
            message: 'Transactions found',
            data: transactions
        };
    }
    // Catch error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 500,
            message: 'Error getting the transactions',
        };
    }
    // Send the response
    res.status(response.status).send(response);
}

// Create a transaction
export const createTransaction = async (req, res) => {
    // Create a response object
    let response;
    // Try to validate a transaction
    try { 
        // Get the transaction data
        let transactionData = req.body;
        // Validate the transaction data
        transactionData = await transactionSchema.validateAsync(transactionData);
        try {
            // Create a transaction
            const {data: transaction} = await transactionService.createTransactionService(transactionData);
            // Validate the transaction type
            if (transactionData.transactionType == 'deposit') {
                // Get the atm detail
                const atmDetail = await atmDetailService.getAtmDetailByAtmService(transactionData.atmId);
                // Update the atm detail
                await atmDetailService.updateAtmDetailService(atmDetail.id, {
                    hundred: atmDetail.hundred + transactionData.hundred,
                    fifty: atmDetail.fifty + transactionData.fifty,
                    twenty: atmDetail.twenty + transactionData.twenty,
                    ten: atmDetail.ten + transactionData.ten,
                });

                // Create the response object
                response = {
                    status: 201,
                    message: 'Transaction created',
                    data
                    : transaction
                };
            }else if(transactionData.transactionType == 'withdrawal'){
                const getM = await getMoney(transactionData.amount, transactionData.atmId)
                console.log(getM)
                const userAmount = await getAccountByIdService(transaction.dataValues.accountId)
                // userAmount = JSON.stringify(userAmount)
                // userAmount = JSON.parse(userAmount)
                //console.log(userAmount.data.balance)

                if(transactionData.amount<= userAmount.data.balance){
                    ///el monto de la cuenta
                    if(getM == false){
                        response = {
                            status: 400,
                            message: "Can't withdraw exact amount" 
                        }
                    }else{
                        const atmDetail = await atmDetailService.getAtmDetailByAtmService(transactionData.atmId);
                        // Update the atm detail
                        await atmDetailService.updateAtmDetailService(atmDetail.id, {
                            hundred: atmDetail.hundred - getM[0].count,
                            fifty: atmDetail.fifty - getM[1].count,
                            twenty: atmDetail.twenty - getM[2].count,
                            ten: atmDetail.ten - getM[3].count,
                        });

                        //update Acoount Balance
                        await updateAccountByIdService(transaction.dataValues.accountId,{balance: userAmount.data.balance-transactionData.amount })
                        
                        //send email 
                        const msg = await sendEmailHelper( 
                            `${userAmount.data.email}`, 
                            "withdrawal", 
                            'You are informed that a withdrawal of '+transactionData.amount+' has been made from your account')
                        // Create the response object
                        response = {
                            status: 201,
                            message: 'Successful ATM Withdrawal',
                            data: getM
                        };
                    }

                }else{
                    response = {
                        status: 400,
                        message: 'User does not have sufficient funds'
                    }
                }
            }
           
           
        }
        // Catch error
        catch (error) {
            // Log the error
            console.log(error);
            // Create the response object
            response = {
                status: 500,
                message: 'Error creating the transaction',
            };
        }
    }
    // Catch error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 400,
            message: 'Validation error',
        };
    }
    // Send the response
    res.status(response.status).send(response);
}
