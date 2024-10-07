const miArray = ['Hola', 12, true, 'Mundo', {}, { id: 15 }, ['lala']];

function dividePorTipo(arr) {
  return arr.reduce((acc, el) => {
    const type = typeof el;

    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(el);
    return acc;
  }, {});
}

let arr = dividePorTipo(miArray);
console.log(arr);

function dividePorTipo2(arr) {
  return arr.reduce((acc, el) => {
    let llave = typeof el;

    acc[llave] = acc[llave] ? acc[llave] : [];
    acc[llave].push(el);
    return acc;
  }, {});
}

let arr2 = dividePorTipo2(miArray);
console.log(arr2);

const obj = {};

obj['nombre'] = 'david';

console.log(obj);
