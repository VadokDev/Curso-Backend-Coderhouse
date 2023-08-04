const promesa1 = new Promise((resolve, reject) => resolve(5));
const promesa2 = new Promise((resolve, reject) => resolve(10));
const promesa3 = new Promise((resolve, reject) => resolve(15));

const promesas = [promesa1, promesa2, promesa3];

Promise.all(promesas).then((resultados) => {
  const suma = resultados.reduce((prev, current) => prev + current, 0);
  console.log(suma);
});
