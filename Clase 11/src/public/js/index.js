const socket = io();
socket.emit('message', { ola: 'asd' });
socket.on('evento', (data) => console.log(data));
