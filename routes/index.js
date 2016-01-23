// var models = require ('./models');
// var PostIt = models.PostIt ; 

/*
 * GET home page.
 */

exports.index = function(req, res){

  /*
  //Find
  PostIt.find().exec(function(err, msgs) {
    //Send
    console.log(JSON.stringify(msgs));
  });
  */
  res.render('index');
};


exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};