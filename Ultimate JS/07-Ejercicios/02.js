function createUsuario(name) {
  return {
    id: Math.random(),
    name,
  };
}

let user = createUsuario('Felipe');
let user2 = createUsuario('Chachito');

console.log(user, user2);
