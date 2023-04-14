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
 *  /api/v1/atmdetails:
 *      post:
 *          summary: Save a new atmdetail
 *          tags: [Atmdetails]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Atmdetail'
 *          responses: 
 *              201:
 *                  description: Atmdetail was succesfully created
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              $ref:  '#/components/schemas/Atmdetail'
 *              400:
 *                  description: field are empty or atm_id in foreign key doesn't exist.
**/
router.post('/', createAtmDetail)
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
*                   type: DataTypes.INTEGER
*                   description: amount of cash
*              fifty:
*                   type: DataTypes.INTEGER
*                   description: amount of cash
*              twenty:
*                   type: DataTypes.INTEGER
*                   description: amount of cash
*              ten:
*                   type: DataTypes.INTEGER
*                   description: amount of cash
*              atm_id:
*                   type: DataTypes.INTEGER
*                   description
*          required: 
*             - hundred
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
*  parameters:
*      atmDetails Id:
*          in: path
*          name: id
*          required: true
*          schema:
*              type: number
*          description: Id of the atm Detail.
*/

/**
* @swagger
* tags:
*  name: AtmDetails
*  description: Endpoints of the atmDetail
*/

/**
* @swagger
*  /api/v1/atmdetails:
*      get:
*          summary: Get an atmdetails list
*          tags: [Atmdetails]
*          responses: 
*              200:
*                  description: the list of atmdetailss.
*                  content:
*                      application/json:
*                          schema:
*                              type: array
*                              items: 
*                                  $ref: '#/components/schemas/Atmdetails'
*              404:
*                  description: the list of atms is empty
* */
router.get('/', getAtmDetails)
/**
 * @swagger
 *  /api/v1/atmdetails/{id}:
 *      get:
 *          summary: Get an atmdetail by id
 *          tags: [Atmdetails]
 *          parameters:
 *              - $ref: '#/components/parameters/atmdetailId'
 *          responses: 
 *              200:
 *                  description: the atm with the id provided.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items: 
 *                                  $ref: '#/components/schemas/Atmdetail'
 *              404:
 *                  description: The id provided doesn't exist in the database.
 * */
router.get('/:id', getOneAtmDetail)

/**
 * @swagger
 *  /api/v1/atmdetails/{id}:
 *      put:
 *          summary: Update an atmdetail by id
 *          tags: [Atmdetails]
 *          parameters:
 *              - $ref: '#/components/parameters/atmdetailId'
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Atmdetail'
 *          responses:
 *              200:
 *                  description: The update of the atm has been successfully completed.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/atmdetail'
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
 *          tags: [Atmdetails]
 *          parameters:
 *              - $ref: '#/components/parameters/atmdetailId'
 *          responses:
 *              200:
 *                  description: The removal of the atmdetail has been successfully completed.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Atmdetail'
 *              500:
 *                  description: Server error.
 *              404:
 *                  description: There is no ATMdetail registered with the provided id.
 */

router.delete('/:id', deleteAtmDetail)

export default router;