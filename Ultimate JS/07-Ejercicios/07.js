let objeto = {name: 'Nicolas'};
let objeto2 = {name: 'Nicolas'};

function agregarId(obj) {
  if (typeof obj === 'object') {
    obj.id = Math.random();
  }
  return obj;
}
function agregarId2(obj) {
  obj.id = Math.random();
}

agregarId(objeto);
console.log(objeto);
agregarId2(objeto2);
console.log(objeto2);
