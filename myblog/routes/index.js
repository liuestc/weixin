var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.cookie('isVisit', 1, {maxAge: 60 * 1000});
    res.render('index', { title: 'Express' });
});

module.exports = router;
