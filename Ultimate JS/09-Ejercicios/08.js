const usuarios = [
  { edad: 13, nombre: 'Chanchito', plan: 'free' },
  { edad: 32, nombre: 'Fernanda', plan: 'free' },
  { edad: 25, nombre: 'Felipe', plan: 'gold' },
  { edad: 17, nombre: 'Nico', plan: 'premium' },
];

// obtener los usuarios pago
const dePago = usuarios.filter(u => u.plan !== 'free');

// ordenar de mayor a menor edad
const ordenada = dePago.sort((a, b) => {
  if (a.edad > b.edad) return 1;
  if (a.edad < b.edad) return -1;
  return 0;
});

// Devolver el nombre del usuario
// Crear una pantilla HTML
const plantilla = ordenada.map(u => `<li>${u.nombre}</li>`);
const html = `
<ul>
${plantilla.join(`
  `)}
  </ul> 
  `;

// Imprimirla en consola
console.log(html);
// console.log(`<ul>\n${plantilla}</ul>`);

/* 
<ul>
<li>Felipe</li>
<li>Nico</li>
</ul> 
*/
