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
 

  async function obtenerDatos(id) {
    
      let message = await getEmployee(id)
      .then(result => getSalary(result))
      .then(result => console.log())
      .catch(error => console.log(error))
  
   
  }
 
  obtenerDatos(3);

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