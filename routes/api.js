var mongoose = require ('mongoose');

/*
 * Serve JSON to our AngularJS client
 */

exports.get = function (PostIt) {
   return function(req, res){
     res.json(PostIt.find().exec());
  };
};

exports.name = function (req, res) {
  res.json({
  	name: 'Bob'
  });
};

exports.update = function(io) {
  return function (req, res) {
    io.emit('update', {postit: req.body});
    
    res.json({
      success: true,
      postit: req.body
    });
  };
}

exports.create = function(io) {
  return function (req, res) {
    io.sockets.emit('create', {postit: req.body});
    
    res.json({
      success: true,
      postit: req.body
    });
  };
}
