const obj = {
  nombre: 'Nicolas',
};

function Extender() {
  this.login = () => {
    console.log(`Entrando ${this.nombre}`);
  };
  this.logout = () => {
    console.log(`Saliendo ${this.nombre}`);
  };
}

Extender.call(obj);

console.log(obj);
obj.login();
obj.logout();
