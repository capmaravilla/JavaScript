const obj = {
  nombre: 'Nicolas',
};

function extender(usuario) {
  usuario.login = () => {
    console.log('Iniciando', usuario.nombre);
  };
  usuario.logout = () => {
    console.log('Cerrando', usuario.nombre);
  };

  return usuario;
}

const usuario = extender(obj);

console.log(usuario);
usuario.login();

//* OTRA FORMA

function extender2(usuario) {
  const metodos = {
    login() {
      console.log('Iniciando', this.nombre);
    },
    logout() {
      console.log('Cerrando', this.nombre);
    },
  };
  return Object.assign(usuario, metodos);
}

const usuario2 = extender2(obj);
console.log(usuario2);
usuario2.login();
