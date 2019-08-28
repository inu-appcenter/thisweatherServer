var express = require('express');
var router = express.Router();

var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var fs = require('fs');

/* 미세먼지(PM10) 정보 조회 */
router.get('/', function(req, res,next){
  var pm10 = fs.readFileSync('./public/data/localPM10.xml', 'utf-8');
  parser.parseString(pm10, function(err, result) {
    var toStringPM10 = JSON.stringify(result);
    var parsePM10 = JSON.parse(toStringPM10).response.body[0].items[0].item[0].pm10Value;
    var resultPM10 = JSON.stringify(parsePM10).replace(/"/g,'').replace("[","").replace("]","");
    res.send(resultPM10);
  });
});

module.exports = router;
