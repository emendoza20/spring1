/*Nivell 1
- - Exercici 1
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.*/

/*let x=10;

const p= new Promise((resolve,reject) => {
    if(x == 10)
    {
        resolve('la variable es igual 10');
    }else{

    }reject('la variable no es igual a 10');

});
p  
.then(res =>{;// se esjecuta then  cuando la promesa tiene un valor positivo
    console.log('success:'+res);
})
.catch(error=>{
    console.log('error:'+error)


});*/
 
const promise = new Promise((resolve, reject) => {
	const number = Math.floor(Math.random() * 10);

	setTimeout(() => number > 5 ? resolve(number) : reject(new Error('Menor a 5')),1000);
});

promise
	.then(number => console.log(number))
	.catch(error => console.error(error));