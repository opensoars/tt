var listener = function (req, res){
  res.end('k');
};

module.exports = {
  port: 8372,
  listener: listener
};z