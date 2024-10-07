let usuarios = [
  {id: 1, activo: true},
  {id: 2, activo: false},
  {id: 3, activo: false},
];

let todosActivos = usuarios.every(u => {
  console.log('todos activos', u.id);
  return u.activo; //continua hasta encontrar false. Imprime id:1 y 2
});

console.log(todosActivos);

let algunoActivo = usuarios.some(u => {
  console.log('activos', u.id);
  return u.activo; //hasta que encuentra un valor de true
});

console.log(algunoActivo);
