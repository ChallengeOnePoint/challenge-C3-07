var mongoose = require ('mongoose'); 

mongoose.connect("mongodb://127.0.0.1:27017/collab");

// create a schema for post it 
var PostItSchema = mongoose.Schema({
  _id: String,
  created: Date,
  content: String,
  background: String
});

// create a model from the post it schema
var PostIt = mongoose.model('PostIt', PostItSchema);

module.exports = PostItSchema ; 
module.exports.PostIt = PostIt; 