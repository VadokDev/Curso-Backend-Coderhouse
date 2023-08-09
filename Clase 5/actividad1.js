const fs = require('fs');
const fechaActual = new Date().toLocaleString();

fs.writeFileSync('tiempo.txt', fechaActual);
const fechaActualLeida = fs.readFileSync('tiempo.txt', 'utf-8');
console.log(fechaActualLeida);

fs.writeFile('tiempo2.txt', fechaActual, (error) => {
  if (error) {
    console.log(error);
  }
});

fs.readFile('tiempo2.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
