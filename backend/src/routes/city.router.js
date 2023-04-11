import { Router } from "express";
import citiesController from "../controllers/citiesController";

const router = Router();


// create  city
router.post('/', citiesController.createCity);

//get all cities
router.get('/', citiesController.getCities);

//get city
router.get('/:id', citiesController.updateCity);

//update city
router.put('/:id', citiesController.updateCity);

// delete citi
router.delete('/:id', citiesController.deleteCity);

export default router;
