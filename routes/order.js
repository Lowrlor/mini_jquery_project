var express = require('express');
var router = express.Router();
const order_controller = require('../controllers/order.js');


router.get('/', order_controller.list)

module.exports = router;
