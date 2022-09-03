/* Importing the DataTypes object from the sequelize module. */
const { DataTypes } = require('sequelize');
const DB = require("../../config/postgres");

const PairTransaction = require('../PairTransaction/PairTransaction');

const Order = DB.CONNECTION.define('Order',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    type: {
        type: DataTypes.STRING(50), // BUY-SELL
        allowNull: true,
        defaultValue: null,
        unique: false,
    },
    amount: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
        unique: false,
    },
    datetime: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
    }
},{
    createdAt: false,
    updatedAt: false,
    tableName: 'Order',
});

PairTransaction.hasMany(Order);
Order.belongsTo(PairTransaction);

Order.sync();
//Order.sync({ force: true });
//(async () => {
//    await Order.sync({ force: false });
//    // Code here
//})();

module.exports = Order;

