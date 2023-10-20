const listNumbers = (...numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      const parameters = numbers.map((n) => typeof n);
      console.log('Invalid parameters', parameters);
      //process.exit(-4);
    }
  }

  console.log(numbers);
};

process.on('exit', (errorCode) => {
  console.log(
    'Proceso finalizado por argumentación inválida en una función, código',
    errorCode
  );
});

listNumbers(1, 2, 'asd', true);
