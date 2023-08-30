const socket = io();
socket.emit('message', { ola: 'asd' });
socket.on('evento', (data) => console.log(data));

const caja = document.getElementById('caja');
const contenido = document.getElementById('contenido');
caja.addEventListener('input', (event) => {
  console.log('asd');
  socket.emit('caja_update', { mensaje: event.target.value });
});

socket.on('update_mensajes', (data) => {
  contenido.innerHTML = data.mensaje;
});
