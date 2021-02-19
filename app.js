const fs = require('fs'); // aqui importamos el paquete de manipulacion de archivos.


let base = 10;
let tabla = '';

for (let i = 1; i <= 10; i++) {
    tabla += `${base} X ${i} = ${base * i} \n`;
    //console.log(`${base} X ${i} = ${base * i}`);

}


fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base}.txt ha sido generado con exito`)
});


/*
2 x 1 x 2
2 x 2 = 4
...
*/