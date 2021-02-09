const Menu = require('../models/menu.model.js');
const fs = require('fs');
exports.list = function(req, res) {
  Menu.find({}, function (err,doc) {
    res.send(doc)
  })
}
exports.remove = function(req, res) {
  Menu.findOneAndRemove({_id: req.params.id}, function (err, item) {
    try {
      fs.unlinkSync('uploads/'+item.img);
      console.log("successfully");
    } catch (err) {
      console.log(err);
    }
    res.send(item)

  })
}
exports.search_by_name = function(req, res) {
  console.log(req.params.name);
  Menu.findOne({name: req.params.name}, function (err, item) {
    res.send(item)

  })
}
exports.search_by_id = function(req, res) {
  console.log(req.params.id);
  Menu.findOne({_id: req.params.id}, function (err, item) {
    res.send(item)

  })
}
exports.remove_many = function(req, res) {
  Menu.deleteMany({}, function (err, item) {
    res.send(item)

  })
}
