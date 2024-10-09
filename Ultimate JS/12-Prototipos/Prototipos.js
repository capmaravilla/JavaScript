// ! NO EXTENDER PROTOTIPOS DE FUNCIONES CONSTRUCTORAS QUE YA TIENE JS (OBJET, ARRAY,...)

//* IMPLEMENTANDO HERENCIA

function User() {
  this.name = 'Hola Mundo';
}

function Product() {
  this.name = 'Producto';
}

function Entidad() {}

Entidad.prototype.save = function () {
  console.log('Guardando', this.name);
};
Entidad.prototype.validate = function () {
  console.log('Validando', this.name);
};

//* Formas de ponde implementar herencias

//? User.prototype = Entidad.prototype;

// const user = new User();
// console.log(user); // Aqui nos da que la funcion constructora es entidad, pero nos es lo que queremos

// User.prototype.constructor = User;
// const user = new User();
// console.log(user); //Ahora la funcion constructora se pedio, pero conservamos la herencia

//? User.prototype = Object.create(Entidad.prototype);
// Aqui creamos un objeto vacio cuyo prototipo es entidad. Esto lo hacemos para preservar los constructores.
//? User.prototype.constructor = User;
// ! Pero esta forma es la forma antigua

Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Product.prototype, Entidad.prototype);
// Ahora el prototype de Entidad se le suma a los dos
const user = new User();
console.log(user);
