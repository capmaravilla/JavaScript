function getByIdx(arr, idx) {
  if (idx < 0 || idx > arr.length) {
    return 'Valor no valido';
  } else {
    return arr[idx];
  }
}

let resultado = getByIdx([1, 2, 3, 4], 1);
console.log(resultado);
