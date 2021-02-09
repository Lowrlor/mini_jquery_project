const Order = require('../models/order.model.js');
exports.list = function(req, res) {
  Order.find({}, function (err, doc) {
    res.send(doc)
  })
}
exports.new_order = function(req, res) {
  console.log(req.body);
  new_order = new Order({order:req.body})
  console.log(new_order);
  new_order.save(function (err) {
  if (err) return res.status(400).send(err);
    res.status(200).send("new_order")
  })
}
