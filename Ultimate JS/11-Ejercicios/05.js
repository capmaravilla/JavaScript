function ordenar(text, fn) {
  let resultado = text
    .toLowerCase()
    .split('')
    .filter(letras => letras !== ' ')
    .sort()
    .join('');

  fn(resultado);
}

ordenar('Hola Mundo', console.log);
ordenar('Hola Mundo', x => console.log(x));
