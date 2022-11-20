/**- Exercici 2
Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació. */
 
const fPromise = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {resolve("Vamoss");}, 2000)
  }) 
}

const fAsincrona = async () => {
  try {
      const result = await fPromise();
      console.log(result)
    }
    catch(err) {
      console.log(err.message)
    } 
}

//fAsincrona();