//requires

const fs = require('fs');

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un nùmero`);
            return;
        }


        let data = '';

        for (let i = 1; i <= 10; i++) {

            data += `${base} * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}`);


        });

    });
}

module.exports = {
    crearArchivo
}