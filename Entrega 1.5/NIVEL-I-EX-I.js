/*Nivell 1

- Exercici 1
Crea una funció que, en executar-la, escrigui una frase en un fitxer.*/
  var fs= require('fs');

fs.writeFile('fitxer.txt', 'Hola soy elita', (error)=>{
    if(error){
        console.log(`Error:`)
    }
});