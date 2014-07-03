var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
  var parsed = url.parse(request.url, true);
  var date = new Date(parsed.query.iso);
  var result;

  if (/^\/api\/parsetime/.test(request.url)) {
    result = {
      'hour': date.getHours(),
    'minute': date.getMinutes(),
    'second': date.getSeconds()
    };
  }

  else if (/^\/api\/unixtime/.test(request.url)) {
    result = {
      'unixtime': date.getTime()
    };
  }

  else;

  if (result) {
    response.writeHead(200, {'Content-Type': 'application/json' });
    response.end(JSON.stringify(result));
  }
  else {
    response.writeHead(400);
    response.end();
  }
});

server.listen(process.argv[2]);
