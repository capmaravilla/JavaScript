const letras = ['a', 'b'];

letras.push('c', 'd');
letras.unshift('z');
letras.pop();
letras.shift();
letras.splice(1, 0, 'a2');
letras.splice(1, 1, 'd'); //indice donde empieza, elementos a eliminar, elementos añadir

//buscar elementos de dentro del un array

letras.indexOf('a'); //si no esta devuelve -1
letras.lastIndexOf('a');

letras.includes('a');

letras.indexOf('a', 3); //empezando desde el indice 3

console.log(letras);
