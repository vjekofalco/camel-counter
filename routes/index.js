var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.redirect('/en/male')
});

router.get('/:lang/:sex', function(req, res, next) {
  res.render('index', {title: 'Camel Calculator' });
})

router.post('/:lang/counter', function(req, res, next) {
  res.render('counter', {title: 'Camel Calculator', countresult: '50'});
})

module.exports = router;
