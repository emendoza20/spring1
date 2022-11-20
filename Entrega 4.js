/**Nivell 1
- Exercici 1
Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior. */
/**Nivell 1
- Exercici 1
Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior. */


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
},
{
  id: 3,
  salary: 2000
} 

];

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

const FuncionAsyncrona = async (id) => {/*corregido*/
  try {
  const promise1 = await getEmployee(id);
  const promise2 = await getSalary(promise1);
  console.log(promise1.name)
  console.log(promise2)
      }
  catch(err) {console.log(err)}
}

FuncionAsyncrona(1);
 /**- Exercici 2
Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació. */
 
const SoyunaPromesa= function () {
    const promise = new Promise(function (resolve, reject) {
      const x = "Hola";
      const y = "Hola";
      if (x === y) {
        setTimeout(function () {
            resolve("son las mismas cadenas");

        },2000);
       
      }else{
        reject("no son iguales");
      }
    });
 
    return promise;
  };
 
  async function Asyncronica() {
    try {
      let message = await SoyunaPromesa();
      console.log(message);
    } catch (error) {
      console.log("Error: " + error);
    }
  }
 
  Asyncronica();

  /*console.log("Inicio");

function dos() {
  setTimeout(function () {
    console.log("Dos");
  }, 3000);
}

function uno() {
  setTimeout(function () {
    console.log("Uno");
  }, 0);
  dos();
  console.log("Tres");
}

uno();
console.log("Fin");*/

 //Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.

//Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.
let doble = (a) => a * 2;
    setTimeout(function () {
        return doble(10)
    },2000);

async function sumaTresValores(a,b,c) {
    try {
     console.log('calling');
      let suma = await doble(a) + doble(b) + doble(c);
      console.log(suma);
    } catch (error) {
      console.log("Error: " + error);
    }
  }
 
  //Async();
console.log(doble(1.6))

/************************************************************************************************/
//Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.

//Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.
/*function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();*/
 
  
  let doble = (a) => a * 2;
  setTimeout(function () {
      return doble(10)
  },2000);

async function sumaTresValores(a,b,c) {
  try {
   console.log('calling');
    let suma = await doble(a) + doble(b) + doble(c);
    console.log(suma);
  } catch (error) {
    console.log("Error: " + error);
  }
}

//Async();
console.log(doble(1.6))


//captura de errores (no se pueden pasar letras como parametros)
//sumaTresValores(a,5,5)
// console.log(doble(1.6))