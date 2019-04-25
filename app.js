// app.js
var express = require('express');
var app = express();
var db = require('./db'); //ADD THIS LINE
module.exports = app;
// ADD THESE TWO LINES
var AddressController = require('./address/AddressController');
app.use('/addresses', AddressController);

var UserController = require('./user/UserController');
app.use('/users', UserController);