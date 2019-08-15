var express = require('express');
var router = express.Router();

var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var fs = require('fs');

/* Update 시간 조회 */
router.get('/', function(req, res, next) {
  var updateLog = fs.readFileSync(__dirname + '/log.txt', 'utf-8');
  res.send(updateLog);
});

module.exports = router;
