import {Router} from 'express';
import {
    createAtm, 
    deleteAtm, 
    getAtms,
    getOneAtm,
    updateAtm,
} from '../controllers/atm.controller.js';

const router = Router();

router
    .get('/', getAtms)
    .get('/:id', getOneAtm)
    .post('/', createAtm)
    .put('/:id', updateAtm)
    .delete('/:id', deleteAtm)

export default router;