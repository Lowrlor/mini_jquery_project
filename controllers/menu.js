const Menu = require('../models/menu.model.js');
exports.main = function(req, res) {
  Menu.find({}, function (err,doc) {
    res.render("menu")
  })
}
exports.add = function(req, res) {
  new_dish = new Menu({
    img: req.files[0].filename,
    name: req.body.name,
    weight: req.body.weight,
    price: req.body.price
  })
  console.log(new_dish);
  new_dish.save(function (err) {
  if (err) return res.status(400).send(err);
    res.status(200).send("new_dish")
  })
}
