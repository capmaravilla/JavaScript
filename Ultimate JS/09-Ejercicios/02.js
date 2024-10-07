const miArray = ['hola', 12, 'Mundo', {}, { id: 15 }, ['lala']];

function dividePorTipo(arr) {
  let contenedor = {};

  contenedor.numeros = miArray.filter(u => typeof u == 'number');
  contenedor.string = miArray.filter(u => typeof u == 'string');
  contenedor.objexts = miArray.filter(u => typeof u == 'object');

  return contenedor;
}

const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);

function dividePorTipo2(arr) {
  return {
    numeros: miArray.filter(u => typeof u == 'number'),
    string: miArray.filter(u => typeof u == 'string'),
    objexts: miArray.filter(u => typeof u == 'object'),
  };
}
