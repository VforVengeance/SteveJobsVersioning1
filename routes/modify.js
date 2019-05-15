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

router.delete('/:id', function(req, res, next) {
  User.findOne({_id: req.params.id})
    .exec(function(err, user) {
      if(err) return res.status(500).json({error: err});
      if(!user) return res.status(404).json({message: 'Utente non trovato'});
      User.remove({_id: req.params.id}, function(err) {
        if(err) return res.status(500).json({error: err})
        res.json({message: 'Utente eliminato correttamente'})
      })
    })
    
})

module.exports = router
