function Usuario(name) {
  this.id = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  this.name = name;
}

let user = new Usuario('Felipe');
let user2 = new Usuario('Chanchito');
console.log(user, user2);
