/* Importing the Coin model from the models folder. */
let Coin = require('../../models/Coin/Coin');

// GET
async function getData(req, res) {
    let coin = null;
    let coinId = null;
    let params={};
    try {
        params = req.params;
        if ("id" in params) {
            coinId = req.params.id;
            coin = await Coin.findOne({where: {id: coinId}});
        }

        if (Object.keys(params).length === 0){
            coin = await Coin.findAll();
        }

        if(coin==null){
            res.status(404).send({info: "Not found."});
        }else {
            res.status(200).send(coin);
        }

    } catch (e) {
        res.status(400).send({info: e.original.message});

    }
}

// POST
async function postData(req, res) {
    let coin = null;
    let coinBody = null;
    try {
        coinBody = req.body;
        coin = await Coin.create(coinBody);
        res.status(201).send(coin);
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

// PUT
async function putData(req, res) {
    let coin = null;
    let coinId = null;
    let coinToUpdate = null;
    try {
        coinId = req.params.id;
        coin = req.body;
        coinToUpdate = await Coin.findOne({where: {id: coinId}});
        coinToUpdate.set(coin);
        await coinToUpdate.save();
        res.status(201).send(coinToUpdate)
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

// DELETE
async function deleteData(req, res) {
    let coin = null;
    let coinId = null;
    let coinToUpdate = null;
    try {
        coinId = req.params.id;
        coin = req.body;
        coinToUpdate = await Coin.findOne({where: {id: coinId}});
        coinToUpdate.set(coin);
        await coinToUpdate.destroy();
        res.status(202).send(coinToUpdate)
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

exports.getData = getData;
exports.postData = postData;
exports.putData = putData;
exports.deleteData = deleteData;
