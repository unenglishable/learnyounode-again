//use a forEach:
array.forEach(function(element) {
  // the thing to do to an element
  console.log(element+1);
});

// use a filter:
array.filter(function(element) {
  // keep if element matches condition
  return element === condition;
});

// open a server in tcp
var server = net.createServer(function callback (socket) {
  // do some stuff
  socket.end('some string);
});
server.listen(port);

// open a server in http
var server = http.createServer(function (request, response) {
  // use writeHead() to qrite a header in http
  res.writeHead(200, { 'content-type': 'text/plain' })

  // do some stuff
  // iStream.pipe(oStream);
  fs.createReadStream(istream).pipe(reponse);
});
server.listen(port);

