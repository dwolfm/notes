process.on('message', function(m) {
  console.log('CHILD got msg:', m);
  process.send({msg: m.msg.toString().toUpperCase()});
});
