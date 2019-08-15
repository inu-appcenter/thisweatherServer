var express = require('express');
var router = express.Router();

var xml2js = require('xml2js');
var fs = require('fs');
var parser = new xml2js.Parser();


/* 중기날씨 정보 조회 */
router.get('/', function(req, res,next){
  var midTerm = fs.readFileSync('./public/xml/midtermWeather.xml', 'utf-8');
  parser.parseString(midTerm, function(err, result) {
    var toStringMidTerm = JSON.stringify(result);
    var parseMidTerm = JSON.parse(toStringMidTerm);
    var extractMidTerm = parseMidTerm.rss.channel[0].item[0].description[0].body[0].location[1];
    res.send(JSON.stringify(extractMidTerm));
    });
});

module.exports = router;
