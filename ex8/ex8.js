var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, buff) {
    if (err) return console.error(err);
    else {
      console.log(buff.length);
      console.log(buff.toString());
    }
  }));
});
