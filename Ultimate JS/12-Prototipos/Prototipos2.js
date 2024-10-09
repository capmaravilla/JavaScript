//* CONSTRUCTOR PADRE

function Entidad(entidad) {
  this.id = Math.random().toString('20');
  this.entidad = entidad;
}

function User() {
  Entidad.call(this, 'user');
  this.attrs = {
    nombre: 'David',
    edad: 48,
  };
}

// const usuario = new User();
// console.log(usuario);

// * METHOD OVERRIDE

function Entidad2() {}

Entidad2.prototype.save = function () {
  console.log('Guardando desde entidad...');
};

function User2() {}
function Product2() {}
function Category2() {}

// este es el method override, escribirmos una funcion que anula la del prototipo por encima
User2.prototype.save = function () {
  console.log('Guardando desde User');
};

Object.setPrototypeOf(User2.prototype, Entidad2.prototype);

const u = new User2();

// Basicamente es que primero cojeria las funciones de User y si no pasa al siguiente prototipo

Object.getPrototypeOf(Object.getPrototypeOf(u)).save();
// Para ir al save que esta por encima del nuestro. Se usa poco

// simplificamos. Aunque no parece que sea muy util
function getProto(a) {
  return Object.getPrototypeOf(a);
}
getProto(getProto(u)).save();

const getProto2 = Object.getPrototypeOf;
// Lo mismo esto es una guarrada, no se
getProto2(getProto2(u)).save();

//* POLIMORFISMO

function Select() {}

Select.prototype.render = function () {
  console.log('renderizando select');
};

function Checkbox() {}

Checkbox.prototype.render = function () {
  console.log('renderizado checkbox');
};

let componentes = [new Select(), new Checkbox()];

componentes.forEach(c => c.render());

// ⚠️ No me queda claro el POLIMORFISMO
