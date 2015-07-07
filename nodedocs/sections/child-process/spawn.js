var spawn = require('child_process').spawn;
var ls = spawn('ls', ['-lah', '/usr/lib' ]);

ls.stdout.on('data', function(data){
  console.log('stdout: ' + data);
});

ls.stderr.on('data', function(data){
  console.log('stderr: ' + data);
});

ls.on('close', function(code){
  console.log('child process exited with code ' + code);
});
