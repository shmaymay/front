var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('10086Vue.htm', res);
});

module.exports = router;