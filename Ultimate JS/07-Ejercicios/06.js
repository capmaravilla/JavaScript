let obj1 = {id: 1, name: 'chanchito'};
function crearCopia(obj) {
  let contenedor = {};
  for (key in obj) {
    contenedor[key] = obj[key];
  }
  return contenedor;
}

let obj2 = crearCopia(obj1);
console.log({obj1, obj2});
