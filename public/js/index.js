var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createEmail', {
    to: 'Nadia@example.com',
    text: 'Hey, sorry'
  })
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});
