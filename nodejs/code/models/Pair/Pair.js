/* Importing the DataTypes object from the sequelize module. */
const { DataTypes } = require('sequelize');
const DB = require("../../config/postgres");

const Pair = DB.CONNECTION.define('Pair',{
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
    tableName: 'Pair',

});
Pair.sync();
//Pair.sync({ force: true });
//(async () => {
//    await Pair.sync({ force: false });
//    // Code here
//})();

module.exports = Pair;

