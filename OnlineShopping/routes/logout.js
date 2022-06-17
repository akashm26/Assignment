var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  data={}
  data.msg="hiii"
  req.session.isValidUser=false
  res.send(JSON.stringify(data))
});

module.exports = router;
