const express = require('express');
const router = express.Router();

let coin=require('../controllers/api/coin');


/*
##################################################################################
#       Endpoints de GETTERS AND SETTERS de los modelos
#
##################################################################################
*/
let ingress = '/api/data/v1';
router.get(ingress+'/coin/',coin.getData);
router.get(ingress+'/coin/:id',coin.getData);

//router.get(ingress+'/coin/',coin.getData);

module.exports = router;