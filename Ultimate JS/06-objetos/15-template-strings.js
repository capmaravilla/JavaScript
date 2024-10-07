const saludo = 'Hola \\mundo!\nBienvenidos a \t "Ultimate Javascript"\t:)';

const nombre = 'David';
const plantilla = `Hola ${nombre}!
Bienvenidos a "Ultimate JavaScript"
:) Hasta la vista!`;

console.log(plantilla);

function plantillaFn(nombre) {
  return `Hola ${nombre}!
Bienvenidos a "Ultimate JavaScript"
:) Hasta la vista!`;
}

console.log(plantillaFn('Musashi'));
