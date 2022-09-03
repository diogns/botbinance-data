/* Importing the DataTypes object from the sequelize module. */
const { DataTypes } = require('sequelize');
const DB = require("../../config/postgres");

const Account = DB.CONNECTION.define('Account',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
        unique: true

    },

    wallet: {
        type: DataTypes.STRING(250),
        allowNull: true,
        defaultValue: null,
        unique: true

    },

    key: {
        type: DataTypes.STRING(250),
        allowNull: true,
        defaultValue: null,
        unique: true

    },
},{
    createdAt: false,
    updatedAt: false,
    tableName: 'Account',

});
Account.sync();
//Account.sync({ force: true });
//(async () => {
//    await Account.sync({ force: false });
//    // Code here
//})();

module.exports = Account;

