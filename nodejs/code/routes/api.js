const express = require("express");
const router = express.Router();

let coin=require("../controllers/api/coin");
let pair=require("../controllers/api/pair");
let pairCoin=require("../controllers/api/pairCoin");

/*
##################################################################################
#       Endpoints de GETTERS AND SETTERS de los modelos
#
##################################################################################
*/
let ingress = "/api/data/v1";

router.get(ingress+"/coin/",coin.getData);
router.get(ingress+"/coin/:id",coin.getData);
router.post(ingress+"/coin/",coin.postData);
router.put(ingress+"/coin/:id",coin.putData);
router.delete(ingress+"/coin/:id",coin.deleteData);

router.get(ingress+"/pair/",pair.getData);

router.get(ingress+"/pairCoin/",pairCoin.getData);

module.exports = router;