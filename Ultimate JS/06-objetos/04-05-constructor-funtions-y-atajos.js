// El nombre de la funcion constructora nos dice que crea y empieza en mayusculas.
function Usuario() {
  this.id = 1;
  this.recuperarClave = function () {
    console.log('Recuperando clave...');
    // Cuando asignamos la funcion a una propiedad de un objeto la llamamos "Metodos" en vez de funciones.
  };
}

let usuario = new Usuario();

console.log(usuario);

// Atajos de constructores

let obj = {};
let obj2 = new Object();

// new Array()
// new String()
// new Number()
// new Boolean()

const s1 = '1 + 1';
const s2 = new String('2 + 2');

console.log(s1, s2);

console.log(s2.valueOf());
