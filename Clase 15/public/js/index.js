const socket = io();

let usuario = '';

Swal.fire({
  title: 'Ingresa un correo',
  input: 'text',
  confirmButtonText: 'Ingresar',
}).then((result) => {
  usuario = result.value;
});

const caja = document.getElementById('caja');
const contenido = document.getElementById('contenido');

caja.addEventListener('change', (e) => {
  socket.emit('mensaje', {
    correo: usuario,
    mensaje: e.target.value,
  });
});

// [ {correo: "asd@asd.com", mensaje: "mensaje"}, {correo: "asd@asd.com", mensaje: "mensaje"}, {correo: "asd@asd.com", mensaje: "mensaje"} ]

/*
  <p>asd@asd.com dijo: mensaje</p>
  <p>asd@asd.com dijo: mensaje</p>
  <p>asd@asd.com dijo: mensaje</p>
*/

socket.on('nuevo_mensaje', (data) => {
  const mensajes = data.map(({ correo, mensaje }) => {
    return `<p>${correo} dijo: ${mensaje}</p>`;
  });

  contenido.innerHTML = mensajes.join('');
});
