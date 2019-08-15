var express = require('express');
var router = express.Router();

var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var fs = require('fs');

/* 지역날씨 정보 조회 */
router.get('/', function(req, res,next){
    var openWeather = fs.readFileSync('./public/xml/localWeather.xml', 'utf-8');
    parser.parseString(openWeather, function(err, result) {
      res.send(JSON.stringify(result));
    });
});

module.exports = router;
