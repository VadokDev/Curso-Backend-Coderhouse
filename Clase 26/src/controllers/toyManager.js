import ToyService from '../services/toy.service.js';

const toyService = new ToyService();

export default class ToyManager {
  crearJuguete(toy) {
    try {
      toyService.guardarJuguete(toy);
    } catch (error) {
      console.log('Capa de Controllador ToyManager', error);
      throw error;
    }
  }

  getJuguetes() {
    return toyService.obtenerJuguetes();
  }
}
