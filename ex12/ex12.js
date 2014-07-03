var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (request, response) {
  request.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(response);
});

// listen on given port
server.listen(process.argv[2]);
