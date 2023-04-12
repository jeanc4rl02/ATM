import { Router } from "express";
import * as citiesController from "../controllers/city.controller.js";

const CityRouter = Router();


// create  city
CityRouter.post('/', citiesController.createCity);

//get all cities
CityRouter.get('/', citiesController.getCities);

//get city
CityRouter.get('/:id', citiesController.updateCity);

//update city
CityRouter.put('/:id', citiesController.updateCity);

// delete citi
CityRouter.delete('/:id', citiesController.deleteCity);

export default CityRouter;