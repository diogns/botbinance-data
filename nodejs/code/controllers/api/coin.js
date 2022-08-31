const moment = require('moment');
const axios = require('axios');
let Coin = require('../../models/Coin/Coin');
const DB = require('../../config/postgres');

/*
async function getData(req, res) {

    let coin = null;
    let coinBody = null;
    let coinId = null;
    let menu = null;
    let coinSaved = null;
    let coinId = null;
    try {

        // GET
        if (req.method === "GET") {
            if ("coinId" in req.params) {
                coinId = req.params.coinId;
            }
            console.log("xx");
            menu = await Coin.getCoin(coinId);
            if (menu === null){
                res.status(404).send({info: 'Not found.'});
            }else{
                res.status(200).send(menu)
            }
        }


        // POST
        if (req.method === "POST") {
            coinBody = req.body;
            coin = await Coin.create(coinBody);
            res.status(201).send(coin)
        }

        // PUT
        if(req.method === "PUT") {
            coinId = req.params.coinId;
            coin = req.body;
            coinSaved = await Coin.putCoin(coinId,coin);

                res.status(204).send(coinSaved)

        }

        if(req.method === "DELETE") {
            coinId = req.params.id;
            await Coin.deleteCoin(coinId);
            res.status(202).send({info: 'deleted.'})
        }


    } catch (e) {
        res.status(400).send({info: e.message});

    }


}
*/


// GET
async function getData(req, res) {

    let coin = null;
    let coinBody = null;
    let coinId = null;
    let menu = null;
    let coinSaved = null;
    let params={};
    try {

        console.log( req.params);
        params = req.params;
        if ("id" in params) {
            coinId = req.params.id;
            coin = await Coin.findAll({
                where: {
                    id: coinId
                }
            });
        }

        if (params==={}){
            console.log("xxxx");
            coin = await Coin.findAll();
        }
        //if ("coinId" in req.params) {
        //    coinId = req.params.coinId;
        //}
        //console.log("xx");
        console.log("yyyy");

        let rows = await Coin.findAll({});


        console.log(rows);
        //if (menu === null){
        //    res.status(404).send({info: 'Not found.'});
        //}else{
        //    res.status(200).send(menu)
        //}

        res.status(200).send(coin);

    } catch (e) {
        res.status(400).send({info: e.message});

    }


}


async function postData(req, res) {

    let coin = null;
    let coinBody = null;
    let coinId = null;
    let menu = null;
    let coinSaved = null;
    let params={};
    try {

        coinBody = req.body;
        coin = await Coin.create(coinBody);
        res.status(201).send(coin)

    } catch (e) {
        res.status(400).send({info: e.message});

    }


}
//exports.getData = getData;
//exports.postData = postData;

const coin = {
    getData: async function (req,res){

        try {
            await DB.CONNECTION.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
        res.status(200).send("coin");

    }
};

module.exports = coin;

//async function getData(req, res){
//    res.send('NOT IMPLEMENTED: BookInstance list');

//}
//exports.getData =getData;