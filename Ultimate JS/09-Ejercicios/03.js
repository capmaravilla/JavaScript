const usuarios = [
  { edad: 17, nombre: 'Nico', plan: 'premium' },
  { edad: 13, nombre: 'Chanchito', plan: 'free' },
  { edad: 32, nombre: 'Fernanda', plan: 'free' },
  { edad: 25, nombre: 'Felipe', plan: 'gold' },
];

function getPaidUsers(usrs) {
  let premium = usrs.filter(u => u.plan === 'premium');
  let gold = usrs.filter(u => u.plan === 'gold');
  let contenedor = premium.concat(gold);
  return contenedor;
}

console.log(getPaidUsers(usuarios));

function getPaidUsers2(usrs) {
  return usrs.filter(u => u.plan !== 'free');
}
console.log(getPaidUsers2(usuarios));
