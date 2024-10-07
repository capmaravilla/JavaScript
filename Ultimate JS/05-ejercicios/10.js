let longitud = 30;

function crearArray(n) {
  // Validamos el parametro
  if (n <= 0) {
    return 'longitud no valida';
  }
  // Si el numero es valido seguimos
  let cuenta = [];
  for (let i = 0; i < n; i++) {
    cuenta[i] = i + 1;
  }
  return cuenta;
}

let resultado = crearArray(longitud);
console.log(resultado);
