
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  order:{
    type: Array,
    required: [true, "Обовязковий"],
    index: true
  }
});

module.exports = mongoose.model('Order', schema, 'Orders');
