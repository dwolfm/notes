process.on('message', function(m, socket) {
  if ( m === 'socket') {
    socket.end('you were handled as a ' + process.argv[2] + ' person');
  }
});
