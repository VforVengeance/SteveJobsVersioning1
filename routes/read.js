var express = require('express');
var router = express.Router();

var User = require('../models/users');

router.get('/', function(req, res, next) {
    User.find(function(err, users){
      if (err) return res.status(500).json({error: err});
      res.json(users);
    });
})

router.get('/:id', function(req, res, next) {
  User.findOne({_id: req.params.id},function(err, user){
    if (err) return res.status(500).json({error: err});
    if(!user) return res.status(404).json({message: 'Utente non trovato'})
    res.json(user);
  });
})

module.exports = router
