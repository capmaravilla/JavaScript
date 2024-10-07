let a = 1;
let b = a;
b++;
console.log(a, b);

let c = {};
let d = c;
c.prop = 1;
console.log(c, d);

// Los datos primitivos se copian
// Los datos referenciados se referencia: Objetos, array, funciones
