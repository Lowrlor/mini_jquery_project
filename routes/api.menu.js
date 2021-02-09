var express = require('express');
var router = express.Router();
const menu_controller = require('../controllers/api.menu.js');
const Menu = require('../models/menu.model.js');



router.get('/', menu_controller.list)
router.delete('/removeAll', menu_controller.remove_many)
router.delete('/remove/:id', menu_controller.remove)
router.get('/search/:name', menu_controller.search_by_name)
router.get('/search-by-id/:id', menu_controller.search_by_id)

module.exports = router;
