
import sequelize from '../database/atm.database.js';

import { DataTypes } from 'sequelize';

const cityModel = sequelize.define('city', { 
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