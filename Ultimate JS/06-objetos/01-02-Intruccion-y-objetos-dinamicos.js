const user1 = {id: 1};

user.name = 'Nicolas';
user.guardar = function () {
  console.log('Guardando', user.name);
};

// A pesar de ser una constante podemos introducir y borrar datos de ella mientras siga siendo un objeto
console.log(user);
user.guardar();

// palabra reservada para borrar elementos de un objeto
delete user.name;

console.log(user);

// Si queremos que no se pueda modificar usaremos Object.freeze()
const user2 = Object.freeze({id: 1});
user2.name = 'Nico';
user2.id = 2;
console.log(user2);

// Si queremos modificar pero no agregar propiedades
const user3 = Object.seal({id: 1});
user3.name = 'Nico';
user3.id = 2;
console.log(user3);
