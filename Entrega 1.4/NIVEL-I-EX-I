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



  
 
/*****************************************************************************************************************************************/
