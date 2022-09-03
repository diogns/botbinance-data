/* Importing the Account model from the models folder. */
let Account = require('../../models/Account/Account');

// GET
async function getData(req, res) {
    let account = null;
    let accountId = null;
    let params={};
    try {
        params = req.params;
        if ("id" in params) {
            accountId = req.params.id;
            account = await Account.findOne({where: {id: accountId}});
        }

        if (Object.keys(params).length === 0){
            account = await Account.findAll();
        }

        if(account==null){
            res.status(404).send({info: "Not found."});
        }else {
            res.status(200).send(account);
        }

    } catch (e) {
        res.status(400).send({info: e.original.message});

    }
}

// POST
async function postData(req, res) {
    let account = null;
    let accountBody = null;
    try {
        accountBody = req.body;
        account = await Account.create(accountBody);
        res.status(201).send(account);
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

// PUT
async function putData(req, res) {
    let account = null;
    let accountId = null;
    let accountToUpdate = null;
    try {
        accountId = req.params.id;
        account = req.body;
        accountToUpdate = await Account.findOne({where: {id: accountId}});
        accountToUpdate.set(account);
        await accountToUpdate.save();
        res.status(201).send(accountToUpdate)
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

// DELETE
async function deleteData(req, res) {
    let account = null;
    let accountId = null;
    let accountToUpdate = null;
    try {
        accountId = req.params.id;
        account = req.body;
        accountToUpdate = await Account.findOne({where: {id: accountId}});
        accountToUpdate.set(account);
        await accountToUpdate.destroy();
        res.status(202).send(accountToUpdate)
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

exports.getData = getData;
exports.postData = postData;
exports.putData = putData;
exports.deleteData = deleteData;
