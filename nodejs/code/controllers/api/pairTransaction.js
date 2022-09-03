/* Importing the PairTransaction model from the models folder. */
let PairTransaction = require('../../models/PairTransaction/PairTransaction');

// GET
async function getData(req, res) {
    let pairTransaction = null;
    let pairTransactionId = null;
    let params={};
    try {
        params = req.params;
        if ("id" in params) {
            pairTransactionId = req.params.id;
            pairTransaction = await PairTransaction.findOne({where: {id: pairTransactionId}});
        }

        if (Object.keys(params).length === 0){
            pairTransaction = await PairTransaction.findAll();
        }

        if(pairTransaction==null){
            res.status(404).send({info: "Not found."});
        }else {
            res.status(200).send(pairTransaction);
        }

    } catch (e) {
        res.status(400).send({info: e.original.message});

    }
}

// POST
async function postData(req, res) {
    let pairTransaction = null;
    let pairTransactionBody = null;
    try {
        pairTransactionBody = req.body;
        pairTransaction = await PairTransaction.create(pairTransactionBody);
        res.status(201).send(pairTransaction);
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

// PUT
async function putData(req, res) {
    let pairTransaction = null;
    let pairTransactionId = null;
    let pairTransactionToUpdate = null;
    try {
        pairTransactionId = req.params.id;
        pairTransaction = req.body;
        pairTransactionToUpdate = await PairTransaction.findOne({where: {id: pairTransactionId}});
        pairTransactionToUpdate.set(pairTransaction);
        await pairTransactionToUpdate.save();
        res.status(201).send(pairTransactionToUpdate)
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

// DELETE
async function deleteData(req, res) {
    let pairTransaction = null;
    let pairTransactionId = null;
    let pairTransactionToUpdate = null;
    try {
        pairTransactionId = req.params.id;
        pairTransaction = req.body;
        pairTransactionToUpdate = await PairTransaction.findOne({where: {id: pairTransactionId}});
        pairTransactionToUpdate.set(pairTransaction);
        await pairTransactionToUpdate.destroy();
        res.status(202).send(pairTransactionToUpdate)
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

exports.getData = getData;
exports.postData = postData;
exports.putData = putData;
exports.deleteData = deleteData;
