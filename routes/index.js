var express = require('express');
var router = express.Router();
var cp = require('../services/calculate-points-service')

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.redirect('/en/male')
});

router.get('/:lang/:sex', function(req, res, next) {
  res.render('index', {title: 'Camel Calculator' });
})

router.post('/:lang/counter', function(req, res, next) {
  console.log(req.body);
  var countresult = cp.calculatePoints(req.body);
  res.render('counter', {title: 'Camel Calculator', countresult: countresult});
})

module.exports = router;
