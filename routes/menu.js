var express = require('express');
var router = express.Router();
const menu_controller = require('../controllers/menu.js');
const Menu = require('../models/menu.model.js');
var multer  = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'tmp/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() +".png")
  }
})

var upload = multer({ storage: storage })


router.get('/', menu_controller.main)
router.post('/', upload.any('picture'), menu_controller.add)

module.exports = router;
