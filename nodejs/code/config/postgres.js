'use strict';

const path = require('path');
const Sequelize = require('sequelize');
const db = {};

const DB = process.env.SQL_DATABASE;
const USER = process.env.SQL_USER;
const PASSWORD = process.env.SQL_PASSWORD;
const HOST =process.env.SQL_HOST;
const DIALECT =process.env.DIALECT;
const PORT = process.env.SQL_PORT;

const CONNECTION = new Sequelize(
    DB,
    USER,
    PASSWORD,
    {
        host: HOST,
        dialect: DIALECT,
        port: PORT,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: false

    }
)

module.exports.CONNECTION = CONNECTION;