var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//创建Schema
var userSchema = new Schema({
  userName:String,
  password:String,
  psnName:String
});
module.exports = userSchema;