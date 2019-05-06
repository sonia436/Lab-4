var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/Profile', function(req, res) {
  res.render('author');
});

router.get('/Timeline', function(req, res) {
  res.render('time', {"myName":"Sonia"});
});

module.exports = router;
