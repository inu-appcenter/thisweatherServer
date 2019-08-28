var weatherUrl = "";
var midtermUrl = "";
var pm10Url = "";

var fs = require('fs');
var parseString = require('xml2js').parseString;
var request = require('request');

request(weatherUrl, function(err, res, data){
  if(!err && res.statusCode == 200){
    fs.writeFile('./public/data/localWeather.xml',data,'utf8',function(error){
    });
    console.log('successfully created localWeather.xml!!');
  }
});
request(midtermUrl, function(err, res, data){
  if(!err && res.statusCode == 200){
    fs.writeFile('./public/data/midtermWeather.xml',data,'utf8',function(error){
    });
    console.log('successfully created midtermWeather.xml!!');
  }
});
request(pm10Url, function(err, res, data){
  if(!err && res.statusCode == 200){
    fs.writeFile('./public/data/localPM10.xml',data,'utf8',function(error){
    });
    console.log('successfully created localPM10.xml!!');
  }
});
