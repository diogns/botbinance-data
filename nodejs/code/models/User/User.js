/* Importing the DataTypes object from sequelize module. */
const { DataTypes } = require('sequelize');
const DB = require("../../config/postgres");

const User = DB.CONNECTION.define('User',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    wallet: {
        type: DataTypes.STRING(500),
        unique: true
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
    tableName: 'User',

});

User.sync();
//User.sync({ force: true });
//(async () => {
//    await User.sync({ force: false });
//    // Code here
//})();
module.exports = User;

