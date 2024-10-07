let user = {};

// 1. Crea un objeto con 3 propiedades
user = {
  name: 'David',
  age: 48,
  active: true,
};

// 2. Accede y muestra su valor
// console.log(user);
// console.log(user.name);
// console.log(user.active);
user.age = 47;
// console.log(user);

// 3. Agrega una nueva propiedad
user.email = 'david@email.com';
// console.log(user);

// 4. Elimina una de las 3 primeras propiedades
delete user.age;
// console.log(user);

// 5. Agrega una función e invócala
user.changePassword = function () {
  console.log('Cambiando contraseña...');
};

user.changePassword();

// user.cambiarContraseña();

// 6. Itera las propiedades del objeto
for (key in user) {
  console.log(key + ': ' + user[key]);
}

// 7. Crea un objeto anidado
user.work = {job: 'Artista', exp: 10};
// console.log(user);

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(user.work.job);

// 9. Comprueba si los dos objetos creados son iguales
let user2 = {
  name: 'David',
  active: true,
  email: 'david@email.com',
  changePassword: function () {
    console.log('Cambiando contraseña...');
  },
  work: {job: 'Artista', exp: 10},
};

console.log(user == user2);

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(user.name == user.name);
