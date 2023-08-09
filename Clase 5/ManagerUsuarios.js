const fs = require('fs');
const archivo = './Usuarios.json';

class ManagerUsuarios {
  static id = 0;
  async crearUsuario(nombre, apellido, edad, curso) {
    const usuario = {
      id: ManagerUsuarios.id++,
      nombre,
      apellido,
      edad,
      curso,
    };

    try {
      if (!fs.existsSync(archivo)) {
        const listaVacia = [];
        listaVacia.push(usuario);

        await fs.promises.writeFile(
          archivo,
          JSON.stringify(listaVacia, null, '\t')
        );
      } else {
        const contenidoObj = await this.consultarUsuarios();
        contenidoObj.push(usuario);
        await fs.promises.writeFile(
          archivo,
          JSON.stringify(contenidoObj, null, '\t')
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  async eliminarUsuario(id) {
    const usuarios = await this.consultarUsuarios();
    const usuariosSinId = usuarios.filter((usuario) => usuario.id != id);
    await fs.promises.writeFile(
      archivo,
      JSON.stringify(usuariosSinId, null, '\t')
    );
  }

  async consultarUsuarios() {
    const contenido = await fs.promises.readFile(archivo, 'utf-8');
    const contenidoObj = JSON.parse(contenido);
    return contenidoObj;
  }
}

const funcionAsync = async () => {
  const managerUsuarios = new ManagerUsuarios();
  await managerUsuarios.crearUsuario('Eleusterio', 'Ap', 25, 'Backend');
  await managerUsuarios.crearUsuario('Eleusterio', 'Ap', 25, 'Backend');
  await managerUsuarios.crearUsuario('Eleusterio', 'Ap', 25, 'Backend');
  await managerUsuarios.crearUsuario('Eleusterio', 'Ap', 25, 'Backend');
  await managerUsuarios.crearUsuario('Eleusterio', 'Ap', 25, 'Backend');
  await managerUsuarios.eliminarUsuario(3);
};

funcionAsync();
