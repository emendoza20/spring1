/*Nivell 1
- Exercici 1
Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres. =>CORREGIDO*/

/*( (nombre,nombre2) => {
    console.log(nombre+nombre2);
  } )  ("María","Jose");*/ /*ejercicio erroneo*/

let suma=(number1,number2) => number1 + number2;//RETORNA la suma de dos numeros en el arrow fuction y el resultado lo muestra por consola .anteriormente no retornaba nada 

  console.log(suma(5,3));

  /*Nivell 2
- Exercici 1
Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.*/

var persona= (nombre, apellido,edad,pais,) => ({nombre: nombre, apellido: apellido,edad:edad,pais:pais})// objeto persona retornado por la funcion flecha
console.log(persona("Marta", "Perez","27","Nueva Zelanda"));

/*((nombre,nombre2) => {cd 
    console.log(nombre+nombre2);
  } )  ("María","Jose");*/
  /**- Exercici 2 Nivel 2
Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe. ***/

/*function Persona() {
    this.name = 'Jack',
    this.age = 25,
    this.sayName = function () {

         
        let dirNom = () => {
            console.log(this.name);
        }

        dirNom();
    }
}

const x = new Persona();
x.sayName();*//**Ejercicio erroneo*/

/**function Person(name) {
    this.name = name;
  }
  Person.prototype.getName = function() {
    return this.name;
  }*/

/***************EJERCICIO CORREGIDO NIVEL 2 EJERCICIO 2 CREAR CLASE**********************************


/**- Exercici 2 Nivel 2
Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe. ***/

class Persona{
    constructor(nom){
    this.name=nom;
}
    
   /* this.sayName = function () {
 }*/
         
     dirNom = () => {
            console.log(this.name);
        }
}
const Joaquin= new Persona("Joaquin Phoenix");
Joaquin.dirNom(); /*Invocar metodo dirNom instaciado desde la clase
 
 
  /*Nivell 3
- Exercici 1
Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.*/

/*class Rectangulo {
    constructor (alto, ancho) {
      this.alto = alto;
      this.ancho = ancho;
    }
    // Getter
    get area() {
       return this.calcArea();
     }
    // Método
    calcArea () {
      return this.alto * this.ancho;
    }
  }
  
  const cuadrado = new Rectangulo(10, 10);
  
  console.log(cuadrado.area)**/; // 100 nuevo  //***EJERCICIO ERRONEO****/
