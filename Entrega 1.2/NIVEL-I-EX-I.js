/*Nivell 2
- Exercici 1
Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.*/

/*( (nombre,nombre2) => {
    console.log(nombre+nombre2);
  } )  ("María","Jose");*/

/*Nivell 2
- Exercici 1
Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut. ===> CORREGIDO! */

const obtenerUser = user => ({ name: user.name});

const user = { name: "Elizabeth", color: "purple" };

console.log(obtenerUser(user));
 
