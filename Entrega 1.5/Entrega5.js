/*Nivell 1

- Exercici 1
Crea una funció que, en executar-la, escrigui una frase en un fitxer.*/
var fs= require('fs');

fs.writeFile('fitxer.txt', 'Hola soy elita', (error)=>{
    if(error){
        console.log(`Error:`)
    }
});

/************************************************************************************************************************************** */
/*- Exercici 2
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior*/

const fs = require("fs"),
    NOMBRE_ARCHIVO = "archivo.txt";

fs.readFile(NOMBRE_ARCHIVO, 'utf8', (error, datos) => {
    if (error) throw error;
    console.log("El contenido es: ", datos);
});
/************************************************************************************************************************************** */
/*- Exercici 3
Crea una funció que comprimeixi el fitxer del nivell 1.*/

var zlib = require('zlib');
var fs = require('fs');

var zip = zlib.createGzip();

var read = fs.createReadStream('fitxer.txt');
var write = fs.createWriteStream('fitxer.txt.gz');
//Transform stream which is zipping the input file
read.pipe(zip).pipe(write);	
console.log("Zipped Successfully");	


/***>node compress-file-using-zlib.js
Zipped Successfully
 para ejecutar  */