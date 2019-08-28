#!/usr/bin/env node
const schedule = require('node-schedule');
const shell = require('shelljs')
var moment = require('moment');
var fs = require('fs');

require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

var scheduler = schedule.scheduleJob('* */2 * * *',function(){
  var date = moment().format('YYYY-MM-DD HH:mm:ss');
  //shell.exec('node parser.js');
  date += ' update complete!';
  shell.echo(date);
  fs.writeFile('./public/data/log.txt',date,'utf8',function(error){ });
});
