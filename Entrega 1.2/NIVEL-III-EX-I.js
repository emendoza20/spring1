/*Nivell 3
- Exercici 1
Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.*/

/**class Rectangulo {
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
  
  console.log(cuadrado.area); // 100 nuevo*///

/*Nivell 3
- Exercici 1
Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.*/


 /**
 * Abstract Class Fruit.
 */
class Fruit {
    constructor() {
      if (this.constructor === Fruit) {
        throw new Error('Class "Fruit" cannot be instantiated')
      }
      this.color = 'unknown'
    }
  
    someMethod() {
      throw new Error('Method "someMethod()" must be implemented.')
    }
  }
  
  //const fruit = new Fruit() <-- ERROR
  
  /**
   * Concrete  Class Fruit.
   */
  class Orange extends Fruit {
    constructor() {
      super()
      this.color = 'orange'
    }
    someMethod() {
      console.log('Hello someMethod():', this.color)
    }
  }
  
  const orange = new Orange()
  orange.someMethod()
