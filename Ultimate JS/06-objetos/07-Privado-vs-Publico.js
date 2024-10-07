function Usuario() {
  this.name = 'Nicolas';

  let log = function () {
    console.log('Logging...');
  };

  this.guardar = function () {
    log();
    console.log('Guardando...');
  };
}

const usuario = new Usuario();

usuario.guardar();
