/* Importing the PairCoin model from the models folder. */
let PairCoin = require('../../models/PairCoin/PairCoin');

// GET
async function getData(req, res) {
    let pairCoin = null;
    let pairCoinId = null;
    let params={};
    try {
        params = req.params;
        if ("id" in params) {
            pairCoinId = req.params.id;
            pairCoin = await PairCoin.findOne({where: {id: pairCoinId}});
        }

        if (Object.keys(params).length === 0){
            pairCoin = await PairCoin.findAll();
        }

        if(pairCoin==null){
            res.status(404).send({info: "Not found."});
        }else {
            res.status(200).send(pairCoin);
        }

    } catch (e) {
        res.status(400).send({info: e.original.message});

    }
}

// POST
async function postData(req, res) {
    let pairCoin = null;
    let pairCoinBody = null;
    try {
        pairCoinBody = req.body;
        pairCoin = await PairCoin.create(pairCoinBody);
        res.status(201).send(pairCoin);
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

// PUT
async function putData(req, res) {
    let pairCoin = null;
    let pairCoinId = null;
    let pairCoinToUpdate = null;
    try {
        pairCoinId = req.params.id;
        pairCoin = req.body;
        pairCoinToUpdate = await PairCoin.findOne({where: {id: pairCoinId}});
        pairCoinToUpdate.set(pairCoin);
        await pairCoinToUpdate.save();
        res.status(201).send(pairCoinToUpdate)
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

// DELETE
async function deleteData(req, res) {
    let pairCoin = null;
    let pairCoinId = null;
    let pairCoinToUpdate = null;
    try {
        pairCoinId = req.params.id;
        pairCoin = req.body;
        pairCoinToUpdate = await PairCoin.findOne({where: {id: pairCoinId}});
        pairCoinToUpdate.set(pairCoin);
        await pairCoinToUpdate.destroy();
        res.status(202).send(pairCoinToUpdate)
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

exports.getData = getData;
exports.postData = postData;
exports.putData = putData;
exports.deleteData = deleteData;
