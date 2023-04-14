
import sequelize from '../database/atm.database.js';

import { DataTypes } from 'sequelize';

const cityModel = sequelize.define('city', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    name: {
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true,
        }
    }, 
    {  
        tableName: "citys", 
        timestamps: false 
    }
);

export default  cityModel;