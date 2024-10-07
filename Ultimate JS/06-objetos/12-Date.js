const ahora = new Date();

const fecha = new Date('December 26 1977');

const fecha2 = new Date(1976, 4, 6, 14, 15);
const fecha3 = new Date(1976, 4, 6, 14 + 8, 15);

console.log('toDateString', fecha2.toDateString());
console.log('toISOString', fecha2.toISOString());
console.log('toTimeString', fecha2.toTimeString());

console.log(fecha3.getDate());
console.log(fecha3.getDay());
console.log(fecha3.getFullYear());
console.log(fecha3.getHours());
console.log(fecha3.getMilliseconds());
console.log(fecha3.getSeconds());
console.log(fecha3.getMinutes());
console.log(fecha3.getMonth());

fecha3.setHours(4);
console.log(fecha3.toISOString());
