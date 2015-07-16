'use strict';

var fs = require('fs');
var crypto = require('crypto');
var Promise = require('promise');

var dirpath = process.argv[2];

var ls = new Promise(function(resolve, reject){
  fs.readdir('../', function(err, data){
    if (err) throw err;
    resolve(data);
  });
});

ls.then(function(data){
  console.log('it worked', data);
});
