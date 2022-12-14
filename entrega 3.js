/*Nivell 1
- - Exercici 1
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.*/

/EJERCICIO 1 NIVEL 1 corregido!!/
function NumeroPar(Numero) { 
    const PromesaPar = new Promise((resolve, reject) => {
    
        if (Numero%2==0) {
            resolve(`el numero es par`);
        } else {
            reject(`el numero no es par es impar`);
        }
    });
    return PromesaPar
}
//Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

NumeroPar(9).then(  
  function(error) {console.log(error);},
  function(value) {console.log(value);}
);

/**********************/
/*- NIVEL 1Exercici 2
Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.**/

/**ejercicio corregido**/
const MyFuncion = (callback, message) => {
  callback(message);
}
  
MyFuncion (console.log, 'Hola soy un parametro que va a llamar al callback');

/**Nivell 2
- Exercici 1
Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id. */
let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

getEmployee = (id) => {
    let promesa = new Promise((resolve, reject) => {
        employees.forEach(element => {
            if(element.id == id){
                resolve(element)
            }   
        });   
        reject(`Empleado no encontrado`);
    });
    return promesa;
}
console.log(getEmployee(3));

/**- NIVEL 2 Exercici 2
Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari. */

getSalary = (empleado) => {
    // id = empleado.id;
     //console.log("EL empleado es :",empleado.id); 
     let promesa_salario = new Promise((resolve, reject) => {
         salaries.forEach(element=> {
             if(element.id ==empleado.id){
                 resolve(element.salary)
             }
         });
             reject(`El salario no ha sido encontrado`);
     });
     return promesa_salario;
  
 }
 
 getEmployee = (id) => {
     let promesa = new Promise((resolve, reject) => {
         employees.forEach(element => {
             if(element.id == id){
                 resolve(element)
             }   
         });   
         reject(`Empleado no encontrado`);
     });
     return promesa;
 
 
 }
 getEmployee(1)
 .then(result => getSalary(result))
 .then(result => console.log(result))
 .catch(error => console.log(error))

/*- NIVEL 2 Exercici 3
Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.*/

getEmployee = (id) => {
    let promesa = new Promise((resolve, reject) => {
       if(employees.find(x => x.id === id)){
            console.log(`El empleado es ${employees[id-1].name}`)
            resolve(employees[id-1].id)
       }else
       {
            reject(`Empleado no encontrado`);
       }    
        
    });
    return promesa;
}
getSalary = (id) => {
    let promesa_salario = new Promise((resolve, reject) => {
       if(salaries.find(x => x.id === id)){
            console.log(`El salario es de USD ${salaries[id-1].salary}`)
            resolve(salaries[id-1].salary)
       }else
       {
            reject(`El salario no ha sido encontrado`);
       }    
        
    });
    return promesa_salario;
}
getEmployee(3)
.then(result => getSalary(result))
.then(result => console.log())
 

/*Nivell 3
- Exercici 1
Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.*/
getSalary = (empleado) => {
    // id = empleado.id;
     //console.log("EL empleado es :",empleado.id); 
     let promesa_salario = new Promise((resolve, reject) => {
         salaries.forEach(element=> {
             if(element.id ==empleado.id){
                 resolve(element.salary)
             }
         });
             reject(`El salario no ha sido encontrado`);
     });
     return promesa_salario;
  
 }
 
 getEmployee = (id) => {
     let promesa = new Promise((resolve, reject) => {
         employees.forEach(element => {
             if(element.id == id){
               //  console.log(element.name);
                 resolve(element)
             }   
         });   
         reject(`Empleado no encontrado`);
     });
     return promesa;
 
 
 }
 /*getEmployee(1)
 .then(result => getSalary(rsult))
 .then(result => console.log(result))
 .catch(error => console.log(error))
 */
 getEmployee(1)
   .then((empleado) =>getSalary(empleado)
   .then((salario) => console.log('El empleado es', `${empleado.name} su salario es ${salario}`))
   .catch(error => console.log(error))
   )


   /**Nivell 3
- Exercici 1
Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola. */
getEmployee(5).catch((err) => 
console.log('empleado no encontrado', err.message))
getEmployee("string").catch((err) => 
console.log('empleado no encontrado', err.message))