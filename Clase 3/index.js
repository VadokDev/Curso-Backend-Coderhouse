class TicketManager {
  eventos;
  #precioBaseDeGanancia;
  static id = 0;

  constructor(precioBaseDeGanancia) {
    this.eventos = [];
    this.#precioBaseDeGanancia = precioBaseDeGanancia;
  }

  getEventos() {
    console.log(this.eventos);
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = '01/08/2023') {
    const evento = {
      id: TicketManager.id,
      nombre,
      lugar,
      precio: precio + precio * 0.15 + this.#precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes: [],
    };

    this.eventos.push(evento);
    TicketManager.id++;
  }

  agregarUsuario(idEvento, idUsuario) {
    const evento = this.eventos.find((evento) => evento.id == idEvento);
    if (evento === undefined) {
      console.log('El evento no existe');
      return;
    }

    if (evento.participantes.includes(idUsuario)) {
      console.log('El usuario ya existe en este evento');
      return;
    }

    evento.participantes.push(idUsuario);
  }

  ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
    const evento = this.eventos.find((evento) => evento.id == idEvento);
    const nuevoEvento = {
      ...evento,
      id: TicketManager.id,
      lugar: nuevaLocalidad,
      fecha: nuevaFecha,
      participantes: [],
    };
    this.eventos.push(nuevoEvento);
    TicketManager.id++;
  }
}

const ticketManager = new TicketManager(100);
ticketManager.agregarEvento('Eventazo', 'Argentina', 100);
ticketManager.agregarUsuario(0, 423);
ticketManager.ponerEventoEnGira(0, 'Chile', '01/09/2023');
ticketManager.getEventos();
