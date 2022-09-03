/* Importing the DataTypes object from the sequelize module. */
const { DataTypes } = require('sequelize');
const DB = require("../../config/postgres");

const Coin = DB.CONNECTION.define('Coin',{
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
    abbreviation: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
        unique: true

    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: null,
        unique: false

    },


},{
    createdAt: false,
    updatedAt: false,
    tableName: 'Coin',

});
Coin.sync();
//Coin.sync({ force: true });
//(async () => {
//    await Coin.sync({ force: false });
//    // Code here
//})();

module.exports = Coin;

