var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, files) {
  if (err) console.log('Oh shit!');
  else files.forEach(function(file) {
    if (path.extname(file) == '.'+process.argv[3]) console.log(file);
  });
});
