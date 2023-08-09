const fs = require('fs');

const procesar = async () => {
  try {
    const contenido = await fs.promises.readFile('package.json', 'utf-8');
    const info = {
      contenidoStr: contenido,
      conteidoObj: JSON.parse(contenido),
      size: contenido.length,
    };
    console.log(info);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

procesar();
