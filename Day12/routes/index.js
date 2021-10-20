var express = require('express');
var register = require('../controllers/register');
var router = express.Router();
var registerCheck = require('../middlewares/registerCheck');

/* GET home page. */
router.get('/', function(req, res, next) {
  const sess=req.session;
  sess.username="Sugam";
  res.render('index', { title: 'Express' });
});

/*GET Register Page*/
router.post('/register',registerCheck,register);

module.exports = router;
