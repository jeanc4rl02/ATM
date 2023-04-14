// Description: This file contains all the routes for the transaction
// Author: Sebastián Gámez Ariza || Juan David Ospina Ortega

// Importing express router
import { Router } from 'express';

// Importing transaction controller
import * as transactionController from '../controllers/transaction.controller.js';

// Creating a router
const transactionRouter = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      Transactions:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: auto-generated id of transaction.
 *              transaction_date:
 *                  type: date
 *                  description: 
 *              transaction_type: 
 *                  type: string
 *                  description: 
 *              hundred:
 *                  type: integer
 *                  description: amount of cash
 *              fifty:
 *                  type: integer
 *                  description: amount of cash
 *              twenty:
 *                  type: integer
 *                  description: amount of cash
 *              ten:
 *                  type: integer
 *                  description: amount of cash
 *              atm_id:
 *                  type: integer
 *                  description: atm id
 *              account_id:
 *                  type: integer
 *                  description: account id
 *          required: 
 *              - transaction_date
 *              - transaction_type
 *              - hundred
 *              - fifty
 *              - twenty
 *              - ten
 *              - atm_id
 *              - account_id
 *              
 *          example:
 *             hundred: 1,
 *             fifty: 2, 
 *             twenty: 3,
 *             ten: 4,
 *             atm_id: 4,
 *             account_id: 1
 *      TransactionsNotFound:
 *          type: object
 *          properties: 
 *              msg:
 *              type: string
 *              description: not found Transactions
 *          example:
 *              msg: not found Transactions
 *  parameters:
 *      transactionsId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *              description: Id of the Transaction.
 *      token:
 *          in: header
 *          name: x-access-token
 *          description: The token to access the API
 *          schema:
 *              type: string
 *              required: true
*/

/**
 * @swagger
 *  tags:
 *      name: Transactions
 *      description: Endpoints of the transaction
*/

/**
* @swagger
*  /api/v1/transactions:
*      get:
*          summary: Get an transactions list
*          tags: [Transactions]
*          parameters: 
*               - $ref: '#/components/parameters/token' 
*          responses: 
*              200:
*                  description: the list of transactions.
*                  content:
*                      application/json:
*                          schema:
*                              type: array
*                              items: 
*                                  $ref: '#/components/schemas/Transactions'
*              404:
*                  description: the list of Transactions is empty
* */
transactionRouter.get('/', transactionController.getAllTransactions);

/**
 * @swagger
 *  /api/v1/transactions/{id}:
 *      get:
 *          summary: Get an transaction by id
 *          tags: [Transactions]
 *          parameters: 
 *              - $ref: '#/components/parameters/token' 
 *              - $ref: '#/components/parameters/transactionsId'
 *          responses: 
 *              200:
 *                  description: the transaction with the id provided.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items: 
 *                                  $ref: '#/components/schemas/Transactions'
 *              404:
 *                  description: The id provided doesn't exist in the database.
 * */
// Get a transaction by id
transactionRouter.get('/:id', transactionController.getTransactionById);

/**
* @swagger
*  /api/v1/transactions/account/{id}:
*      get:
*          summary: Get an transactions list
*          tags: [Transactions]
*          parameters: 
*               - $ref: '#/components/parameters/token' 
*          responses: 
*              200:
*                  description: the list of transactions.
*                  content:
*                      application/json:
*                          schema:
*                              type: array
*                              items: 
*                                  $ref: '#/components/schemas/Transactions'
*              404:
*                  description: the list of Transactions is empty
* */

// Get all transactions by account
transactionRouter.get('/account/:id', transactionController.getAllTransactionsByAccount);

/**
* @swagger
*  /api/v1/transactions/atm/{id}:
*      get:
*          summary: Get an transactions list
*          tags: [Transactions]
*          parameters: 
*               - $ref: '#/components/parameters/token' 
*          responses: 
*              200:
*                  description: the list of transactions.
*                  content:
*                      application/json:
*                          schema:
*                              type: array
*                              items: 
*                                  $ref: '#/components/schemas/Transactions'
*              404:
*                  description: the list of Transactions is empty
* */
// Get all transactions by atm
transactionRouter.get('/atm/:id', transactionController.getAllTransactionsByAtm);


// Exporting the router
export default transactionRouter;
  