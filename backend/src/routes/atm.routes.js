import {Router} from 'express';
import {
    createAtm, 
    deleteAtm, 
    getAtms,
    getOneAtm,
    updateAtm,
} from '../controllers/atm.controller.js';

const router = Router();
/**
 * @swagger
 * components:
 *  schemas:
 *      Atm:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: auto-generated id of atm.
 *              status:
 *                  type: boolean
 *                  description: status of the atm (enabled or disabled).
 *              code: 
 *                  type: string
 *                  description: auto-generated code for the atm.
 *              max_amount:
 *                  type: double
 *                  description: maximum amount that can be withdrawn.
 *              min_amount:
 *                  type: double
 *                  description: minimum amount that can be withdrawn.
 *              address:
 *                  type: string
 *                  description: location of the atm.
 *              city_id:
 *                  type: string
 *                  description: Id of the city where the ATM is located.
 *          required: 
 *              - max_amount
 *              - min_amount
 *              - address
 *              - city_id
 *          example:
 *              id: 1
 *              status: true
 *              code: e0123a75-02df-4d50-a121-a8fbf141cdf1
 *              max_amount: 8000
 *              min_amount: 10
 *              address: Carrera 83 #94A
 *              city_id: 2
 *  parameters:
 *      atmId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: number
 *          description: Id of the atm.
 */

/**
 * @swagger
 * tags:
 *  name: Atms
 *  description: Endpoints of the atm
 */

/**
 * @swagger
 *  /api/v1/atms:
 *      get:
 *          summary: Get an atm list
 *          tags: [Atms]
 *          responses: 
 *              200:
 *                  description: the list of atms.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items: 
 *                                  $ref: '#/components/schemas/Atm'
 *              404:
 *                  description: the list of atms is empty
 * */
router.get('/', getAtms)

/**
 * @swagger
 *  /api/v1/atms/{id}:
 *      get:
 *          summary: Get an atm by id
 *          tags: [Atms]
 *          parameters:
 *              - $ref: '#/components/parameters/atmId'
 *          responses: 
 *              200:
 *                  description: the atm with the id provided.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items: 
 *                                  $ref: '#/components/schemas/Atm'
 *              404:
 *                  description: The id provided doesn't exist in the database.
 * */
router.get('/:id', getOneAtm)

/**
 * @swagger
 *  /api/v1/atms:
 *      post:
 *          summary: Save a new atm
 *          tags: [Atms]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Atm'
 *          responses: 
 *              201:
 *                  description: Atm was succesfully created
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              $ref:  '#/components/schemas/Atm'
 *              400:
 *                  description: Only propertie "status" can be empty or Id in foreign key doesn't exist.
 * */
router.post('/', createAtm)

/**
 * @swagger
 *  /api/v1/atms/{id}:
 *      put:
 *          summary: Update an atm by id
 *          tags: [Atms]
 *          parameters:
 *              - $ref: '#/components/parameters/atmId'
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Atm'
 *          responses:
 *              200:
 *                  description: The update of the atm has been successfully completed.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Order'
 *              400:
 *                  description: Only the properties "status" and "city_id" can be empty in this request.
 *              404:
 *                  description: There is no ATM registered with the provided id.
 */
router.put('/:id', updateAtm)

/**
 * @swagger
 *  /api/v1/atms/{id}:
 *      delete: 
 *          summary: Delete an atm by id
 *          tags: [Atms]
 *          parameters:
 *              - $ref: '#/components/parameters/atmId'
 *          responses:
 *              200:
 *                  description: The removal of the atm has been successfully completed.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Atm'
 *              500:
 *                  description: Server error.
 *              404:
 *                  description: There is no ATM registered with the provided id.
 */
router.delete('/:id', deleteAtm)

export default router;