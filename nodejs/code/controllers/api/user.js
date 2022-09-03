/* Importing the User model from the models folder. */
let User = require('../../models/User/User');

// GET
async function getData(req, res) {
    let user = null;
    let userId = null;
    let params={};
    try {
        params = req.params;
        if ("id" in params) {
            userId = req.params.id;
            user = await User.findOne({where: {id: userId}});
        }

        if (Object.keys(params).length === 0){
            user = await User.findAll();
        }

        if(user==null){
            res.status(404).send({info: "Not found."});
        }else {
            res.status(200).send(user);
        }

    } catch (e) {
        res.status(400).send({info: e.original.message});

    }
}

// POST
async function postData(req, res) {
    let user = null;
    let userBody = null;
    try {
        userBody = req.body;
        user = await User.create(userBody);
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

// PUT
async function putData(req, res) {
    let user = null;
    let userId = null;
    let userToUpdate = null;
    try {
        userId = req.params.id;
        user = req.body;
        userToUpdate = await User.findOne({where: {id: userId}});
        userToUpdate.set(user);
        await userToUpdate.save();
        res.status(201).send(userToUpdate)
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

// DELETE
async function deleteData(req, res) {
    let user = null;
    let userId = null;
    let userToUpdate = null;
    try {
        userId = req.params.id;
        user = req.body;
        userToUpdate = await User.findOne({where: {id: userId}});
        userToUpdate.set(user);
        await userToUpdate.destroy();
        res.status(202).send(userToUpdate)
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

exports.getData = getData;
exports.postData = postData;
exports.putData = putData;
exports.deleteData = deleteData;
