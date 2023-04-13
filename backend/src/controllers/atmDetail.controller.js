import atmDetailModel from '../models/atmDetail.model.js';

//hundred, fifty, twenty, ten, atm_id

export const createAtmDetail = async (req, res) => {
    const { hundred, fifty, twenty, ten, atm_id } = req.body;
    if (
        hundred == null ||
        fifty == null ||
        twenty == null ||
        ten == null ||
        atm_id == null //add query
    ) {
        res.status(400).json({
            message: 'Only propertie "status" can be empty.'
        });
    } else {
        const newAtmDetail = await atmDetailModel.create({
            hundred,
            fifty,
            twenty,
            ten,
            atm_id
        });
        res.status(201).json(newAtmDetail)
    }
}

export const getAtmDetails = async (req, res) => {
    const atmDetails = await atmDetailModel.findAll()
    atmDetails.length != 0 ? res.send(atmDetails) : res.status(404).json({
        message: 'At the moment we have no ATMDetails to show. Please create one before using this request.'
    });
}

export const getOneAtmDetail = async (req, res) => {
    const { id } = req.params
    const atmDetail = await atmDetailModel.findByPk(id)
    atmDetail ? res.send(atmDetail) : res.status(404).json({
        message: `At the moment we have no ATMDetail with id: ${id} to show. Please make sure that the provided id exists in the database.`
    });
}

export const updateAtmDetail = async (req, res) => {
    const { id } = req.params
    const atmDetailToUpdate = await atmDetailModel.findByPk(id)
    if (atmDetailToUpdate) {
        const { hundred, fifty, twenty, ten, atm_id } = req.body;
        atmDetailToUpdate.hundred = hundred
        atmDetailToUpdate.fifty = fifty
        atmDetailToUpdate.twenty = twenty
        atmDetailToUpdate.ten = ten
        atmDetailToUpdate.atm_id = atm_id;
        await atmDetailToUpdate.save();
        res.status(200).json(atmDetailToUpdate);
    } else {
        res.status(404).json({
            message: `At the moment we have no ATMDetail with id: ${id} to show. Please make sure that the provided id exists in the database.`
        });
    }
}

export const deleteAtmDetail = async (req, res) => {
    const { id } = req.params
    const atmDetailToDelete = await atmDetailModel.findByPk(id)

    if (atmDetailToDelete) {
        await atmDetailModel.destroy({
            where: {
                id
            }
        })
        res.status(200).json({
            message: `The ATMDetail with id: ${id} was successfully deleted.`
        });
    } else {
        res.status(404).json({
            message: `The ATMDetail with id: ${id} doesn't exist in the database.`
        })
    }
}