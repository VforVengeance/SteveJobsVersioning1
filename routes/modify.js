var express = require('express');
var router = express.Router();
var User = require('../models/users');

router.post('/', function(req, res, next) {
    var newUser = new User(req.body);
    newUser.save(function(err){
      if(err) return res.status(500).json({error: err});
      res.status(201).json(newUser);
    })
})