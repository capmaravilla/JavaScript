// privado

// function User(a) {
//   let name = a;
//   this.getName = function () {
//     return name;
//   };
// }

// const u = new User('Chanchito feliz');

class User {
  #name;

  constructor(name) {
    this.#name = name;
  }

  #logger() {}

  getName() {
    this.#logger();
    return this.#name;
  }
}

const u = new User('David');
// console.log(u.#name); //No me deja acceder
console.log(u.getName());

//* Metodos estaticos
