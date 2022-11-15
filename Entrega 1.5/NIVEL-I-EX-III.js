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

 
 