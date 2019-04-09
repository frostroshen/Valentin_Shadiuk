var http = require('http'); 
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end('ля, зачем оно мне надо');
});
server.listen(3456, '127.0.0.1');
