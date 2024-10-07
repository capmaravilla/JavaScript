// * THIS
// * Dentro de un objeto: hace referecia al objeto

const user = {
  name: 'Nicolas',
  login() {
    console.log('Dentro de un objeto', this);
  },
};
user.logout = function () {
  console.log(this);
};

// user.login();
// user.logout();

// * Dento de una función: hace referencia al objeto window, global

function log() {
  // console.log(this);
}

log();

// * Si se usa new hace referencia al objeto que sera creado en este caso mensaje

function Login(mensaje) {
  this.mensaje = mensaje;
  // console.log(this);
}

const l = new Login('Hola mundo');

/* 
Se crea un objeto literal
Se vincula este objeto a this
Se vincula el prototipo
Si no retorna nada entonces retorna this
*/

//* CONTEXTO DE THIS

const ususario = {
  nombre: 'Nicolas',
  ciudadanias: ['Chile', 'Colombia', 'New Zealand'],

  mostrarCiudadanias() {
    this.ciudadanias.forEach(function (ciudadanias) {
      console.log(ciudadanias);
      //* Ahora llamamos a this desde la funcion
    });
  },
  mostrarCiudadanias1() {
    //! ERROR
    this.ciudadanias.forEach(function (ciudadanias) {
      console.log(this.nombre, ciudadanias);
      //! devuelve this.nombre como undefined(dentro de una funcion)
    });
  },
  mostrarCiudadanias2() {
    //* FAT ARROW FUNCTION
    this.ciudadanias.forEach(ciudadanias => {
      console.log(this.nombre, ciudadanias);
      //* Las fat arrow functions no tienen un contexto de this asi que toman el del objeto donde estan
    });
  },
};

// ususario.mostrarCiudadanias();
// ususario.mostrarCiudadanias1();
// ususario.mostrarCiudadanias2();

//* FORMAS MAS ANTIGUAS DE CAMBIAR EL CONTEXTO DE THIS

function saludar(...rest) {
  console.log(this, rest);
}

saludar(); //Nos muestra el objeto de window

saludar.call({ propiedad: 'hola mundo' }, 1, 5);
saludar.apply({ propiedad: 'hola mundo' }, [1, 5]);

const nuevoSaludar = saludar.bind({ propiedad: 'hola mundo' });
nuevoSaludar(1, 5);
//lo mismo pero mas corto
saludar.bind({ propiedad: 'hola mundo' })(3, 5);

(function saludar2(...rest) {
  console.log(this, rest);
}).bind({ propiedad: 'hola mundo' })(4, 6);

const ususario2 = {
  nombre: 'Nicolas',
  ciudadanias: ['Chile', 'Colombia', 'New Zealand'],

  mostrarCiudadanias1() {
    this.ciudadanias.forEach(
      function (ciudadanias) {
        console.log(this.nombre, ciudadanias);
      }.bind(this) //* con esto cambiamos el concepto de this
    );
  },
  mostrarCiudadanias2() {
    let self = this; //Creamos la variable de this y usamos la variable
    this.ciudadanias.forEach(function (ciudadanias) {
      console.log(self.nombre, ciudadanias);
    });
  },
  mostrarCiudadanias3() {
    this.ciudadanias.forEach(function (ciudadanias) {
      console.log(this.nombre, ciudadanias);
    }, this); //algunas funciones como forEach() puede recibir el contexto de this (thisArg?: any). Pero no todas
  },
};

ususario2.mostrarCiudadanias1();
ususario2.mostrarCiudadanias2();
ususario2.mostrarCiudadanias3();
