function callback(fn, ...rest) {
  fn(...rest);
}

function log(...args) {
  console.log(args);
}

callback(log, 1, 2, 3, 4);

// tambien lo podemos hacer asi, donde cambiariamos la funcion que llamamos por una fat arrow function

callback(
  (...args) => {
    console.log(args);
  },
  5,
  6,
  7,
  8
);
