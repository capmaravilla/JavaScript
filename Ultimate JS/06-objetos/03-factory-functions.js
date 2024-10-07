// Para no tener que declara los objetos uno por uno creamos una Factory Function

function crearUsuario(name, email) {
  return {
    email, //seria lo mismo que email: email,
    name,
    activo: true,
    recuperarClave: function () {
      console.log('Recuperando clave...');
    },
  };
}

let user1 = crearUsuario('Nicolas', 'nico@correo.com');
let user2 = crearUsuario('Otto', 'otto@correo.com');

console.log(user1, user2);
