const mongoose = require('mongoose');
const sharp = require('sharp');
var path = require('path');
const fs = require('fs');
const fse = require('fs-extra')
const schema = new mongoose.Schema({
  img:{
    type: String,
  },
  name:{
    type: String,
    required: [true, "Назва обовязкова"],
    index: true,
    unique: true
  },
  weight:{
    type: String,
    required: [true, "Назва обовязкова"],
  },
  price:{
    type: String,
    required: [true, "Назва обовязкова"],
  }
});


schema.pre('save', function(next) {
  var directories = path.resolve();
  var path_to_resize_photo = path.join(directories, "tmp",this.img)
  var path_to_save_photo = path.join(directories, "uploads", this.img)
  console.log(path_to_resize_photo);
  console.log(path_to_save_photo);
  sharp(path_to_resize_photo)
  .resize(200, 200, "!")
  .toFile(path_to_save_photo, (err, info) => {console.log(err)});
  setTimeout(cleen_tmp, 1000);
  next()
});
function cleen_tmp() {
  fse.emptyDir('tmp', err => {
     if (err) return console.error(err)
     console.log('success!')
   })
}
module.exports = mongoose.model('Dish', schema, 'Dishs');
