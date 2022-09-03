/* Importing the Order model from the models folder. */
let Order = require('../../models/Order/Order');

// GET
async function getData(req, res) {
    let order = null;
    let orderId = null;
    let params={};
    try {
        params = req.params;
        if ("id" in params) {
            orderId = req.params.id;
            order = await Order.findOne({where: {id: orderId}});
        }

        if (Object.keys(params).length === 0){
            order = await Order.findAll();
        }

        if(order==null){
            res.status(404).send({info: "Not found."});
        }else {
            res.status(200).send(order);
        }

    } catch (e) {
        res.status(400).send({info: e.original.message});

    }
}

// POST
async function postData(req, res) {
    let order = null;
    let orderBody = null;
    try {
        orderBody = req.body;
        order = await Order.create(orderBody);
        res.status(201).send(order);
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

// PUT
async function putData(req, res) {
    let order = null;
    let orderId = null;
    let orderToUpdate = null;
    try {
        orderId = req.params.id;
        order = req.body;
        orderToUpdate = await Order.findOne({where: {id: orderId}});
        orderToUpdate.set(order);
        await orderToUpdate.save();
        res.status(201).send(orderToUpdate)
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

// DELETE
async function deleteData(req, res) {
    let order = null;
    let orderId = null;
    let orderToUpdate = null;
    try {
        orderId = req.params.id;
        order = req.body;
        orderToUpdate = await Order.findOne({where: {id: orderId}});
        orderToUpdate.set(order);
        await orderToUpdate.destroy();
        res.status(202).send(orderToUpdate)
    } catch (e) {
        res.status(400).send({info: e.original.message});
    }
}

exports.getData = getData;
exports.postData = postData;
exports.putData = putData;
exports.deleteData = deleteData;
