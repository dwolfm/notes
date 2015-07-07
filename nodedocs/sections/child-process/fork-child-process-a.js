var cp = require('child_process');

var lulwat = cp.fork(__dirname + '/lulwat.js');

lulwat.on('message', function(m){
  console.log('PARENT got message:', m);
  lulwat.disconnect();
});

lulwat.send({msg: 'yo slug make this string caps'});

