const crypto = require('crypto');
const fs = require('fs');

class UserManager {
  async crearUsuario(nombre, apellido, usuario, password) {
    const user = {
      nombre,
      apellido,
      usuario,
      password: crypto.createHash('sha1').update(password).digest('hex'),
    };

    const usuariosCreados = await fs.promises.readFile(
      'Usuarios.json',
      'utf-8'
    );

    const usuariosCreadosObj = JSON.parse(usuariosCreados);
    usuariosCreadosObj.push(user);

    await fs.promises.writeFile(
      'Usuarios.json',
      JSON.stringify(usuariosCreadosObj)
    );
  }

  async validarUsuario(usuario, password) {
    const contenido = await fs.promises.readFile('Usuarios.json', 'utf-8');
    const obj = JSON.parse(contenido);
    const hashedPassword = crypto
      .createHash('sha1')
      .update(password)
      .digest('hex');

    const userExists = obj.find(
      (user) => user.usuario === usuario && user.password === hashedPassword
    );

    if (userExists) {
      console.log('Logueado!');
    } else {
      console.log('El usuario y/o contraseña no coinciden');
    }
  }
}

const userManager = new UserManager();
userManager.validarUsuario('Jo', '12XDDD3');
