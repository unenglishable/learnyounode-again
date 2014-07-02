var fs = require('fs');
var path = require('path');

module.exports = function (dir,ext,callback) {
  fs.readdir(dir, function (err, files) {
    if (err) return callback(err);
    else {
      var matches = [];
      files.forEach(function(file) {
        if (path.extname(file) == '.'+ext) {
          console.log(file);
          matches.push(file);
        }
      });
      callback(null,matches);
    }
  });
}
