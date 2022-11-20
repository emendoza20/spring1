/**- Exercici 2
Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació. */
 
/*const functPromise = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {resolve("Ejecutada despues de 2 segundos");}, 2000)
  }) 
}

const functAsincr = async () => {
  try {
      const result = await functPromise();
      console.log(result)
    }
    catch(err) {
      console.log(err.message)
    } 
}

functAsincr();*/
const SoyunaPromesa= function () {
  const promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
          resolve("Hola me ejecuto despues de 2 segundos!");
      },2000);
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