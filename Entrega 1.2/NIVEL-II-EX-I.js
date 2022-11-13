/*Nivell 2
- Exercici 1
Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.*/

var persona= (nombre, apellido,edad,pais,) => ({nombre: nombre, apellido: apellido,edad:edad,pais:pais})// objeto persona retornado por la funcion flecha
console.log(persona("Marta", "Perez","27","Nueva Zelanda"));

/*((nombre,nombre2) => {cd 
    console.log(nombre+nombre2);
  } )  ("María","Jose");*/