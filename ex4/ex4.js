// async read a file and use callback to print the result

var fs = require('fs');

fs.readFile(process.argv[2],function cb (err,data) {
  if(err) console.log('There was some kinda error...');
  else console.log(data.toString().split('\n').length-1);
})
