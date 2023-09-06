const socket = io();

const productosContainer = document.getElementById('productos');

socket.on('productos', (products) => {
  const titles = products.map((product) => product.title);

  productosContainer.innerHTML = titles.join('<br></br>');
});

socket.on('actualizar_productos', (products) => {
  const titles = products.map((product) => product.title);

  productosContainer.innerHTML = titles.join('<br></br>');
});

console.log('Hola mundo');
