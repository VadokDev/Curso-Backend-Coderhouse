import toyModel from '../dao/memory/toy.model.js';

export default class ToyService {
  guardarJuguete(toy) {
    try {
      toyModel.addToy(toy);
    } catch (error) {
      console.log('Capa de Servicio ToyService', error);
      throw error;
    }
  }

  obtenerJuguetes() {
    return toyModel.getAll();
  }
}
