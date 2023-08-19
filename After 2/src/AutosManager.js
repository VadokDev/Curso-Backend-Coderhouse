const fs = require('fs');

class AutosManager {
  async getAutos() {
    const data = JSON.parse(
      await fs.promises.readFile('./src/Products.json', 'utf-8')
    );
    return data;
  }

  async updateProduct(productId) {
    /*
      1. Leer el archivo 
      2. Transformar el archivo de texto a una lista de objetos con JSON.parse
      3. Buscamos el producto a modificar
      4. Modificamos el producto en la lista
      5. Escribimos en el archivo el resultado de hacer JSON.stringify 
    */

    // Paso 1
    const data = await fs.promises.readFile('archivo.json', 'utf-8');

    // Paso 2
    const products = JSON.parse(data);

    // Paso 3
    const product = products.find(({ id }) => id === productId);

    // Paso 4
    product.atributo = nuevoValor;

    // Paso 5
    await fs.promises.writeFile('archivo.json', JSON.stringify(products));
  }
}

module.exports = AutosManager;
