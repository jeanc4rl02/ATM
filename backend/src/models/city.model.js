
import atmDatabase from '../database/atm.database.js';

import { DataTypes } from 'sequelize';

const cityModel = atmDatabase.define('City', { 
        name: {
            type: DataTypes.STRING,
            allowNull: false,  
        }
    }, 
    { 
        tableName: "City", 
        timestamps: false 
    }
);

export default  cityModel;