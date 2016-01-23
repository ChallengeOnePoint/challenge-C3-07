/**
 * Module dependencies
 */

var express = require('express'),
  mongoose = require ('mongoose'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path'),
  engines = require('consolidate');

var app = module.exports = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

mongoose.connect("mongodb://127.0.0.1:27017/test");

// create a schema for post it 
var PostItSchema = mongoose.Schema({
  _id: String,
  created: Date,
  content: String,
  background: String
});

// create a model from the post it schema
var PostIt = mongoose.model('PostIt', PostItSchema);

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.engine('html', engines.ejs);
app.set('view engine', 'html');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static('public'));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
};


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);

app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

// Socket.io Communication
io.sockets.on('connection', require('./routes/socket'));

/**
 * Start Server
 */

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
