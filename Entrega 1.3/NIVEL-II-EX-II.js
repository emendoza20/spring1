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

console.log(getSalary(3));
