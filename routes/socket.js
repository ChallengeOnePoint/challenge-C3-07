/*
 * Serve content over a socket
 */

var sockets = [];

module.exports = function (socket) {
  socket.emit('send:name', {
    name: 'Bob'
  });

  setInterval(function () {
    socket.emit('send:time', {
      time: (new Date()).toString()
    });
  }, 1000);
  
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
};
