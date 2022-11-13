/* Exercici 2
Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.

/*setTimeout(function() {
    console.log("He ejecutado la función");
  }, 2000);
  setTimeout(() => console.log("He ejecutado la función"), 2000);*/


  /*setTimeout(() => { 
    console.log("Este mensaje se muestra después de 3 segundos");
}, 3000);*/
/*let x = (x, y) => x * y;*/
const DoSomething = (message,callback) => {
    //hacemos algo...........
     
    //despues de hacer algo se llama al call back
    callback();

    DoSomething('Hello')
} 
/*value = (a, b) => a * b;
console.log(value(3, 5));*/
 

   /* const fetchItems = (callback, ...params) => {
        callback(params);
    }
        
    fetchItems (console.log, 'foo', 1);*/

   /* const multiplicar1 = param => {
        const resultado = param * 2;
        console.log(resultado)
    }*/
    /*let greet = x => console.log(x);
    greet('Hello'); // Hello  */