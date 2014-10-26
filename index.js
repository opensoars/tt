var http = require('http');

var rest_server = require('./lib/rest_server');


var http_server = http.createServer(rest_server.listener)
  .listen(rest_server.port);