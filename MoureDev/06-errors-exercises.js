/*
Clase 6 en vídeo | 15/08/2024
Clases (continuación) y manejo de errores
https://www.youtube.com/live/8p6SLAIgwZI?si=MS9o7qIhezx9NTQX&t=902
*/

function numCheck(a) {
  if (typeof a != 'number') {
    throw new TypeError('No es un número');
  }
  if (!Number.isInteger(a)) {
    throw new Error('No es un entero');
  }
  if (a > 100) {
  }
  return 'Éxito de número';
}

// 1. Captura una excepción utilizando try-catch

try {
  console.log(numCheck('7.5'));
} catch (error) {
  if (error instanceof TypeError) {
    console.log('Error de tipo:', error.message);
  } else if (error instanceof Error) {
    console.log('Error:', error.message);
  }
} finally {
  console.log('Proceso acabado');
}

class customError extends Error {
  constructor(message, a) {
    super(message);
    this.a = a;
  }

  printNumber() {
    console.log('Este es el número:', a);
  }
}

// 2. Captura una excepción utilizando try-catch y finally

// 3. Lanza una excepción genérica

// 4. Crea una excepción personalizada

// 5. Lanza una excepción personalizada

// 6. Lanza varias excepciones según una lógica definida

// 7. Captura varias excepciones en un mismo try-catch

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
