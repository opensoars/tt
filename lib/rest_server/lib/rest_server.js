var listener = function (req, res){
  res.end('k');
};

module.exports = {
  port: 80,
  listener: listener
};