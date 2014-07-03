var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var srvFile = process.argv[3];

var server = http.createServer(function (request, response) {
  fs.createReadStream(srvFile).pipe(response);
});

server.listen(port);
