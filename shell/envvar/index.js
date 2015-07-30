'use strict';

console.log("environment variables");

for (var key in process.env){
  console.log( key + ': ' + process.env[key]);
}

