import {Router} from 'express';
import {
    createAtmDetail,
    getAtmDetails,
    getOneAtmDetail,
    updateAtmDetail,
    deleteAtmDetail,
} from '../controllers/atmDetail.controller.js';

const router = Router();

router
    .post('/', createAtmDetail)
    .get('/', getAtmDetails)
    .get('/:id', getOneAtmDetail)
    .put('/:id', updateAtmDetail)
    .delete('/:id', deleteAtmDetail)

export default router;