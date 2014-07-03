var http = require('http');

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');
  response.on('error', function (error) {
    console.log(error);
  });
  response.on('data', function (data) {
    console.log(data);
  });
  response.on('end', function (end) {
    return end;
  });
});
