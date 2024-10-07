//REDUCE

const numeros = [1, 2, 3, 4];

const suma = numeros.reduce((acc, el) => {
  return acc + el;
}, 0);
//acumulador, parametro, valor inicial

console.log(suma);

const anidado = [[1, 2], 3, 4, [5, 6]];

const plano = anidado.reduce((acc, el) => acc.concat(el), []);

console.log(plano);

let a = [1, 2];
const u = a.reduce((acc, el) => {
  acc + el;
}, 0);

const usuarios = [
  { edad: 17, nombre: 'Nico' },
  { edad: 13, nombre: 'Paula' },
  { edad: 25, nombre: 'Andres' },
  { edad: 32, nombre: 'Maria' },
];

const indexado = usuarios.reduce(
  (acc, el) => ({
    ...acc,
    [el.nombre]: el,
  }),
  {}
);

console.log(indexado);

console.log(indexado['Nico']);

const numeros = [1, 2, 3, 4, 5];

const reducido = numeros.reduce((acc, el) => acc + el, 0);
// console.log(reducido);

//*-----------------------------------------------------------

const anidado = [1, [2, 3], 4, [5, [6, 7]]];

const reunir = anidado.reduce((acc, el) => acc.concat(el), []);

// console.log(reunir);

//*-----------------------------------------------------------
const mascotas = [
  { nombre: 'Pelusa', eda: 12, tipo: 'gato' },
  { nombre: 'Bondo', eda: 12, tipo: 'perro' },
  { nombre: 'Alfa', eda: 12, tipo: 'perro' },
  { nombre: 'Niyanito', eda: 12, tipo: 'gato' },
];

const indesado = mascotas.reduce(
  (acc, el) => ({
    ...acc,
    [el.nombre]: el,
  }),
  {}
);

// console.log(indesado);
// console.log(indesado['Bondo']);

//*-----------------------------------------------------------

const flores = ['rosa', 'amapola', 'geranio', 'clavel'];

const letras = flores.reduce((acc, el) => {
  return acc + el.length;
}, 0);

const tareas = [
  { nombre: 'limpiar', prioridad: 'A' },
  { nombre: 'barrer', prioridad: 'B' },
  { nombre: 'lavar', prioridad: 'A' },
  { nombre: 'correr', prioridad: 'C' },
  { nombre: 'saltar', prioridad: 'B' },
  { nombre: 'conducir', prioridad: 'A' },
  { nombre: 'serrar', prioridad: 'A' },
];

const listaFinal = tareas.reduce((acc, el) => {
  if (!acc[el.prioridad]) {
    acc[el.prioridad] = [];
  }
  acc[el.prioridad].push(el);
  return acc;
}, {});

console.log(listaFinal);

const listaFinal2 = tareas.reduce((acc, el) => {
  if (!acc[el.prioridad]) {
    acc[el.prioridad] = [];
  }
  acc[el.prioridad].push(el.nombre);
  return acc;
}, {});

console.log(listaFinal2);
