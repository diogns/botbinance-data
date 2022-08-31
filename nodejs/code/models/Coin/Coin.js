const { DataTypes } = require('sequelize');
const DB = require('../../config/postgres');

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

/*
*
*
*
*
const User = db.define('user', {
    id: {type: Sql.INTEGER,
         primaryKey:true,
         min: 1},
    name: {type: Sql.STRING,
           allowNull: false,
           min: 2,
           max: 50
        },
    email: {type: Sql.STRING,
            isEmail: true},
    encrypted_password: {type: Sql.STRING, min: 8},
    createdAt: Sql.DATE,
    updatedAt: Sql.DATE
});


// This is an hook function
User.beforeSave((user, options) => {
   // Do something
});

// This is a class method
User.classMethod = function (params) {
    // Do something with params
}

// This is an instance method
User.prototype.instanceMethod = function (params) {
    // Do something with params
}
*
*
* */