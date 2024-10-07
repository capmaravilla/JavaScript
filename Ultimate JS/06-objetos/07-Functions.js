function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log('Dibujando...');
  };
}

let punto = {z: 7};
Punto.call(punto, 1, 2);
// Punto.apply(punto, [1, 2]);

console.log(punto);
