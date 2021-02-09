var express = require('express');
var router = express.Router();
const order_controller = require('../controllers/api.order.js');
const Order = require('../models/order.model.js');



router.get('/', order_controller.list)
router.post('/', order_controller.new_order)
// router.delete('/removeAll', order_controller.remove_many)
// router.delete('/remove/:id', order_controller.remove)
// router.get('/search/:name', order_controller.search_by_name)
// router.get('/search-by-id/:id', order_controller.search_by_id)

module.exports = router;
