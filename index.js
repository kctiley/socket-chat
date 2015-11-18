
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

var userCount = 0;


io.on('connection', function(socket){
  userCount++
  console.log('a user connected....User' + userCount + ' now connected');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    // console.log("Socket-request-headers-referer")
    // console.log(socket.request.headers.referer);
    // console.log("Socket-request-headers")
    // console.log(socket.request.headers);
    // console.log("Socket-request")
    // console.log(socket.request);
    // console.log("Socket.id")
    console.log(socket.id);
  });  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});

