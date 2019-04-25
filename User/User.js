// User.js
const Schema = require('mongoose').Schema;
var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String,
  address : [{ type: Schema.Types.ObjectId, ref: 'Address' }]
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');



