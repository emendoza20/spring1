var array_of_functions = [function () { contar() }, function () { contar() }, function () { contar() }, function () { contar() }, function () { contar() }, function () { contar() }, function () { contar() }, function () { contar() }, function () { contar() }, function () { contar() } ]

function contar(){
      var cadena = "";
         for (let cont = 0; cont < 10; cont++) {
           cadena = cadena + cont + " ";
             //console.log(cont);
         }
         console.log(cadena);
     }
         
     var counter = 1;
      array_of_functions.forEach(function (func) {
            console.log(counter);
            counter++;
            func();
      }); // outputs  1, then 2


      
      