/* Importing the DataTypes object from the sequelize module. */
const { DataTypes } = require('sequelize');
const DB = require("../../config/postgres");

const Coin = require('../Coin/Coin');
const Pair = require('../Pair/Pair');

const PairCoin = DB.CONNECTION.define('PairCoin',{
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
},{
    createdAt: false,
    updatedAt: false,
    tableName: 'PairCoin',

});

Coin.hasMany(PairCoin);
PairCoin.belongsTo(Coin);

Pair.hasMany(PairCoin);
PairCoin.belongsTo(Pair);

PairCoin.sync();
//PairCoin.sync({ force: true });
//(async () => {
//    await PairCoin.sync({ force: false });
//    // Code here
//})();
module.exports = PairCoin;

