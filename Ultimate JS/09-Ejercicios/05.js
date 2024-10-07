const usuarios = [
  { edad: 17, nombre: 'Nico', plan: 'premium' },
  { edad: 13, nombre: 'Chanchito', plan: 'premium' },
  { edad: 32, nombre: 'Fernanda', plan: 'free' },
  { edad: 25, nombre: 'Felipe', plan: 'gold' },
];

function obtenerMayor3(arr) {
  return arr.reduce((acc, el) => {
    if (el.edad > acc.edad) {
      return el;
    }
    return acc;
  }, arr[0]);
}

const mayor3 = obtenerMayor3(usuarios);
console.log(mayor3);

function obtenerMayor(arr) {
  arr.sort((a, b) => {
    if (a.edad < b.edad) return 1;
    if (a.edad > b.edad) return -1;
    return 0;
  });
  return arr[0];
}
const mayor = obtenerMayor(usuarios);
console.log(mayor);

function obtenerMayor2(arr) {
  let contenedor = arr[0];
  for (el of arr) {
    el.edad > contenedor.edad ? (contenedor = el) : contenedor;
  }
  return contenedor;
}

const mayor2 = obtenerMayor2(usuarios);
console.log(mayor2);
