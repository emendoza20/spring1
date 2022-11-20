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
              //  console.log(element.name);
                resolve(element)
            }   
        });   
        reject(`Empleado no encontrado`);
    });
    return promesa;


}
getEmployee(1)
  .then((empleado) =>getSalary(empleado)
  .then((salario) => console.log('El empleado es', `${empleado.name} su salario es ${salario}`))
  .catch(error => console.log(error))
  )