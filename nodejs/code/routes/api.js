const express = require("express");
const router = express.Router();

let account=require("../controllers/api/account");
let coin=require("../controllers/api/coin");
let order=require("../controllers/api/order");
let pair=require("../controllers/api/pair");
let pairCoin=require("../controllers/api/pairCoin");
let pairTransaction=require("../controllers/api/pairTransaction");
let user=require("../controllers/api/user");

/*
##################################################################################
#       Endpoints de GETTERS AND SETTERS de los modelos
#
##################################################################################
*/
let ingress = "/api/data/v1";

router.get(ingress+"/account/",account.getData);
router.get(ingress+"/account/:id",account.getData);
router.post(ingress+"/account/",account.postData);
router.put(ingress+"/account/:id",account.putData);
router.delete(ingress+"/account/:id",account.deleteData);

router.get(ingress+"/coin/",coin.getData);
router.get(ingress+"/coin/:id",coin.getData);
router.post(ingress+"/coin/",coin.postData);
router.put(ingress+"/coin/:id",coin.putData);
router.delete(ingress+"/coin/:id",coin.deleteData);

router.get(ingress+"/order/",order.getData);
router.get(ingress+"/order/:id",order.getData);
router.post(ingress+"/order/",order.postData);
router.put(ingress+"/order/:id",order.putData);
router.delete(ingress+"/order/:id",order.deleteData);

router.get(ingress+"/pair/",pair.getData);
router.get(ingress+"/pair/:id",pair.getData);
router.post(ingress+"/pair/",pair.postData);
router.put(ingress+"/pair/:id",pair.putData);
router.delete(ingress+"/pair/:id",pair.deleteData);

router.get(ingress+"/pairCoin/",pairCoin.getData);
router.get(ingress+"/pairCoin/:id",pairCoin.getData);
router.post(ingress+"/pairCoin/",pairCoin.postData);
router.put(ingress+"/pairCoin/:id",pairCoin.putData);
router.delete(ingress+"/pairCoin/:id",pairCoin.deleteData);

router.get(ingress+"/pairTransaction/",pairTransaction.getData);
router.get(ingress+"/pairTransaction/:id",pairTransaction.getData);
router.post(ingress+"/pairTransaction/",pairTransaction.postData);
router.put(ingress+"/pairTransaction/:id",pairTransaction.putData);
router.delete(ingress+"/pairTransaction/:id",pairTransaction.deleteData);

router.get(ingress+"/user/",user.getData);
router.get(ingress+"/user/:id",user.getData);
router.post(ingress+"/user/",user.postData);
router.put(ingress+"/user/:id",user.putData);
router.delete(ingress+"/user/:id",user.deleteData);

module.exports = router;