// Description: This file contains all the routes for the transaction
// Author: Sebastián Gámez Ariza

// Importing express router
import { Router } from 'express';

// Importing transaction controller
import * as transactionController from '../controllers/transaction.controller.js';

// Creating a router
const transactionRouter = Router();

// Get all transactions
transactionRouter.get('/', transactionController.getAllTransactions);

// Get a transaction by id
transactionRouter.get('/:id', transactionController.getTransactionById);

// Get all transactions by account
transactionRouter.get('/account/:id', transactionController.getAllTransactionsByAccount);

// Get all transactions by atm
transactionRouter.get('/atm/:id', transactionController.getAllTransactionsByAtm);


// Exporting the router
export default transactionRouter;
  