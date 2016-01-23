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
    console.log(req);
    io.emit('update', req.data, { for: 'everyone' });
    
    res.json({
      success: true
    });
  };
}

exports.create = function(io) {
  return function (req, res) {
    console.log(req);
    io.emit('create', req.data, { for: 'everyone' });
    
    res.json({
      success: true
    });
  };
}
