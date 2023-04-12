import atmModel from '../models/atm.model.js';
import { v4 as uuid } from 'uuid';

export const getAtms = async(req, res) => {
    const atms = await atmModel.findAll()
    atms.length != 0 ? res.send(atms) : res.status(404).json({
        message: 'At the moment we have no ATMs to show. Please create one before using this request.'
    });
}


export const getOneAtm = async(req, res) => {
    const {id} = req.params
    const atm = await atmModel.findByPk(id)
    atm ? res.send(atm) : res.status(404).json({
        message: `At the moment we have no ATM with id: ${id} to show. Please make sure that the provided id exists in the database.`
    });
}


export const createAtm = async (req, res) => {
    const {status, max_amount, min_amount, address, city_id} = req.body;
    if(
        max_amount == null||
        min_amount == null||
        address == null ||
        city_id == null
    ){
        res.status(400).json({
            message: 'Only propertie "status" can be empty.'
        });
    } else {
        try {
            const newAtm = await atmModel.create({
                code: uuid(),
                status,
                max_amount,
                min_amount,
                address,
                city_id
            });
            res.status(201).json(newAtm)
        } catch (error) {
            console.log(error.message);
            res.status(400).json({message: error.message});
        }
    }
}


export const updateAtm = async (req, res) => {
    const {id} = req.params
    const atmToUpdate = await atmModel.findByPk(id)
    if(atmToUpdate){
        try {
            const {status, max_amount, min_amount, address, city_id} = req.body;
            atmToUpdate.status = status
            atmToUpdate.max_amount = max_amount
            atmToUpdate.min_amount = min_amount
            atmToUpdate.address = address
            atmToUpdate.city_id = city_id
            await atmToUpdate.save();
            console.log(atmToUpdate);
            res.status(200).json(atmToUpdate);
        } catch (error) {
            console.log(error.message);
            res.status(400).json({message: error.message});
        }
    } else {
        res.status(404).json({
            message: `At the moment we have no ATM with id: ${id} to show. Please make sure that the provided id exists in the database.`
        });
    }
}


export const deleteAtm = async (req, res) => {
    const {id} = req.params
    const atmToDelete = await atmModel.findByPk(id)
    if(atmToDelete){
        try {
            await atmModel.destroy({
                where: {
                    id
                }
            })
            res.status(200).json({
                message:`The ATM with id: ${id} was successfully deleted.`
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({message: error.message});
        }
        
    } else {
        res.status(404).json({
            message: `The ATM with id: ${id} doesn't exist in the database.`
        })
    }
}