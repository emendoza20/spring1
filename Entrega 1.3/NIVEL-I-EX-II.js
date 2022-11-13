/**Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut. */
//Create an arrow function that receives a parameter and a callback function and pass the function one or another message (which will be printed to the console) depending on the parameter received.
/*setTimeout(function() {
    console.log("He ejecutado la función");
  }, 2000);
  setTimeout(() => console.log("He ejecutado la función"), 2000);*/


  /*setTimeout(() => { 
    console.log("Este mensaje se muestra después de 3 segundos");
}, 3000);*/
/*let x = (x, y) => x * y;*/
const DoSomething = (message,callback) => {

    //message='OK';

    if(message =='OK' ){
	    callback();
    }else{
      console.log("mensaje no es OK")
    }    
	   
}
 

var funcion_callback = () => {
  console.log("Mensaje de la funcion callbacks");
}

DoSomething("OKS",funcion_callback);