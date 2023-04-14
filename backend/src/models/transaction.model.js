// Description: This file contains the transaction model
// Author: Sebastián Gámez Ariza

// Import sequelize instance (Database connection)
import atmDatabase from '../database/atm.database.js';

// Import datatypes from sequelize
import { DataTypes } from 'sequelize';

// Import account model
import accountModel from './account.model.js';

// Import atm model
import atmModel from './atm.model.js';

// Define account model
const transactionModel = atmDatabase.define('transaction', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    transactionDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        tableName: 'transaction_date'
    },
    transactionType: {
        type: DataTypes.STRING,
        allowNull: false,
        tableName: 'transaction_type'
    },
    hundred: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    fifty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    twenty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    ten: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
}, { tableName: 'transactions', timestamps: false } );

// Create relationship with account model
transactionModel.belongsTo( accountModel, { 
    foreignKey: 'accountId', 
    field: 'account_id',
    as: 'account'
});

// Create relationship with atm model
transactionModel.belongsTo( atmModel, { 
    foreignKey: 'atmId',
    field: 'atm_id',
    as: 'atm'
});

// Export account model
export default transactionModel;
