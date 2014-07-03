// driver to test ex5.js module

var ex5 = require('./ex5');

ex5(process.argv[2],process.argv[3], function (err, matches){
  if (err) console.log('Oh shit!');
  matches.forEach(function(match) {
    console.log(match);
  });
});
