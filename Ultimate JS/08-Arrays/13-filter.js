const ususarios = [
  {edad: 17, nombre: 'Nico'},
  {edad: 20, nombre: 'Felipe'},
  {edad: 32, nombre: 'Maria'},
];

const mayores = ususarios.filter(u => u.edad > 17);
const menores = ususarios.filter(u => u.edad < 18);

console.log(mayores);
console.log(menores);
