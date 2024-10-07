const usuarios = [
  { edad: 17, nombre: 'Nico', plan: 'premium' },
  { edad: 13, nombre: 'Chanchito', plan: 'free' },
  { edad: 32, nombre: 'Fernanda', plan: 'free' },
];

const users = [
  { age: 22, name: 'Mike', membership: 'premium' },
  { age: 27, name: 'Jane', membership: 'free' },
  { age: 29, name: 'Kevin', membership: 'free' },
];

// Unificar las estructuras de usuarios y users
users.map(el => {
  el.nombre = el.name;
  delete el.name;
  el.edad = el.age;
  delete el.age;
  el.plan = el.membership;
  delete el.membership;
});

// const users3 = users2.map(u => ({
//   edad: u.age,
//   nombre: u.name,
//   plan: u.membership,
// }));

console.log(users);
// Fusionar los dos arrays
const fusion = usuarios.concat(users);
const fusion2 = [...usuarios, ...users];

console.log(fusion);
console.log(fusion2);

// Ordenar por edad
fusion.sort((a, b) => {
  if (a.edad < b.edad) return -1;
  if (a.edad > b.edad) return 1;
  return 0;
});

// Crear plantilla HTML
// <li>Nombre: name, Edad: age</li>
const lista = fusion.map(
  el => `<li>nombre: ${el.nombre}, edad: ${el.edad}</li>`
).join(`
`);

// Imprimir en consola
console.log(lista);

const users2 = [
  { age: 22, name: 'Mike', membership: 'premium' },
  { age: 27, name: 'Jane', membership: 'free' },
  { age: 29, name: 'Kevin', membership: 'free' },
];
