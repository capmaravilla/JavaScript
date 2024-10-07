/* function cualEsMayor(a, b) {
  if (a < b) {
    return b;
  } else {
    return a;
  }
} */

function cualEsMayor(a, b) {
  return a > b ? a : b;
}

let mayor = cualEsMayor(10, 22);

console.log(mayor);
