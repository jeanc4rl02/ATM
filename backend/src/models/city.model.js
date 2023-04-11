
import atmDatabase from '../database/atm.database.js';

import { DataTypes } from 'sequelize';

const cityModel = atmDatabase.define('City', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false, 
        tableName: 'city_name'
    }
}, { tableName: 'City', timestamps: false });

export default  cityModel;