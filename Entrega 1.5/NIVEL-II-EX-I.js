/*- Exercici 1
Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.*/

function countDown(fromNumber) {
   
   
    let nextNumber = fromNumber - 1;
    setTimeout(()=> console.log(fromNumber),3000);
    
    if (nextNumber > 0) {
         
        countDown(nextNumber);
       
        
        
    }
   
}
countDown(3);

 

/********************************************************** */

 