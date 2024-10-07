const saludo = '   Hola Mundo!';

const despedida = new String('Chao mundo :(');

saludo.length;
saludo.indexOf('Mu'); // Si no esta devuelve -1
saludo.includes('Ho'); // true false
saludo.replace('Mundo', 'Nicolas'); // No lo graba
saludo.toLowerCase();
saludo.toUpperCase();
saludo.substring(0, 3); // los numeros son os indices
saludo.substr(0, 3); //los numeros son la longitud del string

saludo.trim(); //quita espacios a ambos lados
saludo.trimStart(); //quita espacios izquierda
saludo.trimEnd(); //quita espacios derecha

console.log(saludo);
