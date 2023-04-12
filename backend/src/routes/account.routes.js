// Description: This file contains all the routes for the account
// Author: Sebastián Gámez Ariza

// Importing the express router
import { Router } from 'express';

// Importing the account controller
import * as accountController from '../controllers/account.controller.js';

// Importing the verifyToken middleware
import verifyTokenMiddleware from '../middlewares/verifyToken.middleware.js';

// Create the router
const accountRouter = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *   Account:
 *    type: object
 *    properties:
 *     id:
 *      type: integer
 *      description: The id of the user
 *     identification:
 *      type: string
 *      description: The identification of the user
 *     accountNumber:
 *      type: string
 *      description: The account number of the user
 *     balance:
 *      type: decimal
 *      description: The balance of the user
 *     status:
 *      type: boolean
 *      description: The status of the user
 *     clientName:
 *      type: string
 *      description: The name of the user
 *     pin:
 *      type: integer
 *      description: The pin of the user
 *     phone:
 *      type: string
 *      description: The phone of the user
 *     email:
 *      type: string
 *      description: The email of the user
 *    example:
 *     id: 1
 *     identification: "123456789"
 *     accountNumber: 123456789012345
 *     balance: 1000.00
 *     status: true
 *     clientName: John Santiago Santana
 *     pin: "1234"
 *     phone: "3213451617"
 *     email: email@email.com
 *   Response:
 *    type: object
 *    properties:
 *     status:
 *      type: integer
 *      description: The status code
 *     message:
 *      type: string
 *      description: The message
 *     data:
 *      type: 
 *       - object
 *       - array
 *      description: The data send by the server
 *    required:
 *     - status
 *     - message 
 *    example:
 *     status: 200
 *     message: Accounts found
 * 
 *  parameters:
 *   token:
 *    in: header
 *    name: x-access-token
 *    description: The token to access the API
 *    schema:
 *     type: string
 *    required: true
 *  
 *   id:
 *    in: path
 *    name: id
 *    description: The id of the account
 *    schema:
 *     type: string
 *    required: true
 * 
*/

/**
 * @swagger
 * tags:
 *  name: Account
 *  description: Account management
*/

/**
 * @swagger
 * /api/v1/accounts/login:
 *  post:
 *   summary: Login an account
 *   description: Login an account
 *   tags: 
 *    - Account
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Account'
 *      example:
 *       identification: "1234567890"
 *       pin: "1234"
 *   responses:
 *    200:
 *     description: Login successful
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 200
 *        message: Login successful
 *        data: 
 *         token: "token"
 *         account: Object(Account)
 *    400:
 *     description: Validation error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 400
 *        message: Validation error
 *        data: 
 *         message: Validation error details
 *    401:
 *     description: Incorrect pin
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 401
 *        message: Incorrect pin
 *    404:
 *     description: User not found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 404
 *        message: User not found
 *    500:
 *     description: Error logging in
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error logging in
 * 
*/
accountRouter.post('/login', accountController.loginByIdentification);

/**
 * @swagger
 * /api/v1/accounts:
 *  get:
 *   summary: Get all accounts
 *   description: Get all accounts
 *   tags: 
 *    - Account
 *   parameters:
 *    - $ref: '#/components/parameters/token'
 *   responses:
 *    200:
 *     description: Accounts found successfully
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 200
 *        message: Accounts found successfully
 *        data: Array(...Account)
 *    401:
 *     description: Unauthorized, invalid token
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 401
 *        message: Unauthorized, invalid token
 *    403:
 *     description: No token provided
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 403
 *        message: No token provided
 *    500:
 *     description: Error getting accounts
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error getting accounts
*/
accountRouter.get('/', verifyTokenMiddleware, accountController.getAllAccounts);

/**
 * @swagger
 * /api/v1/accounts:
 *  post:
 *   summary: Create an account
 *   description: Create an account
 *   tags: 
 *    - Account
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Account'
 *      example:
 *       identification: "1234567890"
 *       status: true
 *       clientName: Administrator
 *       pin: "1234"
 *       phone: "3213213214"
 *       email: admin@email.com
 * 
 *   responses:
 *    201:
 *     description: Account created successfully
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 201
 *        message: Account created successfully
 *    400:
 *     description: Validation error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 400
 *        message: Validation error
 *        data: 
 *         message: Validation error details
 *    401:
 *     description: Unauthorized, invalid token
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 401
 *        message: Unauthorized, invalid token
 *    403:
 *     description: No token provided
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 403
 *        message: No token provided
 *    500:
 *     description: Error creating account
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error creating account
*/
accountRouter.post('/', accountController.createAccount);

/**
 * @swagger
 * /api/v1/accounts/{id}:
 *  put:
 *   summary: Update an account
 *   description: Update an account
 *   tags: 
 *    - Account
 *   parameters:
 *    - $ref: '#/components/parameters/token'
 *    - $ref: '#/components/parameters/id'
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/Account'
 *      example:
 *       balance: "100000"
 *   responses:
 *    200:
 *     description: Account updated successfully
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 200
 *        message: Account updated successfully
 *        data: Object(...Account)
 *    400:
 *     description: Validation error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 400
 *        message: Validation error
 *        data: 
 *         message: Validation error details
 *    401:
 *     description: Unauthorized, invalid token
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 401
 *        message: Unauthorized, invalid token
 *    403:
 *     description: No token provided
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 403
 *        message: No token provided
 *    500:
 *     description: Error updating account
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error updating account
*/
accountRouter.put('/:id', verifyTokenMiddleware, accountController.updateAccount);

/**
 * @swagger
 * /api/v1/accounts/{id}:
 *  delete:
 *   summary: Delete an account
 *   description: Delete an account
 *   tags: 
 *    - Account
 *   parameters:
 *    - $ref: '#/components/parameters/token'
 *    - $ref: '#/components/parameters/id'
 *   responses:
 *    200:
 *     description: Account deleted successfully
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 200
 *        message: Account deleted successfully
 *    401:
 *     description: Unauthorized, invalid token
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 401
 *        message: Unauthorized, invalid token
 *    403:
 *     description: No token provided
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 403
 *        message: No token provided
 *    500:
 *     description: Error deleting account
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Response'
 *       example:
 *        status: 500
 *        message: Error deleting account
*/
accountRouter.delete('/:id', verifyTokenMiddleware, accountController.deleteAccount);


// Export the router
export default accountRouter;
