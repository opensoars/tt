var assert = require('assert');

var http = require('http');

var rest_server = require('./../../lib/rest_server');


var http_server = http.createServer(rest_server.listener)
  .listen(rest_server.port);


describe('GET http://localhost:80/', function (){



  it('should return `k`', function (done){

    http.get('http://localhost:' + rest_server.port, function (res){

      var d = '';
      res.on('data', function (c){ d += c; });

      res.on('end', function (){
        assert.equal(d, 'k');
        done();
      });

    });

  });
});
