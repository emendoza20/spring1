/***- Exercici 2
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior. */
const fs = require("fs");
    

fs.readFile('fitxer.txt', 'utf8', (error, datos) => {
    if (error) throw error;
    console.log("El contenido es: ", datos);
});