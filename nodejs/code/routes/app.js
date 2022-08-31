const express = require('express');
const router = express.Router();

let dataByCoin=require('../controllers/dataByCoin');


/*
##################################################################################
#       Endpoints relacionados con la consulta y almacenamiento
#       de puntos por PAR DE MONEDA y TIEMPO
##################################################################################
*/
let ingress = '/api/data/v1';
router.get(ingress+'/dataByCoin/',dataByCoin.getData);

module.exports = router;