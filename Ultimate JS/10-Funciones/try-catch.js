function sumaTodo(arr) {
  function sumaTodo(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('El parámetro no es un array');
    }
    return arr.reduce((acc, el) => {
      if (typeof el !== 'number' || Number.isNaN(el)) {
        throw new Error(`${el} no es un numero`);
      }
      return acc + el;
    });
  }

  try {
    //   console.log(sumaTodo([{ prop: 1 }]));
    //   console.log(sumaTodo([1, 2, NaN, 'Hola Mundo']));
    console.log(sumaTodo([1, 2, 3, 4]));
  } catch (e) {
    console.log(e.message);
  }

  console.log('Después del try-catch');
  if (!Array.isArray(arr)) {
    throw new Error('El parámetro no es un array');
  }
  return arr.reduce((acc, el) => {
    if (typeof el !== 'number' || Number.isNaN(el)) {
      throw new Error(`${el} no es un numero`);
    }
    return acc + el;
  });
}

try {
  //   console.log(sumaTodo([{ prop: 1 }]));
  //   console.log(sumaTodo([1, 2, NaN, 'Hola Mundo']));
  console.log(sumaTodo([1, 2, 3, 4]));
} catch (e) {
  console.log(e.message);
}

console.log('Después del try-catch');
