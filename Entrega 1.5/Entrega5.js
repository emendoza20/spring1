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