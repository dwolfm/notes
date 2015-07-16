'use strict';

var fs = require('fs');
var crypto = require('crypto');
var Promise = require('promise');

var dirpath = process.argv[2];

var ls = function(dirpath){
  return new Promise(function(resolve, reject){
    fs.readdir(dirpath, function(err, data){
      if (err) throw err;
      resolve(data);
    });
  });
}(dirpath);

var logFirstFile = function(data){
  fs.readFile(data[0], function(err, data){
    if (err) throw err;
    return data;
  });
};

var shaoneafy = function(data){
  var sha1 = crypto.createHash('sha1');
  sha1.update(data);
  sha1.digest('hex'); 
  return resolve(sha);
};

console.log('sup slug');

ls.then(function(data){
  console.log('ls: ', data);
  return logFirstFile(data);
}).catch(function(err){
  throw err;
}).then(function(data){
  return shaoneafy(data);
}).catch(function(err){
  throw err;
}).then(function(data){
  console.log(data);
}).catch(function(err){
  throw err;
});
