/*Nivell 1
- - Exercici 1
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.*/

/*let x=10; empieza aqui

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


}); termina aqui*/ 


/*let x=10;
console.log('1. proceso iniciado....');

setTimeout(() =>{
    x = x *3 + 2; 
    console.log('2. proceso terminado....');
},2000);


console.log('3. el resultado es:'+ x);*/

/*let x = 10; 
const promesa =new Promise((resolve, reject)=>{
    setTimeout(() =>{
        x = x *3 + 2; 
        console.log('2. proceso terminado....');
        resolve(x);
    },2000);
});
console.log('1. proceso iniciado....');

promesa.then(res => {
     console.log('3. el resultado es:' + res);
}); termina aqui*/

/*const miPromesa = new Promise((resolve, reject) => {
    let a = false;
    setTimeout(() => {
      return (a) ? resolve('se encontró a'): reject('lo siento, no se encontró a');
    }, 300);
  }); */
  

  const promise = new Promise((resolve, reject) => {
	const number = Math.floor(Math.random() * 10);

	setTimeout(
		() => number > 5
			? resolve(number)
			: reject(new Error('Menor a 5')),
		1000
	);
});

promise
	.then(number => console.log(number))
	.catch(error => console.error(error));