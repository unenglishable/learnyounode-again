var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function callback (socket) {
  // socket.write(data);
  // socket.end();
  socket.end(strftime('%F %H:%M'));
});

// Listen on port given by first command line argument
server.listen(process.argv[2]);
