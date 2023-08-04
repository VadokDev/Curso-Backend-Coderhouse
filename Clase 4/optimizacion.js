const operar = (n1, n2, callback) => {
  return new Promise((resolve, reject) => {
    if (n1 === 0 || n2 === 0) {
      reject('Operación innecesaria');
      return;
    }

    const resultado = callback(n1, n2);
    if (resultado < 0) {
      reject('La calculadora sólo debe devolver valores positivos');
      return;
    }

    resolve(resultado);
  });
};

const calculos = async () => {
  try {
    const resultado1 = await operar(5, 10, (n1, n2) => n1 + n2);
    const resultado2 = await operar(5, 2, (n1, n2) => n1 - n2);
    const resultado3 = await operar(5, 2, (n1, n2) => n1 * n2);
    const resultado4 = await operar(5, 2, (n1, n2) => n1 / n2);
    console.log(resultado1, resultado2, resultado3, resultado4);
  } catch (error) {
    console.log('caí al catch');
    console.log(error);
  }
};

calculos();
