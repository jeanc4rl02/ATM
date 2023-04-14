import {Router} from 'express';
import {
    createAtmDetail,
    getAtmDetails,
    getOneAtmDetail,
    updateAtmDetail,
    deleteAtmDetail,
} from '../controllers/atmDetail.controller.js';

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *      AtmDetails:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: auto-generated id of atm.
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
 *          required: 
 *              - hundred
 *              - fifty
 *              - twenty
 *              - ten
 *              - atm_id
 *              
 *          example:
 *             hundred: 1,
 *             fifty: 2, 
 *             twenty: 3,
 *             ten: 4,
 *             atm_id: 4
 *      AtmDetailsNotFound:
 *          type: object
 *          properties: 
 *              msg:
 *              type: string
 *              description: not found AtmDetails
 *          example:
 *              msg: not found AtmDetails
 *  parameters:
 *      atmDetailsId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *              description: Id of the atm Detail.
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
 *      name: AtmDetails
 *      description: Endpoints of the atmDetail
*/

/**
 * @swagger
 * /api/v1/atmdetails/:
 *  post:
 *      summary: create a new Atmdetails
 *      tags: [AtmDetails]
 *      parameters: 
 *          - $ref: '#/components/parameters/token'  
 *      requestBody:
 *          required: true
 *      content:
 *          application/json:
 *          schema:
 *              items: 
 *                  $ref: '#/components/schemas/AtmDetails'   
 *      responses:
 *          200:
 *              description: The Atmdetails was succesfully created
 *              content:
 *                  application/json:
 *                      schema: 
 *                          items: 
 *                              $ref: '#/components/schemas/AtmDetails' 
 *      400: 
 *        description: There are no registered Atmdetails
 */
router.post('/', createAtmDetail)

/**
* @swagger
*  /api/v1/atmdetails:
*      get:
*          summary: Get an atmdetails list
*          tags: [AtmDetails]
*          parameters: 
*               - $ref: '#/components/parameters/token' 
*          responses: 
*              200:
*                  description: the list of atmdetails.
*                  content:
*                      application/json:
*                          schema:
*                              type: array
*                              items: 
*                                  $ref: '#/components/schemas/AtmDetails'
*              404:
*                  description: the list of atms is empty
* */
router.get('/', getAtmDetails)
/**
 * @swagger
 *  /api/v1/atmdetails/{id}:
 *      get:
 *          summary: Get an atmdetail by id
 *          tags: [AtmDetails]
 *          parameters: 
 *              - $ref: '#/components/parameters/token' 
 *              - $ref: '#/components/parameters/atmDetailsId'
 *          responses: 
 *              200:
 *                  description: the atm with the id provided.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items: 
 *                                  $ref: '#/components/schemas/AtmDetails'
 *              404:
 *                  description: The id provided doesn't exist in the database.
 * */
router.get('/:id', getOneAtmDetail)

/**
 * @swagger
 *  /api/v1/atmdetails/{id}:
 *      put:
 *          summary: Update an atmdetail by id
 *          tags: [AtmDetails]
 *          parameters: 
 *              - $ref: '#/components/parameters/token' 
 *              - $ref: '#/components/parameters/atmDetailsId'
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/AtmDetails'
 *          responses:
 *              200:
 *                  description: The update of the atm has been successfully completed.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/AtmDetails'
 *              400:
 *                  description: fields empty.
 *              404:
 *                  description: There is no ATMdetail registered with the provided id.
 */

router.put('/:id', updateAtmDetail)

/**
 * @swagger
 *  /api/v1/atmdetails/{id}:
 *      delete: 
 *          summary: Delete an atmdetail by id
 *          tags: [AtmDetails]
 *          parameters: 
 *              - $ref: '#/components/parameters/token' 
 *              - $ref: '#/components/parameters/atmDetailsId'
 *          responses:
 *              200:
 *                  description: The removal of the atmdetail has been successfully completed.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/AtmDetails'
 *              500:
 *                  description: Server error.
 *              404:
 *                  description: There is no ATMdetail registered with the provided id.
 */

router.delete('/:id', deleteAtmDetail)

export default router;