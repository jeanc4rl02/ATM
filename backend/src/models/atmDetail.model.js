// Description: This file contains the atm-details model
// Author: Juan David Ospina Ortega

// Import sequelize instance (Database connection) //same conection......
import atmDatabase from '../database/atm.database.js';

// Import datatypes from sequelize
import { DataTypes } from 'sequelize';

// Import atmModel to foreingkey
import atmModel from './atm.model.js';

// Define account model
const atmDetailModel = atmDatabase.define('atmDetail', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    hundred: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    fifty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    twenty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ten: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    atm_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        tableName: 'atm'
    },
}, 
{ 
    tableName: 'atm_details', 
    timestamps: false 
});

// add relation
atmModel.hasMany(atmDetailModel, {
    foreignKey: 'atm_id',
    targetId: 'id',
    allowNull: flase
});

// Export account model
export default atmDetailModel;
