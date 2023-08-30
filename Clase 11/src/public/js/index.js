const socket = io();

const caja = document.getElementById('caja');
const contenido = document.getElementById('contenido');

caja.addEventListener('input', (event) => {
  socket.emit('mensaje', { mensaje: event.target.value });
});

socket.on('nuevo_contenido', (data) => {
  let contenidoFinal = '';
  data.forEach(({ socketid, mensaje }) => {
    contenidoFinal += `<p>${socketid} dijo ${mensaje}</p>`;
  });

  contenido.innerHTML = contenidoFinal;
});
