/* Importing the Pair model from the models folder. */
let Pair = require('../../models/Pair/Pair');

// GET
async function getData(req, res) {
    let pair = null;
    let pairId = null;
    let params={};
    try {
        params = req.params;
        if ("id" in params) {
            pairId = req.params.id;
            pair = await Pair.findOne({where: {id: pairId}});
        }

        if (Object.keys(params).length === 0){
            pair = await Pair.findAll();
        }

        if(pair==null){
            res.status(404).send({info: "Not found."});
        }else {
            res.status(200).send(pair);
        }

    } catch (e) {
        res.status(400).send({info: e.original.message});

    }
}

// POST
async function postData(req, res) {
    let pair = null;
    let pairBody = null;
    try {
        pairBody = req.body;
        pair = await Pair.create(pairBody);
        res.status(201).send(pair);
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

// PUT
async function putData(req, res) {
    let pair = null;
    let pairId = null;
    let pairToUpdate = null;
    try {
        pairId = req.params.id;
        pair = req.body;
        pairToUpdate = await Pair.findOne({where: {id: pairId}});
        pairToUpdate.set(pair);
        await pairToUpdate.save();
        res.status(201).send(pairToUpdate)
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

// DELETE
async function deleteData(req, res) {
    let pair = null;
    let pairId = null;
    let pairToUpdate = null;
    try {
        pairId = req.params.id;
        pair = req.body;
        pairToUpdate = await Pair.findOne({where: {id: pairId}});
        pairToUpdate.set(pair);
        await pairToUpdate.destroy();
        res.status(202).send(pairToUpdate)
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

exports.getData = getData;
exports.postData = postData;
exports.putData = putData;
exports.deleteData = deleteData;
