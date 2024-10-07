// let objeto = {
//   id: 1,
//   name: 'chanchito',
//   login: function () {},
//   logout: function () {},
// };

// let propiedad = 'name';

// function tieneProp(obj, prop) {
//   if (prop in obj == true) {
//     return true;
//   }
//   return false;
// }

// function tieneProp(obj, prop) {
//   let arr = [];
//   for (key in obj) {
//     arr.push(key);
//   }
//   console.log('Creado el array');

//   for (el of arr) {
//     if (el === prop) {
//       return true;
//     }
//   }
//   return false;
// }

let objeto = {
  id: 1,
  name: 'chanchito',
  login: function () {},
  logout: function () {},
};

let propiedad = 'name';

function tieneProp(obj, propiedad) {
  let props = Object.keys(obj);

  for (let prop of props) {
    if (propiedad == prop) {
      return true;
    }
  }
  return false;
}

console.log(tieneProp(objeto, propiedad));
