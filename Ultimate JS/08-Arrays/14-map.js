const usuarios = [
  { edad: 17, nombre: 'Nico' },
  { edad: 20, nombre: 'Felipe' },
  { edad: 32, nombre: 'Maria' },
  { edad: 23, nombre: 'Javier' },
];

const lista = usuarios.map(u => `<li>${u.nombre}</li>`);
const html = `<ol>${lista.join('')}</ol>`;

console.log(lista);

const mapped = usuarios.map(u => {
  return {
    ...u,
    mayor: u.edad > 17,
  };
});

const mappedCompacto = usuarios.map(u => ({
  ...u,
  mayor: u.edad > 17,
}));
// hay que poner un parentesis para que js sepa que es un objeto y no los parametros de una función

console.log(mapped);
console.log(mappedCompacto);

//el metodo de map y filter nos devuelven un array asi que los podemos concadenar

const lista2 = usuarios
  .filter(u => u.edad > 17)
  .map(u => `<li>${u.nombre}</li>`);

console.log(lista2);
