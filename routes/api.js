var mongoose = require ('mongoose');

/*
 * Serve JSON to our AngularJS client
 */

exports.name = function (req, res) {
  res.json({
  	name: 'Bob'
  });
};

exports.update = function(io) {
  return function (req, res) {
    console.log(req.body);
    io.emit('update', req.body);
    
    res.json({
      success: true,
      postit: req.body
    });
  };
}

exports.create = function(io) {
  return function (req, res) {
    io.emit('create', req.body);
    
    res.json({
      success: true,
      postit: req.body
    });
  };
}
