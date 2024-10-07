// 1. Crea una función que reciba dos números y devuelva su suma
function sumar(a, b) {
  return a + b;
}
// console.log(sumar(4, 5));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
// let numArr = [3, 6, 4, 7, 3, , 99, 6, 3, 5, 5, 9];

function numMayor(arr) {
  let seleccion = arr[0];
  for (num of arr) {
    seleccion = num > seleccion ? num : seleccion;
  }
  console.log(seleccion);
}

// numMayor(numArr);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
// let myString = 'Hola Mundoooo';

function vocales(strg) {
  let letrasVocales = 0;
  for (letra of strg) {
    if (letra == 'a') {
      letrasVocales++;
    } else if (letra == 'e') {
      letrasVocales++;
    } else if (letra == 'i') {
      letrasVocales++;
    } else if (letra == 'o') {
      letrasVocales++;
    } else if (letra == 'u') {
      letrasVocales++;
    }
  }
  // console.log(letrasVocales);
}

// vocales(myString);

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
// let arrStr = ['hola', 'cara', 'cola'];
function stringsAMayusculas(arr) {
  let newArrStr = [];
  arr.forEach(x => newArrStr.push(x.toUpperCase()));
  console.log(newArrStr);
}

// stringsAMayusculas(arrStr);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function buscaPrimos2(a) {
  if (a <= 1) return false;
  if (a == 2) return true;
  for (i = 2; i <= Math.sqrt(a); i++) {
    if (a % i == 0) return false;
  }
  return true;
}
// let num = 45;
// console.log(buscaPrimos2(num));

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elemComun(arr1, arr2) {
  let arr3 = new Set();
  for (el of arr1) {
    for (el2 of arr2) {
      if (el == el2) {
        arr3.add(el);
      }
    }
  }

  let arr4 = Array.from(arr3);
  return arr4;
}

// const arr1 = [1, 2, 3, 4, 'david'];
// const arr2 = [3, 4, 'david', 5, 6, 7, 8, 3, , 5, , 67, , 7, , 7, , 5];
// const resultado = elemComun(arr1, arr2);
// console.log(resultado);

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaPares(arr) {
  let suma = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      suma = suma + arr[i];
    }
  }
  return suma;
}

function sumaPares2(arr) {
  let suma = 0;
  for (num of arr) {
    if (num % 2 == 0) {
      suma = suma + num;
    }
  }
  return suma;
}

// const numeros = [1, 4, 3, 4, 5, 6, 7, 9, 8, 22];
// const resultado = sumaPares2(numeros);
// console.log(resultado);

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function cuadrados(arr) {
  let contador = [];
  for (num of arr) {
    contador.push(num * num);
  }
  return contador;
}

// const numeros = [1, 4, 3, 4, 5, 6, 7, 9, 8, 22];
// const resultado = cuadrados(numeros);
// console.log(resultado);

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function textReverse(strg) {
  let arr = Array.from(strg);
  let arrInv = [];
  for (letra of arr) {
    arrInv.unshift(letra);
  }
  return arrInv.join('');
}

function wordReverse(strg) {
  const palabras = strg.split(' ');
  const palabrasInv = palabras.reverse();
  return palabrasInv.join(' ');
}

// const string = 'Lucha contra la entropia';
// const resultado = textReverse(string);
// const resultado2 = wordReverse(string);
// console.log(resultado);
// console.log(resultado2);

// 10. Crea una función que calcule el factorial de un número dado

function numFactorial(num) {
  let contenedor = 1;
  for (i = 1; i <= num; i++) {
    contenedor = contenedor * i;
  }
  return contenedor;
}

// const numero = 5;
// console.log(numFactorial(numero));
