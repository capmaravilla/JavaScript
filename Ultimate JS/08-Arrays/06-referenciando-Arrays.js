const usuarios = [
  {id: 1, name: 'Chanchito'},
  {id: 1, name: 'felipe'},
  {id: 2, name: 'feliz'},
];

// const resultado = usuarios.indexOf({id: 1, name: 'Chanchito'});
// console.log(resultado); // el elemento es un objeto asi que es una referencia y no lo encuentra

const resultado = usuarios.find(usuario => usuario.id === 1); // solo devuelve el primer objeto;
const resultadoIndex = usuarios.findIndex(usuario => usuario.id === 1); // solo devuelve el primer objeto;

console.log(resultado);
console.log(resultadoIndex);
