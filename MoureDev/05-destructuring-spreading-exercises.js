/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

let array = [7, 5, 39, 88];
let person = {
  name: 'David',
  age: 47,
  job: {type: 'programador', exp: 10},
  work: function () {
    console.log('Trabajando...');
  },
};

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let [value0, value1] = array;
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [value2 = 0, value3 = 0, value4 = 0, value5 = 0, value6 = 0] = array;

let a = 1,
  b = 2;

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let {age, work} = person;

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let {name: nombre, job: trabajo} = person;

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let {
  job: {type: profesion},
  job: {exp: experiencia},
} = person;

// 6. Usa propagación para combinar dos arrays en uno nuevo
let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];

let arrayCombo = [...array1, ...array2, 9, 10];
// 7. Usa propagación para crear una copia de un array

let arrayCopia = [...arrayCombo];

// 8. Usa propagación para combinar dos objetos en uno nuevo

let person1 = {
  name: 'David',
  surname: 'Moriez',
};

let person2 = {
  job: 'Programador',
  esp: 10,
};

let personCombo = {...person1, ...person2, email: 'email@email.com'};

// 9. Usa propagación para crear una copia de un objeto

let personCopia = {...personCombo};

// 10. Combina desestructuración y propagación

let ids = [1, 2, 3, 4];
let person00 = {
  name: 'David',
  age: 48,
  job: {type: 'programador', exp: 10},
  work: function () {
    console.log('Trabajando...');
  },
};

let [valor0, valor1] = ids;
let {work: funcion, ...rest} = person00;
let newPerson = {id: value0, ...rest, email: false};
