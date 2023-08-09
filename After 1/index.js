/*
 * Fábrica de Autos
 * Tendrá un nombre
 * Permite construir autos recibiendo la cantidad de ruedas, puertas,
 * ventanas, si usará o no radios, electrico o combustión, marca
 * Permitirá buscar qué autos hemos construído, según criterios específicos: id, tipo o marca
 * Encontrar todos los autos con id par, y sólo retornar su marca;
 */

class FabricaDeAutos {
  static id = 0;
  nombre;
  autos;

  constructor(nombre) {
    this.nombre = nombre;
    this.autos = [];
  }

  construir(ruedas, puertas, ventanas, radio, tipo, marca) {
    const auto = {
      id: FabricaDeAutos.id,
      ruedas,
      puertas,
      ventanas,
      radio,
      tipo,
      marca,
    };

    this.autos.push(auto);
    FabricaDeAutos.id++;
    return auto;
  }

  getById1(id) {
    for (let i = 0; i < this.autos.length; i++) {
      const auto = this.autos[i];
      if (auto.id === id) {
        return auto;
      }
    }

    return 'error';
  }

  getById2(id) {
    return this.autos.find((auto) => auto.id === id);
  }

  getElectricos1() {
    const autos = [];
    for (let i = 0; i < this.autos.length; i++) {
      const auto = this.autos[i];
      if (auto.tipo === 'eléctrico') {
        autos.push(auto);
      }
    }

    return autos;
  }

  getElectricos2() {
    return this.autos.filter((auto) => auto.tipo === 'eléctrico');
  }

  getByMarca(marca) {
    return this.autos.find((auto) => auto.marca === marca);
  }

  getMarcaByEvenIds1() {
    const marcas = [];
    for (let i = 0; i < this.autos.length; i++) {
      const auto = this.autos[i];
      if (auto.id % 2 === 0) {
        marcas.push(auto.marca);
      }
    }

    return marcas;
  }

  getMarcaByEvenIds2() {
    return this.autos
      .filter((auto) => auto.id % 2 === 0)
      .map((auto) => auto.marca);
  }

  getMarcaByEvenIds3() {
    return this.autos.reduce(
      (marcas, auto) => (auto.id % 2 === 0 ? [...marcas, auto.marca] : marcas),
      []
    );
  }
}

const fabrica = new FabricaDeAutos('Coder Auto');
const auto = fabrica.construir(4, 4, 4, true, 'eléctrico', 'Tesla');
const auto2 = fabrica.construir(4, 4, 4, true, 'eléctrico', 'TeslaX');
const auto3 = fabrica.construir(4, 4, 4, true, 'combustión', 'BMW');

console.log(fabrica.getMarcaByEvenIds3());
