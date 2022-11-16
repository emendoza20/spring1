/*Nivell 1

- Exercici 1
Crea una funció que, en executar-la, escrigui una frase en un fitxer.*/
var fs= require('fs');

fs.writeFile('fitxer.txt', 'Hola soy elita', (error)=>{
    if(error){
        console.log(`Error:`)
    }
});

/************************************************************************************************************************************** */
/*- Exercici 2
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior*/

const fs = require("fs"),
    NOMBRE_ARCHIVO = "archivo.txt";

fs.readFile(NOMBRE_ARCHIVO, 'utf8', (error, datos) => {
    if (error) throw error;
    console.log("El contenido es: ", datos);
});
/************************************************************************************************************************************** */
/*- Exercici 3
Crea una funció que comprimeixi el fitxer del nivell 1.*/

var zlib = require('zlib');
var fs = require('fs');

var zip = zlib.createGzip();

var read = fs.createReadStream('fitxer.txt');
var write = fs.createWriteStream('fitxer.txt.gz');
//Transform stream which is zipping the input file
read.pipe(zip).pipe(write);	
console.log("Zipped Successfully");	


/***>node compress-file-using-zlib.js
Zipped Successfully
 para ejecutar  */

 // Nivell 2 - Exercici 2
// Crea una funció que llisti per la consola el contingut del directori d'usuari de l'ordinador utilizant Node Child Processes.

//OPCIÓ 1: Node Child Processes
const displayFiles = (folder) => {
    const cp = require('child_process');
    //const exec_options = {}
    //cp.exec('dir',exec_options, (err, stdout, stderr) =>
    cp.exec(folder, (err, stdout, stderr) => { 
        console.log(stdout)
    });
}

/*Nivell 3
- Exercici 1
Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.
*/

const fs6 = require('fs');

const fEncode = (file) => {

    const path = __dirname;
    const fileText = fs6.readFileSync(file, { encoding: 'utf8', flag: 'r' });
    const bufferText = Buffer.from(fileText, 'utf8');  
    const textHex = bufferText.toString('hex');  
    const text64 = bufferText.toString('base64');
    fEscriure('testHex.txt', textHex);
    fEscriure('test64.txt', text64);
}
/*Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.*/

const crypto = require('crypto');
const iv = crypto.randomBytes(16);
const algorithm = 'aes-192-cbc';
const password = '123456789'
var key = crypto.scryptSync(password, 'IT Academy', 24);
//const key = crypto.randomFillSync(new Uint8Array(24));

const fEncrypt   = (fileHex, file64) => {
    //read old files
    const textHex = fs6.readFileSync(fileHex, { encoding: 'utf8', flag: 'r' });
    const text64 = fs6.readFileSync(file64, { encoding: 'utf8', flag: 'r' });
    //encode
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    //encrypt 
    const encryptedHex = cipher.update(textHex, '16', 'utf-8');
    const encrypted64 = cipher.update(text64, '64', 'utf-8');
    //create new files
    fEscriure('testHexEncoded.txt', encryptedHex);
    fEscriure('test64Encoded.txt', encrypted64);
    //delete old files
    fs6.unlinkSync(fileHex)
    fs6.unlinkSync(file64)
}

//fEncrypt('./testHex.txt','./test64.txt');
/*Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.*/
 const fDecrypt  = (encryptedHex, encrypted64) => {
    
   const textHexEncrypted = fs6.readFileSync(encryptedHex, { encoding: 'utf8', flag: 'r' });
   const text64Encrypted = fs6.readFileSync(encrypted64, { encoding: 'utf8', flag: 'r' });
   
   let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  
   let decryptedHex = decipher.update(textHexEncrypted, 'utf-8', '16');
   let decrypted64 = decipher.update(text64Encrypted, 'utf-8', '64');
   
   fEscriure('testHexDecoded.txt', decryptedHex);
   fEscriure('test64Decoded.txt', decrypted64);

}