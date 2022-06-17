var express = require('express');
var router = express.Router();
var data = {}

/* GET home page. */
router.post('/', function(req, res, next) {
  
  data.status = req.session.isValidUser?"true":"false"
  res.send(JSON.stringify(data))
  
});

module.exports = router;
