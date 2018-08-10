const { crearArchivo } = require('./multiplicar/multiplicar');
let base = 'dd';

crearArchivo(base)
    .then(archivo => {
        console.log(`Archivo creado: ${archivo}`);
    })
    .catch(err => {
        console.log(err);
    })