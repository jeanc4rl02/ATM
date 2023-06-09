import { Router } from "express";
import * as citiesController from "../controllers/city.controller.js";

const CityRouter = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    City:
 *      type: object
 *      properties: 
 *        name:
 *          type: string
 *          description: the City name
 *      required: 
 *        - name 
 *      example: 
 *        name: Buga
 *    CityNotFound:
 *      type: object
 *      properties: 
 *        msg:
 *          type: string
 *          description: not found city
 *      example:
 *        msg: not found city
 *  parameters:
 *      CityId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: string
 *              description: the city_id 
 *  
*/

/**
 * @swagger
 * tags:
 *  name: City
 *  description: City management
*/

/**
 * @swagger
 * /api/v1/city/:
 *  post:
 *    summary: create a new City
 *    tags: [City] 
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/City'   
 *    responses:
 *      200:
 *        description: The city succesfully created
 *        content:
 *          application/json:
 *            schema: 
 *              items: 
 *                $ref: '#/components/schemas/City'
 * 
 *      400: 
 *        description: There are no registered city
 */
// create  city
CityRouter.post('/', citiesController.createCity);


/**
 * @swagger
 * /api/v1/city:
 *  get:
 *      summary: Return a City list
 *      tags: [City] 
 *      responses:
 *          200:
 *              description: A list of city
 *              content:
 *                  application/json:
 *                      schema: 
 *                          items: 
 *                             $ref: '#/components/schemas/City'
 * 
 *          404: 
 *              description: There are no registered city
 * 
 *          
 */
//get all cities
CityRouter.get('/', citiesController.getCities);


/**
 * @swagger
 * /api/v1/city/{id}:
 *  get:
 *      summary: Return a City by id 
 *      tags: [City]
 *      parameters: 
 *          - $ref: '#/components/parameters/CityId'
 *      responses:
 *          200:
 *              description: A city content by id
 *              content:
 *                  application/json:
 *                      schema: 
 *                          items: 
 *                              $ref: '#/components/schemas/City'
 *          404:
 *              description: The city not found
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/CityNotFound'
 *       
 */
//get city
CityRouter.get('/:id', citiesController.getCity);


/**
 * @swagger
 * /api/v1/city/{id}:
 *  put:
 *      summary: Update a City by id 
 *      tags: [City]
 *      parameters: 
 *          - $ref: '#/components/parameters/CityId'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/City'   
 *      responses:
 *          200:
 *              description: updated city
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/City'
 *          404:
 *              description: The city was not found
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/CityNotFound'
 *       
 */
//update city
CityRouter.put('/:id', citiesController.updateCity);


/**
 * @swagger
 * /api/v1/city/{id}:
 *  delete:
 *      summary: Delete a City by id 
 *      tags: [City]
 *      parameters: 
 *          - $ref: '#/components/parameters/CityId'
 *      responses:
 *          200:
 *              description: Deleted a city 
 *              content:
 *                  application/json:
 *                      schema: 
 *                          items: 
 *                              $ref: '#/components/schemas/City'
 *          404:
 *              description: The city not found
 *              content:
 *                  application/json:
 *                      schema: 
 *                          $ref: '#/components/schemas/CityNotFound'
 *       
 */
// delete city
CityRouter.delete('/:id', citiesController.deleteCity);

export default CityRouter;