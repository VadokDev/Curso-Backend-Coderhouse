const momentprueba = require('moment');
const fechaActual = momentprueba();
const fechaNacimiento = momentprueba('2000-12-06');

console.log(fechaActual.diff(fechaNacimiento, 'days'));
