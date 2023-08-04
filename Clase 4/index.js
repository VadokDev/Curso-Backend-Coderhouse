const dividir = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject(`No se puede realizar la división entre ${a} y ${b}`);
    } else {
      resolve(a / b);
    }
  });
};

const funcionAsincrona = async () => {
  try {
    const a = await dividir(11, 1);
  } catch (error) {
    console.log(error);
  }
  try {
    const b = await dividir(12, 3456);
  } catch (error) {
    console.log(error);
  }
  try {
    const c = await dividir(13, 0);
  } catch (error) {
    console.log(error);
  }
  try {
    const d = await dividir(14, 7);
  } catch (error) {
    console.log(error);
  }
  try {
    const e = await dividir(15, 0);
  } catch (error) {
    console.log(error);
  }
};

funcionAsincrona();
