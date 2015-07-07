'use strict';

var exec = require('child_process').exec;
var options =  {cwd: '/home/nacnud/gitz/notes/nodedocs/sections/child-process/'};
var child = exec('cat *.js lulwat.badfile| wc -l', options, function(err, stdout, stderr){
  if (err) throw err;
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
});
