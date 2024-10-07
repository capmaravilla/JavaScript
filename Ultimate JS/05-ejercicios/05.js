let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
  // let menor = arr[0];
  // let mayor = arr[0];
  // for (let i = 0; i < arr.length; i++) {
  //   menor = arr[i] < menor ? arr[i] : menor;
  //   mayor = arr[i] > mayor ? arr[i] : mayor;
  // }
  // return [menor, mayor];

  let menor;
  let mayor;
  for (numero of arr) {
    menor = menor < numero ? menor : numero;
    mayor = mayor > numero ? mayor : numero;
  }
  return [menor, mayor];
}

let resultado = getMenorMayor(array);
console.log(resultado);
