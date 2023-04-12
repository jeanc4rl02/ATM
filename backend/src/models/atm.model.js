import sequelize from '../database/atm.database.js';
import { DataTypes } from 'sequelize';
import cityModel from './city.model.js';

const atmModel = sequelize.define('atm', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {   //enabled
        type: DataTypes.BOOLEAN,
        defaultValue: true 
    },
    max_amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    min_amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'atms'
});

cityModel.hasMany(atmModel, {
    foreignKey: 'city_id',
    targetId: 'id',
    allowNull: false
});

export default atmModel;