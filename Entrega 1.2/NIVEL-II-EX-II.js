/**- Exercici 2 Nivel 2
Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe. ***/

/**function Persona() {
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
x.sayName();

/**function Person(name) {
    this.name = name;
  }
  Person.prototype.getName = function() {
    return this.name;
  }*/

/********************correccion******************/

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
/**function Person(name) {
    this.name = name;
  }
  Person.prototype.getName = function() {
    return this.name;
  }*/
