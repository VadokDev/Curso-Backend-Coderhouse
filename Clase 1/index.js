let nombre = 'pepe';
let edad = 25;
let precioString = '$99.90';
let precioDecimal = 99.9;

const series = ['Dark', 'Mr Robot', 'Castlevania'];

const peliculas = [
  {
    nombre: 'El Castillo Andante de Howl',
    protagonistas: ['Howl', 'los demás'],
    anio: 2004,
  },
  {
    nombre: 'Curso de Backend',
    protagonistas: ['Profesor', 'Estudiantes', 'Tutores'],
    anio: 2023,
  },
  {
    nombre: 'Curso de Backend',
    protagonistas: ['Profesor', 'Estudiantes', 'Tutores'],
    anio: 2023,
  },
];

console.log(nombre, edad, precioString, precioDecimal, series, peliculas);

edad += 1;

console.log(edad);

console.log([...series, 'Otra serie']);
