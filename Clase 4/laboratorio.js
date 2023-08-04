const suma = (n1, n2) => {
  return new Promise((resolve, reject) => {
    if (n1 === 0 || n2 === 0) {
      reject('Operación innecesaria');
      return;
    }

    const resultado = n1 + n2;
    if (resultado < 0) {
      reject('La calculadora sólo debe devolver valores positivos');
      return;
    }

    resolve(resultado);
  });
};

const resta = (n1, n2) => {
  return new Promise((resolve, reject) => {
    if (n1 === 0 || n2 === 0) {
      reject('Operación innecesaria');
      return;
    }

    const resultado = n1 - n2;
    if (resultado < 0) {
      reject('La calculadora sólo debe devolver valores positivos');
      return;
    }

    resolve(resultado);
  });
};

const multiplicar = (n1, n2) => {
  return new Promise((resolve, reject) => {
    const resultado = n1 * n2;
    if (resultado < 0) {
      reject('La calculadora sólo debe devolver valores positivos');
      return;
    }

    resolve(resultado);
  });
};

const dividir = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(`No se puede realizar la división entre ${a} y ${b}`);
    } else {
      resolve(a / b);
    }
  });
};

const calculos = async () => {
  try {
    const resultado1 = await suma(5, 10);
    const resultado2 = await resta(5, 10);
    console.log(resultado1, resultado2);
  } catch (error) {
    console.log('caí al catch');
    console.log(error);
  }
};

calculos();
