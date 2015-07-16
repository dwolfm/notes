'use strict';
/// pratice with promises

var fs = require('fs');
var crypto = require('crypto');
var Promise = require('promise');

if (process.argv.length != 4){
  console.error("ERROR USAGE: node promise.js <dirpath> <filename>");
  return -1;
}

var dirpath = process.argv[2];
var filename = process.argv[3];

console.log("sha1 hash for dir: " + dirpath + ", filename: " + filename);

var ls = function(dirpath){
  return new Promise(function(resolve, reject){
    fs.readdir(dirpath, function(err, data){
      if (err) reject({err: err,msg: "could not find dir"});
      resolve(data);
    });
  });
}(dirpath);

var logFirstFile = function(data){
  return new Promise(function(resolve, reject){
    for (var i=0; i<data.length; i++){
      if ( data[i] === filename){
        fs.readFile(dirpath + data[i], function(err, file){
          if (err) reject({ err: err, msg: "could not find file"});
          resolve(file);
        });
      }
    }
  });
};

var shaoneafy = function(data){
  return new Promise(function(resolve, reject){
    var sha1 = crypto.createHash('sha1');
    sha1.update(data);
    resolve(sha1.digest('hex'));
  });
};

ls.then(logFirstFile)
  .then(shaoneafy)
  .then(function(data){
    console.log(data);
  }).catch(function(err){
    console.error("ERROR: " + err.msg);
    console.error(err.err);
});
