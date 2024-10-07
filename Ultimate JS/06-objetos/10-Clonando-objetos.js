let punto = {
  x: 10,
  y: 15,
  dibujar() {
    console.log('Dibujando...');
  },
};

for (key of Object.keys(punto)) {
  //   console.log(key, punto[key]);
}

for (entry of Object.entries(punto)) {
  //   console.log(entry);
}

for (key in punto) {
  //   console.log(key, punto[key]);
}

delete punto.dibujar;

// Formas viejas
let clonePunto = Object.assign({}, punto, {z: 5, x: 1});

let refPunto = Object.assign(punto, {x: 20});

let copiaPunto = Object.assign({}, punto);

// Formas nuevas
let copiaPunto2 = {...punto};
let clonePunto2 = {...punto, z: 15, x: 10};
let refPunto2 = punto;

let copiaPunto3 = {};

for (key in punto) {
  copiaPunto3[key] = punto[key];
}
console.log(punto);
console.log(copiaPunto3);
