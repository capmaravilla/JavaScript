function precioCompleto(precio, impuesto) {
  return precio + precio * impuesto;
}

let resultado = precioCompleto(19.9, 0.15);
console.log(resultado);
