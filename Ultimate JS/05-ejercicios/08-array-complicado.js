let array = [
  {
    id: 1,
    name: 'Nicolas',
  },
  {
    id: 2,
    name: 'Felipe',
  },
  {
    id: 3,
    name: 'Chanchito',
  },
];

function toPairs(arr) {
  let pares = [];
  for (i = 0; i < arr.length; i++) {
    pares[i] = [arr[i].id, arr[i]];
  }

  // for (idx in arr) {
  //   let elemento = arr[idx];
  //   pares[idx] = [elemento.id, elemento];
  // }

  return pares;
}

let resultado = toPairs(array);
console.log(resultado);
