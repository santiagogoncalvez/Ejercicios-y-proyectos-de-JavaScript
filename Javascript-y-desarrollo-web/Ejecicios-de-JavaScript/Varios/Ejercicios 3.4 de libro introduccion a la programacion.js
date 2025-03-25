// tema 3.4
// Ejercicio 1
var descuento = 0.05;
var costoSuperior = 150000;
var costoArticulo = 130000;

if (costoArticulo > costoSuperior) {
 descontar = costoArticulo * descuento;
precioFinal = costoArticulo - descontar;
  
  console.log("El precio final con descuento es de " + precioFinal)
} else {
  console.log("El costo final es " + costoArticulo)
}


// Ejercicio 2
var litros = 270;
var estado1 = "Abierto";
var estado2 = "Cerrado";

if (litros < 450 && litros < 250){
  console.log("La llave del tanque debe estar " + estado1)
} else {
  console.log("La llave debe estar " + estado2)
}

// ejercicio 3
var numero = 7;
switch (numero) {
  case (2):
    console.log("Es un numero primo")
    break
  
    case (3):
    console.log("Es un numero primo")
    break
    
  case (5):
    console.log("Es un numero primo")
    break
    
    case (7):
    console.log("Es un numero primo")
    break
    
    case (11):
    console.log("Es un numero primo")
    break
    
    case (13):
    console.log("Es un numero primo")
    break
    
    case (17):
    console.log("Es un numero primo")
    break
    
    case (19):
    console.log("Es un numero primo")
    break
    
  default:
    console.log("No es un numero primo")
    break
}


// Ejercicio 4
var nota1 = 5;
var nota2 = 5;
var nota3 = 3;
var nota4 = 3;
var nota5 = 2;
var promedio = (nota1 + nota2 + nota3 + nota4 + nota5)/5;
if(promedio > 3.5) {
  console.log("El estudiante ganó el curso")
} else {
  console.log("El estudiante perdió el curso")
}

// Ejercicio 5
var a =1;
var b =10;
var c =4;
var discriminante = Math.pow(b,2) - 4*a*c;
if (discriminante >= 0 && a > 0) {
  console.log("Tiene solución")
} else {
  console.log("No tiene solución")
}


// Ejercicio 9
var articulo = 200000

if (articulo > 0 && articulo <= 100000) {
  let descuento =(articulo * 0)
  console.log("El descuento es de " + descuento)
} else {
  if (articulo > 100000 && articulo <= 225000) {
    let descuento = (articulo * 0.015)
    console.log("El descuento es de " + descuento)
  } else {
    if (articulo > 225000 && articulo <= 375000) {
      let descuento = (articulo * 0.038)
      console.log("El descuento es de " + descuento)
    } else {
      if (articulo > 450){
        let descuento = (articulo * 0.103)
        console.log("El descuento es de " + descuento)
      }
    }
  }
}