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
       if(employees.find(x => x.id === id)){
            console.log(`El empleado es ${employees[id-1].name}`)
            resolve(employees[id-1])
       }else
       {
            reject(`Empleado no encontrado`);
       }    
        
    });
    return promesa;
}

console.log(getEmployee(3));

