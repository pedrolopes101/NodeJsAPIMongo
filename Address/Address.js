// Address.js
var mongoose = require('mongoose');  
var AddressSchema = new mongoose.Schema({  
  street: String,
  number: String,
  postcode: String
});
mongoose.model('Address', AddressSchema);
module.exports = mongoose.model('Address');


