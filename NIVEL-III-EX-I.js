/*Nivell 3 entrea 1.2
- Exercici 1
Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.*/

class Rectangulo {
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
  
  console.log(cuadrado.area); // 100