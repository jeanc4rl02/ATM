// Description: This file contains the account model
// Author: Sebastián Gámez Ariza

// Import sequelize instance (Database connection)
import atmDatabase from '../database/atm.database.js';

// Import datatypes from sequelize
import { DataTypes } from 'sequelize';

// Define account model
const accountModel = atmDatabase.define('account', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    identification: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    accountNumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        tableName: 'account_number'
    },
    balance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    clientName: {
        type: DataTypes.STRING,
        allowNull: false,
        tableName: 'client_name'
    },
    pin: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, { tableName: 'accounts', timestamps: false } );

// Export account model
export default accountModel;
