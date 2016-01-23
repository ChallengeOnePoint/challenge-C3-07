/*
 * Serve content over a socket
 */

var sockets = [];

module.exports = function (socket) {
  
  console.log('user connected');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
};
