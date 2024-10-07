function User(nombre) {
  this.nombre = nombre;
}

console.log(User.name);
console.log(User.length);

//Asigno funcion a una variable
const U = User;
let user = new U('Nicolas');

console.log(user);

// Funcion como argumento
function of(Fn, arg) {
  return new Fn(arg);
}

let user1 = of(User, 'Chanchito');
console.log(user1);

// retornar dentro de otras funciones
function returned() {
  return function () {
    console.log('Hola mundo');
  };
}

let saludo = returned();
saludo();
