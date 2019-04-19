var express = require('express');
var router = express.Router();

var User = require('../models/users');

router.get('/', function(req, res, next) {
    User.find(function(err, users){
      if (err) return res.status(500).json({error: err});
      res.json(users);
    });
})