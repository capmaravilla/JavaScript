function similares(obj1, obj2) {
  //   for (key in obj1) {
  //     if (!(key in obj2)) {
  //       return false;
  //     }
  // Esta parte no hacia falta por lo que se ve

  for (key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
  //   }
}

let resultado = similares(
  {
    id: 1,
    name: 'Nico',
  },
  {
    id: 1,
    name: 'Nico',
  }
);

console.log(resultado);
