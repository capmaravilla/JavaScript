/* 
PI valor de pi
abs valor absoluto (-15) 15
round redondeo (15.5) 16 (15.4) 15
floor redondeo (16.9) 16 
ceil redondeo (16.000001) 17
pow devuelve la potencia de un numero (2,3) 8 
sqrt raiz cuadrada
random numero seudoaleatorio
*/

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let array = [];
for (i = 0; i <= 100; i++) {
  let num = getRandom(1, 10);
  array.push(num);
}
console.log(array);
