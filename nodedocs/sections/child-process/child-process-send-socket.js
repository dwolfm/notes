var normal = require('child_process').fork('child.js', ['normal']);
var special = require('child_process').fork('child.js', ['special']);

// open eh server and send sockets to child
var server = require('net').createServer();
server.on('connection', function(socket){
  // if this is VIP
  if (socket.remoteAddress === '74.124.127.100') {
    return special.send('socket', socket);
  }

  normal.send('socket', socket);
});

server.listen(3333);

