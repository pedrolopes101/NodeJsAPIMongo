// AddressController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Address = require('./Address');
// ADD THIS PART
// CREATES A NEW ADDRESSES
router.post('/', function (req, res) {
    Address.create({
            street : req.body.street,
            number : req.body.number,
            postcode : req.body.postcode
        }, 
        function (err, address) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(address);
        });
});
// RETURNS ALL THE ADDRESSES IN THE DATABASE
router.get('/', function (req, res) {
    Address.find({}, function (err, addresses) {
        if (err) return res.status(500).send("There was a problem finding the addresses.");
        res.status(200).send(addresses);
    });
});

// GETS A SINGLE ADDRESS FROM THE DATABASE
router.get('/:id', function (req, res) {
    Address.findById(req.params.id, function (err, address) {
        if (err) return res.status(500).send("There was a problem finding the address.");
        if (!address) return res.status(404).send("No address found.");
        res.status(200).send(address);
    });
});

// DELETES A ADDRESS FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Address.findByIdAndRemove(req.params.id, function (err, address) {
        if (err) return res.status(500).send("There was a problem deleting the address.");
        res.status(200).send("ddress "+ address.street +" was deleted.");
    });
});

// UPDATES A SINGLE ADDRESS IN THE DATABASE
router.put('/:id', function (req, res) {
    
    Address.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, address) {
        if (err) return res.status(500).send("There was a problem updating the address.");
        res.status(200).send(address);
    });
});


module.exports = router;