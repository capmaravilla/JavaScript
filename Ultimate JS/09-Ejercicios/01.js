function paraAbsoluto(arr) {
  return arr.map(el => Math.abs(el));
}

const ns = [-2, 3, 5, -15];

const absolutos = paraAbsoluto(ns);

console.log(absolutos);
