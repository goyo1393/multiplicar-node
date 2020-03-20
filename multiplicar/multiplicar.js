const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {


    console.log(`=============================`.green);
    console.log(`       Tabla de ${base}`.blue);
    console.log(`=============================`.green);


    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}


crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido no es un numero "${base}"`);
            return
        }

        let tabla = '';

        for (let i = 0; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base*i} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, tabla, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}