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