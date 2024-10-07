let numeros = [2, -5, 54, 3, -56];

numeros.sort(); //modifican el array
numeros.reverse();

console.log(numeros);

let letras = ['s', 'a', 'd', 'Z', 'b'];

letras.sort(); // las mayusculas tendrian preferencia

console.log(letras);

letras.sort((a, b) => {
  /* 
    a antes b => -1
    b antes a => 1
    si son iguales => 0
     */
  let alower = a.toLowerCase();
  let blower = b.toLowerCase();

  if (alower < blower) {
    return -1;
  }

  if (alower > blower) {
    return 1;
  }

  return 0;
});

// ahora las ordenaria independientemente de se mayusculas o no
console.log(letras);

let usuarios = [
  {edad: 15, nombre: 'Juan'},
  {edad: 25, nombre: 'Antonio'},
  {edad: 12, nombre: 'Paula'},
];

usuarios.sort((a, b) => {
  if (a.edad < b.edad) return -1;

  if (a.edad > b.edad) return 1;

  return 0;
});

console.log(usuarios);
