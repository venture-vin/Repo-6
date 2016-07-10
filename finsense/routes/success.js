var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
  if (req.session.token == undefined) {
    res.redirect('/');
  }
  var user ={
      username: req.session.username,
      profilePicture: req.session.profil_picture,
      id: req.session.id
  };
  res.render('success', { title: 'FinSense', user: user });

});

module.exports = router;
