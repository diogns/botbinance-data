/* Importing the DataTypes object from the sequelize module. */
const { DataTypes } = require('sequelize');
const DB = require("../../config/postgres");

const User = require('../User/User');
const Pair = require('../Pair/Pair');

const PairTransaction = DB.CONNECTION.define('PairTransaction',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    status: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: "CLOSE", // CLOSE/OPEN
        unique: false
    },

    isTest: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
        unique: false
    },

    amount: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: null,
        unique: false
    },

},{
    createdAt: false,
    updatedAt: false,
    tableName: 'PairTransaction',
});

User.hasMany(PairTransaction);
PairTransaction.belongsTo(User);

Pair.hasMany(PairTransaction);
PairTransaction.belongsTo(Pair);

PairTransaction.sync();
//PairTransaction.sync({ force: true });
//(async () => {
//    await PairTransaction.sync({ force: false });
//    // Code here
//})();

module.exports = PairTransaction;

