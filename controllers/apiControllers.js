const PI = require('../models/PImodel');

exports.details = function (req, res) {
    PI.find({_id: req.params.id}).then(function(pi){
        res.send(pi);
    });
};

// if occur an error, 'next' call next middleware (ver 'app.js')
exports.create = function (req, res, next) {
    console.log('You made a POST request: ', req.body);
    PI.create(req.body).then(function(pi) {
        res.send(pi);
    }).catch(next);
  };

exports.update = function (req, res) {
    res.send({type: 'PUT'});
};

exports.delete = function (req, res) {
    res.send({type: 'DELETE'});
};