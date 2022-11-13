//Nivell 1 - Exercici 1
//Crea una funció que mostri per consola el nom d'usuari al invocar-la passant-li el nom com a paràmetre.

function saludar(nombre)
{
    
    console.log(nombre);
   // return nombre;
}
saludar("Elizabeth");

//Nivell 2 - Exercici 1
//Mostra per consola el nom i cognoms de l'usuari mitjançant template literals, 
//guardant-los en variables i referenciant-les en la impressió del missatge.
function saludar(nombre,apellido)
{
    var mensaje = `Hola, ${nombre} ${apellido}`;
    console.log(mensaje);
}
saludar("Elizabeth","Mendoza");

/*
 Nivell 2
- Exercici 2
Invoca una funcion que retorni un valor des de dins d'una template literal.
 */
function saludar(nombre,apellido)
{
    
    return `Hola, ${nombre} ${apellido}`;
   
}
var valor = saludar("Elizabeth","Mendoza");
console.log(valor);

/*- Exercici 1
Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.*/
var array_of_functions = [function () { contar() }, function () { contar() }, function () { contar() }, function () { contar() }, function () { contar() }, function () { contar() }, function () { contar() }, function () { contar() }, function () { contar() }, function () { contar() } ]

function contar(){
      var cadena = "";
         for (let cont = 0; cont < 10; cont++) {
           cadena = cadena + cont + " ";
             //console.log(cont);
         }
         console.log(cadena);
     }
         
     var counter = 1;
      array_of_functions.forEach(function (func) {
            console.log(counter);
            counter++;
            func();
      }); // outputs  1, then 2

//declaracion de funcion anonima con arrow function
var mostrar_nombre = (nombre) => {
    console.log(nombre);
} 
    

mostrar_nombre("Elizabeth");