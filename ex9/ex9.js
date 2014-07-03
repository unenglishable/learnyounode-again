var http = require('http');
var bl = require('bl');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var count = urls.length,
    results = {} 

urls.forEach(function (url) {
  http.get(url, function (response) {
    response.pipe(bl(function (err, buff) {
      if (err) return console.error(err);
      else {
        count--;
        results[url] = buff.toString();
        if (count == 0) {
          urls.forEach(function(url) {
            console.log(results[url]);
          });
        }
      }
    }));
  });
});
